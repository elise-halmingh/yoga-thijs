import heroImage from "@/assets/hero-yoga1.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Boeddhabeeld tussen planten"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/40" />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-sand mb-6 animate-fade-up">
        Vind je innerlijke balans
      </p>
      <h1 className="font-heading text-5xl md:text-7xl font-medium text-sand leading-tight animate-fade-up animate-delay-200">
        Adem. Beweeg. Ontspan.
      </h1>
      <p className="mt-6 font-body text-lg text-sand/80 max-w-xl mx-auto animate-fade-up animate-delay-400">
        Persoonlijke yogalessen die je lichaam versterken, je geest tot rust brengen en je bewustzijn verdiepen.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-600">
        <a href="#classes" className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity">
          Bekijk lessen
        </a>
        <a href="#about" className="px-8 py-3.5 rounded-full border border-sand/50 text-sand font-body text-sm tracking-wider uppercase hover:bg-sand/10 transition-colors">
          Meer over mij
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
