import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, Star } from "lucide-react";

const updatedLashServices = [
  {
    name: "Classic set",
    price: "$90.00",
    duration: "90 min",
    description:
      "Our classic full set of premium eyelash extensions for a natural, elegant look.",
  },
  {
    name: "YY mink",
    price: "$95.00",
    duration: "90 min",
    description:
      "Luxurious YY mink lashes for a soft, lightweight feel with enhanced volume.",
  },
  {
    name: "2 tips mascara look",
    price: "$100.00",
    duration: "90 min",
    description:
      "A dramatic mascara effect achieved with dual-tip lash application technique.",
  },
  {
    name: "Natural volume",
    price: "$110.00",
    duration: "90 min",
    description:
      "Subtle volume enhancement for a natural yet fuller appearance.",
  },
  {
    name: "Wispy natural volume",
    price: "$120.00",
    duration: "90 min",
    description:
      "Wispy fibers combined with natural volume for textured dimension.",
  },
  {
    name: "Full volume",
    price: "$125.00",
    duration: "90 min",
    description:
      "Maximum volume and density for a bold, striking eye appearance.",
  },
  {
    name: "Wispy full volume",
    price: "$140.00",
    duration: "90 min",
    description:
      "High-density lashes with wispy textures for dynamic visual interest.",
  },
  {
    name: "Maga volume",
    price: "$200.00",
    duration: "90 min",
    description:
      "Ultra-premium mega volume lashes for the most dramatic effect possible.",
  },
  {
    name: "Wispy mega volume",
    price: "$150.00",
    duration: "90 min",
    description:
      "Mega volume lashes with wispy detailing for ultimate glamour.",
  },
  {
    name: "Fairy set",
    price: "$120.00",
    duration: "90 min",
    description:
      "Enchanting fairy-like lashes with delicate, ethereal qualities.",
  },
  {
    name: "Designed set",
    price: "$120.00",
    duration: "90 min",
    description:
      "Custom-designed lash set tailored to your unique eye shape and preferences.",
  },
];

const otherLashServices = [
  { name: "Lash Fills (2 weeks)", price: "$65", duration: "45 min" },
  { name: "Lash Lift & Tint", price: "$85", duration: "60 min" },
];

const Lashes = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Lash Services"
              title="Captivating Eye Enhancements"
              subtitle="Wake up every day with captivating eyes. Our lash artists create natural to dramatic looks using premium, lightweight extensions."
            />
          </div>
        </div>
      </section>

      {/* Eyelash New Set */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4">
              Eyelash New Set
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular lash extension sets with updated pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updatedLashServices.map((service) => (
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
                <p className="text-sm text-muted-foreground">
                  {service.duration}
                </p>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground group-hover:hidden mt-2">
                  Hover for details
                </p>
              </div>
            ))}
          </div>

          {/* Book This Service Button for Eyelash New Set */}
          <div className="mt-8">
            <Link to="/booking">
              <Button variant="hero" className="w-full">
                <Sparkles className="w-4 h-4" />
                Book This Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Lash Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Other Lash Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Additional lash services to complement your look.
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                {otherLashServices.map((service) => (
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
            title="Book Your Lash Experience"
            subtitle="Choose your favorite lash service and let our certified artists create magic for you."
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

export default Lashes;
