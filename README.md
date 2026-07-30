# HWTS.EU.HTML

Statische HTML-versie van hwts.eu — zelfde inhoud en huisstijl, zonder WordPress.

## Pagina’s

- `index.html` — home (full-screen hero, icon-diensten, kernwaarden, opdrachtgevers)
- `diensten.html` — gele CTA, tabbladen (laswerk / support) + projectgalerij
- `contact.html` — hero “Neem Contact Op” + kantoorgegevens met iconen

Footer: 4 kolommen (Over ons, vacatures, contact, logo), gele strepen, outline/solid knoppen.

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
└── images/
    ├── gallery/     # projectfoto’s dienstenpagina
    └── ...          # hero, logo, clients, overige
```

Geen database, geen build-step. Uploaden = klaar.
