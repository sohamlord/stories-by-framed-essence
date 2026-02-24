import SectionHeading from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const stories = [
  {
    img: gallery2,
    family: "Priya & Arjun",
    quote: "From the moment we stepped into the Framed Essence studio, we knew our story was in the right hands. The warmth, the care, the artistry — it was beyond anything we imagined.",
    location: "Sunset Garden Session",
  },
  {
    img: gallery4,
    family: "Meera & Karthik",
    quote: "We wanted to celebrate our pregnancy with a touch of tradition. Framed Essence understood our vision perfectly and created something truly magical.",
    location: "Traditional Studio Session",
  },
  {
    img: gallery1,
    family: "Ananya",
    quote: "As a solo mother-to-be, I wanted photos that captured my strength and joy. These silhouettes are my most treasured possessions.",
    location: "Silhouette Series",
  },
  {
    img: gallery5,
    family: "Riya & Sameer",
    quote: "We're not photogenic people — or so we thought! The Framed Essence team made us feel so at ease. The wildflower shoot was a dream come true.",
    location: "Wildflower Outdoor Session",
  },
  {
    img: gallery3,
    family: "Deepa",
    quote: "The red gown session was powerful, dramatic, and everything I wanted. These photos make me feel like a goddess.",
    location: "Studio Dramatic Session",
  },
];

const FamilyStories = () => {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Real Stories"
            title="Family Journeys"
            description="Every family has a unique story. Here are some of the beautiful journeys we've had the honor to capture."
          />

          <div className="space-y-16 md:space-y-24">
            {stories.map((story, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={story.img}
                    alt={`${story.family} maternity session`}
                    className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5] max-h-[500px]"
                    loading="lazy"
                  />
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">{story.location}</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">{story.family}</h3>
                  <blockquote className="font-body text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FamilyStories;
