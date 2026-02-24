import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Award, Users, Heart } from "lucide-react";
const founderImg = "/owner.png";

const milestones = [
  { year: "2018", title: "The Beginning", desc: "Started with a passion for capturing life's most beautiful moments." },
  { year: "2020", title: "500+ Families", desc: "Reached a milestone of photographing over 500 maternity journeys." },
  { year: "2022", title: "Studio Launch", desc: "Opened our dedicated maternity photography studio in Mumbai." },
  { year: "2024", title: "Award Winning", desc: "Recognized among India's top maternity photographers." },
];

const stats = [
  { icon: Camera, value: "1000+", label: "Sessions" },
  { icon: Heart, value: "800+", label: "Happy Families" },
  { icon: Award, value: "15+", label: "Awards" },
  { icon: Users, value: "6", label: "Years Experience" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img src={founderImg} alt="Stories by Framed Essence — Photographer" className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground glass-card rounded-xl p-6 max-w-[240px] hidden md:block">
                <p className="font-serif text-lg italic leading-snug">
                  "Every mother carries a universe within her."
                </p>
              </div>
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Wedding &amp; Maternity Photographer</p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Our Story
              </h1>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Based in Sancoale, Goa, the artist behind Framed Essence is a passionate wedding and maternity photographer with a gift for capturing life's most profound moments — from the quiet anticipation of pregnancy to the joyful celebration of love.
                </p>
                <p>
                  With a painterly eye and a deeply empathetic approach, every session is a carefully curated experience — from styling and location scouting to the final cinematic edit. The result is imagery that feels timeless, intimate, and entirely yours.
                </p>
                <p>
                  Having worked with hundreds of families and couples across Goa and beyond, Framed Essence has earned a reputation for stunning fine-art portraits rooted in genuine human connection.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="hero" size="lg">Book Your Session</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <stat.icon className="text-primary mx-auto mb-3" size={28} />
                <p className="font-serif text-3xl font-bold mb-1">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Our Journey" title="Milestones" />
          <div className="max-w-2xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-serif text-sm font-bold text-primary">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-xl font-semibold mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
