import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";

const Index = () => {
  return (
    <PasswordGate>
    <div className="min-h-screen">
      <Header />

      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-16">
        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-3xl">
          Art made in
          <br />
          <span className="italic">Microsoft Paint</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm md:text-base font-light max-w-lg leading-relaxed">
          By Frank Zhang
        </p>
      </section>

      <Gallery />
      <About />
      <Footer />
    </div>
    </PasswordGate>
  );
};

export default Index;
