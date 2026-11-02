#!/usr/bin/env python3
"""Validate the eight static pages without installing dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re

ROOT = Path(__file__).resolve().parent.parent
PAGES = [ROOT / 'index.html', *sorted(ROOT.glob('*/index.html'))]
EXPECTED = {'index', 'about', 'sage', 'fraud-detection', 'checkout', 'mystock', 'my-account', 'ai-chatbot'}
errors = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.links = []
        self.headings = 0
        self.main = 0
        self.title = False
        self.description = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.headings += tag == 'h1'
        self.main += tag == 'main'
        self.title |= tag == 'title'
        self.description |= tag == 'meta' and attrs.get('name') == 'description'
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append(f'{self.path.relative_to(ROOT)}: duplicate ID {attrs["id"]}')
            self.ids.add(attrs['id'])
        if tag == 'img' and 'alt' not in attrs:
            errors.append(f'{self.path.relative_to(ROOT)}: image missing alt attribute')
        for key in ('src', 'href'):
            if attrs.get(key):
                self.links.append(attrs[key])
        for candidate in attrs.get('srcset', '').split(','):
            if candidate.strip():
                self.links.append(candidate.strip().split()[0])

parsed = {path.resolve(): Page(path) for path in PAGES}
actual = {p.parent.name if p.name == 'index.html' and p.parent != ROOT else 'index' for p in PAGES}
assert actual == EXPECTED, f'Expected eight pages, found {actual}'

for path, page in parsed.items():
    label = path.relative_to(ROOT)
    if page.headings != 1 or page.main != 1 or not page.title or not page.description:
        errors.append(f'{label}: expected one h1/main, title and description')
    source = path.read_text()
    for data in re.findall(r'<script\s+type="application/ld\+json"[^>]*>(.*?)</script>', source, re.S):
        try:
            json.loads(data)
        except json.JSONDecodeError as error:
            errors.append(f'{label}: invalid JSON-LD: {error}')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        if target.is_dir():
            target /= 'index.html'
        if not target.is_file():
            errors.append(f'{label}: missing local target {link}')
        elif url.fragment and target in parsed and unquote(url.fragment) not in parsed[target].ids:
            errors.append(f'{label}: missing anchor {link}')

css = ROOT / 'assets/site.css'
for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
    if not (css.parent / url).is_file():
        errors.append(f'Missing CSS asset: {url}')

if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(PAGES)} pages; local links, anchors, images, metadata and CSS assets are valid.')
