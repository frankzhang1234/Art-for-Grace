const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs tracking-wide">
          © {new Date().getFullYear()} Art for Grace
        </p>
        <p className="text-muted-foreground text-xs tracking-wide">
          Made with MS Paint & love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
