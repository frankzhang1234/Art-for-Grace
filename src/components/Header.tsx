const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1
          className="font-display text-xl md:text-2xl font-medium tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Art for Grace
        </h1>
        <nav className="flex gap-8">
          <button
            onClick={() => scrollTo("gallery")}
            className="text-muted-foreground hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-muted-foreground hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
