"""Gera o texto-base (fonte) de um módulo para o NotebookLM a partir de content/<id>.json."""
import json, re, sys, io, html

def limpar(t):
    return html.unescape(re.sub(r"<[^>]+>", "", str(t)))

cap = json.load(io.open("content/%s.json" % sys.argv[1], encoding="utf-8"))
linhas = ["# %s — %s" % (cap["title"], cap.get("subtitle", "")), "",
          "Material de revisão para a prova do 4º bimestre do 3º ano do Ensino Fundamental.", ""]
for b in cap["theory"]:
    linhas.append("## " + limpar(b["h"]))
    for p in b.get("p", []):
        linhas.append(limpar(p))
    for c in b.get("cards", []):
        linhas.append("- %s: %s" % (c.get("en") or c.get("t", ""), c.get("pt") or c.get("d", "")))
    linhas.append("")
linhas.append("## Perguntas de revisão (com respostas)")
for q in cap.get("quiz", []):
    if q.get("type") == "mc":
        linhas.append("- %s %s → %s. %s" % (limpar(q["q"]), q.get("listen", ""), q["options"][q["answer"]], limpar(q["explain"])))
print("\n".join(linhas))
