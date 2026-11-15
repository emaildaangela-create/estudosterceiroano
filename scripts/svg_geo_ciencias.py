"""Gera as ilustrações explicativas de Geografia (Mód. 13) e Ciências (Mód. 13) em SVG.

Rodar da raiz do projeto:  python scripts/svg_geo_ciencias.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from svg_ingles import (svg, t, e, caixa, seta, DEFS, titulo, TINTA, SUAVE, AZUL, VERDE,  # noqa: E402
                        VERMELHO, LARANJA, ROXO, ROSA)

MARROM = "#8a5a2b"


def cartoes(lista, y, h, cor, bg, emoji=56, cols=None, top=0):
    """Fileira de cartões: (emoji, título, linha1, linha2)."""
    c = []
    n = cols or len(lista)
    w = (840 - (n - 1) * 15) / n
    for i, (em, nome, l1, l2) in enumerate(lista):
        x = 30 + (i % n) * (w + 15)
        yy = y + (i // n) * (h + 15)
        c.append(caixa(x, yy, w, h, bg, cor, 18, 3) + e(x + w / 2, yy + 70, em, emoji))
        c.append(t(x + w / 2, yy + 118, nome, 20, cor, 800))
        if l1:
            c.append(t(x + w / 2, yy + 148, l1, 15, TINTA, 700))
        if l2:
            c.append(t(x + w / 2, yy + 170, l2, 15, TINTA, 700))
    return "".join(c)


# --- Geografia --------------------------------------------------------------

def cadeia_leite():
    c = [DEFS, titulo("Do leite da vaca ao consumidor", "a cadeia de produção", ROXO)]
    etapas = [("🐄", "1. Extração", "ordenha da vaca"), ("🚛", "2. Transporte", "caminhão-tanque"),
              ("🏭", "3. Indústria", "iogurte, queijo, manteiga"), ("📦", "4. Distribuição", "caminhão leva às lojas"),
              ("🏪", "5. Comércio", "o mercado vende"), ("👨‍👩‍👧", "6. Consumo", "a família consome")]
    for i, (em, nome, d) in enumerate(etapas):
        col, lin = i % 3, i // 3
        x = 40 + col * 285
        y = 120 + lin * 235
        c.append(caixa(x, y, 250, 200, "#f4effc", ROXO, 20, 3) + e(x + 125, y + 85, em, 64))
        c.append(t(x + 125, y + 140, nome, 22, ROXO, 800) + t(x + 125, y + 172, d, 16, TINTA, 700))
        if col < 2:
            c.append(seta(x + 252, y + 100, x + 283, y + 100, ROXO, 4))
    c.append(seta(805, 322, 805, 352, ROXO, 4))
    svg("geo13-cadeia-leite.svg", "\n".join(c))


def artesanato_industria():
    c = [DEFS, titulo("Do artesanato à indústria", None, ROXO)]
    lados = [("🧵", "ARTESANAL", "feito à mão ou com", "ferramentas simples", "um a um, dias ou semanas",
              "Ainda hoje: cestos indígenas", MARROM, "#f6efe6"),
             ("🏭", "INDUSTRIAL", "máquinas e", "equipamentos", "grandes quantidades, iguais",
              "Ex.: fábrica de sapatos", AZUL, "#eaf2ff")]
    for i, (em, nome, l1, l2, l3, ex, cor, bg) in enumerate(lados):
        x = 40 + i * 440
        c.append(caixa(x, 100, 380, 470, bg, cor, 24, 3) + e(x + 190, 215, em, 100))
        c.append(t(x + 190, 300, nome, 30, cor, 800))
        c.append(t(x + 190, 350, l1, 21, TINTA, 700) + t(x + 190, 380, l2, 21, TINTA, 700))
        c.append(t(x + 190, 430, l3, 19, TINTA, 800))
        c.append(f'<rect x="{x + 30}" y="{480}" width="320" height="50" rx="25" fill="#fff"/>' + t(x + 190, 513, ex, 18, cor, 800))
    c.append(seta(425, 330, 475, 330, SUAVE, 6))
    svg("geo13-artesanato-industria.svg", "\n".join(c))


def tipos_industria():
    c = [DEFS, titulo("Tipos de indústria", "recurso natural → matéria-prima → produto", ROXO)]
    c.append(caixa(30, 120, 250, 420, "#e8f6f0", VERDE, 22, 3) + e(155, 220, "⛰️", 70))
    c.append(t(155, 290, "Recursos naturais", 20, VERDE, 800) + t(155, 330, "petróleo, minérios,", 17, TINTA, 700) + t(155, 355, "madeira, leite", 17, TINTA, 700))
    c.append(seta(282, 330, 318, 330, SUAVE, 5))
    c.append(caixa(320, 120, 260, 420, "#fff4e6", LARANJA, 22, 3) + e(450, 220, "⚙️", 70))
    c.append(t(450, 285, "Indústria de BASE", 21, LARANJA, 800) + t(450, 325, "faz matérias-primas", 17, TINTA, 700))
    c.append(t(450, 350, "e energia:", 17, TINTA, 700) + t(450, 385, "aço, diesel, plástico", 17, TINTA, 800))
    c.append(t(450, 430, "petróleo e minérios", 15, SUAVE, 700))
    c.append(seta(582, 330, 618, 330, SUAVE, 5))
    c.append(caixa(620, 120, 250, 420, "#eaf2ff", AZUL, 22, 3) + e(745, 220, "🛋️", 70))
    c.append(t(745, 280, "Indústria de", 20, AZUL, 800) + t(745, 305, "BENS DE CONSUMO", 20, AZUL, 800))
    c.append(t(745, 345, "faz produtos para", 17, TINTA, 700) + t(745, 370, "o consumidor:", 17, TINTA, 700))
    c.append(t(745, 405, "alimentos, roupas,", 17, TINTA, 800) + t(745, 430, "móveis, automóveis", 17, TINTA, 800))
    svg("geo13-tipos-industria.svg", "\n".join(c))


def bens():
    c = [titulo("Bens duráveis e não duráveis", None, ROXO)]
    lados = [("BENS DURÁVEIS", "duram muito tempo, usados muitas vezes", ["🚗 automóvel", "💻 computador", "🧊 geladeira", "📺 televisão"], AZUL, "#eaf2ff"),
             ("BENS NÃO DURÁVEIS", "acabam rápido: consumo imediato", ["🍎 alimentos", "🧃 bebidas", "🪥 pasta de dente", "🧴 detergente"], LARANJA, "#fff4e6")]
    for i, (nome, d, itens, cor, bg) in enumerate(lados):
        x = 40 + i * 420
        c.append(caixa(x, 100, 400, 470, bg, cor, 24, 3))
        c.append(t(x + 200, 160, nome, 28, cor, 800) + t(x + 200, 198, d, 16, SUAVE, 700))
        for k, it in enumerate(itens):
            c.append(f'<rect x="{x + 40}" y="{235 + k * 80}" width="320" height="62" rx="31" fill="#fff"/>')
            c.append(t(x + 200, 276 + k * 80, it, 24, TINTA, 800))
    svg("geo13-bens.svg", "\n".join(c))


def cinco_rs():
    c = [titulo("Consumo consciente: os 5 Rs", "pensar antes de comprar diminui os impactos", VERDE)]
    rs = [("🤔", "Repensar", "Eu preciso mesmo", "disso?"), ("🚫", "Recusar", "excesso de", "embalagens"),
          ("📉", "Reduzir", "menos produtos", "descartáveis"), ("🫙", "Reutilizar", "pote de vidro vira", "vaso ou porta-lápis"),
          ("♻️", "Reciclar", "papel, plástico, metal", "viram novos produtos")]
    cores = [VERDE, VERMELHO, ROXO, LARANJA, AZUL]
    for i, (em, nome, l1, l2) in enumerate(rs):
        x = 30 + i * 170
        c.append(caixa(x, 130, 155, 420, "#fff", cores[i], 20, 4) + e(x + 77, 240, em, 60))
        c.append(t(x + 77, 320, nome, 23, cores[i], 800) + t(x + 77, 380, l1, 14, TINTA, 700) + t(x + 77, 402, l2, 14, TINTA, 700))
    svg("geo13-5rs.svg", "\n".join(c))


def impactos():
    c = [titulo("Impactos ambientais da indústria", "a indústria gera empregos e riqueza, mas pode poluir", VERMELHO)]
    itens = [("🏭", "Poluição do ar", "fumaça das chaminés", ""), ("💧", "Contaminação", "das águas", ""),
             ("🌳", "Uso excessivo", "dos recursos naturais", ""), ("🗑️", "Muitos resíduos", "lixo e poluentes", "")]
    c.append(cartoes(itens, 120, 200, VERMELHO, "#fff0f0", 60, 4))
    c.append(caixa(30, 360, 840, 200, "#e8f6f0", VERDE, 20, 3))
    c.append(t(450, 405, "Profissionais da indústria usam EPIs", 24, VERDE, 800))
    c.append(e(260, 480, "⛑️", 50) + e(360, 480, "🥽", 50) + e(460, 480, "🧤", 50) + e(560, 480, "🥾", 50) + e(660, 480, "😷", 50))
    c.append(t(450, 535, "Equipamentos de Proteção Individual: segurança e saúde", 18, TINTA, 700))
    svg("geo13-impactos.svg", "\n".join(c))


# --- Ciências ---------------------------------------------------------------

def camadas_solo():
    c = [titulo("As camadas do solo", "o solo é a camada mais externa da litosfera", VERDE)]
    camadas = [("Húmus", "mais nutrientes, água e ar", "#3d2b1f", 40), ("Camada superior", "raízes das plantas", "#6b4a2f", 70),
               ("Subsolo", "mistura de areia e argila", "#a8794d", 90), ("Águas e fragmentos de rochas", "água subterrânea", "#5a9fd4", 80),
               ("Rocha-mãe", "rocha não fragmentada", "#8c8c8c", 90)]
    y = 160
    c.append(''.join(f'<path d="M{70 + k * 60} 160 q-10 -45 0 -60 q10 15 0 60" fill="#4caf50"/>' for k in range(7)))
    c.append(e(160, 120, "🌳", 70) + e(400, 125, "🌱", 46))
    for nome, d, cor, h in camadas:
        c.append(f'<rect x="40" y="{y}" width="440" height="{h}" fill="{cor}" stroke="#fff" stroke-width="2"/>')
        if nome.startswith("Rocha"):
            c.append(''.join(f'<ellipse cx="{70 + k * 70}" cy="{y + h / 2}" rx="30" ry="22" fill="#b5b5b5" stroke="#777"/>' for k in range(6)))
        c.append(f'<line x1="480" y1="{y + h / 2}" x2="520" y2="{y + h / 2}" stroke="{SUAVE}" stroke-width="3"/>')
        c.append(t(530, y + h / 2 - 2, nome, 21, TINTA, 800, "start") + t(530, y + h / 2 + 22, d, 16, SUAVE, 700, "start"))
        y += h + 4
    c.append(t(450, 580, "Componentes: nutrientes minerais · matéria orgânica · água · ar", 18, VERDE, 800))
    svg("cie13-camadas.svg", "\n".join(c))


def usos_solo():
    c = [titulo("Usos do solo", None, VERDE)]
    usos = [("🌽", "Agricultura", "cultivo de plantas", "alimentos e fibras"),
            ("🐄", "Pecuária", "criação de animais", "carne, leite, couro, lã"),
            ("🌲", "Silvicultura", "cultivo de florestas", "madeira, celulose, látex"),
            ("⛏️", "Mineração", "extração de minerais", "ferro e alumínio"),
            ("🏙️", "Urbanização", "casas, prédios,", "rodovias, parques")]
    c.append(cartoes(usos[:3], 90, 230, VERDE, "#e8f6f0", 64))
    c.append(cartoes(usos[3:], 340, 230, MARROM, "#f6efe6", 64))
    svg("cie13-usos.svg", "\n".join(c))


def cuidados():
    c = [titulo("Cuidados com o solo", "uso responsável para as gerações futuras", VERDE)]
    itens = [("🔄", "Rotação de culturas", "alternar plantas", "na mesma área"),
             ("🍂", "Adubação orgânica", "restos de plantas", "enriquecem o solo"),
             ("🌳", "Controle da erosão", "reflorestar: raízes", "seguram o solo"),
             ("💦", "Irrigação e drenagem", "água na medida", "certa para as raízes"),
             ("🪱", "Compostagem", "restos de alimentos", "viram adubo"),
             ("🏞️", "Unidades de Conservação", "áreas protegidas", "por lei (parques)")]
    c.append(cartoes(itens, 95, 225, VERDE, "#e8f6f0", 56, 3))
    svg("cie13-cuidados.svg", "\n".join(c))


def poluicao():
    c = [DEFS, titulo("Poluição do solo", "causas → consequências → prevenção", VERMELHO)]
    cols = [("CAUSAS", VERMELHO, "#fff0f0", ["🗑️ lixo descartado errado", "🧪 excesso de agrotóxicos", "🏭 resíduos das indústrias", "⛏️ mineração", "🛢️ petróleo derramado"]),
            ("CONSEQUÊNCIAS", LARANJA, "#fff4e6", ["☠️ plantas e animais morrem", "🤒 doenças nas pessoas", "🥀 solo menos fértil", "💧 água subterrânea suja", "🐟 rios contaminados"]),
            ("PREVENÇÃO", VERDE, "#e8f6f0", ["♻️ separar os recicláveis", "🪱 fazer compostagem", "🌱 agricultura orgânica", "🧴 pouco fertilizante", "⚖️ leis e fiscalização"])]
    for i, (nome, cor, bg, itens) in enumerate(cols):
        x = 30 + i * 290
        c.append(caixa(x, 110, 260, 465, bg, cor, 20, 3) + t(x + 130, 155, nome, 22, cor, 800))
        for k, it in enumerate(itens):
            c.append(f'<rect x="{x + 15}" y="{180 + k * 77}" width="230" height="62" rx="16" fill="#fff"/>')
            em, txt = it.split(" ", 1)
            c.append(e(x + 45, 222 + k * 77, em, 28) + t(x + 70, 218 + k * 77, txt, 14, TINTA, 800, "start"))
        if i < 2:
            c.append(seta(x + 262, 340, x + 288, 340, SUAVE, 4))
    svg("cie13-poluicao.svg", "\n".join(c))


if __name__ == "__main__":
    for f in (cadeia_leite, artesanato_industria, tipos_industria, bens, cinco_rs, impactos,
              camadas_solo, usos_solo, cuidados, poluicao):
        f()
    print("SVGs de Geografia e Ciências gerados")
