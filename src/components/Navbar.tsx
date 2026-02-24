import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/family-stories", label: "Stories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  const navBg =
    scrolled || !isHome
      ? "bg-background/92 backdrop-blur-xl border-b border-border/70 shadow-sm"
      : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Stories by Framed Essence"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-1 ring-border/50 group-hover:ring-primary/50 transition-all duration-300"
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${isHome && !scrolled ? "text-white" : "text-foreground"
                  }`}
              >
                Stories by
              </span>
              <span
                className={`font-body text-[9px] md:text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 ${isHome && !scrolled ? "text-white/55" : "text-muted-foreground"
                  }`}
              >
                Framed Essence
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm tracking-wide transition-all duration-300 ${location.pathname === link.to
                    ? isHome && !scrolled
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isHome && !scrolled
                      ? "text-white/65 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${isHome && !scrolled
                  ? "border border-white/35 text-white/85 hover:border-white/65 hover:text-white hover:bg-white/10"
                  : "bg-primary text-white hover:bg-primary/85"
                }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isHome && !scrolled ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-background/98 backdrop-blur-2xl border-b border-border shadow-xl px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-base py-3 px-4 rounded-xl transition-colors tracking-wide ${location.pathname === link.to
                  ? "text-primary font-semibold bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 w-full text-center btn-hero-glow py-3 text-sm"
          >
            <span>Book Your Session</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
