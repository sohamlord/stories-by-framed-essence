import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-5 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Stories by Framed Essence" className="w-11 h-11 rounded-full object-cover ring-1 ring-white/15" />
              <div className="leading-none">
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground">Stories by</h3>
                <p className="font-body text-[9px] tracking-[0.28em] uppercase text-primary-foreground/45">
                  Framed Essence
                </p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-primary-foreground/55 mb-6 max-w-xs">
              Celebrating the most sacred chapter of your life through timeless, cinematic imagery — crafted with love.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center hover:border-primary hover:bg-primary/15 text-primary-foreground/55 hover:text-primary transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center hover:border-primary hover:bg-primary/15 text-primary-foreground/55 hover:text-primary transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/gallery", label: "Gallery" },
                { to: "/packages", label: "Packages" },
                { to: "/family-stories", label: "Client Stories" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Book a Session" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-primary-foreground/50 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Sessions</h4>
            <div className="flex flex-col gap-3">
              {["Studio Maternity", "Outdoor Golden Hour", "Couple Portraits", "Boudoir Elegance", "Styling Included"].map(
                (s) => (
                  <p key={s} className="font-body text-sm text-primary-foreground/50">
                    {s}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919423819522"
                className="font-body text-sm text-primary-foreground/55 hover:text-primary transition-colors flex items-start gap-3"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                +91 94238 19522
              </a>
              <a
                href="mailto:hello@framedessence.com"
                className="font-body text-sm text-primary-foreground/55 hover:text-primary transition-colors flex items-start gap-3"
              >
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                hello@framedessence.com
              </a>
              <p className="font-body text-sm text-primary-foreground/55 flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Sancoale, Goa, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/35">
            © 2026 Stories by Framed Essence. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/30 flex items-center gap-1.5">
            Crafted with <Heart size={11} className="fill-primary/60 text-primary/60" /> for every mother's story
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
