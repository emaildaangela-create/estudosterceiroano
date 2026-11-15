"""Gera o texto-base (fonte) para o NotebookLM a partir de content/<id>.json.

Uso: python scripts/fonte_notebooklm.py <id>
- <id> de módulo (ex.: mat13): teoria + perguntas de revisão do módulo.
- sim_<disciplina> (ex.: sim_matematica): resumo final da prova, que junta o
  resumo do simulado com a teoria de todos os módulos da disciplina.
"""
import glob, html, io, json, os, re, sys

PREFIXOS = {"ingles": "ing", "portugues": "lp", "historia": "hist",
            "matematica": "mat", "geografia": "geo", "ciencias": "cie"}
NOMES = {"ingles": "Inglês", "portugues": "Língua Portuguesa", "historia": "História",
         "matematica": "Matemática", "geografia": "Geografia", "ciencias": "Ciências"}


def limpar(t):
    return html.unescape(re.sub(r"<[^>]+>", " ", str(t))).replace("  ", " ").strip()


def carregar(cid):
    return json.load(io.open("content/%s.json" % cid, encoding="utf-8"))


def teoria(cap, nivel="##"):
    linhas = []
    for b in cap["theory"]:
        linhas.append("%s %s" % (nivel, limpar(b["h"])))
        linhas.extend(limpar(p) for p in b.get("p", []))
        for c in b.get("cards", []):
            linhas.append("- %s: %s" % (c.get("en") or c.get("t", ""), c.get("pt") or c.get("d", "")))
        linhas.append("")
    return linhas


def revisao(cap):
    linhas = []
    for q in cap.get("quiz", []):
        if q.get("type") == "mc":
            linhas.append("- %s %s → %s. %s" % (limpar(q["q"]), q.get("listen", ""),
                                               q["options"][q["answer"]], limpar(q["explain"])))
    return linhas


cid = sys.argv[1]
if cid.startswith("sim_"):
    disc = cid[4:]
    resumo = carregar(cid)
    modulos = sorted(p for p in glob.glob("content/%s*.json" % PREFIXOS[disc])
                     if not os.path.basename(p).startswith("sim_"))
    linhas = ["# Resumo final para a prova — %s" % NOMES[disc], "",
              "Revisão de toda a matéria da prova do 4º bimestre do 3º ano do Ensino Fundamental.", ""]
    linhas += teoria(resumo)
    for caminho in modulos:
        cap = carregar(os.path.basename(caminho)[:-5])
        linhas.append("# Módulo %s — %s" % (cap.get("module", ""), cap["title"]))
        linhas.append("")
        linhas += teoria(cap, "##")
    linhas.append("## Perguntas de treino (com respostas)")
    linhas += revisao(resumo)
else:
    cap = carregar(cid)
    linhas = ["# %s — %s" % (cap["title"], cap.get("subtitle", "")), "",
              "Material de revisão para a prova do 4º bimestre do 3º ano do Ensino Fundamental.", ""]
    linhas += teoria(cap)
    linhas.append("## Perguntas de revisão (com respostas)")
    linhas += revisao(cap)
print("\n".join(linhas))
