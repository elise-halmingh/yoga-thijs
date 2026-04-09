const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-xl font-semibold text-foreground">Yoga met Thijs</p>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yoga met Thijs. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
