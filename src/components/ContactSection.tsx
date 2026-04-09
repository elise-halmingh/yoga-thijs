import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-card">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Contact</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
          Zet de eerste stap
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Neem contact op en ontdek wat bij jou past.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: Mail, label: "Email", value: "info@yogaenmeditatiecentrumgasteren.nl" },
          { icon: Phone, label: "Phone", value: "06-19474690" },
          { icon: MapPin, label: "Studio", value: "Dorpshuis Gasteren, Gagels 4" },
        ].map((item) => (
          <div key={item.label} className="text-center p-6">
            <item.icon className="mx-auto text-primary mb-3" size={24} strokeWidth={1.5} />
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
            <p className="font-body text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="mailto:info@yogaenmeditatiecentrumgasteren.nl"
          className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          Neem contact op
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
