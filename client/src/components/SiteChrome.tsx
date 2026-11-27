import { Link, useLocation } from "wouter";
import { ArrowUpRight, Instagram, Mail, MapPin, Menu as MenuIcon, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "The menu" },
  { href: "/reservations", label: "Reservations" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="brand-name">Nour <em>&amp;</em> Ember</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={location === link.href ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/reservations" className="header-cta">Book a table <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav-panel">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={location === link.href ? "active" : ""} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/reservations" className="mobile-book-link" onClick={() => setOpen(false)}>Book a table <ArrowUpRight size={16} /></Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="brand-lockup footer-lockup">
            <span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
            <span className="brand-name">Nour <em>&amp;</em> Ember</span>
          </Link>
          <p>Wood fire, bright plates,<br />good company.</p>
        </div>
        <div className="footer-col">
          <span className="footer-label">Find us</span>
          <a href="https://maps.google.com/?q=18+Mercer+Street+New+York" target="_blank" rel="noreferrer"><MapPin size={15} /> 18 Mercer Street<br />New York, NY 10013</a>
        </div>
        <div className="footer-col">
          <span className="footer-label">Say hello</span>
          <a href="tel:+12125550184"><Phone size={15} /> (212) 555-0184</a>
          <a href="mailto:hello@nourandember.co"><Mail size={15} /> hello@nourandember.co</a>
        </div>
        <div className="footer-col">
          <span className="footer-label">Keep in touch</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> @nourandember</a>
          <p className="footer-hours">Tue–Sun · 5:30–11pm<br />Closed Mondays</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Nour &amp; Ember</span>
        <span>Made for lingering.</span>
        <span>Privacy / Accessibility</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><SiteHeader />{children}<SiteFooter /></div>;
}
