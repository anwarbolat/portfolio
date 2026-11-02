# Anwar Bolat — Portfolio

A responsive portfolio website built with HTML, CSS and JavaScript.

https://www.bolatov.com/

## Files

- `index.html` — Homepage
- `about/index.html` — About
- `sage/`, `fraud-detection/`, `checkout/`, `mystock/`, `my-account/`, `ai-chatbot/` — Project pages
- `assets/site.css` — Shared styles
- `assets/site.js` — Animations, cursor effects and automatic year
- `assets/images/` — Images and icons
- `assets/fonts/` — Inter typeface and license
- `CNAME` — Custom domain

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop with `Ctrl+C`.

## Checks

```sh
python3 scripts/check.py
node --check assets/site.js
```

## Publishing

Push changes to `main` to deploy through GitHub Pages. Keep the `CNAME` file for `www.bolatov.com`.

## Font license

Inter is licensed under the SIL Open Font License. See `assets/fonts/OFL.txt`.
