"""Gera as ilustrações explicativas de História (4º bimestre) em SVG.

Rodar da raiz do projeto:  python scripts/svg_historia.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from svg_ingles import (svg, t, e, caixa, seta, DEFS, titulo, TINTA, SUAVE, AZUL, VERDE,  # noqa: E402
                        VERMELHO, LARANJA, ROXO, ROSA)

MARROM = "#8a5a2b"


def campo_cidade():
    c = [titulo("O campo e a cidade", "zona rural × zona urbana", LARANJA)]
    # cidade
    c.append(f'<rect x="30" y="110" width="410" height="440" rx="22" fill="#e6ecf7"/>')
    for i, (h, cor) in enumerate([(230, "#8fa3c4"), (300, "#6f86ad"), (190, "#a7b8d6"), (270, "#7b91b8"), (210, "#94a8c9")]):
        x = 55 + i * 75
        c.append(f'<rect x="{x}" y="{450 - h}" width="62" height="{h}" fill="{cor}" rx="4"/>')
        for yy in range(470 - h, 440, 26):
            for xx in (x + 10, x + 34):
                c.append(f'<rect x="{xx}" y="{yy}" width="14" height="12" fill="#fff9c4"/>')
    c.append(f'<rect x="30" y="450" width="410" height="40" fill="#555"/>')
    c.append(''.join(f'<rect x="{x}" y="468" width="26" height="4" fill="#fff"/>' for x in range(45, 440, 50)))
    c.append(e(120, 485, "🚗", 36) + e(330, 485, "🚌", 36))
    c.append(t(235, 530, "CIDADE (zona urbana)", 24, AZUL, 800))
    # campo
    c.append(f'<rect x="460" y="110" width="410" height="440" rx="22" fill="#e8f6dc"/>')
    c.append(f'<path d="M460 360 Q600 300 870 350 L870 550 L460 550 Z" fill="#a5d67a"/>')
    c.append(f'<path d="M640 500 Q660 430 700 360" stroke="#c9a46a" stroke-width="26" fill="none"/>')
    c.append(e(560, 340, "🏡", 70) + e(780, 330, "🌳", 70) + e(820, 430, "🐄", 50) + e(530, 450, "🐔", 40))
    for r in range(3):
        c.append(f'<line x1="{720}" y1="{470 + r * 22}" x2="{840}" y2="{470 + r * 22}" stroke="{VERDE}" stroke-width="8" stroke-dasharray="10 8"/>')
    c.append(f'<path d="M470 250 Q560 230 640 260" stroke="#7ec8f2" stroke-width="16" fill="none"/>')
    c.append(f'<rect x="540" y="505" width="250" height="38" rx="19" fill="#fff"/>' + t(665, 532, "CAMPO (zona rural)", 24, VERDE, 800))
    c.append(e(780, 200, "☀️", 56))
    svg("hist12-campo-cidade.svg", "\n".join(c))


def alimentos():
    c = [DEFS, titulo("Do natural ao ultraprocessado", "o exemplo do milho", LARANJA)]
    itens = [("🌽", "in natura", "espiga de milho", "como vem da natureza", VERDE, "#e8f6f0"),
             ("🥫", "processado", "milho em conserva", "sal e água na lata", LARANJA, "#fff4e6"),
             ("🍿", "ultraprocessado", "salgadinho de milho", "muitos ingredientes da fábrica", VERMELHO, "#fff0f3")]
    for i, (em, nome, ex, d, cor, bg) in enumerate(itens):
        x = 40 + i * 290
        c.append(caixa(x, 130, 240, 360, bg, cor, 24, 3) + e(x + 120, 270, em, 96))
        c.append(t(x + 120, 340, nome, 26, cor, 800) + t(x + 120, 380, ex, 19, TINTA, 700) + t(x + 120, 412, d, 15, SUAVE, 700))
        if i < 2:
            c.append(seta(x + 245, 300, x + 285, 300, SUAVE, 3))
    c.append(caixa(150, 515, 600, 60, "#fff", TINTA, 14, 3))
    c.append(t(450, 553, "Rótulo (lei de 2023):  ALTO EM AÇÚCAR · SÓDIO · GORDURA", 20, TINTA, 800))
    svg("hist12-alimentos.svg", "\n".join(c))


def migracao():
    c = [DEFS, titulo("Trabalho e migração", "do campo para a cidade e de volta ao campo", LARANJA)]
    c.append(f'<line x1="60" y1="330" x2="850" y2="330" stroke="{SUAVE}" stroke-width="6" marker-end="url(#ponta)"/>')
    marcos = [(130, "até 1950", "🌾", "maioria vive", "no campo", VERDE),
              (330, "a partir de 1950", "🚜➜🏭", "máquinas no campo;", "indústrias na cidade", LARANJA),
              (550, "1970", "🏙️", "mais da metade", "vive na cidade", AZUL),
              (760, "hoje", "🍓", "neo-rurais voltam", "para o campo", ROXO)]
    for x, ano, em, l1, l2, cor in marcos:
        c.append(f'<circle cx="{x}" cy="330" r="16" fill="{cor}"/>')
        c.append(caixa(x - 95, 130, 190, 170, "#fff", cor, 18, 3) + e(x, 205, em, 44) + t(x, 255, ano, 20, cor, 800))
        c.append(caixa(x - 95, 370, 190, 100, "#fff", cor, 18, 2) + t(x, 412, l1, 16, TINTA, 700) + t(x, 438, l2, 16, TINTA, 700))
    c.append(t(450, 530, "Motivo: busca por novas oportunidades de trabalho e melhores condições de vida", 18, TINTA, 800))
    svg("hist12-migracao.svg", "\n".join(c))


def direitos():
    c = [DEFS, titulo("Direito ao descanso e ao lazer", "conquistado aos poucos, com a luta dos trabalhadores", ROXO)]
    c.append(f'<line x1="50" y1="330" x2="860" y2="330" stroke="{SUAVE}" stroke-width="6" marker-end="url(#ponta)"/>')
    marcos = [(110, "1925", "15 dias de férias", "(trabalho urbano)"), (270, "1943", "CLT: leis do", "trabalho reunidas"),
              (430, "1948", "Declaração Universal", "dos Direitos Humanos"), (590, "1977", "férias de", "30 dias"),
              (750, "1988", "Constituição: descanso", "semanal remunerado")]
    for i, (x, ano, l1, l2) in enumerate(marcos):
        cima = i % 2 == 0
        c.append(f'<circle cx="{x}" cy="330" r="16" fill="{ROXO}"/>')
        by = 140 if cima else 370
        c.append(caixa(x - 85, by, 170, 150, "#f1ecff" if ano != "1948" else "#e6f0ff", ROXO if ano != "1948" else AZUL, 18, 3))
        c.append(t(x, by + 45, ano, 30, ROXO if ano != "1948" else AZUL, 800) + t(x, by + 90, l1, 15, TINTA, 700) + t(x, by + 114, l2, 15, TINTA, 700))
    c.append(e(590, 230, "🏖️", 56) + e(110, 470, "⚒️", 52))
    svg("hist13-direitos.svg", "\n".join(c))


def cinema_circo():
    c = [titulo("O lazer muda com o tempo", "cinema e circo: antes e hoje", ROXO)]
    for col, (tit, cor) in enumerate((("ANTES", MARROM), ("HOJE", AZUL))):
        x = 200 + col * 330
        c.append(t(x + 135, 130, tit, 28, cor, 800))
    linhas = [("🎞️ Cinema", ["sem som e sem cor", "cinema de rua", "roupa formal"], ["som, cor e 3D", "salas no shopping", "ingresso pela internet"]),
              ("🎪 Circo", ["muitos animais", "itinerante 🚚", "palhaços e mágicos"], ["quase sem animais", "continua itinerante 🚚", "palhaços e mágicos"])]
    for r, (nome, antes, hoje) in enumerate(linhas):
        y = 160 + r * 210
        c.append(caixa(30, y, 160, 190, "#fff", ROXO, 18, 3) + t(110, y + 105, nome, 22, ROXO, 800))
        for col, (lista, cor, bg) in enumerate(((antes, MARROM, "#f6efe6"), (hoje, AZUL, "#eef3ff"))):
            x = 200 + col * 330
            c.append(caixa(x, y, 300, 190, bg, cor, 18, 3))
            for k, item in enumerate(lista):
                c.append(t(x + 150, y + 55 + k * 52, item, 21, TINTA, 700))
    c.append(t(450, 590, "Só 7% dos municípios têm cinema: 90 milhões de brasileiros vivem em cidades sem cinema.", 16, SUAVE, 700))
    svg("hist13-cinema-circo.svg", "\n".join(c))


def festas():
    c = [titulo("Brasil, um país festeiro", "festas, lugares e origens", ROSA)]
    cards = [("🎭", "Carnaval", "fev./mar. · Rio, Olinda, Salvador", "herança portuguesa"),
             ("🔥", "Festas juninas", "junho · 13, 24 e 29", "portugueses"),
             ("🐂", "Parintins (AM)", "fim de junho · boi-bumbá", "festa regional"),
             ("🕯️", "Círio de Nazaré", "outubro · Belém (PA)", "religiosa (portugueses)"),
             ("👑", "Congada", "coroação do rei e da rainha", "africanos"),
             ("🪶", "Kuarup", "Xingu (MT) · homenagem aos mortos", "indígenas"),
             ("🍺", "Oktoberfest", "outubro · Blumenau (SC)", "imigrantes alemães"),
             ("🏮", "Bon Odori", "verão · São Paulo", "imigrantes japoneses")]
    for i, (em, nome, d, origem) in enumerate(cards):
        x = 30 + (i % 4) * 215
        y = 115 + (i // 4) * 235
        c.append(caixa(x, y, 200, 220, "#fff", ROSA, 18, 3) + e(x + 100, y + 70, em, 50))
        c.append(t(x + 100, y + 115, nome, 20, ROSA, 800))
        palavras = d.split(" · ")
        for k, p in enumerate(palavras[:2]):
            c.append(t(x + 100, y + 145 + k * 20, p, 13, TINTA, 700))
        c.append(f'<rect x="{x + 15}" y="{y + 185}" width="170" height="24" rx="12" fill="#fff0f6"/>' + t(x + 100, y + 202, origem, 13, ROSA, 800))
    svg("hist14-festas.svg", "\n".join(c))


if __name__ == "__main__":
    for f in (campo_cidade, alimentos, migracao, direitos, cinema_circo, festas):
        f()
    print("SVGs de História gerados")
