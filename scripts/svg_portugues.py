"""Gera as ilustrações explicativas de Língua Portuguesa (4º bimestre) em SVG.

Rodar da raiz do projeto:  python scripts/svg_portugues.py
Reaproveita a paleta e os auxiliares de scripts/svg_ingles.py.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from svg_ingles import (svg, t, e, caixa, seta, DEFS, titulo, TINTA, SUAVE, AZUL, VERDE,  # noqa: E402
                        VERMELHO, LARANJA, ROXO, ROSA)

AMARELO = "#f2b705"


def poema():
    c = [DEFS, titulo("O poema", "título · versos · estrofes · rimas", ROSA)]
    c.append(caixa(250, 115, 400, 450, "#fff", ROSA, 22, 3))
    c.append(t(450, 160, "O relógio", 30, ROSA, 800))
    versos = [("Passa, tempo, tic-tac", None), ("Tic-tac, passa, hora", None), ("Chega logo, tic-tac", None),
              ("Tic-tac, e vai-te embora", "ora"), (None, None), ("Meu tic-tac", None), ("Dia e noite", None),
              ("Noite e dia", None), ("Tic-tac…", None)]
    y = 210
    for v, _ in versos:
        if v is None:
            y += 18
            continue
        import re
        spans = re.sub(r"([Tt]ic-tac)", lambda m: f'<tspan fill="{ROXO}" font-weight="800">{m.group(1)}</tspan>', v)
        c.append(f'<text x="290" y="{y}" font-size="23" fill="{TINTA}" font-weight="600">{spans}</text>')
        y += 38
    # chaves de estrofe
    c.append(f'<path d="M635 185 q18 0 18 18 v110 q0 18 18 18 q-18 0 -18 18 v0" fill="none" stroke="{AZUL}" stroke-width="3"/>')
    c.append(f'<path d="M635 375 q18 0 18 18 v70 q0 18 18 18 q-18 0 -18 18" fill="none" stroke="{AZUL}" stroke-width="3"/>')
    c.append(caixa(690, 230, 180, 70, "#eef3ff", AZUL, 14, 2) + t(780, 262, "estrofe 1", 21, AZUL, 800) + t(780, 287, "4 versos", 16, SUAVE, 700))
    c.append(caixa(690, 400, 180, 70, "#eef3ff", AZUL, 14, 2) + t(780, 432, "estrofe 2", 21, AZUL, 800) + t(780, 457, "4 versos", 16, SUAVE, 700))
    c.append(caixa(30, 190, 190, 70, "#fff0f6", ROSA, 14, 2) + t(125, 222, "verso", 22, ROSA, 800) + t(125, 247, "= cada linha", 16, SUAVE, 700))
    c.append(seta(220, 222, 282, 205, ROSA, 2.5))
    c.append(caixa(30, 330, 190, 90, "#f1ecff", ROXO, 14, 2) + t(125, 362, "tic-tac", 22, ROXO, 800) + t(125, 386, "som repetido", 16, SUAVE, 700) + t(125, 406, "= ritmo do tempo", 16, SUAVE, 700))
    svg("lp23-poema.svg", "\n".join(c))


def visual():
    c = [titulo("Poema visual", "a forma das letras combina com o assunto", ROSA)]
    # pêndulo: haste e letras balançando
    c.append(f'<line x1="300" y1="120" x2="300" y2="135" stroke="{TINTA}" stroke-width="6"/>')
    import math
    letras = "PÊNDULO"
    for ang, op in ((-28, .25), (-14, .5), (0, 1), (14, .5), (28, .25)):
        for k, l in enumerate(letras):
            r = 70 + k * 52
            x = 300 + r * math.sin(math.radians(ang))
            y = 135 + r * math.cos(math.radians(ang))
            c.append(f'<text x="{x:.0f}" y="{y:.0f}" font-size="36" font-weight="800" text-anchor="middle" fill="{ROSA}" opacity="{op}">{l}</text>')
    c.append(t(300, 560, "“Pêndulo”: as letras balançam", 18, SUAVE, 700) + t(300, 584, "como o pêndulo do relógio", 18, SUAVE, 700))
    # gato ron ron (círculos de texto)
    c.append(f'<defs><path id="cab" d="M650 250 m-70 0 a70 70 0 1 1 140 0 a70 70 0 1 1 -140 0"/>'
             f'<path id="corpo" d="M650 430 m-105 0 a105 105 0 1 1 210 0 a105 105 0 1 1 -210 0"/></defs>')
    rr = "ron ron " * 12
    c.append(f'<text font-size="20" font-weight="800" fill="{ROXO}"><textPath href="#cab">{rr}</textPath></text>')
    c.append(f'<text font-size="20" font-weight="800" fill="{ROXO}"><textPath href="#corpo">{rr * 2}</textPath></text>')
    c.append(f'<path d="M595 195 l-10 -45 l40 25 z M705 195 l10 -45 l-40 25 z" fill="{ROXO}"/>')
    c.append(t(650, 255, "zzz", 26, SUAVE, 800))
    c.append(t(690, 560, "“Canção para ninar gato", 18, SUAVE, 700) + t(690, 584, "com insônia”: forma um gato", 18, SUAVE, 700))
    svg("lp23-visual.svg", "\n".join(c))


def possessivos():
    c = [titulo("Pronomes possessivos", "mostram de quem é alguma coisa", ROSA)]
    cols = ["Pessoa", "masc. sing.", "fem. sing.", "masc. pl.", "fem. pl."]
    linhas = [("eu", "meu", "minha", "meus", "minhas"), ("tu", "teu", "tua", "teus", "tuas"), ("ele / ela", "seu", "sua", "seus", "suas"),
              ("nós", "nosso", "nossa", "nossos", "nossas"), ("vós", "vosso", "vossa", "vossos", "vossas"), ("eles / elas", "seu", "sua", "seus", "suas")]
    x0, w = 60, [180, 150, 150, 150, 150]
    y = 120
    xs = [x0]
    for ww in w[:-1]:
        xs.append(xs[-1] + ww)
    c.append(f'<rect x="{x0}" y="{y}" width="{sum(w)}" height="56" rx="14" fill="{ROSA}"/>')
    for x, ww, nome in zip(xs, w, cols):
        c.append(t(x + ww / 2, y + 36, nome, 20, "#fff", 800))
    cores = ["#fff0f6", "#fff"]
    for i, lin in enumerate(linhas):
        yy = y + 56 + i * 62
        c.append(f'<rect x="{x0}" y="{yy}" width="{sum(w)}" height="62" fill="{cores[i % 2]}"/>')
        for j, (x, ww, val) in enumerate(zip(xs, w, lin)):
            c.append(t(x + ww / 2, yy + 40, val, 24 if j else 21, ROSA if j == 0 else TINTA, 800 if j == 0 else 700))
    c.append(f'<rect x="{x0}" y="{y}" width="{sum(w)}" height="{56 + 62 * 6}" rx="14" fill="none" stroke="{ROSA}" stroke-width="3"/>')
    c.append(t(450, 580, "Exemplo: “A sua cabeça está na frente do relógio!” — a cabeça é do pai.", 18, SUAVE, 700))
    svg("lp23-possessivos.svg", "\n".join(c))


def montanha():
    c = [DEFS, titulo("Como surgiu a montanha-russa?", "texto informativo: fatos reais, datas e lugares", AZUL)]
    c.append(f'<path d="M60 420 C 160 180, 240 180, 320 380 S 480 520, 560 300 S 760 140, 850 400" fill="none" stroke="{VERMELHO}" stroke-width="10" stroke-linecap="round"/>')
    for x in range(80, 850, 40):
        c.append(f'<line x1="{x}" y1="560" x2="{x}" y2="470" stroke="#c9d3e6" stroke-width="4"/>')
    marcos = [(100, 330, "século 15", "Rússia:", "blocos de gelo ❄️", True), (270, 230, "1784", "São Petersburgo:", "1º trenzinho", False),
              (440, 470, "1827", "EUA: trilhos de", "mina de carvão", True), (600, 250, "1884", "EUA: a montanha-", "russa de hoje 🎢", False),
              (790, 210, "1959", "tubos de", "aço", False)]
    for x, y, ano, l1, l2, acima in marcos:
        c.append(f'<circle cx="{x}" cy="{y}" r="12" fill="{AMARELO}" stroke="{TINTA}" stroke-width="2"/>')
        by = y - 108 if acima else y + 24
        c.append(caixa(x - 80, by, 160, 84, "#fff", AZUL, 14, 2))
        c.append(t(x, by + 27, ano, 21, AZUL, 800) + t(x, by + 51, l1, 15, TINTA, 700) + t(x, by + 71, l2, 15, TINTA, 700))
    svg("lp24-montanha.svg", "\n".join(c))


def demonstrativos():
    c = [DEFS, titulo("Este · esse · aquele", "pronomes demonstrativos indicam a posição das coisas", AZUL)]
    c.append(f'<rect x="0" y="470" width="900" height="130" fill="#d8efc7"/>')
    # quem fala e quem ouve
    c.append(e(170, 430, "🧒", 110) + t(170, 470, "quem fala", 18, TINTA, 800))
    c.append(e(460, 430, "👧", 110) + t(460, 470, "quem ouve", 18, TINTA, 800))
    c.append(e(820, 260, "🎡", 120))
    c.append(e(240, 360, "🎈", 50) + e(510, 360, "🍦", 46))
    c.append(caixa(40, 120, 260, 120, "#fff0f6", ROSA, 18, 3) + t(170, 162, "este · esta · isto", 22, ROSA, 800) + t(170, 192, "perto de quem fala", 17, SUAVE, 700) + t(170, 220, "“Olhe este balão!”", 17, TINTA, 700, italico=True))
    c.append(caixa(330, 120, 260, 120, "#eef3ff", AZUL, 18, 3) + t(460, 162, "esse · essa · isso", 22, AZUL, 800) + t(460, 192, "perto de quem ouve", 17, SUAVE, 700) + t(460, 220, "“Esse sorvete é seu?”", 17, TINTA, 700, italico=True))
    c.append(caixa(620, 380, 250, 120, "#f1ecff", ROXO, 18, 3) + t(745, 420, "aquele · aquela · aquilo", 19, ROXO, 800) + t(745, 450, "longe dos dois", 17, SUAVE, 700) + t(745, 478, "“Prefiro aquele!”", 17, TINTA, 700, italico=True))
    c.append(seta(255, 240, 245, 320, ROSA, 3) + seta(500, 240, 508, 320, AZUL, 3) + seta(745, 380, 800, 330, ROXO, 3))
    svg("lp24-demonstrativos.svg", "\n".join(c), fundo="#eaf6ff")


def conto():
    c = [DEFS, titulo("O fantasma da sorte", "conto de mistério: começo, mistério, suspense, solução", ROXO)]
    quadros = [("🌲🧭", "1. Perdido", "O capitão dos mares se", "perde na floresta."),
               ("🏰🌙", "2. O castelo", "Ele é recebido, janta", "e vai dormir."),
               ("👻✨", "3. O mistério", "De madrugada, vê uma", "criança cercada de luz!"),
               ("💍💰", "4. A solução", "Era o fantasma da sorte:", "ele fica rico e feliz.")]
    for i, (em, tt, l1, l2) in enumerate(quadros):
        x = 30 + i * 215
        c.append(caixa(x, 130, 200, 400, "#1f2147" if i == 2 else "#fff", ROXO, 20, 3))
        cor = "#fff" if i == 2 else TINTA
        c.append(e(x + 100, 270, em, 62))
        c.append(t(x + 100, 350, tt, 23, AMARELO if i == 2 else ROXO, 800))
        c.append(t(x + 100, 400, l1, 15.5, cor, 700) + t(x + 100, 425, l2, 15.5, cor, 700))
        if i < 3:
            c.append(seta(x + 200, 330, x + 215, 330, ROXO, 3))
    c.append(t(450, 570, "Suspense + acontecimento inesperado = conto de mistério", 20, ROXO, 800))
    svg("lp25-conto.svg", "\n".join(c))


def verbo():
    c = [titulo("Verbos", "ação · estado · fenômeno da natureza", VERDE)]
    grupos = [("Ação", "🏃", VERDE, "#e8f6f0", ["correr", "gritar", "pular", "ler", "latir"], "o que alguém faz"),
              ("Estado", "😊", AZUL, "#eef3ff", ["ser", "estar", "ficar", "permanecer", "parecer"], "como alguém está"),
              ("Natureza", "🌧️", ROXO, "#f1ecff", ["chover", "ventar", "nevar", "trovejar", "amanhecer"], "o tempo, o céu")]
    for i, (nome, em, cor, bg, vs, d) in enumerate(grupos):
        x = 40 + i * 285
        c.append(caixa(x, 120, 255, 455, bg, cor, 24, 3))
        c.append(e(x + 128, 205, em, 62))
        c.append(t(x + 128, 255, nome, 30, cor, 800) + t(x + 128, 283, d, 17, SUAVE, 700))
        for k, v in enumerate(vs):
            c.append(caixa(x + 38, 305 + k * 52, 180, 42, "#fff", cor, 21, 2) + t(x + 128, 334 + k * 52, v, 21, TINTA, 700))
    svg("lp25-verbo.svg", "\n".join(c))


def sinonimo():
    c = [titulo("Sinônimos e antônimos", "sentido parecido  ×  sentido contrário", LARANJA)]
    c.append(caixa(40, 115, 400, 460, "#e8f6f0", VERDE, 24, 3) + t(240, 160, "Sinônimos  =", 30, VERDE, 800))
    sin = [("formosa", "bonita"), ("lotado", "cheio"), ("habituado", "acostumado"), ("proprietário", "dono"), ("aflita", "preocupada"), ("suntuoso", "luxuoso")]
    for k, (a, b) in enumerate(sin):
        y = 215 + k * 58
        c.append(t(215, y, a, 22, TINTA, 700, "end") + t(240, y, "=", 26, VERDE, 800) + t(265, y, b, 22, VERDE, 800, "start"))
    c.append(caixa(460, 115, 400, 460, "#fff4e6", LARANJA, 24, 3) + t(660, 160, "Antônimos  ↔", 30, LARANJA, 800))
    ant = [("dormir", "acordar"), ("sorte", "azar"), ("preso", "solto"), ("feliz", "triste"), ("coragem", "medo"), ("aparecer", "sumir")]
    for k, (a, b) in enumerate(ant):
        y = 215 + k * 58
        c.append(t(635, y, a, 22, TINTA, 700, "end") + t(660, y, "↔", 24, LARANJA, 800) + t(685, y, b, 22, LARANJA, 800, "start"))
    svg("lp25-sinonimo.svg", "\n".join(c))


def tempos():
    c = [DEFS, titulo("Passado · presente · futuro", "os tempos verbais", AZUL)]
    c.append(f'<line x1="70" y1="330" x2="830" y2="330" stroke="{SUAVE}" stroke-width="6" stroke-linecap="round" marker-end="url(#ponta)"/>')
    pts = [(170, "PASSADO", "já aconteceu", "Ontem eu tive medo.", "fugiram · era · falou", ROXO, "⏪"),
           (450, "PRESENTE", "acontece agora", "Hoje eu tenho medo.", "fogem · é · fala", VERDE, "⏺️"),
           (730, "FUTURO", "ainda vai acontecer", "Amanhã terei coragem!", "fugirão · será · falará", LARANJA, "⏩")]
    for x, nome, d, ex, vs, cor, em in pts:
        c.append(f'<circle cx="{x}" cy="330" r="20" fill="{cor}"/>')
        c.append(caixa(x - 130, 125, 260, 165, "#fff", cor, 20, 3) + e(x, 182, em, 44) + t(x, 228, nome, 26, cor, 800) + t(x, 258, d, 17, SUAVE, 700))
        c.append(caixa(x - 130, 370, 260, 150, "#fff", cor, 20, 2) + t(x, 420, ex, 19, TINTA, 800) + t(x, 470, vs, 17, cor, 700))
    svg("lp26-tempos.svg", "\n".join(c))


def am_ao():
    c = [DEFS, titulo("-am ou -ão?", "o final do verbo mostra quando a ação acontece", ROSA)]
    c.append(caixa(40, 130, 400, 300, "#f1ecff", ROXO, 24, 3))
    c.append(e(240, 210, "⏪", 54) + t(240, 260, "PASSADO", 26, ROXO, 800))
    c.append(f'<text x="240" y="330" font-size="34" font-weight="800" text-anchor="middle" fill="{TINTA}">sentir<tspan fill="{ROXO}">am</tspan></text>')
    c.append(t(240, 380, "Elas sentiram medo.", 20, SUAVE, 700))
    c.append(caixa(460, 130, 400, 300, "#fff4e6", LARANJA, 24, 3))
    c.append(e(660, 210, "⏩", 54) + t(660, 260, "FUTURO", 26, LARANJA, 800))
    c.append(f'<text x="660" y="330" font-size="34" font-weight="800" text-anchor="middle" fill="{TINTA}">sentir<tspan fill="{LARANJA}">ão</tspan></text>')
    c.append(t(660, 380, "Elas sentirão medo.", 20, SUAVE, 700))
    c.append(caixa(40, 455, 820, 115, "#fff", ROSA, 20, 2))
    c.append(t(450, 497, "Cuidado! Substantivos também terminam em -ão:", 20, ROSA, 800))
    c.append(t(450, 537, "caminhão · coração · botão · questão · ladrão", 22, TINTA, 700))
    svg("lp26-am-ao.svg", "\n".join(c))


def reportagem():
    c = [DEFS, titulo("As partes da reportagem", "jornais · revistas · sites", AZUL)]
    c.append(caixa(250, 110, 400, 470, "#fff", "#c9d3e6", 10, 2))
    c.append(f'<rect x="280" y="135" width="340" height="44" rx="6" fill="{AZUL}"/>' + t(450, 165, "Como fazer lancheira saudável", 19, "#fff", 800))
    c.append(t(450, 205, "Nutricionistas ensinam a montar uma…", 16, SUAVE, 600, italico=True))
    for k in range(3):
        c.append(f'<rect x="280" y="{228 + k * 16}" width="{340 - k * 40}" height="8" rx="4" fill="#9fb0cc"/>')
    c.append(t(285, 310, "Lancheira saudável", 18, AZUL, 800, "start"))
    for k in range(4):
        c.append(f'<rect x="280" y="{325 + k * 16}" width="{330 - (k % 2) * 50}" height="8" rx="4" fill="#d3dbea"/>')
    c.append(caixa(280, 395, 340, 50, "#fff4e6", LARANJA, 8, 2) + t(450, 426, "“— Por isso, é essencial…” (especialista)", 15, LARANJA, 700))
    c.append(t(285, 480, "Lancheira colorida", 18, AZUL, 800, "start"))
    c.append(e(400, 545, "🍎🥕🍌🥦", 36))
    rot = [("título", 40, 150, 280, 157), ("linha fina", 40, 210, 280, 200), ("lide", 40, 260, 280, 240), ("entretítulos", 690, 310, 620, 305),
           ("matéria", 690, 370, 620, 350), ("fala de especialista", 690, 430, 620, 420)]
    for nome, x, y, px, py in rot:
        c.append(caixa(x, y - 28, 170, 44, "#eef3ff", AZUL, 12, 2) + t(x + 85, y, nome, 18, AZUL, 800))
        c.append(seta(x + 170 if x < 400 else x, y - 6, px, py, AZUL, 2))
    svg("lp27-reportagem.svg", "\n".join(c))


def sujeito():
    c = [DEFS, titulo("Sujeito e predicado", "Quem + verbo? → sujeito", VERDE)]
    c.append(caixa(90, 170, 300, 100, "#e8f6f0", VERDE, 18, 4) + t(240, 235, "As frutas", 38, VERDE, 800))
    c.append(caixa(410, 170, 400, 100, "#eef3ff", AZUL, 18, 4))
    c.append(f'<text x="610" y="235" font-size="38" font-weight="800" text-anchor="middle" fill="{AZUL}"><tspan text-decoration="underline">fazem</tspan> bem à saúde.</text>')
    c.append(t(240, 310, "SUJEITO", 24, VERDE, 800) + t(610, 310, "PREDICADO", 24, AZUL, 800))
    c.append(t(240, 336, "de quem se fala", 17, SUAVE, 700) + t(610, 336, "o que se diz do sujeito", 17, SUAVE, 700))
    c.append(caixa(250, 380, 400, 80, "#fff9c4", "#c9a400", 40, 3) + t(450, 430, "Quem faz bem à saúde?", 26, TINTA, 800))
    c.append(seta(470, 270, 470, 375, SUAVE, 3) + seta(300, 400, 240, 345, SUAVE, 3))
    c.append(t(450, 520, "O verbo concorda com o sujeito:", 20, TINTA, 800))
    c.append(t(450, 555, "A fruta faz bem.  ·  As frutas fazem bem.", 21, VERDE, 700))
    svg("lp27-sujeito.svg", "\n".join(c))


def g_poema():
    c = [titulo("A chuva na janela", "2 estrofes · 8 versos · rimas", AZUL)]
    est = [["Pinga, pinga, na janela,", "a chuva vem conversar.", "Bate leve na panela,", "quer um jeito de entrar."],
           ["Pinga, pinga, devagar,", "molha a rua e o jardim.", "Quando o sol voltar a brilhar,", "vou brincar até o fim."]]
    rimas = {"janela": ROSA, "panela": ROSA, "conversar": AZUL, "entrar": AZUL, "devagar": VERDE, "brilhar": VERDE, "jardim": LARANJA, "fim": LARANJA}
    y = 150
    n = 1
    for i, es in enumerate(est):
        c.append(caixa(150, y - 35, 600, 190, "#eef6ff" if i == 0 else "#fff", AZUL, 18, 2))
        c.append(t(770, y + 65, f"estrofe {i + 1}", 18, AZUL, 800, "start"))
        for v in es:
            palavras = v.rstrip(".,").split(" ")
            ult = palavras[-1]
            cor = rimas.get(ult, TINTA)
            corpo = v[: v.rfind(ult)]
            fim = v[v.rfind(ult):]
            c.append(t(175, y, str(n), 15, SUAVE, 700, "start"))
            c.append(f'<text x="210" y="{y}" font-size="25" font-weight="600" fill="{TINTA}">{corpo.replace("Pinga, pinga", "<tspan fill=" + chr(34) + ROXO + chr(34) + " font-weight=" + chr(34) + "800" + chr(34) + ">Pinga, pinga</tspan>")}<tspan fill="{cor}" font-weight="800">{fim}</tspan></text>')
            y += 40
            n += 1
        y += 60
    c.append(t(450, 580, "pinga, pinga = som da chuva (como o tic-tac do relógio)", 18, ROXO, 800))
    svg("lpg-poema.svg", "\n".join(c), fundo="#f6fbff")


def g_misterio():
    c = [DEFS, titulo("O caminho do conto de mistério", "O barulho no sótão", ROXO)]
    passos = [("👧🧒👵", "Personagens", "Pedro, Bia e vovó"), ("🏚️", "Lugar", "o sótão"), ("❓", "Mistério", "toc-toc toda noite"),
              ("🔦", "Suspense", "a caixa se mexe!"), ("🦉", "Solução", "era uma coruja")]
    for i, (em, nome, d) in enumerate(passos):
        x = 95 + i * 177
        y = 260 if i % 2 == 0 else 400
        c.append(f'<circle cx="{x}" cy="{y}" r="74" fill="{"#1f2147" if nome in ("Mistério", "Suspense") else "#fff"}" stroke="{ROXO}" stroke-width="4"/>')
        c.append(e(x, y + 18, em, 50 if len(em) < 3 else 30))
        cor = ROXO
        c.append(t(x, y + 112, nome, 22, cor, 800) + t(x, y + 138, d, 16, TINTA, 700))
        if i < 4:
            ny = 400 if i % 2 == 0 else 260
            c.append(seta(x + 60, y + (40 if i % 2 == 0 else -40), x + 120, ny + (-40 if i % 2 == 0 else 40), ROXO, 3))
    svg("lpg-misterio.svg", "\n".join(c))


if __name__ == "__main__":
    for f in (poema, visual, possessivos, demonstrativos, conto, verbo, sinonimo, tempos, am_ao, sujeito, g_poema, g_misterio):
        f()
    print("SVGs de Português gerados")
