# HWTS.EU.HTML

Statische HTML-versie van hwts.eu — zelfde inhoud en huisstijl, zonder WordPress.

## Pagina’s

- `index.html` — home (full-screen hero, icon-diensten, kernwaarden, opdrachtgevers)
- `diensten.html` — gele CTA, tabbladen (laswerk / support) + projectgalerij
- `contact.html` — hero “Neem Contact Op” + kantoorgegevens met iconen (geen openingstijden)

Footer: 3 kolommen — merk + tagline, contact (telefoon/e-mail/adres), navigatie (+ “Wij zoeken vakmensen” + gele link) en copyright. Opdrachtgeverslogo’s op home in kleur.

## Lokaal openen

Dubbelklik `index.html`, of vanuit deze map:

```bash
npx --yes serve .
```

Daarna: http://localhost:3000

## Deploy (Coolify)

In je logs staat nog `Found application type: staticfile` + `COPY /app/dist` — dan staat **Is it a static site?** nog aan en wordt de project-`Dockerfile` genegeerd.

**Snelste fix (blijf op static/Nixpacks):** Publish directory = `dist`. De repo heeft nu `package.json` + `nixpacks.toml` die `dist/` vult. Redeploy.

**Of Dockerfile:**
1. Build Pack → `Dockerfile`
2. **Is it a static site?** → **Nee / uit** (belangrijk)
3. Port → `80`
4. Opslaan → Redeploy

In geslaagde Dockerfile-logs mag **niet** meer staan: `Generating nixpacks` / `staticfile` / `/app/dist`.

## Structuur

```
HWTS.EU.HTML/
├── index.html
├── diensten.html
├── contact.html
├── css/styles.css
├── js/main.js
├── Dockerfile      # Coolify optie A
├── nixpacks.toml   # Coolify optie B (dist)
└── images/
    ├── gallery/
    └── ...
```

Geen database. Statische HTML; `dist/` alleen voor Coolify/Nixpacks.
