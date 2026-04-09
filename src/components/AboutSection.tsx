import aboutImage from "@/assets/filler-about.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-sage/30" />
        <img
          src={aboutImage}
          alt="Meditatie"
          loading="lazy"
          width={800}
          height={1000}
          className="relative rounded-2xl object-cover w-full aspect-[4/5]"
        />
      </div>
      <div>
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Over mij</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
          Yoga met aandacht en verdieping
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Thijs geeft zijn lessen volgens een vaste, rustige opbouw waarin staande, zittende en liggende oefeningen worden afgewisseld, met veel aandacht voor ademhaling. De les wordt altijd afgesloten met een ontspanningsmoment, variërend van liggende meditatie tot zittende meditatie in de zenhouding (zazen).
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          Zijn werkwijze is mede geïnspireerd door The Power of Now van Eckhart Tolle. Thijs is afgestudeerd aan de Yoga Academie Nederland (YAN) in Amsterdam en heeft ruime ervaring als yogadocent, pilatesinstructeur en meditatietrainer in sportscholen. Daarnaast werkt hij met mensen met niet-aangeboren hersenletsel (NAH) bij Noorderbrug in Assen.
        </p>
        <div className="flex gap-12">
          {[
            { num: "12+", label: "Jaren ervaring" },
            { num: "2,000+", label: "Lessen gegeven" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl font-semibold text-primary">{s.num}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
