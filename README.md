# Katie House — Personal Website

Personal portfolio site for Katie House. Hosted on GitHub Pages.

## Stack

Pure HTML + CSS — no JavaScript, no build tools, no external dependencies.

## Structure

```
index.html          — main portfolio page (hero, stats, work history, footer)
patents.html        — patents listing
projects.html       — projects listing
publications.html   — publications listing
assets/
  css/style.css     — all styles, CSS custom properties
  img/              — images including headshot
src/
  img/              — source assets (resume PDF, original photos)
```

## Design

Jewel-toned dark theme built on CSS custom properties:

| Token | Value | Use |
|---|---|---|
| Background | `#0F0D14` | Page background |
| Surface | `#1A1726` | Cards, panels |
| Accent (amethyst) | `#8B5CF6` | Primary highlights |
| Accent 2 (emerald) | `#10B981` | Secondary highlights |
| Text | `#F5F0FF` | Body copy |
| Muted | `#9B8EBB` | Secondary text |
| Border | `#2D2540` | Dividers |

System font stack only — no external font requests.

## Deployment

Served from the `main` branch root via GitHub Pages.
