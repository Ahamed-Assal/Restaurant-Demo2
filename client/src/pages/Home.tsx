import { ArrowUpRight, Clock3, Flame, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/SiteChrome";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow">A wood-fired kitchen · New York</span>
            <h1>Good food<br /><em>starts with fire.</em></h1>
            <p className="hero-description">A neighborhood kitchen built around the glow of the oven, the rhythm of the seasons, and the joy of staying for one more bite.</p>
            <div className="hero-actions">
              <Link href="/reservations" className="button-fill">Book a table <ArrowUpRight size={15} /></Link>
              <Link href="/menu" className="button-outline">Explore the menu <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-meta">
              <span><MapPin size={13} /> 18 Mercer Street</span>
              <span><Clock3 size={13} /> Tue–Sun · 5:30pm</span>
            </div>
          </div>
          <div className="scroll-cue">Scroll to explore</div>
        </section>

        <section className="section section-paper intro-section">
          <div className="intro-copy">
            <span className="section-label">Our point of view</span>
            <h2 className="section-title">Simple things,<br /><em>deeply considered.</em></h2>
            <p>We cook over live fire because it asks us to pay attention. To the way a leek chars. To the moment a sourdough crust blisters. To the kind of meal that makes the room go quiet for a second.</p>
            <Link href="/menu" className="text-link">See what’s cooking <ArrowUpRight size={15} /></Link>
          </div>
          <div className="intro-image-wrap">
            <div className="editorial-image intro-image" />
            <div className="image-caption"><strong>From flame</strong><span>to your table, nightly</span></div>
          </div>
        </section>

        <section className="section section-dark menu-preview">
          <div className="preview-image" />
          <div className="preview-copy">
            <span className="section-label">A taste of tonight</span>
            <h2 className="section-title">The menu<br /><em>moves with the market.</em></h2>
            <p>Vegetables at their peak, dough fermented slowly, and bright soft drinks and mojitos made to make every plate taste better.</p>
            <div className="dish-list">
              <div className="dish-list-row"><strong>Ember-roasted carrots</strong><span>14</span></div>
              <div className="dish-list-row"><strong>Stracciatella, charred grapes</strong><span>18</span></div>
              <div className="dish-list-row"><strong>Market fish, green olive</strong><span>32</span></div>
            </div>
            <Link href="/menu" className="button-outline">View the full menu <ArrowUpRight size={15} /></Link>
          </div>
        </section>

        <section className="section story-section">
          <div className="story-grid">
            <div className="story-copy">
              <span className="section-label">The room</span>
              <h2 className="section-title">Come for dinner.<br /><em>Stay awhile.</em></h2>
              <p>Nour &amp; Ember is a little loud, a little glowing, and made for the long way through a meal. Pull up a chair at the bar, settle into a corner booth, or gather around the table with friends.</p>
              <div className="button-row" style={{ marginTop: 30 }}><Link href="/reservations" className="button-fill button-dark">Make a reservation <ArrowUpRight size={15} /></Link></div>
            </div>
            <div className="story-visual">
              <div className="story-main-image" />
              <div className="story-small-image" />
              <div className="story-stamp"><Flame size={18} /><br />Open<br />fire</div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div><span className="section-label">Your table is waiting</span><h2 className="section-title">Bring your appetite.</h2></div>
          <Link href="/reservations" className="button-fill">Reserve your table <ArrowUpRight size={15} /></Link>
        </section>
      </main>
    </PageShell>
  );
}
