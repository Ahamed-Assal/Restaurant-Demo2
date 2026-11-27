import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <main className="reservation-body">
        <section className="page-hero reservation-hero">
          <div className="page-hero-content">
            <span className="eyebrow">A seat by the fire</span>
            <h1>Make it<br /><em>a night.</em></h1>
            <p>For parties of 7 or more, or anything a little out of the ordinary, give us a call and we’ll take care of the details.</p>
          </div>
        </section>

        <section className="reservation-layout">
          <div className="reservation-intro">
            <span className="section-label">Reservations</span>
            <h2 className="section-title">Good plans<br /><em>start here.</em></h2>
            <p>Tell us when you’d like to join us. We hold tables for 15 minutes, and we’ll confirm your reservation by email shortly after you submit.</p>
            <div className="contact-details">
              <div className="contact-detail"><MapPin size={17} /><div><strong>Come find us</strong><span>18 Mercer Street, New York, NY 10013</span></div></div>
              <div className="contact-detail"><Clock3 size={17} /><div><strong>Kitchen hours</strong><span>Tuesday–Sunday · 5:30–11pm<br />Closed Mondays</span></div></div>
              <div className="contact-detail"><Phone size={17} /><div><strong>Call the restaurant</strong><a href="tel:+12125550184">(212) 555-0184</a></div></div>
              <div className="contact-detail"><Mail size={17} /><div><strong>Email us</strong><a href="mailto:hello@nourandember.co">hello@nourandember.co</a></div></div>
            </div>
          </div>

          <div className="reservation-form-card">
            {submitted ? (
              <div className="confirmation">
                <div className="confirmation-icon"><Check size={27} /></div>
                <h2>We’ll see you soon.</h2>
                <p>Your request is on its way to the kitchen. We’ll send a confirmation to your email within a few minutes.</p>
                <button className="button-fill button-dark" onClick={() => setSubmitted(false)}>Make another request <ArrowUpRight size={15} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header"><h2>Book a table</h2><p>All fields are required<br />unless noted</p></div>
                <div className="form-grid">
                  <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="First and last name" required /></div>
                  <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@email.com" required /></div>
                  <div className="form-field"><label htmlFor="date">Date</label><input id="date" name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} min={new Date().toISOString().split("T")[0]} required /></div>
                  <div className="form-field"><label htmlFor="time">Preferred time</label><select id="time" name="time" defaultValue="" required><option value="" disabled>Select a time</option><option>5:30 pm</option><option>6:00 pm</option><option>6:30 pm</option><option>7:00 pm</option><option>7:30 pm</option><option>8:00 pm</option><option>8:30 pm</option><option>9:00 pm</option></select></div>
                  <div className="form-field"><label htmlFor="party">Party size</label><select id="party" name="party" defaultValue="2" required><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option><option>7+ guests</option></select></div>
                  <div className="form-field"><label htmlFor="occasion">Occasion <span>(optional)</span></label><input id="occasion" name="occasion" placeholder="Birthday, date night..." /></div>
                  <div className="form-field full"><label htmlFor="notes">Anything we should know? <span>(optional)</span></label><textarea id="notes" name="notes" placeholder="Dietary needs, accessibility requests, or a note for the kitchen" /></div>
                </div>
                <p className="form-note">We’ll do our best to honor your preferred time. For same-day reservations, please call us directly.</p>
                <button type="submit" className="button-fill button-dark form-submit">Request a reservation <ArrowUpRight size={15} /></button>
              </form>
            )}
          </div>
        </section>

        <section className="location-band">
          <div className="location-map" aria-label="Map showing Nour & Ember at 18 Mercer Street" />
          <div className="location-copy"><span className="section-label">In the heart of Soho</span><h2>Find your way<br />to the fire.</h2><p>We’re tucked just off the corner of Mercer and Grand, a short walk from the Canal Street and Spring Street trains.</p><a className="button-outline" href="https://maps.google.com/?q=18+Mercer+Street+New+York" target="_blank" rel="noreferrer">Open in maps <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
    </PageShell>
  );
}
