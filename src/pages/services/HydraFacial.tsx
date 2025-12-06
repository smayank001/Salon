import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const hydraFacialPackages = [
  {
    id: 1,
    title: "Hydra-Facial (Basic)",
    duration: "1 hr 25 min",
    price: "$200",
    description:
      "Deep cleansing + exfoliation + gentle extraction + hydration.",
  },
  {
    id: 2,
    title: "Hydra-Facial (Serum)",
    duration: "1 hr 25 min",
    price: "$275",
    description:
      "Includes customized serum infusion for targeted skin concerns.",
  },
  {
    id: 3,
    title: "Hydra-Facial (Cupping)",
    duration: "1 hr 25 min",
    price: "$350",
    description:
      "Boosts lymphatic circulation and enhances glow through cupping technique.",
  },
];

const HydraFacial = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Hydra-Facial Treatment"
              title="Get The Glow With Hydrafacial Treatment"
              subtitle="Hydra-Facial is a deeply hydrating and cleansing treatment that exfoliates, extracts impurities, and replenishes the skin with nourishing serums. It helps improve texture, unclog pores, reduce fine lines, and restore a fresh radiant glow — suitable for all skin types."
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Hydra-Facial Packages
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Choose the perfect Hydra-Facial treatment for your skin needs
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {hydraFacialPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="font-serif text-xl font-semibold text-plum mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pkg.duration}
                  </p>
                  <p className="font-serif text-2xl font-semibold text-gold mb-4">
                    {pkg.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Derma-Planing Upsell */}
            <div className="bg-blush rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-plum mb-2">
                    Enhance Your Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Add Derma-Planing to your Hydra-Facial and enjoy{" "}
                    <strong>50% OFF</strong> Derma-Planing
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/booking">
                    <Button variant="hero">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </Link>
                </div>
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
            title="Book Your Hydra-Facial Experience"
            subtitle="Experience the ultimate skin rejuvenation treatment tailored to your unique needs."
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

export default HydraFacial;
