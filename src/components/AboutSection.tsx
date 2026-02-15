import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Experience", value: "10+" },
  { icon: Users, label: "Happy Customers", value: "500+" },
  { icon: Award, label: "Quality Products", value: "100+" },
  { icon: Shield, label: "Trust & Reliability", value: "100%" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <span className="text-accent font-body font-bold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Crafting Excellence in{" "}
              <span className="text-primary">Acrylic Bangles Pipes</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Shree Bajrang Acrylic Bangles Pipe is a leading manufacturer of premium acrylic
              bangles pipes used widely by jewelers, wholesalers, and retailers
              across India. Our products serve as elegant display and storage
              solutions for traditional Indian bangles.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              With over a decade of experience, we take pride in delivering
              top-quality products at competitive prices. Our commitment to
              craftsmanship, durability, and customer satisfaction sets us apart
              in the industry.
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-display font-bold text-2xl text-primary">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
