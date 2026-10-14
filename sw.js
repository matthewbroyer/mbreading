/* mbreading.online service worker.
   Bump VERSION every time any file in this folder changes, so old cached copies are dropped. */
const VERSION = 'mbreading-v3.6.0';

/* Everything the app needs to open and read PDFs/EPUBs offline.
   vendor/pdfjs/cmaps/ (CJK character maps, ~170 small files) is not listed: each is cached the first time a PDF needs it. */
/* Named APP_SHELL (not SHELL) on purpose: the release kit rewrites a plain SHELL list from index.html's own
   references, which would drop the PDF worker and fonts that the app loads on demand. */
const APP_SHELL = [
  './', 'index.html', 'manifest.json', 'mb-title.js', 'mb-install.js', 'mb-share.js',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
  'favicon.svg', 'favicon.ico',
  'vendor/pdfjs/pdf.min.js', 'vendor/pdfjs/pdf.worker.min.js',
  'vendor/page-flip/page-flip.browser.js',
  'vendor/pdfjs/standard_fonts/FoxitDingbats.pfb',
  'vendor/pdfjs/standard_fonts/FoxitFixed.pfb',
  'vendor/pdfjs/standard_fonts/FoxitFixedBold.pfb',
  'vendor/pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb',
  'vendor/pdfjs/standard_fonts/FoxitFixedItalic.pfb',
  'vendor/pdfjs/standard_fonts/FoxitSerif.pfb',
  'vendor/pdfjs/standard_fonts/FoxitSerifBold.pfb',
  'vendor/pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb',
  'vendor/pdfjs/standard_fonts/FoxitSerifItalic.pfb',
  'vendor/pdfjs/standard_fonts/FoxitSymbol.pfb',
  'vendor/pdfjs/standard_fonts/LICENSE_FOXIT',
  'vendor/pdfjs/standard_fonts/LICENSE_LIBERATION',
  'vendor/pdfjs/standard_fonts/LiberationSans-Bold.ttf',
  'vendor/pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf',
  'vendor/pdfjs/standard_fonts/LiberationSans-Italic.ttf',
  'vendor/pdfjs/standard_fonts/LiberationSans-Regular.ttf',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(APP_SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('mbreading-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Only the app's own GET requests are handled. Open Library search and covers, other origins and every
   non-GET request go straight to the network untouched. The reader's books, notes and files live in the
   browser's own storage (localStorage / IndexedDB), never in this cache. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* vendor/ files are pinned versions that never change in place: cache first. */
  if (url.pathname.includes('/vendor/')) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }))
    );
    return;
  }

  /* Everything else: network first, so updates arrive on the next visit; the cache is the offline fallback. */
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : Response.error())))
  );
});
