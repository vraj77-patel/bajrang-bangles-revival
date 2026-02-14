import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary-foreground)/0.08),transparent_50%)]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-primary-foreground/10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-primary-foreground/10 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-body font-semibold tracking-wide backdrop-blur-sm border border-primary-foreground/20">
            Premium Acrylic Bangles Pipes Manufacturer
          </span>
        </div>

        <h1
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Shree Bajrang
          <br />
          <span className="text-accent">Bangles Pipe</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 font-body mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Crafting high-quality acrylic bangles pipes with precision and passion.
          Trusted by jewelers and wholesalers across India.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#products")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-bold text-base px-8 shadow-lg"
          >
            View Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-bold text-base px-8"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
