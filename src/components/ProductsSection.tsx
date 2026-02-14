import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    name: "Classic Round Bangles Pipe",
    desc: "Standard round acrylic pipe for traditional bangle display. Available in multiple sizes.",
    category: "Round",
    sizes: "2.2\" - 2.8\"",
    color: "from-primary/20 to-accent/20",
  },
  {
    name: "Premium Square Pipe",
    desc: "Square-shaped acrylic pipe offering a modern look for bangle storage and display.",
    category: "Square",
    sizes: "2.4\" - 2.10\"",
    color: "from-accent/20 to-primary/20",
  },
  {
    name: "Transparent Display Pipe",
    desc: "Crystal-clear acrylic pipe that beautifully showcases bangles' design and colors.",
    category: "Transparent",
    sizes: "All Sizes",
    color: "from-primary/30 to-primary/10",
  },
  {
    name: "Colored Acrylic Pipe",
    desc: "Available in vibrant colors to match your shop décor and branding needs.",
    category: "Colored",
    sizes: "Custom",
    color: "from-accent/30 to-accent/10",
  },
  {
    name: "Heavy Duty Pipe",
    desc: "Extra thick and durable pipes designed for heavy bangle collections and wholesale use.",
    category: "Heavy Duty",
    sizes: "2.2\" - 3.0\"",
    color: "from-primary/25 to-accent/15",
  },
  {
    name: "Designer Frosted Pipe",
    desc: "Frosted finish acrylic pipe adding an elegant and premium feel to bangle displays.",
    category: "Frosted",
    sizes: "2.4\" - 2.8\"",
    color: "from-accent/25 to-primary/15",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-body font-bold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
            Acrylic Bangles Pipe Collection
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
            Explore our wide range of premium acrylic bangles pipes designed for
            beauty, durability, and functionality.
          </p>
        </div>

        {/* Animated Collage Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.color} border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-scale-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Image placeholder area */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full border-4 border-accent/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Sizes: {product.sizes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
