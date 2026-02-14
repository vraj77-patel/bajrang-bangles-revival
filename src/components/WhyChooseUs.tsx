import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gem, Palette, IndianRupee, Truck } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    desc: "Made from finest acrylic material ensuring clarity, durability, and a premium finish.",
  },
  {
    icon: Palette,
    title: "Wide Variety",
    desc: "Available in multiple sizes, shapes, and colors to suit every requirement.",
  },
  {
    icon: IndianRupee,
    title: "Best Prices",
    desc: "Competitive wholesale pricing without compromising on quality or service.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    desc: "Reliable pan-India shipping with careful packaging to ensure safe delivery.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-body font-bold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {f.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
