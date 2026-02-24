import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = [
  {
    name: "Bloom",
    price: "₹12,999",
    popular: false,
    features: [
      "1 Hour Session",
      "1 Outfit / Look",
      "15 Edited Photos",
      "Indoor Studio",
      "Basic Styling Tips",
      "Digital Delivery",
    ],
  },
  {
    name: "Radiance",
    price: "₹24,999",
    popular: true,
    features: [
      "2 Hour Session",
      "3 Outfits / Looks",
      "40 Edited Photos",
      "Studio + Outdoor",
      "Full Styling Support",
      "Couple Shots Included",
      "Digital + Print Gallery",
      "Behind the Scenes Reel",
    ],
  },
  {
    name: "Legacy",
    price: "₹44,999",
    popular: false,
    features: [
      "Full Day Session",
      "Unlimited Looks",
      "80+ Edited Photos",
      "Multiple Locations",
      "Professional Styling & Makeup",
      "Cinematic Video",
      "Premium Album",
      "Canvas Print",
      "Priority Booking",
    ],
  },
];

const faqs = [
  { q: "When is the best time for a maternity session?", a: "We recommend scheduling between 28-36 weeks of pregnancy when your bump is beautifully visible and you're still comfortable." },
  { q: "What should I wear?", a: "We provide a curated collection of gowns and styling options. You're welcome to bring your own outfits too — we'll guide you on what photographs best." },
  { q: "Can my partner and kids join?", a: "Absolutely! Couple and family shots are encouraged. It's a beautiful way to celebrate this milestone together." },
  { q: "How long until I receive my photos?", a: "Edited photos are delivered within 2-3 weeks via a private online gallery. Premium packages include prints and albums within 4-5 weeks." },
  { q: "Do you travel for outdoor sessions?", a: "Yes! We shoot at beautiful locations across Mumbai and can travel to your preferred location for an additional fee." },
];

const Packages = () => {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Investment"
            title="Photography Packages"
            description="Choose the perfect package for your maternity journey. Every session is crafted with love and attention to detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative glass-card rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular ? "gold-glow border-accent/50 ring-2 ring-accent/20" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-body text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="font-serif text-4xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={pkg.popular ? "gold" : "hero"} size="lg" className="w-full">
                    Choose {pkg.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <SectionHeading subtitle="FAQ" title="Common Questions" />
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-none">
                  <AccordionTrigger className="font-serif text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Packages;
