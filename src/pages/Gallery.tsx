import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacials from "@/assets/service-facials.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import heroNails from "@/assets/hero-nails.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import FrenchTip from "@/assets/FrenchTip.jpg";
import Nailart from "@/assets/Nailart.jpg";
import Spa from "@/assets/Spa.jpg";
import Salon from "@/assets/Salon.jpg";
import SkinGlow from "@/assets/Skinglow.jpg";
import SkinCare from "@/assets/Skincare.jpg";
import EyeLash from "@/assets/EyeLash.jpg";


const galleryImages = [
  { src: heroNails, category: "nails", popular: true, alt: "Elegant burgundy and gold nail art" },
  { src: serviceNails, category: "nails", popular: true, alt: "Pink and gold gel manicure" },
  { src: serviceLashes, category: "lashes", popular: true, alt: "Volume lash extensions" },
  { src: serviceFacials, category: "facials", popular: false, alt: "Relaxing facial treatment" },
  { src: salonInterior, category: "salon", popular: true, alt: "Our luxury salon interior" },
  { src: FrenchTip, category: "nails", popular: false, alt: "French tip manicure" },
  { src: Nailart, category: "nails", popular: true, alt: "Nail art collection" },
  { src: Spa, category: "facials", popular: false, alt: "Spa facial treatment" },
  { src: Salon, category: "salon", popular: false, alt: "Salon experience" },
  { src: SkinGlow, category: "facials", popular: false, alt: "Skin glow treatment" },
  { src: SkinCare, category: "facials", popular: true, alt: "Professional skincare" },
  { src: EyeLash, category: "lashes", popular: false, alt: "Luxury salon atmosphere" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "nails", name: "Nails" },
  { id: "facials", name: "Facials" },
  { id: "lashes", name: "Lashes" },
  { id: "salon", name: "Salon" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Work"
              title="Beauty Gallery"
              subtitle="Explore our portfolio of stunning transformations and artistry. Every image tells a story of precision, care, and beauty perfected."
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  selectedCategory === cat.id
                    ? "bg-plum text-champagne shadow-card"
                    : "bg-champagne text-plum hover:bg-plum/10"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer break-inside-avoid opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-plum/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <div className="text-center text-champagne p-4">
                    <Sparkles className="w-8 h-8 mx-auto mb-2 text-gold" />
                    <p className="font-serif text-lg">{image.alt}</p>
                  </div>
                </div>

                {/* Popular Badge */}
                {image.popular && (
                  <div className="absolute top-3 left-3 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-gold">
                    <Star className="w-3 h-3 fill-current" />
                    POPULAR
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-champagne/10 hover:bg-champagne/20 flex items-center justify-center text-champagne transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 w-12 h-12 rounded-full bg-champagne/10 hover:bg-champagne/20 flex items-center justify-center text-champagne transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-champagne/10 hover:bg-champagne/20 flex items-center justify-center text-champagne transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={filteredImages[currentImageIndex]?.src}
            alt={filteredImages[currentImageIndex]?.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-champagne">
            <p className="font-serif text-lg mb-1">
              {filteredImages[currentImageIndex]?.alt}
            </p>
            <p className="text-sm text-champagne/60">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-plum text-champagne relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionHeading
            badge="Inspired?"
            title="Let Us Create Your Look"
            subtitle="Book your appointment and let our artists craft something beautiful just for you."
            light
          />
          <Link to="/booking">
            <Button variant="gold" size="xl" className="gold-shimmer">
              <Sparkles className="w-5 h-5" />
              Book Your Ritual
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
