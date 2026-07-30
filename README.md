# HWTS.EU.HTML

Statische HTML-versie van hwts.eu — zelfde inhoud en huisstijl, zonder WordPress.

## Pagina’s

- `index.html` — home (full-screen hero, diensten, kernwaarden, opdrachtgevers)
- `diensten.html` — laswerk + technisch support + galerij
- `contact.html` — gegevens + contactformulier

## Lokaal openen

Dubbelklik `index.html`, of vanuit deze map:

```bash
npx --yes serve .
```

Daarna: http://localhost:3000

## Structuur

```
HWTS.EU.HTML/
├── index.html
├── diensten.html
├── contact.html
├── css/styles.css
├── js/main.js
└── images/          # hero, logo, diensten, clients, gallery
```

Geen database, geen build-step. Uploaden = klaar.
