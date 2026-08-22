# EYELAMP — Optical Showroom Website

A complete, responsive React + Vite website for **EYELAMP**, an optical showroom in Bahraich, Uttar Pradesh.

## 1. Project setup

```bash
# unzip the project, then inside the folder:
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production files are output to `dist/`.

## 4. Project structure

```
src/
├── Layout/
│   ├── Layout.jsx      # SEO (Helmet), header, footer, floating WhatsApp
│   ├── Header.jsx       # Sticky responsive navbar
│   └── Footer.jsx       # Footer with links, services, contact, socials
├── components/
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── ServicesGrid.jsx
│   ├── WhyChooseUs.jsx
│   ├── EyewearCollection.jsx
│   ├── EyeTestCTA.jsx
│   ├── ContactSection.jsx
│   ├── SocialIcons.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── EyeChartMotif.jsx      # signature Snellen-chart SVG texture
│   └── FrameIllustration.jsx  # original spectacle/sunglasses line art
├── data/
│   └── services.js      # single source of truth for the 8 services
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Eyewear.jsx
│   └── Contact.jsx
├── App.jsx               # routes
├── main.jsx               # app entry, providers
└── index.css              # design tokens, components, responsive rules
```

## 5. Design system

- **Colors:** deep charcoal `#15181C`, warm off-white `#F6F4EF`, brass/frame-gold accent `#B98A4E`.
- **Type:** Fraunces (display headings), Inter (body/UI), Space Mono (small optometry-style labels — the "Rx card" in the hero, eyebrows, stat labels).
- **Signature motif:** a Snellen eye-chart pattern (`EyeChartMotif.jsx`) used as a subtle background texture on dark sections, and original hand-drawn spectacle/sunglasses line art (`FrameIllustration.jsx`) in place of stock photography — so there's nothing to license or replace if you're happy with the illustrated look.

## 6. Images already included

Real photography and the logo are already wired in under `src/assets/`:

- `eyelamp-logo.png` — used in the navbar, footer and as the browser favicon (`public/favicon.png`).
- `eye-camp-consultation-1.jpg`, `eye-camp-consultation-2.jpg`, `eye-camp-pharmacy-visit.jpg`, `eye-camp-outdoor-checkup.jpg` — real eye-camp/consultation photos. They power:
  - The hero background on the homepage (`Hero.jsx`)
  - The dark photo header on every inner page (`PageHeader.jsx`)
  - The "On The Ground" gallery shown on the Home and About pages (`EyeCampGallery.jsx`)
- `founder-photo-placeholder.jpg` — a neutral silhouette placeholder for Achintya Pandey's photo, shown in a circular frame in the About section (`AboutSection.jsx`).

**To add the real founder photo:** replace `src/assets/founder-photo-placeholder.jpg` with your photo (keep the same filename, ideally a square-ish crop) — it will automatically appear cropped to a circle in the About section, no code changes needed.

**To swap or add more eye-camp photos:** drop new images into `src/assets/`, then update the relevant `import ... from "../assets/..."` line in `Hero.jsx`, `PageHeader.jsx` usages in `pages/*.jsx`, or `EyeCampGallery.jsx`.

Keep images under ~300KB where possible (the ones included have already been resized/compressed for web) and always keep descriptive `alt` text for accessibility and SEO.

## 7. WhatsApp integration

All WhatsApp buttons link to `https://wa.me/918081971058` with a pre-filled, URL-encoded message relevant to that button's context (booking an eye test, general enquiry, a specific service, etc.). Update the phone number in one place if it ever changes:

- `src/Layout/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/ServicesGrid.jsx`
- `src/components/EyewearCollection.jsx`
- `src/components/EyeTestCTA.jsx`
- `src/components/ContactSection.jsx`
- `src/components/FloatingWhatsApp.jsx`
- `src/components/SocialIcons.jsx`

## 8. Contact form behaviour

The enquiry form on the Contact page is **frontend-only** — it does not store or send data to any server. On submit, it opens WhatsApp in a new tab with the visitor's name, phone, service of interest and message pre-filled, so the enquiry reaches EYELAMP directly. If you later add a backend or a form service (e.g. Formspree, EmailJS, or your own API), update the `handleSubmit` function in `src/components/ContactSection.jsx`.

## 9. Deployment

Any static host works since this is a Vite SPA. Two common options:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag-and-drop the generated dist/ folder into Netlify,
# or connect the repo with build command `npm run build` and publish directory `dist`
```

Because this is a client-side-routed app (React Router), configure your host to redirect all paths to `index.html`:
- **Netlify:** add a `_redirects` file in `public/` with `/* /index.html 200`
- **Vercel:** works out of the box for Vite + React Router SPAs

Point your domain (`eyelamp.in`) at the host once deployed, and update `index.html`'s `og:url` if the domain changes.
