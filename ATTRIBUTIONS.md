# mbreading.online – third-party credits and licenses

mbreading.online is an independent project. It is not affiliated with or endorsed by any company or project listed here.

## Code served with the app (`vendor/` folder)

Since 3.3.0 these libraries are copied into the `vendor/` folder and served from the same site as the app. Nothing is loaded from a third-party server.

| Component | Version | Author | License | Location | License file |
|---|---|---|---|---|---|
| PDF.js (`pdf.min.js`, `pdf.worker.min.js`, `cmaps/`, `standard_fonts/`) | 3.11.174 | Mozilla Foundation and contributors | Apache License 2.0 | `vendor/pdfjs/` | `vendor/pdfjs/LICENSE.txt` |
| StPageFlip (`page-flip.browser.js`) | 2.0.7 | Nodlik | MIT License | `vendor/page-flip/` | `vendor/page-flip/LICENSE.txt` |
| Tesseract.js (`tesseract.min.js`, `worker.min.js`) | 6.0.1 | Project Naptha / Jerome Wu, Balearica and contributors | Apache License 2.0 | `vendor/tesseract/` | `vendor/tesseract/LICENSE-tesseract.js.md` |
| tesseract.js-core (`tesseract-core-lstm.wasm.js`, `tesseract-core-simd-lstm.wasm.js`): the Tesseract OCR engine (originally Hewlett-Packard, later Google) compiled to WebAssembly | 6.1.2 | Project Naptha and contributors; Tesseract OCR authors | Apache License 2.0 | `vendor/tesseract/` | `vendor/tesseract/LICENSE-tesseract-core.txt` |
| English trained data (`eng.traineddata.gz`, `4.0.0_best_int`) | `@tesseract.js-data/eng` 1.0.0 | Tesseract OCR project (tessdata), packaged by the Tesseract.js authors | Apache License 2.0 (tessdata); the npm package is MIT | `vendor/tesseract/` | covered by the files above |

PDF.js and StPageFlip are the unmodified builds from the npm packages `pdfjs-dist@3.11.174` and `page-flip@2.0.7`. The Tesseract files come from the npm packages `tesseract.js@6.0.1`, `tesseract.js-core@6.1.2` and `@tesseract.js-data/eng@1.0.0`; the only change is that the trailing `sourceMappingURL` comment was removed from the two Tesseract.js files (the `.map` files aren't shipped). The Tesseract.js builds bundle small libraries under their own licenses, listed in `vendor/tesseract/THIRD-PARTY-NOTICES.txt`: regenerator-runtime (MIT), buffer (MIT) and ieee754 (BSD-3-Clause) by Feross Aboukhadijeh, and zlib.js by imaya (MIT).

The Tesseract files load only when someone uses text recognition on a scanned PDF (added in 3.4.0). They are not part of the service worker's install list; the service worker caches them the first time they're used.

PDF.js's `standard_fonts/` folder contains fonts (Foxit and Liberation) under their own licenses; their license files (`LICENSE_FOXIT`, `LICENSE_LIBERATION`) sit in that folder and must stay with it. The `cmaps/` folder has its own `LICENSE` (Adobe CMap resources). Keep these files if you redistribute the folder.

## Fonts embedded in `index.html`

Latin subsets taken from Fontsource packages (`@fontsource-variable/literata` 5.3.0, `@fontsource/atkinson-hyperlegible` 5.3.0).

| Font | Copyright | License |
|---|---|---|
| Literata (variable, normal and italic) | Copyright 2017 The Literata Project Authors (https://github.com/googlefonts/literata) | SIL Open Font License 1.1 |
| Atkinson Hyperlegible (400, 700) | Copyright 2020 Braille Institute of America, Inc. | SIL Open Font License 1.1 |

Correction from the previous version of this file: it also listed IBM Plex Sans, but the page never embedded it (only the four Literata and Atkinson faces above are in the file), so it has been removed.

The OFL lets you use, embed and redistribute these fonts, including commercially. It has two conditions: the copyright notice and license must go with the fonts, and the fonts can't be sold by themselves. Full license text: https://openfontlicense.org/open-font-license-official-text/. If you publish the source, include that text next to this file (for example as `OFL.txt`).

## Services

| Service | Used for | When |
|---|---|---|
| Open Library (openlibrary.org, a project of the Internet Archive) | Book search: title, author, page count, year, cover | Only when the reader uses "Find a book"; only the typed words are sent |
| Open Library Covers (covers.openlibrary.org) | Cover images for books picked from search | When those covers are displayed |
| Browser / operating-system speech voices | Read aloud | Only when the reader plays read-aloud; "Online" voices send the text to their provider |

## Content

- **Sample book "Reading Out Loud"** (embedded PDF, 7 pages): written for this app and generated with the ReportLab library on September 25, 2026. It replaces the September 24 mbpdf sample. Its text describes only this app. It embeds subsets of DejaVu Serif, DejaVu Serif Bold and DejaVu Sans (Bitstream Vera license plus public-domain DejaVu changes, which allow embedding) and references Helvetica as a standard PDF font without embedding it.
- **Interface icons, logo and favicon:** simple line drawings defined inline in the HTML. They don't come from an icon library. The installable-app icons (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon.ico`) are generated from `favicon.svg`.

## Trademarks

PDF is an ISO standard (ISO 32000). EPUB is a W3C standard. Google, Hewlett-Packard, Microsoft, Mozilla, IBM and the Internet Archive are named only to describe where voices, libraries or services come from.
