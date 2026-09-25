# mbreading.online – third-party credits and licenses

mbreading.online is an independent project. It is not affiliated with or endorsed by any company or project listed here.

## Code loaded at runtime (not bundled in the file)

| Component | Version | Author | License | Loaded from |
|---|---|---|---|---|
| PDF.js (`pdf.min.js`, `pdf.worker.min.js`, `cmaps/`, `standard_fonts/`) | 3.11.174 | Mozilla Foundation and contributors | Apache License 2.0 | cdnjs.cloudflare.com |
| StPageFlip (`page-flip`) | 2.0.7 | Nodlik | MIT License | cdn.jsdelivr.net |

PDF.js's `standard_fonts/` folder contains fonts (for example Foxit and Liberation fonts) under their own licenses. mbreading.online does not redistribute them. PDF.js downloads them from cdnjs when a PDF needs them.

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
- **Interface icons, logo and favicon:** simple line drawings defined inline in the HTML. They don't come from an icon library.

## Trademarks

PDF is an ISO standard (ISO 32000). EPUB is a W3C standard. Google, Microsoft, Mozilla, IBM and the Internet Archive are named only to describe where voices, libraries or services come from.
