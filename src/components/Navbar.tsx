import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/yoga-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Over Mij", href: "#about" },
    { name: "Lessen", href: "#classes" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight text-foreground">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          Yoga met Thijs
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Boek een les
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2 space-y-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary"
            >
              {l.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase"
          >
            Boek een les
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;