# Anwar Bolat — Portfolio

A responsive, eight-page recreation of [bolatov.com](https://www.bolatov.com/), built with HTML, CSS and vanilla JavaScript. No framework, package installation, paid service or build step is required.

Live site: https://www.bolatov.com/

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

Edit each page's `index.html` directly. Shared styles are in `assets/site.css`. `assets/site.js` updates the copyright year, creates the original 3D sphere, and controls the homepage cursor trail. The homepage also includes the ProfilePage JSON-LD schema and rotating hero headings. The footer dims the other social links to 50% on hover or keyboard focus, with a 0.25-second ease-out transition.

Images and the Inter typeface are hosted locally. Navigation and all project content work with JavaScript disabled. Hero animations pause when offscreen or the tab is hidden. Reduced-motion preferences show a static heading and credentials, freeze the sphere, and disable the cursor trail. Touch devices use the visible project labels instead of the cursor effect.

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

## Custom domain

`www.bolatov.com` is configured in GitHub Pages and the root `CNAME` file. Keep that file when publishing. Canonical, Open Graph, Twitter and structured-data URLs use `https://www.bolatov.com/`.

DNS and TLS certificates are managed outside the source files. Enable **Enforce HTTPS** in the repository's **Settings → Pages** once GitHub finishes provisioning its certificate. See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Directory routes preserve the existing page names.

## Credits

Portfolio writing, project artwork and branding belong to Anwar Bolat and their respective owners. Content was migrated from the existing portfolio. The locally hosted Inter font uses the SIL Open Font License; see `assets/fonts/OFL.txt`.
