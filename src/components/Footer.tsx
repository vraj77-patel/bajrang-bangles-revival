const Footer = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-display font-bold text-lg">SB</span>
              </div>
              <span className="font-display font-bold text-lg">
                Shree Bajrang Bangles Pipe
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70">
              Premium manufacturer of acrylic bangles pipes. Quality, variety, and trust since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["#home", "#about", "#products", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                >
                  {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 font-body text-sm text-primary-foreground/70">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@shreebajrang.com</p>
              <p>📍 Bangles Market, Firozabad, UP, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Shree Bajrang Bangles Pipe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
