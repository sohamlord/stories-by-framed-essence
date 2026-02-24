import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Camera, Heart, Sparkles, CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn, Phone, Clock, Image, Package } from "lucide-react";
import heroImg from "@/assets/hero-maternity.jpg";
const founderImg = "/owner.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

/* ─── Data ─────────────────────────────────────────────── */
const galleryImages = [
  { src: gallery1, span: "col-span-2 md:col-span-1 row-span-2", minH: "420px" },
  { src: gallery2, span: "col-span-1", minH: "200px" },
  { src: gallery3, span: "col-span-1", minH: "200px" },
  { src: gallery4, span: "col-span-1", minH: "200px" },
  { src: gallery5, span: "col-span-1", minH: "200px" },
];

const journeySteps = [
  {
    icon: Phone,
    step: "01",
    title: "Consultation",
    desc: "We begin with a warm personal call to understand your vision, style preferences, and the story you want to tell — completely free and pressure-free.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Styling & Planning",
    desc: "Choose from our curated wardrobe of luxury gowns and wraps. We plan every detail — locations, mood boards, lighting — so your session is effortless.",
  },
  {
    icon: Camera,
    step: "03",
    title: "Photoshoot Day",
    desc: "Your private session in our warm studio or a dreamy outdoor setting. We guide every pose, every breath — making the experience as beautiful as the images.",
  },
  {
    icon: Image,
    step: "04",
    title: "Photo Selection",
    desc: "Browse your curated collection in an online gallery and handpick your favorite images. We offer gentle guidance on selecting your most treasured portraits.",
  },
  {
    icon: Package,
    step: "05",
    title: "Delivery & Albums",
    desc: "Receive your high-resolution digital gallery within 2 weeks. Optional: heirloom-quality albums and wall art prints crafted to last a lifetime.",
  },
];

const testimonials = [
  {
    name: "Priya & Arjun",
    location: "Mumbai",
    text: "Framed Essence captured the most magical moments of our pregnancy journey. Every single photo tells a story of love, warmth, and pure joy. We cry happy tears every time we look at them.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Sneha Mehta",
    location: "Pune",
    text: "The entire experience was so comfortable and nurturing. I was nervous at first, but the team at Framed Essence made me feel like a goddess. The photos are absolutely breathtaking — worth every penny.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Kavya & Rohan",
    location: "Bangalore",
    text: "We didn't just get photos — we got memories we will treasure for generations. Truly cinematic, truly artistic work. Our families were in tears when they saw the album.",
    rating: 5,
    initial: "K",
  },
  {
    name: "Divya Sharma",
    location: "Delhi",
    text: "The gown styling and care that goes into each session is unmatched. I felt like a queen throughout. The images look like they belong in a fine art magazine.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Ananya & Vikram",
    location: "Chennai",
    text: "We had the outdoor golden-hour session and it was pure magic. Every frame is a masterpiece. Framed Essence has an incredible eye for light and emotion.",
    rating: 5,
    initial: "A",
  },
];

/* ─── Scroll reveal hook ────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const revealAll = () => {
      const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer.observe(el));
      // Immediately check already-visible elements (e.g., first section after hero)
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
      return observer;
    };
    // Run after a short delay to allow paint
    const timer = setTimeout(() => {
      const obs = revealAll();
      return () => obs.disconnect();
    }, 120);
    return () => clearTimeout(timer);
  }, []);
}

/* ─── Component ─────────────────────────────────────────── */
const Index = () => {
  const [viewer, setViewer] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const trackRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  /* Keyboard / touch nav for viewer */
  useEffect(() => {
    if (!viewer.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setViewer((v) => ({ ...v, index: (v.index + 1) % galleryImages.length }));
      if (e.key === "ArrowLeft") setViewer((v) => ({ ...v, index: (v.index - 1 + galleryImages.length) % galleryImages.length }));
      if (e.key === "Escape") setViewer({ open: false, index: 0 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewer.open]);

  const scrollTestimonials = useCallback((dir: "left" | "right") => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  }, []);

  return (
    <main>
      {/* ═══════════════════════════════════ HERO ════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cinematic maternity portrait"
            className="w-full h-full object-cover object-center slow-zoom"
          />
          <div className="hero-overlay-centered absolute inset-0" />
        </div>

        {/* Soft floating particles */}
        <div className="absolute top-[22%] left-[18%] w-2.5 h-2.5 rounded-full bg-gold/40 float-animation" />
        <div className="absolute top-[38%] right-[22%] w-4 h-4 rounded-full bg-blush/25 float-animation" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-[28%] left-[30%] w-1.5 h-1.5 rounded-full bg-gold/50 float-animation" style={{ animationDelay: "4.5s" }} />
        <div className="absolute top-[60%] right-[35%] w-3 h-3 rounded-full bg-white/15 float-animation" style={{ animationDelay: "1.5s" }} />

        {/* Hero content – centered */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p className="fade-up font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60 mb-5">
            Stories by Framed Essence
          </p>
          <h1 className="fade-up fade-up-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.1] text-balance mb-7">
            Where Motherhood
            <br />
            <em style={{ color: "#C9902B" }}>Becomes Art</em>
          </h1>
          <p className="fade-up fade-up-delay-2 font-body text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            Timeless, cinematic maternity portraits that capture the quiet magic
            of new life — crafted with intention, warmth, and artistry.
          </p>
          <div className="fade-up fade-up-delay-3 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-hero-glow">
              <span>Check Availability</span>
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-white/75 hover:text-white border border-white/25 hover:border-white/50 rounded-full px-7 py-4 transition-all duration-300 backdrop-blur-sm"
            >
              View Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-up fade-up-delay-4 flex flex-col items-center gap-2">
          <span className="font-body text-[9px] tracking-[0.35em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════ ABOUT ════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-background overflow-hidden">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Portrait side */}
            <div className="reveal-left relative">
              {/* Offset decorative border – desktop only */}
              <div className="hidden lg:block absolute top-5 left-5 w-full h-full rounded-3xl max-w-md border border-primary/20 -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img src={founderImg} alt="Framed Essence – Photographer, Sancoale Goa" className="w-full h-full object-cover" />
                {/* Handwritten quote float */}
                <div className="absolute bottom-0 left-0 right-0 px-8 py-7 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-handwritten text-3xl text-white/95 leading-tight">
                    "Every mother is a masterpiece."
                  </p>
                </div>
              </div>
            </div>

            {/* Story side */}
            <div className="reveal-right">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
                About Framed Essence
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-7">
                Art Born from{" "}
                <br className="hidden md:block" />
                <em>Reverence</em> for Life
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                We are Framed Essence — a fine-art maternity &amp; wedding photography studio based in Sancoale, Goa, dedicated to
                capturing the extraordinary beauty of life's most precious chapters in their most authentic and
                intimate form. With a painterly eye and a gentle soul, we create portraits
                that feel cinematic, timeless, and deeply personal.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
                Each session is a collaboration — a sacred space where you can slow down,
                feel radiant, and trust that every fleeting moment of this chapter is
                being honoured with care and artistry.
              </p>

              {/* Experience highlights */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  { n: "500+", label: "Sessions Delivered" },
                  { n: "8+", label: "Years of Experience" },
                  { n: "100%", label: "5-Star Reviews" },
                  { n: "3", label: "Studio Locations" },
                ].map((h) => (
                  <div key={h.n} className="text-left">
                    <p className="font-serif text-4xl font-semibold text-gradient-gold mb-1">{h.n}</p>
                    <p className="font-body text-sm text-muted-foreground tracking-wide">{h.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-primary hover:text-foreground border-b border-primary hover:border-foreground pb-0.5 transition-all duration-300"
              >
                Read Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ GALLERY ══════════════════════════════════ */}
      <section className="py-28 md:py-36 section-gradient">
        <div className="container mx-auto px-5 md:px-10">
          <div className="reveal text-center mb-14 md:mb-20">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-3">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
              A Glimpse of Our Work
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Each frame is a love letter — here are a few of our most cherished stories.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 reveal">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-card shadow-md hover:shadow-xl transition-shadow duration-500 ${img.span}`}
                style={{ minHeight: img.minH }}
                onClick={() => setViewer({ open: true, index: i })}
              >
                <img src={img.src} alt={`Maternity photography ${i + 1}`} loading="lazy" />
                <div className="overlay" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary border border-border hover:border-primary rounded-full px-8 py-4 transition-all duration-300"
            >
              Explore Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ JOURNEY TIMELINE ═══════════════════════════ */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-5 md:px-10">
          <div className="reveal text-center mb-16 md:mb-24">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-3">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
              Your Photoshoot Journey
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From your very first message to receiving your heirloom prints — every step is designed to feel effortless.
            </p>
          </div>

          {/* Timeline steps – desktop: left/right alternating | mobile: vertical single col */}
          <div className="relative">
            {/* Center line – desktop only */}
            <div className="hidden md:block timeline-line" />

            <div className="flex flex-col gap-0">
              {journeySteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={step.step}
                    className={`reveal md:grid md:grid-cols-2 md:gap-16 items-center ${i !== journeySteps.length - 1 ? "mb-12 md:mb-0" : ""}`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    {/* Content block */}
                    <div className={`${isLeft ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}`}>
                      <div
                        className={`pastel-gradient rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 relative ${isLeft ? "md:ml-auto" : ""
                          } max-w-md ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}>
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <step.icon size={22} className="text-primary" />
                          </div>
                          <span className="font-serif text-6xl font-semibold text-border/80 leading-none">{step.step}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Spacer on alternating side – desktop */}
                    <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16 reveal">
            <a href="https://wa.me/919423819522" target="_blank" rel="noopener noreferrer" className="btn-hero-glow inline-block">
              <span>Start Your Journey</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ TESTIMONIALS ═════════════════════════════════ */}
      <section className="py-28 md:py-36 section-gradient overflow-hidden">
        <div className="container mx-auto px-5 md:px-10">
          <div className="reveal text-center mb-12 md:mb-16">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-3">Love Letters</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
              What Our Families Say
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative reveal">
            <div ref={trackRef} className="testimonial-track">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="glass-card rounded-3xl p-8 h-full flex flex-col gap-5">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={15} className="fill-accent text-accent" />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="font-serif text-lg md:text-xl font-light italic text-foreground leading-relaxed flex-1">
                      "{t.text}"
                    </p>
                    {/* Client info */}
                    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-primary font-bold text-lg">{t.initial}</span>
                      </div>
                      <div>
                        <p className="font-serif text-base font-semibold text-foreground">{t.name}</p>
                        <p className="font-body text-xs text-muted-foreground tracking-wide">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => scrollTestimonials("left")}
                className="w-11 h-11 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary flex items-center justify-center transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollTestimonials("right")}
                className="w-11 h-11 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary flex items-center justify-center transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA BANNER ═════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={gallery5} alt="Beautiful maternity moment" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,12,8,0.6), rgba(20,12,8,0.75))" }} />
        </div>
        <div className="relative z-10 container mx-auto px-5 md:px-10 text-center">
          <p className="fade-up font-body text-xs tracking-[0.35em] uppercase text-white/60 mb-4">Ready to Begin?</p>
          <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 text-balance">
            Let's Capture Your<br />
            <em className="text-gradient-gold">Beautiful Story</em>
          </h2>
          <p className="reveal font-body text-base md:text-lg text-white/70 max-w-lg mx-auto leading-relaxed mb-10">
            Book your maternity session today and create memories that will last a lifetime.
          </p>
          <div className="reveal flex flex-wrap justify-center gap-5">
            <a href="/contact" className="btn-hero-glow">
              <span>Book Your Session</span>
            </a>
            <a
              href="https://wa.me/919423819522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-sm tracking-widest uppercase text-white/80 hover:text-white border border-white/25 hover:border-white/55 rounded-full px-7 py-4 transition-all duration-300 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ FULLSCREEN VIEWER ════════════════════════════ */}
      {viewer.open && (
        <div className="fullscreen-viewer" onClick={() => setViewer({ open: false, index: 0 })}>
          {/* Close btn */}
          <button
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setViewer({ open: false, index: 0 })}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setViewer((v) => ({ ...v, index: (v.index - 1 + galleryImages.length) % galleryImages.length })); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[viewer.index].src}
            alt=""
            className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setViewer((v) => ({ ...v, index: (v.index + 1) % galleryImages.length })); }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs tracking-widest uppercase text-white/50">
            {viewer.index + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </main>
  );
};

export default Index;
