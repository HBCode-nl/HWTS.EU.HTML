# HWTS.EU.HTML

Statische HTML-versie van hwts.eu — zelfde inhoud en huisstijl, zonder WordPress.

## Pagina’s

- `index.html` — home (full-screen hero, icon-diensten, kernwaarden, opdrachtgevers)
- `diensten.html` — gele CTA, tabbladen (laswerk / support) + projectgalerij
- `contact.html` — hero “Neem Contact Op” + kantoorgegevens met iconen

Footer: 3 kolommen — merk + tagline, contact, navigatie (+ “Wij zoeken vakmensen” + gele link) en copyright.

## Lokaal openen

Dubbelklik `index.html`, of vanuit deze map:

```bash
npx --yes serve .
```

Daarna: http://localhost:3000

## Deploy (Coolify)

Gebruik **Dockerfile** als build pack (niet Nixpacks/static `dist`):

- Branch: `main`
- Base Directory: `/`
- Port: `80`
- Is it a static site?: **Nee** (Dockerfile handelt nginx af)

Nixpacks faalt hier omdat Coolify `/app/dist` verwacht, terwijl dit project geen build-output heeft.

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
