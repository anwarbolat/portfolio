# Anwar Bolat — Portfolio

A responsive, eight-page recreation of [bolatov.com](https://www.bolatov.com/), built with HTML, CSS and vanilla JavaScript. No framework, package installation, paid service or build step is required.

Live site: https://anwarbolat.github.io/portfolio/

## Pages

- `/` — Work
- `/about/` — About, qualifications and recommendations
- `/sage/` — Sage services
- `/fraud-detection/` — Fraud Detection
- `/checkout/` — Checkout
- `/mystock/` — MyStock
- `/my-account/` — My Account
- `/ai-chatbot/` — AI Chatbot

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop the server with `Ctrl+C`.

## Edit

Edit each page's `index.html` directly. Shared styles are in `assets/site.css`, and the copyright year and animated sphere are in `assets/site.js`. Images and the Inter typeface are hosted locally. Navigation and all project content work with JavaScript disabled. The animation respects reduced-motion preferences and pauses when offscreen.

Images use WebP with smaller variants for narrow screens, lazy loading and explicit dimensions. Keep the existing relative URL pattern when adding links so the site works under GitHub's `/portfolio/` path and on a custom domain.

Validate links, images, anchors and page metadata with:

```sh
python3 scripts/check.py
node --check assets/site.js
```

## Publish on GitHub Pages

This repository is configured to publish from **main → / (root)** in **Settings → Pages**. Commit and push updates to `main`; GitHub Pages publishes the static files. `.nojekyll` disables Jekyll processing.

```sh
git add .
git commit -m "Update portfolio"
git push origin main
```

## Move bolatov.com later

The GitHub Pages version is published separately from the Webflow site. To move the existing domain, add `www.bolatov.com` under the repository's **Settings → Pages → Custom domain**, then update the domain's DNS records to GitHub Pages using [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Enable HTTPS once GitHub verifies the domain.

After the domain is connected, update the canonical links and the absolute Open Graph/Twitter image and page URLs in all eight HTML files from `https://anwarbolat.github.io/portfolio/` to `https://www.bolatov.com/`. Directory routes preserve the existing page names. Keep Webflow active until the new domain and HTTPS work correctly.

## Credits

Portfolio writing, project artwork and branding belong to Anwar Bolat and their respective owners. Content was migrated from the existing portfolio. The locally hosted Inter font uses the SIL Open Font License; see `assets/fonts/OFL.txt`.
