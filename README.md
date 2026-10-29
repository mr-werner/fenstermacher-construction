# Fenstermacher Construction — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.masonsource.com/ (Fenstermacher Construction Service, Inc., Kutztown, PA; Greater Lehigh Valley Chamber member under Construction Management & General Contractors).
Preview: https://fc.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `fenstermacher-construction` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `fc.blueprintwebstudio.com` is a CNAME at Porkbun.
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-03), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the bid request form (`api/contact.js`; demo mode without them). Add `fc.blueprintwebstudio.com` to `allowedOrigins` in blueprint-digital `api/demo-interest.js`.

## Sources
- masonsource.com: home (logo card, client quote), projects (client list, jobs completed 2010/2011, jobs pending 2011/2012), contact page (phone, email), slideshow (252 project photos), map graphic (regions).
- Greater Lehigh Valley Chamber directory listing: P.O. Box 178, Kutztown, PA 19530; 610-683-5228, fax 610-683-5244; "full-service contracting and restoration company, specializing in masonry, concrete and other forms of facility renovation"; regions Wilkes-Barre/Scranton, Lehigh Valley, Harrisburg, York and Philadelphia; member since 2012.

## Design
- Logo: their original circular "Fenstermacher Construction Services, Inc." brick-F logo, cropped from the logo card and upscaled 3x, set on a white round plate in the light header and the dark footer. Favicon is the brick F from the same logo.
- Palette from the original: the logo's brick red (#9c2a22, deep #6e1b17) and the black header bar, with mortar gray and limestone off-white for reading sections.
- Fonts: Archivo (heavy, slightly wide uppercase hero, echoing the bold wide caps of their header wordmark), IBM Plex Mono (spec-sheet labels, like a bid document), Public Sans (body).
- Motif: masonry throughout. The hero photo meets the copy with a toothed edge like an unfinished wall; brick-course strips divide sections; faint running-bond mortar joints behind the hero and quote; the four stacked bricks of their "F" are the section mark; the gallery is laid out as stretchers and headers.
- "Trusted by" wall: the long client list is laid in true running bond (offset courses with half bricks), with tabs for owners/facilities (38) and general contractors (35). Headline names are red bricks.
- Section order: hero (headline, bid CTA, phone, counts) → services (brick, block/CMU, stone, restoration, concrete) → trusted-by wall → client quote → project photos → how bidding works → region served (schematic map) → bid request form with phone/fax/email/mailing address → footer.
- Photos: 19 of their own slideshow photos (no stock).

## What changed from the current site
- The site is a 600px table layout with GIF rollover buttons and a "Copyright © 2000-2002" Active Data Exchange footer; now responsive and current.
- "Our Company" page is empty; the concept explains what they do in the first screen (masonry, concrete, facility renovation).
- Contact page says "Down for maintenance!" and shows raw PHP (`".$_SESSION['error']."`); replaced with a working bid request form plus tap-to-call, fax and email.
- The client list is a spreadsheet pasted into the page under stale headings ("Jobs Completed 2011 / Jobs Pending 2012"); now a branded trusted-by wall without dates.
- 252 project photos were hidden in a one-at-a-time slideshow; the best 19 are now in the hero, services and gallery.
- The service region was only an image map; now listed in text and a schematic map.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm
- Legal name: the chamber lists "Fenstermacher Construction Service, Inc." while the logo reads "Services, Inc." (the concept uses "Service" in text and keeps the logo as is).
- Address: the concept shows only the P.O. Box 178, Kutztown, PA 19530 (from the logo card and chamber). A business directory (naicslist.com) lists 411 W Main St, Kutztown; confirm whether to show a street address.
- Service list and wording: brick, block/CMU (incl. elevator shafts), stone and veneer, restoration/renovation and concrete are inferred from the chamber description, the job list and the photos.
- That the slideshow photos are their own work, and captions: "St. Luke's" on the hero and "Rydal Park" in the gallery are read from signage in the photos; other captions describe the material only.
- The client wall: names come from the 2010–2012 job lists; confirm they may be shown and add any current clients. Spellings were tidied (e.g. "Whiting & Turner Constr." → Whiting-Turner, "Brechbil & Helman" → Brechbill & Helman, abbreviations expanded).
- The client quote is shown as "From our clients" as on the current homepage; a named attribution would be stronger if they have one.
- The "jobs reaching into Delaware and New Jersey" line is based on the "1 Virginia Ave, DE" and Warren County Community College jobs.
- Whether info@masonsource.com and the fax line are still monitored, and who should receive bid-form emails.
- Higher-resolution logo file, if one exists (the current one is 152px wide).
- Photos to replace or refresh before launch: all are from the existing slideshow (some date to 2006); newer project photos would help.
- No reviews are shown (none on the current site); no awards were found.
