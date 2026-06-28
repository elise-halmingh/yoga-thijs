import { Leaf, Clock, CalendarDays, Euro, Mail, Phone } from "lucide-react";

const classInfo = {
  icon: Leaf,
  name: "Hatha Yoga, Yin Yoga & Pilates",
  desc: "Basis yoga met een sterke link naar pilates. In de lessen komen Hatha Yoga, Yin Yoga en pilates samen, met aandacht voor kracht, ontspanning, ademhaling en bewust bewegen.",
  level: "Alle niveaus",
};

const schedule = [
  "Dinsdag 18:45 - 20:00",
  "Woensdag 19:30 - 20:30",
  "Donderdag 9:30 - 10:30",
  "Vrijdag 9:30 - 10:30",
];

const ClassesSection = () => (
  <section id="classes" className="py-24 px-6 bg-card">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Lessen
        </p>

        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
          Yoga met aandacht voor kracht en ontspanning
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-6">
        <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
          <classInfo.icon
            className="text-primary mb-4"
            size={28}
            strokeWidth={1.5}
          />

          <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
            {classInfo.name}
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed mb-5">
            {classInfo.desc}
          </p>

          <span className="inline-block px-3 py-1 rounded-full bg-sage/20 text-accent font-body text-xs tracking-wider uppercase">
            {classInfo.level}
          </span>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Nieuw bij yoga? Vraag vrijblijvend een proefles aan en ontdek of de lessen
              bij je passen.
            </p>

            <a
              href="mailto:thijslokhoff@gmail.com?subject=Aanvraag proefles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <Mail size={16} strokeWidth={1.5} />
              Vraag een proefles aan
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-2xl bg-background border border-border">
            <div className="flex items-center gap-3 mb-5">
              <CalendarDays
                className="text-primary"
                size={24}
                strokeWidth={1.5}
              />

              <h3 className="font-heading text-2xl font-medium text-foreground">
                Lestijden
              </h3>
            </div>

            <ul className="space-y-3">
              {schedule.map((time) => (
                <li
                  key={time}
                  className="flex items-center gap-3 font-body text-muted-foreground"
                >
                  <Clock
                    className="text-primary/70"
                    size={18}
                    strokeWidth={1.5}
                  />
                  {time}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Euro className="text-primary" size={24} strokeWidth={1.5} />

              <h3 className="font-heading text-2xl font-medium text-foreground">
                Tarieven
              </h3>
            </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                <strong>10 lessen:</strong> €117,50
                <br />
                Geldig voor 17 weken.
              </p>

              <div className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="font-body text-sm text-foreground">
                  <span className="font-semibold">Proefles:</span> €15,00
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  Contant te betalen tijdens de eerste les.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClassesSection;