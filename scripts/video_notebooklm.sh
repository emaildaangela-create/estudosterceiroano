#!/usr/bin/env bash
# Uso: scripts/video_notebooklm.sh <id-do-modulo> "<titulo do caderno>" "<pedido do video>" [estilo]
# Cria um caderno no NotebookLM com o texto-base do módulo, gera o vídeo em
# português e baixa para assets/videos/<id>.mp4. Usa a ferramenta não oficial
# notebooklm-py (login feito com `notebooklm login`).
set -euo pipefail
export PYTHONIOENCODING=utf-8
ID="$1"; TITULO="$2"; PEDIDO="$3"; ESTILO="${4:-kawaii}"
TMP="$(mktemp -d)"; FONTE="$TMP/$ID.md"
python scripts/fonte_notebooklm.py "$ID" > "$FONTE"
if [ -z "${NB:-}" ]; then NB=$(notebooklm create "$TITULO" --json | python -c "import json,sys;print(json.load(sys.stdin)['notebook']['id'])")
echo "caderno $NB"
notebooklm source add "$FONTE" -n "$NB" --type file --title "$TITULO" >/dev/null; sleep 20; fi
notebooklm generate video "$PEDIDO" -n "$NB" --style "$ESTILO" --language pt_BR --wait --timeout 2400 --retry 3
mkdir -p assets/videos
notebooklm download video "assets/videos/$ID.mp4" -n "$NB"
echo "pronto: assets/videos/$ID.mp4"
