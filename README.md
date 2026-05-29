# Portfolio

Personal engineering portfolio. Static site built with [Astro](https://astro.build),
deployed to GitHub Pages.

## ⚠️ Anonymization rule (read before publishing)

Every project here describes real work, but **all confidential details are
stripped**: no customer names, no coworker/people names, no real product names,
no serial numbers, no internal hostnames or IPs, nothing under NDA. Customers
are described by generic industry role (e.g. "precision camera-module
manufacturing") per the agreed *generic role-based* anonymization style.

Before anything is pushed public, the project copy must be reviewed and
approved. Treat every `.md` in `src/content/projects/` as a draft until then.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the built site locally
```

## Add or edit a project

Each project is one Markdown file in `src/content/projects/`. Frontmatter fields
are defined and validated in `src/content.config.ts`:

```yaml
title: ...
role: ...
domain: ...        # generic industry descriptor, optional
summary: ...       # one line, shown on the home grid
stack: [..., ...]
highlights: [..., ...]
year: ...
order: 1           # lower = earlier on the page
featured: true
link: https://...  # optional, omit if private
```

The Markdown body becomes the case-study detail page at `/projects/<filename>`.

## Deploy (GitHub Pages)

1. Set `site` in `astro.config.mjs` to your published URL. If using a project
   page (`<user>.github.io/portfolio`), also uncomment and set `base`.
2. Push to a GitHub repo's `main` branch.
3. Repo **Settings → Pages → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on push.

## Structure

```
src/
  content/projects/   project case studies (one .md each) — ANONYMIZED
  content.config.ts   schema + validation for project frontmatter
  layouts/Base.astro  page shell (header, footer, <head>)
  components/         ProjectCard
  pages/
    index.astro       home: hero + work grid + about
    projects/[...slug].astro   per-project detail page
  styles/global.css   the whole design system (dark theme, no CSS framework)
public/               static assets (favicon)
```
