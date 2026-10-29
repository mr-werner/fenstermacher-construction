import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Blocks, Building2, CalendarCheck, ClipboardList, FileText, Hammer, Layers, Mail, MapPin, Menu,
  Phone, Printer, Quote, Ruler, Send, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/fc-logo.png";
import heroImg from "./assets/p196.jpg";
import brickClose from "./assets/p113.jpg";
import imgBrick from "./assets/p152.jpg";
import imgBlock from "./assets/p162.jpg";
import imgStone from "./assets/p136.jpg";
import imgRestore from "./assets/p138.jpg";
import imgConcrete from "./assets/p45.jpg";
import g145 from "./assets/p145.jpg";
import g187 from "./assets/p187.jpg";
import g133 from "./assets/p133.jpg";
import g82 from "./assets/p82.jpg";
import g92 from "./assets/p92.jpg";
import g110 from "./assets/p110.jpg";
import g180 from "./assets/p180.jpg";
import g215 from "./assets/p215.jpg";
import g66 from "./assets/p66.jpg";
import g175 from "./assets/p175.jpg";
import g99 from "./assets/p99.jpg";
import g58 from "./assets/p58.jpg";

// ------------------------------------------------------------ Content
// Sources: masonsource.com (home, projects, contact and slideshow pages, logo card) and the Greater Lehigh Valley
// Chamber of Commerce directory listing (Construction Management & General Contractors).
const COMPANY = "Fenstermacher Construction Service, Inc.";
const ABBR = "fc";
const END_DATE = "2026-12-03T23:59:59-05:00";
const PHONE = "(610) 683-5228";
const PHONE_TEL = "+16106835228";
const FAX = "(610) 683-5244";
const EMAIL = "info@masonsource.com";
const MAIL = ["P.O. Box 178", "Kutztown, PA 19530"];
const CHAMBER_SINCE = 2012;

const NAV = [
  ["Services", "#services"],
  ["Clients", "#clients"],
  ["Projects", "#projects"],
  ["Region", "#region"],
];

const QUOTE = "Fenstermacher has been an invaluable asset, delivering bids on time and completing contract work on or before schedule.";

const SERVICES = [
  { icon: Layers, title: "Brick masonry", img: imgBrick, alt: "Red brick facade with dark glass curtain wall", text: "Face brick and brick veneer on hospitals, campus buildings, offices, churches and apartments, from the base course to the parapet." },
  { icon: Blocks, title: "Block & CMU", img: imgBlock, alt: "Concrete block shaft rising on a construction site", text: "Concrete masonry unit walls, shafts and towers, including elevator-shaft work like the B. Braun job on our list." },
  { icon: Building2, title: "Stone & veneer", img: imgStone, alt: "Two-story building clad in natural stone veneer", text: "Natural and manufactured stone for facades, piers, chimneys, monument signs and interior feature walls." },
  { icon: Hammer, title: "Restoration & renovation", img: imgRestore, alt: "Historic red brick church facade during restoration", text: "Restoration and renovation of existing facilities, from historic brick church fronts to commercial buildings." },
  { icon: Ruler, title: "Concrete", img: imgConcrete, alt: "Pallets of concrete block staged on a job site", text: "Concrete work as part of the masonry package or as its own scope." },
];

// Owners and facilities from the "Jobs Completed / Jobs Pending" columns of the current Projects page (2010–2012).
const OWNERS = [
  "St. Luke's", "Lehigh Valley Health Network", "B. Braun Medical", "Air Products", "Moravian College", "Moravian Academy",
  "Lafayette College", "Warren County Community College", "Blue Mountain Ski Resort", "Pepsi Allentown", "Alcon Precision",
  "Thor Labs", "Daniels BMW", "Mini Cooper", "Robert Chevrolet", "Walmart", "Prologis", "East Penn Manufacturing",
  "Hydac Corporation", "Julabo", "Rydal Park", "Sunopta", "Keystone Water Treatment", "Allentown Cigar Lofts",
  "First Commonwealth FCU", "First Savings Bank of Perkasie", "St. Elizabeth's Parish", "Bethany Wesley Church",
  "Arrowhead Lake Clubhouse", "Penn Foundation", "Mountain Tech Center", "Phillips Feed", "Custom Laminates", "Lamtech",
  "Keystone Pellet", "Crossroads of Nazareth", "Haven House", "Maple Wood Apartments",
];
const OWNER_HIGHLIGHT = new Set(["St. Luke's", "B. Braun Medical", "Air Products", "Moravian College", "Blue Mountain Ski Resort", "Lafayette College", "Lehigh Valley Health Network", "Pepsi Allentown"]);

// "List of Clients" column of the current Projects page.
const CONTRACTORS = [
  "Whiting-Turner", "Warfel Construction", "The McKnight Group", "Holz & Henry, Inc.", "J.G. Petrucci", "Iron Hill Construction",
  "Ondra Huyett Associates", "Miller, Miller & McLachlan", "Perrotto Builders", "Penn Builders", "Weiss Construction",
  "Tippmann Construction", "Wohlson Construction", "Serfass Construction", "Mike Serfass Construction", "Lee Machemer & Sons",
  "Lehigh Valley Building Systems", "Grace Industries", "Emmaus Construction", "Bracy Contracting", "Barclay Contracting",
  "Boyle Associates", "Berks Ridge", "Brechbill & Helman", "Bucks Development", "Builders Incorporated", "CMG of Easton",
  "Country Junction", "Descco", "Jerdon Construction Services", "Michael Dunn Co.", "Quadratus Construction Mgmt",
  "Shaerer Contracting Co.", "Strecansky & Company", "Stuebner Construction",
];
const GC_HIGHLIGHT = new Set(["Whiting-Turner", "Warfel Construction", "The McKnight Group", "Holz & Henry, Inc.", "J.G. Petrucci", "Iron Hill Construction"]);

const GALLERY = [
  { src: g187, cap: "Brick campus building with cast-stone trim", w: 1000, h: 750, wide: true },
  { src: g133, cap: "Natural stone veneer, two stories", w: 900, h: 675 },
  { src: g92, cap: "Stacked-stone interior feature walls", w: 900, h: 600 },
  { src: g145, cap: "Brick facade with limestone details", w: 1000, h: 750 },
  { src: g99, cap: "Stone column through a lit atrium", w: 800, h: 903, tall: true },
  { src: g110, cap: "Brick over a fieldstone base", w: 900, h: 675 },
  { src: g175, cap: "Brick going up on a mid-rise", w: 900, h: 675 },
  { src: g82, cap: "Stone piers and chimney", w: 900, h: 675 },
  { src: g180, cap: "Brick above stone arches", w: 900, h: 675, wide: true },
  { src: g215, cap: "Stone monument sign · Rydal Park", w: 900, h: 675 },
  { src: g66, cap: "Multi-story brick, scaffold up", w: 900, h: 675 },
  { src: g58, cap: "Brick and glass office facade", w: 900, h: 675, wide: true },
];

const PROCESS = [
  { icon: FileText, title: "Send the plans", text: "Email drawings and specs or call with the scope. Tell us the bid date." },
  { icon: ClipboardList, title: "Takeoff & bid", text: "We price the masonry and concrete package and deliver the number on time." },
  { icon: CalendarCheck, title: "Schedule", text: "We coordinate with your sequence so the masonry is ready when the next trade needs it." },
  { icon: Blocks, title: "On or before schedule", text: "The work is completed to the drawings, on or before the date we committed to." },
];

// Regions named in the chamber listing and on the map graphic from the current site.
const REGIONS = [
  { name: "Wilkes-Barre / Scranton", x: 236, y: 84, ly: -32 },
  { name: "Lehigh Valley", x: 326, y: 190, ly: -32 },
  { name: "Harrisburg", x: 92, y: 226, ly: -32 },
  { name: "York", x: 110, y: 318, ly: 42 },
  { name: "Philadelphia", x: 334, y: 306, ly: 42 },
];
const HOME = { name: "Kutztown", x: 252, y: 222 };

const WORK_TYPES = ["Brick masonry", "Block / CMU", "Stone & veneer", "Restoration / repair", "Concrete", "Full masonry package", "Not sure yet"];

// ------------------------------------------------------------ Helpers
function useBrickCols() {
  const get = () => (typeof window === "undefined" ? 6 : window.innerWidth >= 1100 ? 6 : window.innerWidth >= 720 ? 4 : 3);
  const [cols, setCols] = useState(get);
  useEffect(() => {
    const onResize = () => setCols(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return cols;
}

// Lays names out in running bond: full courses of `cols` bricks alternate with courses offset by half a brick.
function BrickWall({ names, highlight, label }) {
  const cols = useBrickCols();
  const rows = [];
  let i = 0;
  let offset = false;
  while (i < names.length) {
    const n = offset ? cols - 1 : cols;
    rows.push({ offset, items: names.slice(i, i + n) });
    i += n;
    offset = !offset;
  }
  return (
    <div className="wall" role="list" aria-label={label}>
      {rows.map((row, r) => {
        const fill = (row.offset ? cols - 1 : cols) - row.items.length;
        return (
          <div key={r} className={`course${row.offset ? " is-offset" : ""}`} style={{ gridTemplateColumns: row.offset ? `.5fr repeat(${cols - 1}, minmax(0, 1fr)) .5fr` : `repeat(${cols}, minmax(0, 1fr))` }} role="presentation">
            {row.offset && <span className="brick half" aria-hidden="true" />}
            {row.items.map((name) => (
              <span key={name} role="listitem" className={`brick${highlight.has(name) ? " is-red" : ""}`}>{name}</span>
            ))}
            {Array.from({ length: fill }).map((_, k) => <span key={`f${k}`} className="brick blank" aria-hidden="true" />)}
            {row.offset && <span className="brick half" aria-hidden="true" />}
          </div>
        );
      })}
    </div>
  );
}

function BrickF({ className = "" }) {
  // The four stacked bricks of the Fenstermacher "F", used as a section mark.
  return (
    <svg className={`brick-f ${className}`} viewBox="0 0 40 44" aria-hidden="true">
      <rect x="2" y="2" width="36" height="9" rx="1" />
      <rect x="2" y="13" width="22" height="9" rx="1" />
      <rect x="2" y="24" width="32" height="9" rx="1" />
      <rect x="2" y="35" width="14" height="9" rx="1" />
    </svg>
  );
}

// ------------------------------------------------------------ Sections
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label="Fenstermacher Construction home">
          <img src={logo} alt="Fenstermacher Construction Services, Inc. logo" width="456" height="420" />
          <span className="brand-text"><strong>Fenstermacher</strong><em>Construction Service, Inc.</em></span>
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-phone" href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}><Phone size={16} /> {PHONE}</a>
          <a className="btn btn-red nav-cta" href="#bid" onClick={() => setOpen(false)}>Request a bid</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><BrickF /> Specializing in masonry · Kutztown, PA</p>
        <h1>Brick, block <span>&amp;</span> stone, <em>laid on schedule.</em></h1>
        <p className="lede">A full-service contracting and restoration company for general contractors and building owners across eastern Pennsylvania. Masonry, concrete and facility renovation, with bids delivered on time.</p>
        <div className="hero-actions">
          <a className="btn btn-red" href="#bid">Request a bid <ArrowRight size={18} /></a>
          <a className="btn btn-line" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
        </div>
        <dl className="hero-facts">
          <div><dt>{OWNERS.length}</dt><dd>Owners &amp; facilities on our job lists</dd></div>
          <div><dt>{CONTRACTORS.length}</dt><dd>General contractors we've built for</dd></div>
          <div><dt>{REGIONS.length}</dt><dd>Regions served</dd></div>
        </dl>
      </div>
      <div className="hero-visual">
        <figure className="hero-photo">
          <img src={heroImg} alt="Brick and cast-stone tower of a St. Luke's hospital building" width="1280" height="960" />
        </figure>
        <figure className="hero-inset">
          <img src={brickClose} alt="Close-up of a red brick corner with cast-stone band" width="900" height="675" />
        </figure>
        <p className="hero-tag"><span>From the project file</span>St. Luke's</p>
      </div>
    </section>
  );
}

function Course() {
  return <div className="course-strip" aria-hidden="true" />;
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <header className="sec-head">
          <p className="eyebrow"><BrickF /> What we build</p>
          <h2>Masonry, concrete and restoration under one contract.</h2>
          <p>Fenstermacher works as the masonry and concrete subcontractor on commercial, healthcare, education and multi-family projects, and as the restoration contractor when an existing building needs its walls put right.</p>
        </header>
        <div className="svc-grid">
          {SERVICES.map(({ icon: Icon, title, img, alt, text }, i) => (
            <article key={title} className={`svc${i === 0 ? " is-lead" : ""}`}>
              <div className="svc-img"><img src={img} alt={alt} loading="lazy" width="900" height="675" /></div>
              <div className="svc-body">
                <span className="svc-no">{String(i + 1).padStart(2, "0")}</span>
                <h3><Icon size={22} /> {title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const [tab, setTab] = useState("owners");
  const isOwners = tab === "owners";
  return (
    <section className="section clients" id="clients">
      <div className="wrap">
        <header className="sec-head light">
          <p className="eyebrow"><BrickF /> Trusted by</p>
          <h2>A wall built one client at a time.</h2>
          <p>Hospitals, colleges, manufacturers and dealerships across the Lehigh Valley, and the general contractors who bring us back to bid the next one.</p>
        </header>
        <div className="wall-tabs" role="tablist" aria-label="Client list">
          <button type="button" role="tab" aria-selected={isOwners} className={isOwners ? "is-on" : ""} onClick={() => setTab("owners")}>Owners &amp; facilities <span>{OWNERS.length}</span></button>
          <button type="button" role="tab" aria-selected={!isOwners} className={!isOwners ? "is-on" : ""} onClick={() => setTab("gcs")}>General contractors <span>{CONTRACTORS.length}</span></button>
        </div>
        {isOwners
          ? <BrickWall names={OWNERS} highlight={OWNER_HIGHLIGHT} label="Owners and facilities" />
          : <BrickWall names={CONTRACTORS} highlight={GC_HIGHLIGHT} label="General contractors" />}
        <p className="wall-note">Names from our completed and pending job lists. Logos and trademarks belong to their owners.</p>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial" aria-label="From our clients">
      <div className="wrap testi-grid">
        <Quote className="testi-mark" size={54} aria-hidden="true" />
        <blockquote>
          <p>“{QUOTE}”</p>
          <footer>From our clients</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <header className="sec-head split">
          <div>
            <p className="eyebrow"><BrickF /> Project file</p>
            <h2>Walls we've put up.</h2>
          </div>
          <p>A selection from more than 250 photos in our project slideshow: hospital wings, campus buildings, offices, churches, resorts and apartments, in brick, block and stone.</p>
        </header>
        <div className="gallery">
          {GALLERY.map(({ src, cap, w, h, wide, tall }) => (
            <figure key={cap} className={`${wide ? "is-wide" : ""}${tall ? " is-tall" : ""}`}>
              <img src={src} alt={cap} loading="lazy" width={w} height={h} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="wrap">
        <header className="sec-head">
          <p className="eyebrow"><BrickF /> How we bid</p>
          <h2>Bids on time. Work on or before schedule.</h2>
        </header>
        <ol className="steps">
          {PROCESS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <span className="step-no">{i + 1}</span>
              <Icon size={26} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Region() {
  return (
    <section className="section region" id="region">
      <div className="wrap region-grid">
        <div>
          <p className="eyebrow"><BrickF /> Where we work</p>
          <h2>Based in Kutztown. Building across eastern Pennsylvania.</h2>
          <p>From our home base in Berks County we cover five regions along I-78, I-80 and I-84, with jobs reaching into Delaware and New Jersey.</p>
          <ul className="region-list">
            {REGIONS.map((r) => <li key={r.name}><MapPin size={16} /> {r.name}</li>)}
          </ul>
          <p className="region-chamber">Member of the Greater Lehigh Valley Chamber of Commerce since {CHAMBER_SINCE}.</p>
        </div>
        <figure className="region-map">
          <svg viewBox="0 0 420 380" role="img" aria-label="Schematic map of the five regions served, with Kutztown in the middle">
            <defs>
              <pattern id="bond" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 0H40M0 10H40M20 0V10M0 10V20M40 10V20" />
              </pattern>
            </defs>
            <rect className="map-bg" x="0" y="0" width="420" height="380" />
            <rect className="map-bond" x="0" y="0" width="420" height="380" fill="url(#bond)" />
            <path className="map-road" d="M20 136 L404 120" />
            <text className="map-road-label" x="372" y="110">I-80</text>
            <path className="map-road" d="M92 226 L170 230 L252 222 L326 190 L404 170" />
            <text className="map-road-label" x="378" y="196">I-78</text>
            <path className="map-road thin" d="M236 84 L320 58 L404 46" />
            <text className="map-road-label" x="372" y="36">I-84</text>
            {REGIONS.map((r) => (
              <g key={r.name} className="map-pin">
                <circle cx={r.x} cy={r.y} r="22" className="map-ring" />
                <rect x={r.x - 6} y={r.y - 4} width="12" height="8" rx="1" />
                <text x={r.x} y={r.y + r.ly} textAnchor="middle">{r.name}</text>
              </g>
            ))}
            <g className="map-home">
              <circle cx={HOME.x} cy={HOME.y} r="9" />
              <text x={HOME.x} y={HOME.y + 30} textAnchor="middle">Kutztown · home base</text>
            </g>
          </svg>
          <figcaption>Schematic, not to scale.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function BidForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", work: "", location: "", due: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done" role="status">
        <h3>Thanks, we have it.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} or email plans to ${EMAIL}.` : "Your bid request is in. We'll call you to confirm the scope and bid date."}</p>
      </div>
    );
  }
  return (
    <form className="bid-form" onSubmit={submit}>
      <div className="form-row">
        <label>Your name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label>Company<input value={form.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Type of work
          <select value={form.work} onChange={(e) => update("work", e.target.value)}>
            <option value="">Select...</option>
            {WORK_TYPES.map((w) => <option key={w}>{w}</option>)}
          </select>
        </label>
        <label>Bid due date<input type="date" value={form.due} onChange={(e) => update("due", e.target.value)} /></label>
      </div>
      <label>Project location<input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Town or job site" /></label>
      <label>Scope &amp; notes<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Building type, approximate size, where to find the plans..." /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-red" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send bid request"} <Send size={18} /></button>
    </form>
  );
}

function Bid() {
  return (
    <section className="section bid" id="bid">
      <div className="wrap bid-grid">
        <div className="bid-info">
          <p className="eyebrow"><BrickF /> Request a bid</p>
          <h2>Have a job out to bid? Send it over.</h2>
          <p>Call the office, email plans and specs, or fill in the form and we'll get back to you to confirm the scope and the bid date.</p>
          <ul className="contact-list">
            <li><Phone size={18} /><div><span>Office</span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><Mail size={18} /><div><span>Email plans &amp; specs</span><a href={`mailto:${EMAIL}?subject=Bid%20request`}>{EMAIL}</a></div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><MapPin size={18} /><div><span>Mailing address</span>{MAIL[0]}, {MAIL[1]}</div></li>
          </ul>
        </div>
        <div className="bid-card">
          <h3>Bid request</h3>
          <BidForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <span className="footer-plate"><img src={logo} alt="Fenstermacher Construction Services, Inc." width="456" height="420" loading="lazy" /></span>
          <p>Full-service contracting and restoration, specializing in masonry, concrete and facility renovation.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Fax {FAX}<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p>{MAIL[0]}<br />{MAIL[1]}</p>
        </div>
        <div>
          <h4>Services</h4>
          {SERVICES.map((s) => <a key={s.title} href="#services">{s.title}</a>)}
        </div>
        <div>
          <h4>Regions</h4>
          {REGIONS.map((r) => <span key={r.name}>{r.name}</span>)}
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY} · Concept redesign by Blueprint WebStudio · independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
        <Services />
        <Clients />
        <Testimonial />
        <Projects />
        <Process />
        <Region />
        <Bid />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
