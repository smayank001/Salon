import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Gem } from "lucide-react";

const manicureServices = [
  {
    name: "Basic Manicure",
    price: "$25",
    description:
      "Nails shaped to desired length, cuticles trimmed, followed by a soothing hand massage and choice of polish.",
  },
  {
    name: "Color Gel Manicure",
    price: "$45",
    description:
      "Nails shaped to desired length, gel polish applied and cured for no-chip finish, followed by a hand massage.",
  },
  {
    name: "Powder Gel Manicure",
    price: "$55",
    description:
      "Nails shaped and reinforced with powder gel for added strength, with a relaxing hand massage.",
  },
  {
    name: "Powder Gel with Extensions",
    price: "$75",
    description:
      "Temporary nail extension with powder gel, includes shaping and hand massage.",
  },
  {
    name: "Polish Change",
    price: "$15",
    description: "Filing and polish change without trimming or cuticle work.",
  },
  {
    name: "Soak Off",
    price: "$20",
    description:
      "Removal of gel polish or powder gel (not for enhancements); add manicure for +$10.",
  },
  {
    name: "Enhancement Removal",
    price: "$30",
    description:
      "Safe electric file removal of acrylic or hard gel enhancements (add manicure +$10).",
  },
  {
    name: "Acrylic Extensions",
    price: "$90",
    description: "Full acrylic nails with polish (add color gel +$10).",
  },
  {
    name: "Acrylic Maintenance",
    price: "$50",
    description:
      "Refill/maintenance for acrylic enhancements (add color gel +$10).",
  },
  {
    name: "Hard Gel Extensions",
    price: "$120",
    description: "Hard gel nail extensions for long wear.",
  },
  {
    name: "Hard Gel Maintenance",
    price: "$65",
    description: "Refill/maintenance for hard gel enhancements.",
  },
];

const pedicureServices = [
  {
    name: "Basic Pedicure",
    price: "$35",
    description:
      "Feet soaked, nails shaped, cuticles trimmed, scrub, and relaxing foot massage with polish.",
  },
];

const ManicuresPedicures = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Manicures & Pedicures"
              title="Specialized Hand & Foot Care"
              subtitle="Crafting the perfect pampering experience for your hands and feet."
            />
          </div>
        </div>
      </section> */}

      {/* Manicure Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Manicure Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Expert care for your hands with our premium manicure services.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {manicureServices.map((service) => (
                <div
                  key={service.name}
                  className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-foreground">
                      {service.name}
                    </h3>
                    <p className="font-serif text-xl font-semibold text-gold">
                      {service.price}
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden">
                    Hover for details
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/booking">
                <Button variant="hero">
                  <Sparkles className="w-4 h-4" />
                  Book Manicure Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pedicure Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Pedicure Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Luxurious foot care treatments to relax and rejuvenate your feet.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {pedicureServices.map((service) => (
                <div
                  key={service.name}
                  className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-foreground">
                      {service.name}
                    </h3>
                    <p className="font-serif text-xl font-semibold text-gold">
                      {service.price}
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden">
                    Hover for details
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/booking">
                <Button variant="hero">
                  <Sparkles className="w-4 h-4" />
                  Book Pedicure Service
                </Button>
              </Link>
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
            badge="Ready to Pamper Yourself?"
            title="Book Your Manicure or Pedicure Experience"
            subtitle="Choose your favorite service and let our expert therapists create magic for you."
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

export default ManicuresPedicures;
