# itsmarcellismusic.com - Updates

## 2026-09-17

- Eerste bouw van de labelsite: `index.html` (hero, Artists, Latest, footer, dark/light-toggle), `assets/` met logo en vijf webp's van 800x800, `uitrollen.sh` met telpoort van 6 bestanden.
- Favicon: png-data-uri uitgeknipt uit `Marcellis Music - Logo.png`.
- Latest: Mami Manda, `iiq_RQTonj0` (kanaal @TashMarcellisMusic; niet op het hub-kanaal gevonden).
- Verificatie: zie het opleverbestand `afgerond-itsmarcellismusic-2026-09-17.md`.
- Genreregel Tash Marcellis gecorrigeerd naar "Afrosoul, R&B, English with Portuguese and Spanish code switch" (Tash 17-09-2026; nergens "Dutch" op de site).
- Artiestengrid naar vijf kolommen op breed scherm (`minmax(170px, 1fr)`), tegels als flex-kolom zodat de YouTube-knoppen op één lijn staan.
- Drie uitrollen naar Cloudflare Pages; live index.html heeft md5 `ebe266772c4223dbccc53a3195c11e27`, gelijk aan werkbank en NAS.
- Shop-knop in de hero wijst tijdelijk naar https://hearmarcellis.com (huidige Payhip-winkel), omdat marcellis.shop nog geen DNS heeft. Terugzetten naar https://marcellis.shop zodra dat domein op Payhip staat.

## 2026-11-02

- Uitbouw naar volledige labelsite (branch `build/labelsite-uitbouw`): menubalk, labelverhaal op home, artiestenoverzicht, vijf artiestenpagina's, releasespagina met filter uit `releases.json`, contactpagina.
- `releases.json`: Mami Manda (YouTube `iiq_RQTonj0`, datum onbekend) en Ice Queen (2026-09-18, geen YouTube-link bekend). Releases Mike 09-10 en Jordan 16-10 nog niet opgenomen: titels staan nergens in de repo.
- Headless getest op 390px en 1366px: geen horizontale scroll, licht standaard, toggle onthoudt over pagina's, geen em-dashes, geen fouten.
- `releases.json` gevuld vanaf de YouTube-kanalen (stand 2026-11-02): eigen nummers van Tash (9), Mike (4) en Jordan (8), datum = uploaddatum. Covers, remixes en "reimagined"-versies niet opgenomen. Rafa en Julia: geen uploads gevonden.
- Ice Queen: officiële audio staat op het kanaal van Mike Ellis (`wmnzlX07cX0`, 2026-08-15). Artiest en datum gelaten zoals in de Specificaties (Tash, 18-09). Tash beslist wie erbij hoort.
