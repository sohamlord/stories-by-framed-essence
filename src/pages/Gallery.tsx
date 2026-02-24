import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroImg from "@/assets/hero-maternity.jpg";

const categories = ["All", "Studio", "Outdoor", "Couple", "Silhouette", "Traditional"];

const galleryItems = [
  { src: gallery1, category: "Silhouette", title: "Golden Silhouette" },
  { src: gallery2, category: "Couple", title: "Garden Romance" },
  { src: gallery3, category: "Studio", title: "Crimson Elegance" },
  { src: gallery4, category: "Traditional", title: "Cultural Grace" },
  { src: gallery5, category: "Outdoor", title: "Wildflower Dreams" },
  { src: heroImg, category: "Outdoor", title: "Golden Hour" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Moments Frozen in Time"
            description="Browse through our collection of cherished maternity portraits, each telling a unique story of love and anticipation."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-xl relative"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-serif text-lg text-primary-foreground font-semibold">{item.title}</p>
                    <p className="font-body text-xs text-primary-foreground/70 tracking-wide uppercase">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setLightboxIndex(null)}>
            <X size={32} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
