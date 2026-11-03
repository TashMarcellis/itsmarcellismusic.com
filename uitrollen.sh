#!/usr/bin/env bash
# Rolt itsmarcellismusic.com uit naar Cloudflare Pages (project itsmarcellismusic).
#
# Uitrollen gebeurt vanuit een schone kopie: geen .git, en de interne Nederlandse
# bestanden (Specificaties.md, Updates.md, dit script) gaan niet mee naar buiten.
# De kopie wordt geteld voordat er iets naar boven gaat: een lege of halve map
# uitrollen wist de site. Verwacht: 8 html, _redirects, style.css, site.js, releases.json, logo en vijf webp's.
#
# npx wrangler draait vanuit ~/Sites/Marcellis.link als die er is (tashmir, daar staat
# node_modules), anders vanuit de NAS-map Marcellis.Link (zerochill).
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WRANGLER_MAP="/home/tashmir/Sites/Marcellis.link"
[ -d "$WRANGLER_MAP" ] || WRANGLER_MAP="/mnt/nas/Marcellis.Link"
PROJECT="itsmarcellismusic"
MINIMUM=18

KOPIE="$(mktemp -d)"
trap 'rm -rf "$KOPIE"' EXIT

rsync -a \
  --exclude '.git' \
  --exclude '.wrangler' \
  --exclude 'node_modules' \
  --exclude 'Specificaties.md' \
  --exclude 'Updates.md' \
  --exclude 'uitrollen.sh' \
  "$REPO/" "$KOPIE/"

AANTAL="$(find "$KOPIE" -type f | wc -l)"
if [ "$AANTAL" -lt "$MINIMUM" ]; then
  echo "Stop: de kopie heeft maar $AANTAL bestanden, verwacht minstens $MINIMUM." >&2
  exit 1
fi
echo "$AANTAL bestanden klaar om uit te rollen."

cd "$WRANGLER_MAP"
npx wrangler pages deploy "$KOPIE" --project-name "$PROJECT" --branch main --commit-dirty=true
