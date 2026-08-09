"""Monta data.js a partir dos JSONs em content/, agrupando por disciplina."""
import json, io, os, re, unicodedata

DISCIPLINAS = [
    {
        "id": "portugues",
        "nome": "Língua Portuguesa",
        "cor": "--rosa",
        "capitulos": ["lp17", "lp18", "rev_lp3b", "lp19", "lp20", "lp21", "lp22"],
    },
    {
        "id": "matematica",
        "nome": "Matemática",
        "cor": "--ciano",
        "capitulos": ["mat09", "mat10", "rev_mat3b", "mat11"],
    },
    {
        "id": "ciencias",
        "nome": "Ciências",
        "cor": "--verde",
        "capitulos": ["cie09", "cie10", "rev_cie3b", "cie11"],
    },
    {
        "id": "geografia",
        "nome": "Geografia",
        "cor": "--laranja",
        "capitulos": ["geo09", "rev_geo3b", "geo10", "geo11"],
    },
    {
        "id": "historia",
        "nome": "História",
        "cor": "--roxo",
        "capitulos": ["hist09", "hist10", "rev_hist3b", "hist11"],
    },
]

PASTAS_DE_PAGINAS = {
    "lp17": "LINGUA_PORTUGUESA__01_Modulo_17_Lava_uma_mao_lava_a_outra",
    "lp18": "LINGUA_PORTUGUESA__02_Modulo_18_Lembrancas_de_uma_vida",
    "lp19": "LINGUA_PORTUGUESA__03_Modulo_19_Voando_alto",
    "lp20": "LINGUA_PORTUGUESA__04_Modulo_20_Uma_doce_danca",
    "lp21": "LINGUA_PORTUGUESA__05_Modulo_21_Vencer_o_medo",
    "lp22": "LINGUA_PORTUGUESA__06_Modulo_22_Contando_e_recontando",
    "mat09": "MATEMATICA__01_Modulo_09_Contagem_de_possibilidades_e_outras_multiplicacoes",
    "mat10": "MATEMATICA__02_Modulo_10_Medidas_de_tempo_localizacao_e_deslocamento",
    "mat11": "MATEMATICA__03_Modulo_11_Divisao",
    "cie09": "GEO_HIST_CIENC__07_CIENCIAS_Modulo_09_Caracteristicas_da_Terra",
    "cie10": "GEO_HIST_CIENC__08_CIENCIAS_Modulo_10_Observando_o_ceu_diurno",
    "cie11": "GEO_HIST_CIENC__09_CIENCIAS_Modulo_11_Observando_o_ceu_noturno",
    "geo09": "GEO_HIST_CIENC__04_GEOGRAFIA_Modulo_09_Conhecendo_o_municipio",
    "geo10": "GEO_HIST_CIENC__05_GEOGRAFIA_Modulo_10_A_populacao_do_municipio",
    "geo11": "GEO_HIST_CIENC__06_GEOGRAFIA_Modulo_11_Servicos_e_problemas_do_municipio",
    "hist09": "GEO_HIST_CIENC__01_HISTORIA_Modulo_09_Dividindo_espacos_em_comunidade",
    "hist10": "GEO_HIST_CIENC__02_HISTORIA_Modulo_10_Espacos_publicos_e_privados",
    "hist11": "GEO_HIST_CIENC__03_HISTORIA_Modulo_11_Problemas_das_grandes_cidades",
}

base = os.path.dirname(os.path.abspath(__file__))
saida = []
total_q = 0
total_g = 0

PADROES_DE_PEGADINHA = (
    "incorreta", "afirmacao falsa", "alternativa falsa", "nao apresenta",
    "unica alternativa", "sequencia correta", "relacione", "respectivamente",
)


def normalizar(texto):
    texto = unicodedata.normalize("NFD", str(texto or "").lower())
    return "".join(ch for ch in texto if unicodedata.category(ch) != "Mn")


def contar_palavras(texto):
    return len(re.findall(r"\S+", str(texto or "").strip()))


def validar_quiz(cap):
    """Impede que o conteúdo volte a usar pegadinhas e códigos de memória."""
    for indice, questao in enumerate(cap.get("quiz", []), start=1):
        identificador = "%s, questao %d" % (cap.get("id", "capitulo"), indice)
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
        elif not questao.get("answers"):
            raise ValueError("Respostas aceitas ausentes em " + identificador)

for d in DISCIPLINAS:
    caps = []
    for cid in d["capitulos"]:
        with io.open(os.path.join(base, "content", cid + ".json"), encoding="utf-8") as f:
            cap = json.load(f)
        validar_quiz(cap)
        # As paginas do livro nao vao para o repositorio publico; so entram no
        # data.js quando os arquivos existem de fato na maquina.
        pasta = PASTAS_DE_PAGINAS.get(cid)
        if pasta:
            imagens = ["pages/%s/p01.png" % pasta, "pages/%s/p03.png" % pasta]
            if all(os.path.exists(os.path.join(base, p)) for p in imagens):
                cap["pageImages"] = imagens
        total_q += len(cap.get("quiz", []))
        total_g += len(cap.get("games", []))
        caps.append(cap)
    saida.append({
        "id": d["id"], "nome": d["nome"],
        "cor": d["cor"], "capitulos": caps,
    })

corpo = json.dumps(saida, ensure_ascii=False, indent=2)
js = (
    "/* =====================================================================\n"
    "   data.js — Base de conteúdo dos estudos do 3º ano\n"
    "   Gerado a partir do material didático em PDF do 3º ano (build_data.py).\n"
    "   Estrutura: DISCIPLINAS[] > capitulos[] > { theory, games, quiz }.\n"
    "   ===================================================================== */\n\n"
    "const DISCIPLINAS = " + corpo + ";\n"
)

with io.open(os.path.join(base, "data.js"), "w", encoding="utf-8") as f:
    f.write(js)

print("data.js gerado: %d disciplinas, %d capitulos, %d questoes, %d jogos" % (
    len(saida), sum(len(d["capitulos"]) for d in saida), total_q, total_g))
