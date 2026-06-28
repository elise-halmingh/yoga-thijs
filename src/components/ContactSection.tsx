import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: "thijslokhoff@gmail.com",
    href: "mailto:thijslokhoff@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "06-19474690",
    href: "tel:+31619474690",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Dorpshuis Gasteren, Gagels 4",
    href: "https://maps.google.com/?q=Dorpshuis+Gasteren,+Gagels+4",
    external: true,
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-card">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Contact
        </p>

        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
          Zet de eerste stap
        </h2>

        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Wil je een proefles volgen of heb je vragen? Neem vrijblijvend contact op.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-center p-6 rounded-2xl hover:bg-background transition-colors"
          >
            <item.icon
              className="mx-auto text-primary mb-3"
              size={24}
              strokeWidth={1.5}
            />

            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
              {item.label}
            </p>

            <p className="font-body text-foreground">{item.value}</p>
          </a>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h3 className="font-heading text-2xl text-foreground mb-4">
          Interesse in een proefles?
        </h3>

        <p className="font-body text-muted-foreground mb-8">
          Wil je kennismaken met Hatha Yoga, Yin Yoga en Pilates? Neem contact op
          om een proefles of yogales af te spreken. Je kunt bellen of een e-mail
          sturen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:thijslokhoff@gmail.com?subject=Aanvraag proefles"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Vraag een proefles aan
          </a>

          <a
            href="tel:+31619474690"
            className="px-8 py-4 rounded-full border border-primary text-primary font-body text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Bel direct
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;