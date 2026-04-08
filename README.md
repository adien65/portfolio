# Portfolio — Matteo Gras

> Portfolio personnel développé dans le cadre du BTS SIO SLAM, session 2026.

## Stack technique

- **HTML5** sémantique
- **CSS3** vanilla — design system complet, zéro framework CSS
- **JavaScript** vanilla — animations, scroll reveal, typewriter, nav

## Structure du projet

```
portefolio/
├── index.html              ← Page principale (one-page)
├── css/
│   └── style.css           ← Design system + tous les composants
├── js/
│   └── main.js             ← Interactions & animations
└── assets/
    ├── images/             ← Avatar + visuels projets/stages
    ├── cv/                 ← CV-Matteo-Gras.pdf (à ajouter)
    └── docs/               ← PDFs : docs projets, rapports de stage, veille
```

## Fichiers à compléter avant déploiement

| Fichier | Action |
|---------|--------|
| `assets/cv/CV-Matteo-Gras.pdf` | Déposer ton CV |
| `assets/docs/doc-projet1.pdf` | Documentation projet dynamique |
| `assets/docs/doc-projet2.pdf` | Documentation site vitrine |
| `assets/docs/doc-projet3.pdf` | Documentation LAMP + GLPI |
| `assets/docs/rapport-stage1.pdf` | Rapport de stage 1 |
| `assets/docs/rapport-stage2.pdf` | Rapport de stage 2 |
| `assets/docs/veille-technologique.pdf` | Document de veille |

## Personnalisation restante dans `index.html`

- Sections **Stages** : remplir entreprise, ville, période, mission, compétences, lien entreprise
- Section **Veille** : remplir les titres, résumés et liens des 3 articles
- Boutons **"Voir le site"** projets 1 et 2 : mettre l'URL réelle

## Déploiement

### GitHub Pages
```bash
git init
git add .
git commit -m "feat: portfolio initial"
git branch -M main
git remote add origin https://github.com/adien65/<nom-du-repo>.git
git push -u origin main
```
Puis dans **Settings → Pages** → Source : `main` / `root`.

### Netlify (drag & drop)
Glisser-déposer le dossier `portefolio/` sur [app.netlify.com/drop](https://app.netlify.com/drop).

## Liens

- **GitHub** : [github.com/adien65](https://github.com/adien65)
- **LinkedIn** : [linkedin.com/in/matteo-gras](https://www.linkedin.com/in/matteo-gras/)
- **Email** : mttgras@gmail.com
