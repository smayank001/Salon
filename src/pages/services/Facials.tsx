import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, Flower2 } from "lucide-react";

const facialServices = [
  {
    name: "Express Facial",
    price: "$40",
    duration: "20 min",
    description:
      "Quick refresh facial with cleansing, light exfoliation, mask, and moisturizer. Perfect for busy clients.",
  },
  {
    name: "Herbal Facial",
    price: "$50",
    duration: "25 min",
    description:
      "Gentle herbal products to soothe the skin and give a natural glow. Great for sensitive skin.",
  },
  {
    name: "Gold Facial",
    price: "$60",
    duration: "40 min",
    description:
      "Gold-infused facial to brighten, firm, and add radiance to dull or tired skin.",
  },
  {
    name: "Deep Cleaning Facial",
    price: "$95",
    duration: "45 min",
    description:
      "Intensive deep-pore cleansing with exfoliation and extractions to unclog pores. Ideal for oily or acne-prone skin.",
  },
  {
    name: "Seaweed Facial",
    price: "$100",
    duration: "45 min",
    description:
      "Mineral-rich seaweed treatment that hydrates, nourishes, and calms the skin.",
  },
  {
    name: "Acne Facial",
    price: "$95",
    duration: "45 min",
    description:
      "Targeted acne treatment with deep cleaning, calming mask, and oil-control care for breakout-prone skin.",
  },
  {
    name: "Body Scrub (Only Women)",
    price: "$200",
    duration: "2 hours",
    description:
      "Full-body exfoliation and polishing treatment for smooth, glowing skin. Service available for women only.",
  },
  {
    name: "Micro Dermabrasion",
    price: "$150",
    duration: "1 hour",
    description:
      "Advanced exfoliation using micro-dermabrasion to smooth texture and reduce the look of marks and fine lines.",
  },
  {
    name: "Micro Needling",
    price: "$150",
    duration: "1 hour",
    description:
      "Collagen-boosting microneedling treatment to improve texture, scars, and fine lines. Performed by trained professionals.",
  },
  {
    name: "Hydra-Facial (Basic)",
    price: "$200",
    duration: "1 hour 25 min",
    description:
      "Signature hydra-facial with deep cleansing, exfoliation, gentle extractions, and intense hydration.",
  },
  {
    name: "Hydra-Facial (Serum)",
    price: "$275",
    duration: "1 hour 25 min",
    description:
      "Hydra-facial including customized serum infusion to target specific skin concerns such as dryness, dullness, or fine lines.",
  },
  {
    name: "Hydra-Facial (Cupping)",
    price: "$350",
    duration: "1 hour 25 min",
    description:
      "Hydra-facial combined with cupping techniques to stimulate circulation and promote a healthy glow.",
  },
  {
    name: "Derma-Planing",
    price: "$75",
    duration: "45 min",
    description:
      "Manual exfoliation that removes dead skin and peach fuzz for a super smooth, brighter complexion.",
  },
];

const Facials = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Facial Services"
              title="Radiant Skin Treatments"
              subtitle="Rejuvenate your skin with our luxurious facial treatments using cutting-edge techniques and premium skincare products."
            />
          </div>
        </div>
      </section>

      {/* Hydra-Facial Highlight Section */}
      <section className="py-16 bg-gradient-blush">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4">
              Hydra-Facial Treatment
            </h2>
            <p className="text-xl text-gold mb-2">
              💧 "Get The Glow With Hydrafacial Treatment"
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hydra-Facial is a deeply hydrating and cleansing treatment that
              exfoliates, extracts impurities, and replenishes the skin with
              nourishing serums. It helps improve texture, unclog pores, reduce
              fine lines, and restore a fresh radiant glow — suitable for all
              skin types.
            </p>
            <Link to="/services/hydrafacial">
              <Button variant="hero" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Learn More About Hydra-Facial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facial Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Facial Treatments
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Our comprehensive range of facial services designed to address
              your unique skin concerns for a radiant, youthful glow.
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                {facialServices.map((service) => (
                  <div
                    key={service.name}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative"
                  >
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        {service.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {service.duration}
                      </p>
                      <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blush/50">
                <Link to="/booking">
                  <Button variant="hero" className="w-full">
                    <Sparkles className="w-4 h-4" />
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            badge="Ready to Transform?"
            title="Book Your Facial Experience"
            subtitle="Choose your favorite facial treatment and let our expert estheticians create magic for you."
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

export default Facials;
