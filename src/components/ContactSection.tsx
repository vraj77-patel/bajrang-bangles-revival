import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 86905 99990", href: "https://wa.me/918690599990" },
  { icon: Mail, label: "Email", value: "shreebajrangpipe@gmail.com", href: "mailto:shreebajrangpipe@gmail.com" },
  { icon: MapPin, label: "Address", value: "Balaji Estate, Manda Dunger, Rajkot - 360003", href: "https://www.google.com/maps/search/Balaji+Estate,+Manda+Dunger,+Rajkot+360003" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-body font-bold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Let's Connect
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Have questions about our products? Want to place a bulk order?
              Reach out to us anytime!
            </p>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/80 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-body font-bold text-sm text-foreground">
                    {item.label}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Send a Message
              </h3>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="font-body"
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="font-body"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="font-body"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 font-body font-bold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
