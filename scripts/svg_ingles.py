"""Gera as ilustrações explicativas de Inglês (4º bimestre) em SVG.

Rodar da raiz do projeto:  python scripts/svg_ingles.py
Todas as figuras usam a mesma paleta, fonte e proporção 3:2 (900x600), que é
o formato do quadro "Ideia principal" do Descobrir.
"""
import os
from html import escape

OUT = os.path.join("assets", "4b")
os.makedirs(OUT, exist_ok=True)

FONTE = "'Trebuchet MS','Segoe UI','Helvetica Neue',Arial,sans-serif"
EMOJI = "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif"
TINTA = "#17213b"
SUAVE = "#4a5872"
AZUL = "#2456b8"
VERDE = "#1d805c"
VERMELHO = "#c0392b"
LARANJA = "#d9822b"
ROXO = "#6b49b8"
ROSA = "#ba376d"
FUNDO = "#fff9ec"


def svg(nome, corpo, w=900, h=600, fundo=FUNDO):
    conteudo = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
        f'font-family="{FONTE}">\n'
        f'<rect width="{w}" height="{h}" rx="28" fill="{fundo}"/>\n{corpo}\n</svg>\n'
    )
    with open(os.path.join(OUT, nome), "w", encoding="utf-8") as f:
        f.write(conteudo)


def t(x, y, texto, size=24, cor=TINTA, peso=700, anchor="middle", italico=False, familia=None):
    estilo = ' font-style="italic"' if italico else ""
    fam = f' font-family="{familia}"' if familia else ""
    return (f'<text x="{x}" y="{y}" font-size="{size}" fill="{cor}" font-weight="{peso}" '
            f'text-anchor="{anchor}"{estilo}{fam}>{escape(texto)}</text>')


def e(x, y, emoji, size=48):
    return f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="middle" font-family="{EMOJI}">{emoji}</text>'


def caixa(x, y, w, h, fill="#fff", stroke="#d7dfec", rx=18, sw=3):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'


def seta(x1, y1, x2, y2, cor=SUAVE, sw=4):
    return (f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{cor}" stroke-width="{sw}" '
            f'stroke-linecap="round" marker-end="url(#ponta)"/>')


DEFS = (f'<defs><marker id="ponta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" '
        f'orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{SUAVE}"/></marker></defs>')


def titulo(texto, sub=None, cor=AZUL):
    s = t(450, 58, texto, 34, cor, 800)
    if sub:
        s += t(450, 90, sub, 19, SUAVE, 600)
    return s


# ---------------------------------------------------------------- Unit 7
def corpo():
    c = [DEFS, titulo("Parts of the body", "partes do corpo")]
    # criança de frente
    pele = "#f2c29b"
    c.append(f'<circle cx="400" cy="170" r="48" fill="{pele}" stroke="{TINTA}" stroke-width="3"/>')
    c.append(f'<path d="M352 160 Q360 112 400 114 Q445 112 450 160 Q430 135 400 140 Q372 136 352 160z" fill="#5b3a29"/>')
    c.append(f'<circle cx="384" cy="172" r="5" fill="{TINTA}"/><circle cx="416" cy="172" r="5" fill="{TINTA}"/>')
    c.append(f'<path d="M384 192 Q400 204 416 192" stroke="{TINTA}" stroke-width="3" fill="none" stroke-linecap="round"/>')
    # tronco (camiseta)
    c.append(f'<path d="M340 228 Q400 214 460 228 L470 360 L330 360 Z" fill="#3f7be0" stroke="{TINTA}" stroke-width="3"/>')
    # braços abertos
    c.append(f'<path d="M342 232 L270 270 L222 236" stroke="{pele}" stroke-width="26" fill="none" stroke-linecap="round" stroke-linejoin="round"/>')
    c.append(f'<path d="M458 232 L530 270 L578 236" stroke="{pele}" stroke-width="26" fill="none" stroke-linecap="round" stroke-linejoin="round"/>')
    c.append(f'<path d="M342 232 L300 254" stroke="#3f7be0" stroke-width="28" stroke-linecap="round"/>')
    c.append(f'<path d="M458 232 L500 254" stroke="#3f7be0" stroke-width="28" stroke-linecap="round"/>')
    # mãos e dedos
    for cx, sentido in ((214, -1), (586, 1)):
        c.append(f'<circle cx="{cx}" cy="230" r="16" fill="{pele}" stroke="{TINTA}" stroke-width="2"/>')
        for k in range(4):
            dx = sentido * (10 + k * 3)
            c.append(f'<line x1="{cx}" y1="224" x2="{cx + dx}" y2="{198 + k * 7}" stroke="#b9805a" stroke-width="10" stroke-linecap="round"/>')
            c.append(f'<line x1="{cx}" y1="224" x2="{cx + dx}" y2="{198 + k * 7}" stroke="{pele}" stroke-width="6" stroke-linecap="round"/>')
    # short e pernas
    c.append(f'<path d="M330 358 L470 358 L462 410 L408 410 L400 380 L392 410 L338 410 Z" fill="#26324f"/>')
    c.append(f'<path d="M365 408 L360 520" stroke="{pele}" stroke-width="28" stroke-linecap="round"/>')
    c.append(f'<path d="M435 408 L440 520" stroke="{pele}" stroke-width="28" stroke-linecap="round"/>')
    c.append(f'<circle cx="362" cy="462" r="8" fill="#e3a77f"/><circle cx="438" cy="462" r="8" fill="#e3a77f"/>')
    # pés descalços com dedos
    for cx in (350, 452):
        c.append(f'<ellipse cx="{cx}" cy="534" rx="30" ry="13" fill="{pele}" stroke="{TINTA}" stroke-width="2"/>')
        for k in range(5):
            c.append(f'<circle cx="{cx - 20 + k * 10}" cy="524" r="4.5" fill="{pele}" stroke="{TINTA}" stroke-width="1.5"/>')
    # rótulos
    rot = [
        ("a shoulder", "ombro", 120, 262, 336, 236),
        ("an elbow", "cotovelo", 120, 372, 268, 274),
        ("fingers", "dedos das mãos", 40, 160, 196, 206),
        ("a chest", "peito", 640, 175, 430, 262),
        ("a stomach", "barriga", 640, 330, 432, 330),
        ("a knee", "joelho", 640, 450, 446, 462),
        ("toes", "dedos dos pés", 120, 560, 330, 526),
    ]
    for en, pt, x, y, px, py in rot:
        anchor = "start" if x > 400 else "end"
        tx = x + (12 if anchor == "start" else 140)
        c.append(caixa(x, y - 34, 150, 52, "#fff", AZUL, 14, 2.5))
        c.append(t(x + 75, y - 12, en, 19, AZUL, 800))
        c.append(t(x + 75, y + 9, pt, 14, SUAVE, 600))
        ax = x + 150 if x < 400 else x
        c.append(seta(ax, y - 8, px, py, AZUL, 2.5))
    # costas: mini criança de costas
    c.append(caixa(700, 470, 170, 108, "#eef3ff", AZUL, 16, 2))
    c.append(f'<circle cx="745" cy="505" r="18" fill="#5b3a29"/>')
    c.append(f'<path d="M722 528 Q745 520 768 528 L772 572 L718 572 Z" fill="#3f7be0" stroke="{TINTA}" stroke-width="2"/>')
    c.append(t(820, 520, "a back", 19, AZUL, 800))
    c.append(t(820, 542, "costas", 14, SUAVE, 600))
    c.append(seta(812, 560, 772, 548, AZUL, 2.5))
    svg("ing07-corpo.svg", "\n".join(c))


def did():
    c = [DEFS, titulo("Did …? Yes, I did. / No, I didn't.", "perguntas e respostas curtas no passado")]
    blocos = [("Did", ROXO, "#f1ecff"), ("you", AZUL, "#eef3ff"), ("wash", VERDE, "#e8f6f0"), ("your hands?", TINTA, "#fff")]
    x = 70
    larg = [150, 150, 170, 230]
    for (txt, cor, bg), w in zip(blocos, larg):
        c.append(caixa(x, 130, w, 90, bg, cor, 18, 3))
        c.append(t(x + w / 2, 188, txt, 36, cor, 800))
        x += w + 18
    c.append(t(145, 248, "passado", 17, ROXO, 700))
    c.append(t(313, 248, "pessoa", 17, AZUL, 700))
    c.append(t(489, 248, "verbo normal", 17, VERDE, 700))
    c.append(t(489, 270, "(sem -ed!)", 15, VERDE, 600))
    # respostas
    c.append(caixa(90, 320, 330, 140, "#e8f6f0", VERDE, 24, 3))
    c.append(e(150, 410, "✅", 54))
    c.append(t(290, 385, "Yes, I did.", 38, VERDE, 800))
    c.append(t(290, 425, "Sim, eu fiz.", 20, SUAVE, 600))
    c.append(caixa(480, 320, 330, 140, "#fff0f3", VERMELHO, 24, 3))
    c.append(e(540, 410, "❌", 50))
    c.append(t(685, 385, "No, I didn't.", 36, VERMELHO, 800))
    c.append(t(685, 425, "Não, eu não fiz.", 20, SUAVE, 600))
    c.append(t(450, 510, "Did he take a shower?  →  Yes, he did.  /  No, he didn't.", 22, TINTA, 700))
    c.append(t(450, 548, "A resposta repete a pessoa da pergunta: he → he, she → she, they → they.", 18, SUAVE, 600))
    svg("ing07-did.svg", "\n".join(c))


def habitos():
    c = [titulo("Healthy habits", "hábitos que fazem bem e hábitos que fazem mal")]
    c.append(caixa(40, 115, 520, 455, "#e8f6f0", VERDE, 24, 3))
    c.append(t(300, 160, "Good for you 👍", 30, VERDE, 800))
    bons = [("🏃", "get exercise"), ("🍎", "eat fruit"), ("🥦", "eat vegetables"), ("😴", "get rest"), ("💧", "drink water"), ("🧼", "wash your hands")]
    for i, (em, txt) in enumerate(bons):
        cx = 130 + (i % 3) * 170
        cy = 250 + (i // 3) * 165
        c.append(f'<circle cx="{cx}" cy="{cy - 18}" r="52" fill="#fff" stroke="{VERDE}" stroke-width="2"/>')
        c.append(e(cx, cy, em, 54))
        c.append(t(cx, cy + 66, txt, 18, TINTA, 700))
    c.append(caixa(590, 115, 270, 455, "#fff0f3", VERMELHO, 24, 3))
    c.append(t(725, 160, "Bad for you 👎", 28, VERMELHO, 800))
    ruins = [("🍟", "eat junk food"), ("🥤", "too much soda"), ("📺", "too much TV")]
    for i, (em, txt) in enumerate(ruins):
        cy = 250 + i * 110
        c.append(e(660, cy, em, 50))
        c.append(t(705, cy - 12, txt, 19, TINTA, 700, "start"))
    svg("ing07-habitos.svg", "\n".join(c))


def too_enough():
    c = [titulo("too much · too many · enough", "demais · demais (que dá para contar) · o suficiente")]
    paineis = [
        (40, "too much", VERMELHO, "#fff0f3", "📺", "too much TV", "não dá para contar", "TV · soda · junk food"),
        (320, "too many", LARANJA, "#fff4e6", "🍪", "too many cookies", "dá para contar: 1, 2, 3…", "cookies · candies · chips"),
        (600, "enough", VERDE, "#e8f6f0", "💧", "enough water", "na medida certa ✓", "sleep · water · exercise"),
    ]
    for x, nome, cor, bg, em, ex, regra, lista in paineis:
        c.append(caixa(x, 120, 260, 440, bg, cor, 24, 3))
        c.append(t(x + 130, 172, nome, 34, cor, 800))
        if nome == "too many":
            for k in range(6):
                c.append(e(x + 70 + (k % 3) * 60, 250 + (k // 3) * 62, em, 46))
        elif nome == "too much":
            c.append(e(x + 130, 290, em, 92))
            c.append(t(x + 130, 330, "5 hours a day!", 18, cor, 800))
        else:
            c.append(f'<rect x="{x + 95}" y="210" width="70" height="110" rx="10" fill="#fff" stroke="{cor}" stroke-width="3"/>')
            c.append(f'<rect x="{x + 99}" y="245" width="62" height="71" rx="7" fill="#7ec8f2"/>')
            c.append(t(x + 200, 260, "✓", 44, cor, 800))
        c.append(t(x + 130, 400, ex, 22, TINTA, 800))
        c.append(t(x + 130, 440, regra, 17, SUAVE, 700))
        c.append(t(x + 130, 500, lista, 16, cor, 700))
    svg("ing07-too-enough.svg", "\n".join(c))


# ---------------------------------------------------------------- Unit 8
def festa():
    c = [titulo("Let's celebrate!", "palavras de festas e festivais", "#ffd166")]
    itens = [
        ("🎆", "fireworks", "fogos de artifício"), ("🏮", "a lantern", "lanterna"), ("🎭", "a mask", "máscara"),
        ("🦸", "a costume", "fantasia"), ("🎺", "a parade", "desfile"), ("🎊", "decorations", "enfeites"),
        ("🍗", "a feast", "banquete"), ("🥳", "a party", "festa"),
    ]
    for i, (em, en, pt) in enumerate(itens):
        cx = 135 + (i % 4) * 210
        cy = 210 + (i // 4) * 200
        c.append(caixa(cx - 92, cy - 85, 184, 175, "#1f2d55", "#ffd166", 20, 2.5))
        c.append(e(cx, cy, em, 64))
        c.append(t(cx, cy + 45, en, 22, "#ffd166", 800))
        c.append(t(cx, cy + 70, pt, 15, "#e9edf7", 600))
    svg("ing08-festa.svg", "\n".join(c), fundo="#0f1a38")


def regular():
    c = [DEFS, titulo("Regular verbs: + ed", "verbos regulares no passado")]
    linhas = [("watch", "ed", "watched"), ("play", "ed", "played"), ("listen", "ed", "listened"), ("dance", "d", "danced"), ("like", "d", "liked")]
    for i, (v, suf, pas) in enumerate(linhas):
        y = 150 + i * 82
        c.append(caixa(90, y, 200, 62, "#fff", AZUL, 16, 2.5))
        c.append(t(190, y + 42, v, 30, AZUL, 800))
        c.append(t(330, y + 42, "+", 32, SUAVE, 800))
        c.append(caixa(365, y, 90, 62, "#f1ecff", ROXO, 16, 2.5))
        c.append(t(410, y + 42, "-" + suf, 30, ROXO, 800))
        c.append(seta(475, y + 31, 545, y + 31, SUAVE, 3))
        c.append(caixa(560, y, 250, 62, "#e8f6f0", VERDE, 16, 2.5))
        c.append(f'<text x="685" y="{y + 42}" font-size="30" font-weight="800" text-anchor="middle" fill="{VERDE}">{v}<tspan fill="{ROXO}">{pas[len(v):]}</tspan></text>')
    c.append(t(450, 580, "Terminou em e? Põe só -d: dance → danced, like → liked.", 19, SUAVE, 700))
    svg("ing08-regular.svg", "\n".join(c))


def irregular():
    c = [titulo("Irregular verbs", "eles mudam de forma no passado — memorize!", ROSA)]
    pares = [("go", "went", "🚶"), ("see", "saw", "👀"), ("eat", "ate", "🍰"), ("sing", "sang", "🎤"), ("drink", "drank", "🥤"),
             ("wear", "wore", "👕"), ("have", "had", "🤲"), ("write", "wrote", "✍️"), ("give", "gave", "🎁"), ("take", "took", "📸")]
    for i, (a, b, em) in enumerate(pares):
        col, lin = i % 2, i // 2
        x = 60 + col * 400
        y = 118 + lin * 92
        c.append(caixa(x, y, 380, 78, "#fff", ROSA if col == 0 else ROXO, 18, 2.5))
        c.append(e(x + 42, y + 54, em, 38))
        c.append(t(x + 135, y + 51, a, 30, TINTA, 800))
        c.append(t(x + 205, y + 51, "→", 30, SUAVE, 800))
        c.append(t(x + 290, y + 51, b, 32, ROSA, 800))
    svg("ing08-irregular.svg", "\n".join(c))


def novembro():
    c = [titulo("November Celebrations", "duas festas de novembro", "#5b2c83")]
    c.append(caixa(40, 115, 400, 455, "#fff4e6", LARANJA, 24, 3))
    c.append(t(240, 160, "Day of the Dead", 30, LARANJA, 800))
    c.append(t(240, 190, "Mexico · 1st of November", 17, SUAVE, 700))
    c.append(e(160, 285, "💀", 74) + e(240, 285, "🕯️", 64) + e(320, 285, "🌼", 64))
    for k, linha in enumerate(["families remember the dead", "a big feast at the cemetery", "candles, music, candy skulls", "happy, not sad! 😊"]):
        c.append(t(240, 360 + k * 46, linha, 20, TINTA, 700))
    c.append(caixa(460, 115, 400, 455, "#eef3ff", ROXO, 24, 3))
    c.append(t(660, 160, "Yi Peng", 30, ROXO, 800))
    c.append(t(660, 190, "Thailand · November", 17, SUAVE, 700))
    c.append(e(580, 290, "🏮", 60) + e(660, 260, "🏮", 52) + e(740, 295, "🏮", 60) + e(660, 315, "🎆", 44))
    for k, linha in enumerate(["a parade and costumes", "rice-paper lanterns in the sky", "lanterns take away bad things", "fireworks on the last day"]):
        c.append(t(660, 360 + k * 46, linha, 20, TINTA, 700))
    svg("ing08-novembro.svg", "\n".join(c))


# ---------------------------------------------------------------- Unit 9
def fimdesemana():
    c = [titulo("My weekend", "o que fazer no fim de semana")]
    for x, dia in ((50, "SATURDAY"), (470, "SUNDAY")):
        c.append(caixa(x, 115, 380, 455, "#fff", AZUL, 24, 3))
        c.append(f'<rect x="{x}" y="115" width="380" height="60" rx="24" fill="{AZUL}"/><rect x="{x}" y="150" width="380" height="25" fill="{AZUL}"/>')
        c.append(t(x + 190, 157, dia, 28, "#fff", 800))
    ativ = [("🎬", "go to the movies"), ("🍕", "eat out"), ("🦖", "visit a museum"), ("🧺", "go on a picnic"), ("🏖️", "go to the beach"), ("🏠", "stay home")]
    for i, (em, txt) in enumerate(ativ):
        x = 50 if i < 3 else 470
        y = 245 + (i % 3) * 110
        c.append(e(x + 70, y, em, 52))
        c.append(t(x + 120, y - 10, txt, 24, TINTA, 800, "start"))
    svg("ing09-fimdesemana.svg", "\n".join(c))


def go_ing():
    c = [DEFS, titulo("go + verb + -ing", "atividades de lazer")]
    c.append(caixa(250, 115, 120, 70, "#f1ecff", ROXO, 18, 3) + t(310, 163, "go", 34, ROXO, 800))
    c.append(t(400, 163, "+", 34, SUAVE, 800))
    c.append(caixa(430, 115, 220, 70, "#e8f6f0", VERDE, 18, 3) + t(540, 163, "verb + ing", 30, VERDE, 800))
    ativ = [("🏊", "swimming", "nadar"), ("🎣", "fishing", "pescar"), ("🥾", "hiking", "fazer trilha"), ("🏇", "horseback riding", "andar a cavalo"), ("⛸️", "ice skating", "patinar no gelo")]
    for i, (em, v, pt) in enumerate(ativ):
        x = 30 + i * 170
        c.append(caixa(x, 225, 160, 210, "#fff", AZUL, 18, 2.5))
        c.append(e(x + 80, 300, em, 58))
        tam = 18 if len(v) < 12 else 14
        c.append(f'<text x="{x + 80}" y="350" font-size="{tam}" font-weight="800" text-anchor="middle" fill="{ROXO}">go <tspan fill="{VERDE}">{v}</tspan></text>')
        c.append(t(x + 80, 385, pt, 15, SUAVE, 700))
    c.append(t(450, 490, "We usually go hiking.  →  passado: We went hiking.", 22, TINTA, 800))
    c.append(t(450, 530, "negativa: We didn't go hiking.", 22, VERMELHO, 800))
    svg("ing09-go-ing.svg", "\n".join(c))


def didnt():
    c = [titulo("did  ×  didn't", "o que eu fiz e o que eu não fiz no fim de semana")]
    c.append(caixa(40, 115, 400, 455, "#e8f6f0", VERDE, 24, 3))
    c.append(t(240, 165, "Things I did ✅", 30, VERDE, 800))
    c.append(caixa(460, 115, 400, 455, "#fff0f3", VERMELHO, 24, 3))
    c.append(t(660, 165, "Things I didn't do ❌", 28, VERMELHO, 800))
    fiz = [("We went to the beach.", "🏖️"), ("We won the game!", "🏆"), ("I watched a movie.", "🎬"), ("I texted my friends.", "📱")]
    naofiz = [("We didn't go to the beach.", "🏖️"), ("We didn't win. We lost.", "😞"), ("I didn't watch TV.", "📺"), ("I didn't eat out.", "🍕")]
    for k, ((a, ea), (b, eb)) in enumerate(zip(fiz, naofiz)):
        y = 245 + k * 85
        c.append(e(85, y + 8, ea, 36) + t(115, y, a, 21, TINTA, 700, "start"))
        c.append(e(505, y + 8, eb, 36) + t(535, y, b, 20, TINTA, 700, "start"))
    c.append(t(660, 555, "didn't + verbo normal (sem -ed)", 17, VERMELHO, 800))
    svg("ing09-didnt.svg", "\n".join(c))


def disciplina():
    c = []
    c.append(f'<circle cx="1420" cy="120" r="200" fill="#dfe8ff"/><circle cx="160" cy="520" r="230" fill="#ffeccf"/>')
    bal = [(120, 90, 330, "Hello! 👋", AZUL), (520, 60, 420, "Did you dance?", ROXO), (1000, 110, 380, "Yes, I did! 💃", VERDE),
           (250, 330, 440, "I went swimming! 🏊", LARANJA), (780, 330, 470, "We saw fireworks! 🎆", ROSA)]
    for x, y, w, txt, cor in bal:
        c.append(f'<rect x="{x}" y="{y}" width="{w}" height="120" rx="60" fill="#fff" stroke="{cor}" stroke-width="6"/>')
        c.append(f'<path d="M{x + 70} {y + 114} l-12 46 l46 -40 z" fill="#fff" stroke="{cor}" stroke-width="6" stroke-linejoin="round"/>')
        c.append(f'<rect x="{x + 40}" y="{y + 100}" width="80" height="16" fill="#fff"/>')
        c.append(t(x + w / 2, y + 78, txt, 46, cor, 800))
    c.append(e(1360, 520, "📘", 120) + e(1500, 470, "🎧", 100))
    svg("disciplina-ingles.svg", "\n".join(c), 1600, 600, "#f4f7ff")


for f in (corpo, did, habitos, too_enough, festa, regular, irregular, novembro, fimdesemana, go_ing, didnt, disciplina):
    f()
print("SVGs gerados em", OUT)
