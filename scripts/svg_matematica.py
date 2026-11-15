"""Gera as ilustrações explicativas de Matemática (4º bimestre) em SVG.

Rodar da raiz do projeto:  python scripts/svg_matematica.py
Módulo 13: medidas de massa, capacidade e comprimento.
Módulo 14: frações unitárias (sem o gráfico de setores, que não cai na prova).
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from svg_ingles import (svg, t, e, caixa, seta, DEFS, titulo, TINTA, SUAVE, AZUL, VERDE,  # noqa: E402
                        VERMELHO, LARANJA, ROXO, ROSA)

CIANO = "#0f8fb0"
PINTADO = "#38b6e0"
AMARELO = "#f4c430"


# --- auxiliares de frações -------------------------------------------------

def pizza(cx, cy, r, partes, pintadas=1, cor=PINTADO, inicio=-90):
    """Círculo dividido em partes iguais; as primeiras `pintadas` ficam coloridas."""
    c = [f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#fff" stroke="{TINTA}" stroke-width="3"/>']
    passo = 360 / partes
    for i in range(partes):
        a1 = math.radians(inicio + i * passo)
        a2 = math.radians(inicio + (i + 1) * passo)
        x1, y1 = cx + r * math.cos(a1), cy + r * math.sin(a1)
        x2, y2 = cx + r * math.cos(a2), cy + r * math.sin(a2)
        grande = 1 if passo > 180 else 0
        fill = cor if i < pintadas else "#fff"
        if partes == 1:
            c.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{TINTA}" stroke-width="3"/>')
        else:
            c.append(f'<path d="M{cx},{cy} L{x1:.1f},{y1:.1f} A{r},{r} 0 {grande} 1 {x2:.1f},{y2:.1f} Z" '
                     f'fill="{fill}" stroke="{TINTA}" stroke-width="3" stroke-linejoin="round"/>')
    return "".join(c)


def barra(x, y, w, h, partes, pintadas=1, cor=PINTADO):
    """Retângulo dividido em colunas iguais."""
    c = []
    lw = w / partes
    for i in range(partes):
        fill = cor if i < pintadas else "#fff"
        c.append(f'<rect x="{x + i * lw:.1f}" y="{y}" width="{lw:.1f}" height="{h}" fill="{fill}" stroke="{TINTA}" stroke-width="3"/>')
    return "".join(c)


def grade(x, y, cols, linhas, lado, pintadas=1, cor="#7a4a2a", vazio="#a5694a"):
    c = []
    n = 0
    for r in range(linhas):
        for k in range(cols):
            fill = cor if n < pintadas else vazio
            c.append(f'<rect x="{x + k * lado}" y="{y + r * lado}" width="{lado - 6}" height="{lado - 6}" rx="8" fill="{fill}" stroke="#4a2a14" stroke-width="3"/>')
            n += 1
    return "".join(c)


def fracao(x, y, num, den, size=40, cor=TINTA):
    """Fração escrita em pé: numerador, traço e denominador."""
    return (t(x, y - 8, str(num), size, cor, 800) +
            f'<line x1="{x - size * 0.45}" y1="{y + 2}" x2="{x + size * 0.45}" y2="{y + 2}" stroke="{cor}" stroke-width="4" stroke-linecap="round"/>' +
            t(x, y + size * 0.95, str(den), size, cor, 800))


# --- Módulo 13 --------------------------------------------------------------

def instrumentos():
    c = [titulo("Cada medida tem o seu instrumento", "massa · capacidade · comprimento", CIANO)]
    cols = [("⚖️", "MASSA", "balança", "quilograma (kg)", "grama (g)", "miligrama (mg) · tonelada (t)", LARANJA, "#fff4e6"),
            ("🥛", "CAPACIDADE", "copo de medidas", "litro (L)", "mililitro (mL)", "quanto cabe no recipiente", AZUL, "#eaf2ff"),
            ("📏", "COMPRIMENTO", "régua · fita métrica", "metro (m)", "centímetro (cm)", "milímetro (mm) · quilômetro (km)", VERDE, "#e8f6f0")]
    for i, (em, nome, inst, u1, u2, u3, cor, bg) in enumerate(cols):
        x = 30 + i * 285
        c.append(caixa(x, 115, 270, 455, bg, cor, 24, 3) + e(x + 135, 225, em, 84))
        c.append(t(x + 135, 290, nome, 26, cor, 800))
        c.append(f'<rect x="{x + 25}" y="{305}" width="220" height="40" rx="20" fill="#fff"/>' + t(x + 135, 333, inst, 19, TINTA, 800))
        c.append(t(x + 135, 395, "Unidades:", 17, SUAVE, 700))
        c.append(t(x + 135, 430, u1, 22, TINTA, 800) + t(x + 135, 465, u2, 22, TINTA, 800))
        c.append(t(x + 135, 520, u3, 15, SUAVE, 700))
    svg("mat13-instrumentos.svg", "\n".join(c))



def massa():
    c = [DEFS, titulo("Unidades de massa", "da maior para a menor: cada degrau vale 1 000 do seguinte", LARANJA)]
    degraus = [("1 t", "tonelada", "caminhão de carga", "= 1 000 kg"),
               ("1 kg", "quilograma", "pacote de arroz", "= 1 000 g"),
               ("1 g", "grama", "um clipe de papel", "= 1 000 mg"),
               ("1 mg", "miligrama", "sódio do iogurte", "")]
    emojis = ["🚚", "🍚", "📎", "🥛"]
    for i, (u, nome_u, ex, regra) in enumerate(degraus):
        x = 40 + i * 210
        y = 135 + i * 55
        c.append(caixa(x, y, 190, 560 - y, "#fff4e6", LARANJA, 18, 3))
        c.append(e(x + 95, y + 70, emojis[i], 52) + t(x + 95, y + 125, u, 40, LARANJA, 800))
        c.append(t(x + 95, y + 158, nome_u, 19, TINTA, 800) + t(x + 95, 540, ex, 15, SUAVE, 700))
    for i, d in enumerate(degraus):
        if d[3]:  # desenhadas por último, por cima das caixas
            x = 40 + i * 210
            y = 135 + i * 55
            c.append(f'<rect x="{x + 125}" y="470" width="150" height="42" rx="21" fill="{LARANJA}" stroke="#fff" stroke-width="3"/>' + t(x + 200, 498, d[3], 19, "#fff", 800))
    svg("mat13-massa.svg", "\n".join(c))


def capacidade():
    c = [DEFS, titulo("Unidades de capacidade", "1 litro = 1 000 mililitros", AZUL)]
    # jarra de 1 L
    c.append('<path d="M110 170 L300 170 L285 520 Q285 545 260 545 L150 545 Q125 545 125 520 Z" fill="#eaf6ff" stroke="#2456b8" stroke-width="4"/>')
    c.append('<path d="M127 260 L283 260 L285 520 Q285 545 260 545 L150 545 Q125 545 125 520 Z" fill="#7cc8f2"/>')
    c.append('<path d="M300 210 Q360 230 345 320 Q335 370 290 380" stroke="#2456b8" stroke-width="10" fill="none"/>')
    for k in range(1, 10):
        yy = 545 - k * 28.5
        c.append(f'<line x1="250" y1="{yy:.0f}" x2="280" y2="{yy:.0f}" stroke="#17213b" stroke-width="2"/>')
    c.append(t(205, 235, "1 L", 40, AZUL, 800) + t(205, 590, "jarra de 1 litro", 18, SUAVE, 700))
    c.append(t(420, 365, "=", 60, TINTA, 800))
    # 4 copos de 250 mL
    for i in range(4):
        x = 480 + (i % 2) * 190
        y = 150 + (i // 2) * 215
        c.append(f'<path d="M{x} {y} L{x + 130} {y} L{x + 115} {y + 160} L{x + 15} {y + 160} Z" fill="#eaf6ff" stroke="#2456b8" stroke-width="4"/>')
        c.append(f'<path d="M{x + 5} {y + 45} L{x + 125} {y + 45} L{x + 115} {y + 160} L{x + 15} {y + 160} Z" fill="#ffb347"/>')
        c.append(t(x + 65, y + 115, "250 mL", 22, TINTA, 800))
    c.append(t(645, 590, "250 + 250 + 250 + 250 = 1 000 mL", 22, AZUL, 800))
    svg("mat13-capacidade.svg", "\n".join(c))


def comprimento():
    c = [DEFS, titulo("Unidades de comprimento", "quilômetro · metro · centímetro · milímetro", VERDE)]
    linhas = [("1 km", "= 1 000 m", "🛣️", "distância entre cidades"),
              ("1 m", "= 100 cm", "🚪", "altura de uma porta: cerca de 2 m"),
              ("1 cm", "= 10 mm", "📏", "cada número da régua"),
              ("1 mm", "", "🐜", "o menor tracinho da régua")]
    for i, (u, regra, em, ex) in enumerate(linhas):
        y = 120 + i * 115
        c.append(caixa(40, y, 820, 100, "#e8f6f0", VERDE, 18, 3) + e(100, y + 67, em, 48))
        c.append(t(220, y + 64, u, 40, VERDE, 800) + t(400, y + 63, regra, 30, TINTA, 800))
        c.append(t(680, y + 60, ex, 18, SUAVE, 700))
    svg("mat13-comprimento.svg", "\n".join(c))


def jarra_quiz():
    """Jarra graduada de 1 L com 300 mL de suco (questão de quanto falta)."""
    c = [titulo("Quanto falta para 1 litro?", None, AZUL)]
    c.append('<path d="M330 120 L570 120 L555 540 Q555 565 530 565 L370 565 Q345 565 345 540 Z" fill="#eaf6ff" stroke="#2456b8" stroke-width="4"/>')
    topo = 565 - 3 * 44.5
    c.append(f'<path d="M347 {topo:.0f} L553 {topo:.0f} L555 540 Q555 565 530 565 L370 565 Q345 565 345 540 Z" fill="#7cc8f2"/>')
    for k in range(1, 11):
        yy = 565 - k * 44.5
        c.append(f'<line x1="500" y1="{yy:.0f}" x2="550" y2="{yy:.0f}" stroke="#17213b" stroke-width="2"/>')
        rot = "1 L" if k == 10 else f"{k * 100} mL"
        c.append(t(620, yy + 7, rot, 18, TINTA, 700, "start"))
    c.append('<path d="M330 170 Q250 200 270 300 Q280 350 340 360" stroke="#2456b8" stroke-width="10" fill="none"/>')
    svg("mat13-jarra-300.svg", "\n".join(c))


# --- Módulo 14 --------------------------------------------------------------

def meio_terco_quarto():
    c = [titulo("Metade, terço e quarto", "a figura é dividida em partes IGUAIS", ROXO)]
    itens = [(2, "um meio", "metade"), (3, "um terço", "terça parte"), (4, "um quarto", "quarta parte")]
    for i, (den, leitura, outro) in enumerate(itens):
        x = 160 + i * 290
        c.append(pizza(x, 250, 105, den, 1))
        c.append(fracao(x, 425, 1, den, 46, ROXO))
        c.append(t(x, 520, leitura, 26, TINTA, 800) + t(x, 552, "ou " + outro, 19, SUAVE, 700))
    svg("mat14-meio-terco-quarto.svg", "\n".join(c))


def partes_da_fracao():
    c = [DEFS, titulo("As partes da fração", None, ROXO)]
    c.append(barra(80, 150, 320, 150, 4, 1))
    c.append(t(240, 345, "4 partes iguais · 1 pintada", 22, TINTA, 800))
    c.append(fracao(600, 245, 1, 4, 90, ROXO))
    c.append(seta(700, 195, 650, 205, ROXO, 4) + seta(700, 330, 650, 320, ROXO, 4))
    c.append(t(715, 185, "numerador", 24, ROXO, 800, "start") + t(715, 212, "partes pintadas", 18, SUAVE, 700, "start"))
    c.append(t(715, 335, "denominador", 24, ROXO, 800, "start") + t(715, 362, "partes iguais no total", 18, SUAVE, 700, "start"))
    c.append(caixa(80, 430, 740, 120, "#f1ecff", ROXO, 20, 3))
    c.append(t(450, 478, "O traço da fração significa DIVISÃO.", 26, TINTA, 800))
    c.append(t(450, 520, "Frações unitárias têm numerador 1:  1/2, 1/3, 1/4 … 1/10", 21, SUAVE, 700))
    svg("mat14-partes-da-fracao.svg", "\n".join(c))


def fracoes_unitarias():
    c = [titulo("Frações unitárias", "quanto mais partes, menor é cada pedaço", ROXO)]
    nomes = ["meio", "terço", "quarto", "quinto", "sexto", "sétimo", "oitavo", "nono", "décimo"]
    cores = ["#38b6e0", "#6fcf97", "#f4c430", "#f2994a", "#eb5757", "#bb6bd9", "#56ccf2", "#27ae60", "#e07ab5"]
    for i, den in enumerate(range(2, 11)):
        y = 110 + i * 52
        c.append(fracao(68, y + 18, 1, den, 18, ROXO))
        c.append(barra(110, y, 560, 40, den, 1, cores[i]))
        c.append(t(700, y + 29, "um " + nomes[i], 22, TINTA, 800, "start"))
    svg("mat14-fracoes-unitarias.svg", "\n".join(c))


def fracao_de_quantidade():
    c = [DEFS, titulo("Fração de uma quantidade", "é só dividir!", ROXO)]
    # metade de 8 morangos
    c.append(caixa(30, 110, 410, 425, "#fff0f3", ROSA, 22, 3))
    c.append(t(235, 160, "metade de 8 morangos", 24, ROSA, 800))
    for g in range(2):
        gx = 60 + g * 190
        c.append(caixa(gx, 190, 170, 200, "#fff", ROSA, 16, 2))
        for k in range(4):
            c.append(e(gx + 50 + (k % 2) * 70, 265 + (k // 2) * 80, "🍓", 52))
    c.append(fracao(110, 470, 1, 2, 40, ROSA) + t(250, 488, "de 8 = 8 ÷ 2 = 4", 28, TINTA, 800))
    # um quarto de 12 picolés
    c.append(caixa(460, 110, 410, 425, "#eaf6ff", AZUL, 22, 3))
    c.append(t(665, 160, "um quarto de 12 picolés", 24, AZUL, 800))
    for g in range(4):
        gx = 478 + g * 98
        c.append(caixa(gx, 190, 88, 200, "#fff", AZUL, 14, 2))
        for k in range(3):
            c.append(e(gx + 44, 245 + k * 58, "🍦", 40))
    c.append(fracao(540, 470, 1, 4, 40, AZUL) + t(690, 488, "de 12 = 12 ÷ 4 = 3", 28, TINTA, 800))
    c.append(t(450, 572, "O denominador diz em quantos grupos iguais repartir.", 20, SUAVE, 700))
    svg("mat14-fracao-de-quantidade.svg", "\n".join(c))


def quiz_figuras():
    """Figuras pequenas usadas nas questões (parte pintada → fração)."""
    def so(nome, corpo, legenda=None):
        cc = [corpo]
        if legenda:
            cc.append(t(450, 570, legenda, 22, SUAVE, 700))
        svg(nome, "\n".join(cc))

    so("mat14-q-sexto.svg", pizza(450, 300, 220, 6, 1, "#f2994a"))
    so("mat14-q-oitavo.svg", barra(110, 190, 680, 220, 8, 1, ROXO))
    so("mat14-q-quinto.svg", pizza(450, 300, 220, 5, 1, VERDE))
    so("mat14-q-terco.svg", barra(200, 150, 500, 300, 3, 1, AMARELO))
    so("mat14-q-chocolate.svg", grade(300, 115, 3, 3, 120, 0), "barra de chocolate")
    so("mat14-q-torta.svg", pizza(450, 290, 230, 8, 0, "#fff") .replace('fill="#fff"', 'fill="#f6e7a8"', 9), "torta de limão dividida igualmente")


if __name__ == "__main__":
    for f in (instrumentos, massa, capacidade, comprimento, jarra_quiz,
              meio_terco_quarto, partes_da_fracao, fracoes_unitarias, fracao_de_quantidade, quiz_figuras):
        f()
    print("SVGs de Matemática gerados")
