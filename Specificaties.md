# itsmarcellismusic.com - Specificaties

Labelsite van Marcellis Music. Eén pagina, Engels (gaat naar buiten). Bouwplan: `Codex/Marcellis Music/Briefings/itsmarcellismusic.com - Bouwplan 17-09-2026.md`.

## Plekken

- Werkbank: `/home/tashmir/Sites/itsmarcellismusic.com/` (git, hoofdtak `main`)
- GitHub: `TashMarcellis/itsmarcellismusic.com`
- Canonieke build: `/mnt/nas/Marcellis.Link/itsmarcellismusic.com/` (`smb://192.168.1.85/marcellis.link/itsmarcellismusic.com/`)
- Cloudflare Pages: project `itsmarcellismusic`, productietak `main`, voorbeeld-url `https://itsmarcellismusic.pages.dev`
- Domein: `itsmarcellismusic.com` (Namecheap), nameservers naar Cloudflare

## Bestanden

- `index.html`: alles inline (css, js, favicon als png-data-uri uit het logo).
- `assets/logo.png`: 512x512, verkleind uit `Artiesten/Marcellis Music - Logo.png` (1254x1254).
- `assets/tash.webp`, `mike.webp`, `jordan.webp`, `rafa.webp`, `julia.webp`: 800x800, kwaliteit 82, uit de profielfoto's van 17-09-2026 in `Codex/Marcellis Music/Artiesten/`.
- `uitrollen.sh`: rsync-kopie zonder `.git` en zonder de interne md-bestanden, telpoort minimaal 6 bestanden, daarna `npx wrangler pages deploy` vanuit `~/Sites/Marcellis.link` (daar staat node_modules).
- `Specificaties.md`, `Updates.md`: intern, Nederlands, gaan niet mee in de uitrol.

## Inhoud van boven naar beneden

1. Themaknop rechtsboven (Dark / Light).
2. Hero: logo in een ronde donkere tegel met gouden rand, "Marcellis Music", de biozin van HyperFollow, "Create. Love. Connect.", knoppen YouTube (hub), Listen (HyperFollow), Shop (marcellis.shop).
3. Artists: vijf tegels in vaste volgorde: Tash Marcellis, Mike Ellis, Jordan Marceau, Rafa Marceau, Julia Ellis. Per tegel foto, naam, genreregel, knop YouTube. Spotify-knop komt per release erbij (Tash 18-09 Ice Queen, Mike 09-10, Jordan 16-10).
4. Latest: één ingebedde YouTube-video via `youtube-nocookie.com`, 16:9. Nu Mami Manda (id `iiq_RQTonj0`, staat op het kanaal @TashMarcellisMusic; het hub-kanaal Marcellis Music heeft geen Mami Manda-upload). Wisselen: het id in de iframe-src en de bijschrifttekst aanpassen.
5. Footer: "Create. Love. Connect." en de vijf handles als tekstlinks.

Alle externe links openen met `target="_blank" rel="noopener"`.

## Thema

- Licht is de standaard. Keuze in `localStorage` onder `itsmarcellismusic-theme`. Geen `prefers-color-scheme`.
- Palet, door Tash voor deze build aangewezen (goud op zwart/donkerbruin, passend bij de gouden portretten; publieke merksite, uitzondering 2 in `OS-Huis/Huisstijl Kleuren.md`):
  - Licht: achtergrond `#f4efe4`, paneel `#fffdf8`, tekst `#1a1208`, gedempt `#6b5a3a`, lijnen `#d9cdb3`, goud `#c9a84c`, goud voor tekst `#7a5c12`.
  - Donker: achtergrond `#1a1208`, paneel `#241a0c`, tekst `#f1e8d6`, gedempt `#b8a684`, lijnen `#3d2e14`, goud `#c9a84c`, licht goud `#e0c060`.
  - Logotegel altijd donker (`#1a1208` licht, `#0f0a03` donker) zodat het zwarte logo bewust oogt.

## Vangnet

Ontbreekt een artiestenfoto, dan verwijdert `onerror` de img en toont de tegel een gouden vlak met initialen. Bij de eerste oplevering zijn alle vijf de foto's aanwezig.

## Marges en opbouw

- `<main>` en `</main>` precies één keer, geen menubalk (`<nav>` komt niet voor, dit is marcellis.link niet).
- Zijmarges `clamp(20px, 5vw, 52px)`, `max-width: 1060px`, `margin: auto`, eigen blok onder 600px.
- Werkt op 400px breed.

## Acceptatie

- Alle zichtbare tekst Engels, geen em-dash, geen Nederlands in title, meta, alt, aria-label.
- Licht opent standaard, toggle werkt en onthoudt.
- Alle knoppen landen op de juiste url.
- Live marker: "Create. Love. Connect." en de vijf artiestennamen op de pages.dev-url.
