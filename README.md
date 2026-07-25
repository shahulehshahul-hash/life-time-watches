# Life Time Watches — Al-Nahran Trading Co.

Plain HTML/CSS/JS website. No build step — just edit the files directly on GitHub and Pages will update automatically.

## Files
- `index.html` — all page content and section structure
- `css/style.css` — design system (colors, fonts, layout, animations)
- `js/main.js` — bilingual EN/AR text, locations data, WhatsApp links, nav/menu behavior, form handling
- `assets/logo.svg` — placeholder logo recreation

## Things you still need to fill in (search for these in the files)

1. **WhatsApp number** — `js/main.js`, line near the top: `WHATSAPP_NUMBER = "966000000000"`. Replace with the real number (country code + number, digits only, no `+` or spaces).
2. **Real logo** — replace `assets/logo.svg` with the actual logo file. If it's a `.png` instead of `.svg`, upload it to `assets/` and update the two `<img src="assets/logo.svg">` references in `index.html` (nav + footer) and the `<link rel="icon">` in the `<head>`.
3. **Branch addresses & phone numbers** — `js/main.js`, inside `renderCities()`, the `addressPh` / `phonePh` placeholders under `locations` in the `DICT` object (both `en` and `ar`). Replace `"[Address to be added]"` and `"[Phone to be added]"` with real details per branch.
4. **Contact info** — `index.html`, the Contact section (`id="contact"`) and Footer have placeholder phone/email — same placeholders also live in `js/main.js` under `contact.phonePlaceholder` / `contact.emailPlaceholder`.
5. **Wholesale form submissions** — right now the form just shows a "thank you" message and doesn't send anywhere (see `setupWholesaleForm()` in `js/main.js`). To actually receive submissions, connect it to a form service like Formspree, or a Google Sheet via Apps Script — ask me when you're ready and I'll wire it up.
6. **Social links** — footer social icons (Instagram/X/Snapchat) currently link to `#`. Add real URLs once accounts exist.

## Editing text
All visible text lives in the `DICT` object near the top of `js/main.js` — one `en` block, one `ar` block, same structure. Change the English or Arabic version there and it updates everywhere the corresponding `data-i18n="..."` key is used in `index.html`.

## Local preview
No install needed — just open `index.html` in a browser. For the language switcher/animations to behave exactly like the live site, it's best viewed via GitHub Pages (see below) rather than double-clicking the file, since some browsers restrict local file scripts.

## Publishing
This repo is set up to deploy via **GitHub Pages** from the `main` branch. Any push to `main` updates the live site within a minute or two.
