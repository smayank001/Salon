import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, Gem } from "lucide-react";

// Manicure Services
const manicureServices = [
  {
    name: "Classic Manicure",
    price: "$25",
    description: "Trimming, shaping nails, cuticle detailing, massage, polish",
  },
  {
    name: "Deluxe Manicure",
    price: "$40",
    description:
      "Trimming, shaping nails, cuticle detailing, sugar scrub, collagen mask",
  },
  {
    name: "Add Gel Polish to Any Manicure",
    price: "$15",
    description: "Gel polish upgrade for any manicure service",
  },
];

// Princess Menu
const princessMenuServices = [
  {
    name: "Princess Manicure",
    price: "$20",
    description: "Gentle manicure for kids with soft filing and polish",
  },
  {
    name: "Princess Pedicure",
    price: "$30",
    description: "Relaxing pedicure for kids with soak, trim, and polish",
  },
  {
    name: "Princess Combo",
    price: "$40",
    description: "Princess manicure and pedicure package for kids",
  },
];

// Pedicure Services
const pedicureServices = [
  {
    name: "Classic Pedicure",
    price: "$40",
    description:
      "Trimming, shaping nails, cuticle detailing, sugar scrub, callus treatment, hot fragrance towel with massage, polish",
  },
  {
    name: "Deluxe Pedicure",
    price: "$52",
    description: "Classic pedicure, callus treatment, paraffin mask, pedi bomb",
  },
  {
    name: "Hot Spring Organic Spa Pedicure",
    price: "$57",
    description:
      "Massage packet, hot stone massage, collagen mask – 45 minutes",
  },
  {
    name: "Signature Pedicure",
    price: "$62",
    description:
      "Massage packet, pedi bomb, fresh orange peel, hot stone massage, collagen mask – 50 minutes",
  },
  {
    name: "Ultimate Pedicure",
    price: "$72",
    description:
      "Jelly pedicure, pedi bomb, callus treatment, hot stone massage, collagen mask – 60 minutes",
  },
  {
    name: "Add Gel Polish to Any Pedicure",
    price: "$15",
    description: "Gel polish upgrade for any pedicure service",
  },
];

// Acrylic Services
const acrylicServices = [
  {
    name: "Acrylic Full Set",
    price: "$38+",
    description: "Full acrylic nails with polish",
  },
];

// Organic Dipping Powder Services
const organicDippingPowderServices = [
  {
    name: "Over Natural Nails",
    price: "$48",
    description: "Dip powder application over natural nails",
  },
];

// Gel Builder Services
const gelBuilderServices = [
  {
    name: "Full Set (Gel Builder)",
    price: "$65",
    description: "Full Gel Builder nail extensions",
  },
  // {
  //   name: "Add Gel",
  //   price: "$15",
  //   description: "Gel enhancement for Full Set (Gel Builder)",
  // },
  {
    name: "Fill In (Gel Builder)",
    price: "$50",
    description: "Gel Builder fill-in service",
  },
  {
    name: "Add Gel",
    price: "$15",
    description: "Gel enhancement for Fill In (Gel Builder)",
  },
];

// Gel X Services
const gelXServices = [
  {
    name: "Full Set (Gel X)",
    price: "$65",
    description: "Full Gel X nail extensions",
  },
  // {
  //   name: "Add Gel",
  //   price: "$15",
  //   description: "Gel enhancement for Full Set (Gel X)",
  // },
  {
    name: "Fill In (Gel X)",
    price: "$55",
    description: "Gel X fill-in service",
  },
  {
    name: "Add Gel",
    price: "$15",
    description: "Gel enhancement for Fill In (Gel X)",
  },
  {
    name: "With Manicure Add",
    price: "$10",
    description: "Add manicure to Gel X service",
  },
];

const Nails = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Nail Services"
              title="Exquisite Nail Care"
              subtitle="From classic elegance to bold artistry, our nail services transform your hands and feet into works of art."
            />
          </div>
        </div>
      </section>

      {/* Classic Nail Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Nail Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Comprehensive nail care services for hands and feet.
            </p>

            {/* Manicure Services */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Manicure Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {manicureServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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

            {/* Princess Menu */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Princess Menu
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {princessMenuServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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
                    Book Princess Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pedicure Services */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Pedicure Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {pedicureServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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

            {/* Acrylic Services */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Acrylic
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {acrylicServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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
                    Book Acrylic Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Organic Dipping Powder Services */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Organic Dipping Powder
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {organicDippingPowderServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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
                    Book Organic Dipping Powder Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Gel Builder Services */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Gel Builder
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {gelBuilderServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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
                    Book Gel Builder Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Gel X Services */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-plum mb-6 text-center">
                Gel X
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {gelXServices.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">
                        {service.name}
                      </h4>
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
                    Book Gel X Service
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
            title="Book Your Nail Experience"
            subtitle="Choose your favorite nail service and let our expert artists create magic for you."
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

export default Nails;
