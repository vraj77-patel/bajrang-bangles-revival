import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Contact", href: "#contact" }];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-background/95 backdrop-blur-md shadow-lg" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between px-4 py-3 border-primary text-muted-foreground">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2 text-accent text-lg">
          <img src={logo} alt="Shree Bajrang Bangles Pipe" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-display font-bold text-lg hidden sm:block text-accent">
            Shree Bajrang Acrylic  Bangles Pipe
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">

              {link.label}
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}>

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen &&
      <nav className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) =>
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className="font-body font-semibold text-foreground/80 hover:text-primary py-2 text-left">

                {link.label}
              </button>
          )}
          </div>
        </nav>
      }
    </header>);

};

export default Header;