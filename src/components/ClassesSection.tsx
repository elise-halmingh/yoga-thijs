import { Leaf, Sun, Moon, Wind } from "lucide-react";

const classes = [
  {
    icon: Sun,
    name: "Hatha Yoga",
    time: "Ma / Wo — 9:00",
    desc: "Een rustige les met staande, zittende en liggende houdingen, met aandacht voor ademhaling en bewust bewegen.",
    level: "Alle niveaus",
  },
  {
    icon: Moon,
    name: "Yin Yoga",
    time: "Di / Do — 19:30",
    desc: "Lang aangehouden houdingen, voornamelijk zittend en liggend, gericht op ontspanning en verdieping.",
    level: "Alle niveaus",
  },
  {
    icon: Wind,
    name: "Meditatie & Ademhaling",
    time: "Zaterdag — 9:00",
    desc: "Ademhalingsoefeningen en meditatie (zittend of liggend) voor rust, focus en bewustzijn in het moment.",
    level: "Alle niveaus",
  },
  {
    icon: Leaf,
    name: "Easy Flow Yoga",
    time: "Zondag — 10:00",
    desc: "Een rustige flow waarin beweging en ademhaling samenkomen, met aandacht voor balans en ontspanning.",
    level: "Beginner / Gemiddeld",
  },
];

const ClassesSection = () => (
  <section id="classes" className="py-24 px-6 bg-card">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Lessen</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
          Vind wat bij jou past
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {classes.map((c) => (
          <div key={c.name} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <c.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-heading text-2xl font-medium text-foreground mb-1">{c.name}</h3>
            <p className="font-body text-xs tracking-widest uppercase text-primary/70 mb-3">{c.time}</p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-sage/20 text-accent font-body text-xs tracking-wider uppercase">
              {c.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassesSection;
