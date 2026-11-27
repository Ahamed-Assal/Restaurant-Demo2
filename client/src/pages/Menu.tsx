import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/SiteChrome";

type MenuItem = { name: string; description: string; price: string; image: string };
type MenuSection = { id: string; title: string; note: string; items: MenuItem[] };

const images = {
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=82",
  carrots: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=700&q=82",
  stracciatella: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=82",
  crudo: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=700&q=82",
  mushrooms: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=700&q=82",
  flatbread: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=82",
  fish: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=82",
  chicken: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=82",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=82",
  chocolate: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=700&q=82",
  affogato: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=82",
  lemonade: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=700&q=82",
  pomegranate: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=82",
  mojito: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=82",
  dateMojito: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=82",
};

const sections: MenuSection[] = [
  { id: "small", title: "Small plates", note: "for the table", items: [
    { name: "Warm sourdough", description: "cultured butter, smoked salt", price: "$7", image: images.bread },
    { name: "Ember-roasted carrots", description: "labneh, urfa, mint", price: "$14", image: images.carrots },
    { name: "Stracciatella", description: "charred grapes, pistachio, basil oil", price: "$18", image: images.stracciatella },
    { name: "Hamachi crudo", description: "citrus kosho, cucumber, sesame", price: "$19", image: images.crudo },
  ]},
  { id: "fire", title: "From the fire", note: "served as ready", items: [
    { name: "Wood-roasted mushrooms", description: "black garlic, parsley, sour cream", price: "$21", image: images.mushrooms },
    { name: "Nour & Ember flatbread", description: "tomato, smoked mozzarella, chili", price: "$22", image: images.flatbread },
    { name: "Market fish", description: "green olive, fennel, preserved lemon", price: "$32", image: images.fish },
    { name: "Half chicken", description: "rosemary jus, crispy potatoes, charred lemon", price: "$34", image: images.chicken },
  ]},
  { id: "sweet", title: "Something sweet", note: "finish strong", items: [
    { name: "Olive oil cake", description: "citrus cream, toasted almond", price: "$11", image: images.cake },
    { name: "Chocolate budino", description: "sea salt, burnt honey", price: "$12", image: images.chocolate },
    { name: "Affogato", description: "vanilla gelato, espresso, rye brittle", price: "$9", image: images.affogato },
  ]},
  { id: "drinks", title: "Soft drinks & mojitos", note: "cold & bright", items: [
    { name: "Mint lemonade", description: "fresh lemon, mint, sparkling water", price: "$8", image: images.lemonade },
    { name: "Pomegranate fizz", description: "pomegranate, lime, orange blossom, soda", price: "$9", image: images.pomegranate },
    { name: "Classic mojito", description: "white rum, mint, lime, cane sugar, soda", price: "$15", image: images.mojito },
    { name: "Date & lime mojito", description: "date syrup, lime, mint, white rum", price: "$16", image: images.dateMojito },
  ]},
];

export default function MenuPage() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? sections : sections.filter((section) => section.id === active);

  return (
    <PageShell>
      <main className="menu-page-body">
        <section className="page-hero menu-hero">
          <div className="page-hero-content">
            <span className="eyebrow">The menu · changes with the market</span>
            <h1>Come hungry.<br /><em>Leave glowing.</em></h1>
            <p>Vegetables, dough, and the good stuff from the fire — made to be shared, or kept all to yourself.</p>
          </div>
        </section>
        <div className="menu-toolbar">
          <p>Tuesday–Sunday · Dinner from 5:30pm</p>
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            <button className={`menu-tab ${active === "all" ? "active" : ""}`} onClick={() => setActive("all")}>All</button>
            {sections.map((section) => <button key={section.id} className={`menu-tab ${active === section.id ? "active" : ""}`} onClick={() => setActive(section.id)}>{section.title}</button>)}
          </div>
        </div>
        <div className="menu-list-section">
          {visible.map((section) => (
            <section key={section.id} style={{ marginBottom: 60 }}>
              <div className="menu-section-heading"><h2>{section.title}</h2><span>{section.note}</span></div>
              <div className="menu-items">
                {section.items.map((item) => (
                  <article key={item.name} className="menu-item">
                    <div className="menu-item-image" style={{ backgroundImage: `url(${item.image})` }} aria-label={`${item.name} image`} />
                    <div className="menu-item-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
                    <span className="menu-item-price">{item.price}</span>
                  </article>
                ))}
              </div>
            </section>
          ))}
          <p className="menu-footnote"><strong>A note from the kitchen:</strong> our menu is intentionally short and changes often. Please let us know about allergies when booking — we’ll always do our best to take care of you.</p>
          <Link href="/reservations" className="button-fill button-dark" style={{ marginTop: 30 }}>Reserve a table <ArrowUpRight size={15} /></Link>
        </div>
      </main>
    </PageShell>
  );
}
