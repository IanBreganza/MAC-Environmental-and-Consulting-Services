# MC Environmental and Consulting Services — Website

Static GitHub Pages site for **MC Environmental and Consulting Services**.  
No build step. No npm. Open `index.html` in a browser and it works.

---

## File structure

```
/
├── index.html      ← page skeleton; no hardcoded content strings
├── content.js      ← ALL text, image paths, and data arrays live here
├── style.css       ← all styles, colours, layout
├── script.js       ← behaviour: nav toggle, lightbox, scroll-reveal, form
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── portfolio-1.jpg … portfolio-6.jpg
    └── (replace the .gitkeep with your real images)
```

---

## Editing content

**Every word the public sees is defined in `content.js`.**  
Open `content.js` in any text editor and find the matching key.

| What to change | Key in `content.js` |
|---|---|
| Company name | `nav.companyName`, `footer.companyName` |
| Hero headline / subheadline | `hero.headline`, `hero.subheadline` |
| Hero image | `hero.imagePath` |
| CTA button labels | `hero.ctaPrimary.label`, `hero.ctaSecondary.label` |
| Service cards | `services` array — each item has `icon`, `title`, `description` |
| About text paragraphs | `about.body` array of strings |
| About image | `about.imagePath` |
| Pull-quote | `about.pullQuote` |
| Stats (years / projects / species) | `about.stats` array |
| Portfolio cards | `portfolio` array — `imagePath`, `title`, `speciesLabel`, `description` |
| Testimonials | `testimonials` array |
| Address / phone / email | `contact.address`, `contact.phone`, `contact.email` |
| Footer tagline | `footer.tagline` |
| Copyright line | `footer.copyright` |

### Changing service icons

Each service card has an `icon` field. Available values:

`tree` · `leaf` · `microscope` · `clipboard` · `globe` · `map` · `users`

---

## Replacing images

Drop your images into the `images/` folder, then update the matching
`imagePath` values in `content.js`. Recommended sizes:

| Image | Recommended dimensions |
|---|---|
| `hero.jpg` | 1600 × 1200 px (landscape) |
| `about.jpg` | 900 × 1100 px (portrait) |
| `portfolio-1.jpg` … `portfolio-6.jpg` | 900 × 700 px minimum |

Images are loaded at runtime. If a file is missing the card shows a
green placeholder gradient — nothing breaks.

---

## Deploying to GitHub Pages

### First-time setup

1. Create a new repository on GitHub (public, no README).
2. In your project folder run:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source → Deploy from a branch**  
   Branch: `main` · Folder: `/ (root)` → **Save**.

4. After ~60 seconds your site will be live at  
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Subsequent updates

```bash
git add .
git commit -m "describe your change"
git push
```

GitHub Pages redeploys automatically within ~60 seconds.

### Custom domain (optional)

1. Add a file called `CNAME` to the repo root containing just your domain, e.g.:  
   `mcenvironmental.ph`
2. Point your domain's DNS to GitHub Pages (see GitHub docs for current IP addresses).
3. Enable **Enforce HTTPS** in Settings → Pages once DNS propagates.

---

## Working locally

Open `index.html` directly in Chrome, Firefox, or Edge — no server needed.  
The site uses only native browser APIs (Intersection Observer, CSS custom
properties, ES6) supported in all evergreen browsers.

---

## Design tokens (quick reference)

| Variable | Hex | Use |
|---|---|---|
| `--forest-deep` | `#2C3A1E` | Nav, hero bg, footer |
| `--canopy` | `#4A7C3F` | Accents, icons, links |
| `--cobalt` | `#1A6B9A` | Available for future use |
| `--paper` | `#F7F5EF` | Page background |
| `--terracotta` | `#A63C2A` | Primary CTA button |
| `--text` | `#1C1C1C` | Body text |
| `--kraft` | `#D4C5A9` | Herbarium specimen tags |

All defined in `:root` inside `style.css`.
