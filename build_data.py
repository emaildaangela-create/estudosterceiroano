"""Monta data.js a partir dos JSONs em content/, agrupando por disciplina.

4º bimestre: só entram os módulos da lista oficial de conteúdos das provas.
O material dos bimestres anteriores fica guardado em content/arquivo/ e não
é publicado. Cada disciplina ganha, no fim, um Simulado montado a partir das
questões de todos os seus módulos (mais as questões extras de sim_<id>.json).
"""
import json, io, os, re, unicodedata
from collections import Counter

DISCIPLINAS = [
    {"id": "ingles", "nome": "Inglês", "cor": "--azul",
     "prova": "2026-11-19", "horario": "3A 10h · 3B 12h55 · 3C 14h55",
     "capitulos": ["ing07", "ing08", "ing09"]},
    {"id": "portugues", "nome": "Língua Portuguesa", "cor": "--rosa",
     "prova": "2026-11-23", "horario": "12h55 às 14h25",
     "capitulos": ["lp23", "lp24", "lp25", "lp26", "lp27", "lp_generos"]},
    {"id": "historia", "nome": "História", "cor": "--roxo",
     "prova": "2026-11-24", "horario": "12h55 às 14h25",
     "capitulos": ["hist12", "hist13", "hist14"]},
    {"id": "matematica", "nome": "Matemática", "cor": "--ciano",
     "prova": "2026-11-25", "horario": "12h55 às 14h25",
     "capitulos": ["mat13", "mat14"]},
    {"id": "geografia", "nome": "Geografia", "cor": "--laranja",
     "prova": "2026-11-26", "horario": "12h55 às 14h25",
     "capitulos": ["geo13"]},
    {"id": "ciencias", "nome": "Ciências", "cor": "--verde",
     "prova": "2026-11-27", "horario": "12h55 às 14h25",
     "capitulos": ["cie13"]},
]

TAMANHO_SIMULADO = 15

base = os.path.dirname(os.path.abspath(__file__))
saida = []
total_q = 0
total_g = 0

PADROES_DE_PEGADINHA = (
    "incorreta", "afirmacao falsa", "alternativa falsa", "nao apresenta",
    "unica alternativa", "sequencia correta", "relacione", "respectivamente",
)
ALTERNATIVAS_PROIBIDAS = ("todas as anteriores", "nenhuma das anteriores", "todas as alternativas")


def normalizar(texto):
    texto = unicodedata.normalize("NFD", str(texto or "").lower())
    return "".join(ch for ch in texto if unicodedata.category(ch) != "Mn")


def contar_palavras(texto):
    return len(re.findall(r"\S+", str(texto or "").strip()))


def validar_quiz(cap):
    """Impede pegadinhas, alternativas que entregam a resposta e erros de formato.

    A ordem das alternativas é sorteada no navegador, então a posição da
    resposta no JSON não importa; o que importa é a alternativa certa não se
    destacar das outras (por exemplo, por ser muito mais comprida)."""
    for indice, questao in enumerate(cap.get("quiz", []), start=1):
        identificador = "%s, questao %d" % (cap.get("id", "capitulo"), indice)
        if cap.get("assessmentVersion"):
            skill = questao.get("skill")
            if skill not in ("listening", "reading", "use"):
                raise ValueError("Habilidade de inglês ausente em " + identificador)
            if skill == "reading" and (not questao.get("context") or questao.get("contextLang") != "en"):
                raise ValueError("Reading sem texto de apoio em inglês em " + identificador)
            if skill == "listening" and not questao.get("listen"):
                raise ValueError("Listening sem áudio em " + identificador)
            if questao.get("type") == "text" and questao.get("answerMode") != "english-exact":
                raise ValueError("Resposta aberta de inglês sem validação exata em " + identificador)
        enunciado = normalizar(questao.get("q"))
        if not enunciado:
            raise ValueError("Enunciado ausente em " + identificador)
        if any(padrao in enunciado for padrao in PADROES_DE_PEGADINHA):
            raise ValueError("Enunciado com pegadinha ou associacao excessiva em " + identificador)
        if "(1)" in enunciado and "(2)" in enunciado:
            raise ValueError("Enunciado usa codigos arbitrarios em " + identificador)
        if not questao.get("explain"):
            raise ValueError("Explicacao ausente em " + identificador)

        if questao.get("type") == "mc":
            opcoes = questao.get("options", [])
            resposta = questao.get("answer")
            if len(opcoes) != 4 or not isinstance(resposta, int) or not 0 <= resposta < len(opcoes):
                raise ValueError("Alternativas ou resposta invalidas em " + identificador)
            if len({normalizar(opcao) for opcao in opcoes}) != len(opcoes):
                raise ValueError("Alternativas repetidas em " + identificador)
            if any(contar_palavras(opcao) > 14 for opcao in opcoes):
                raise ValueError("Alternativa longa demais em " + identificador)
            if any(p in normalizar(o) for o in opcoes for p in ALTERNATIVAS_PROIBIDAS):
                raise ValueError("Alternativa do tipo 'todas/nenhuma' em " + identificador)
            tamanhos = [len(str(o)) for o in opcoes]
            outros = [t for i, t in enumerate(tamanhos) if i != resposta]
            if tamanhos[resposta] > 12 and tamanhos[resposta] > 1.8 * max(outros):
                raise ValueError("Alternativa correta destoa pelo tamanho em " + identificador)
        elif not questao.get("answers"):
            raise ValueError("Respostas aceitas ausentes em " + identificador)


def validar_jogos(cap):
    for jogo in cap.get("games", []):
        if jogo.get("type") == "sort":
            usadas = Counter(item["cat"] for item in jogo["items"])
            if set(usadas) != set(range(len(jogo["categories"]))):
                raise ValueError("Jogo '%s' em %s tem categoria sem itens" % (jogo.get("title"), cap["id"]))
        if jogo.get("type") == "pairs":
            direitas = [normalizar(p[1]) for p in jogo["pairs"]]
            if len(set(direitas)) != len(direitas):
                raise ValueError("Jogo '%s' em %s repete respostas" % (jogo.get("title"), cap["id"]))


def montar_simulado(disc, caps):
    """O simulado sorteia questões de todos os módulos a cada tentativa."""
    caminho = os.path.join(base, "content", "sim_%s.json" % disc["id"])
    extra = {}
    if os.path.exists(caminho):
        with io.open(caminho, encoding="utf-8") as f:
            extra = json.load(f)
    banco = []
    for cap in caps:
        for q in cap.get("quiz", []):
            item = dict(q)
            item["from"] = cap["title"]
            banco.append(item)
    for q in extra.get("quiz", []):
        item = dict(q)
        item["from"] = "Simulado"
        banco.append(item)
    sim = {
        "id": "sim_" + disc["id"],
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + %d questões sorteadas de todos os módulos" % TAMANHO_SIMULADO,
        "exam": {"size": min(TAMANHO_SIMULADO, len(banco))},
        # vídeo do resumo final (NotebookLM), quando já existir
        **({"video": extra["video"]} if extra.get("video") else {}),
        "theory": extra.get("theory") or [{
            "h": "Como funciona o simulado",
            "p": ["Cada tentativa sorteia questões diferentes de todos os módulos da prova. No final, você vê quais assuntos ainda precisam de revisão."],
        }],
        "games": extra.get("games", []),
        "quiz": banco,
    }
    if disc["id"] == "ingles":
        sim["assessmentVersion"] = extra.get("assessmentVersion", 1)
        sim["exam"]["skills"] = {"listening": 3, "reading": 3, "use": 9}
        sim["exam"]["requiredFocus"] = ["did-short", "too-enough", "past-regular-long", "past-irregular-long", "didnt-long"]
        quantidades = Counter(q.get("skill") for q in banco)
        if sum(sim["exam"]["skills"].values()) != sim["exam"]["size"]:
            raise ValueError("Tamanho do simulado de inglês incompatível com as habilidades")
        if any(quantidades[skill] < n for skill, n in sim["exam"]["skills"].items()):
            raise ValueError("Banco de inglês insuficiente para o sorteio por habilidade")
        if any(not any(q.get("focus") == foco and q.get("skill") == "use" for q in banco) for foco in sim["exam"]["requiredFocus"]):
            raise ValueError("Banco de inglês sem um dos pontos gramaticais obrigatórios")
    validar_quiz(sim)
    return sim


for d in DISCIPLINAS:
    caps = []
    for cid in d["capitulos"]:
        caminho = os.path.join(base, "content", cid + ".json")
        if not os.path.exists(caminho):
            continue  # módulo ainda em preparação
        with io.open(caminho, encoding="utf-8") as f:
            cap = json.load(f)
        validar_quiz(cap)
        validar_jogos(cap)
        total_q += len(cap.get("quiz", []))
        total_g += len(cap.get("games", []))
        caps.append(cap)
    if caps:
        caps.append(montar_simulado(d, caps))
    saida.append({
        "id": d["id"], "nome": d["nome"], "cor": d["cor"],
        "prova": d["prova"], "horario": d["horario"],
        "capitulos": caps,
    })

corpo = json.dumps(saida, ensure_ascii=False, indent=2)
js = (
    "/* =====================================================================\n"
    "   data.js — Base de conteúdo do 4º bimestre do 3º ano\n"
    "   Gerado por build_data.py a partir de content/*.json.\n"
    "   Estrutura: DISCIPLINAS[] > capitulos[] > { theory, games, quiz }.\n"
    "   ===================================================================== */\n\n"
    "const DISCIPLINAS = " + corpo + ";\n"
)

with io.open(os.path.join(base, "data.js"), "w", encoding="utf-8") as f:
    f.write(js)

print("data.js gerado: %d disciplinas, %d capitulos, %d questoes, %d jogos" % (
    len(saida), sum(len(d["capitulos"]) for d in saida), total_q, total_g))


# --- Lista de arquivos para o modo offline (sw.js) ---------------------------
import glob
BASICOS = ["./", "./index.html", "./style.css", "./data.js", "./experiences.js", "./pedagogy.js",
           "./app.js", "./manifest.webmanifest", "./assets/app-icon.svg", "./assets/app-icon-192.png",
           "./assets/app-icon-512.png", "./assets/capa-aprender.webp", "./assets/capa-aprender.png",
           "./assets/mascote-capivara-v2.webp", "./assets/descobrir-ideias.webp"]
usados = set()
for m in re.finditer(r'"(assets/[^"]+\.(?:svg|webp|png|jpg))"', corpo):
    usados.add("./" + m.group(1))
usados.update("./" + p.replace(os.sep, "/") for p in glob.glob(os.path.join("assets", "4b", "*.svg")))
linhas = ",\n".join("  '%s'" % a for a in BASICOS + sorted(usados - set(BASICOS)))
sw_caminho = os.path.join(base, "sw.js")
sw = io.open(sw_caminho, encoding="utf-8").read()
ini = sw.index("// <arquivos-offline>") + len("// <arquivos-offline>")
fim = sw.index("  // </arquivos-offline>")
sw = sw[:ini] + "\n" + linhas + "\n" + sw[fim:]
io.open(sw_caminho, "w", encoding="utf-8").write(sw)

# --- Versão dos arquivos no index.html (evita o navegador usar cópia velha) ---
import hashlib
html_caminho = os.path.join(base, "index.html")
html = io.open(html_caminho, encoding="utf-8").read()
for nome in ("style.css", "data.js", "experiences.js", "pedagogy.js", "app.js"):
    with open(os.path.join(base, nome), "rb") as f:
        h = hashlib.sha1(f.read()).hexdigest()[:8]
    html = re.sub(r'(%s)\?v=[\w]+' % re.escape(nome), r'\1?v=' + h, html)
io.open(html_caminho, "w", encoding="utf-8").write(html)
versoes = re.findall(r'\?v=(\w+)', html)
sw = io.open(sw_caminho, encoding="utf-8").read()
sw = re.sub(r"estudos-3-ano-core-[\w-]+'", "estudos-3-ano-core-%s'" % hashlib.sha1("".join(versoes).encode()).hexdigest()[:8], sw)
io.open(sw_caminho, "w", encoding="utf-8").write(sw)
