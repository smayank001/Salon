import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, Gem } from "lucide-react";

const nailServices = [
  { name: "Classic Manicure", price: "$35", duration: "30 min" },
  { name: "Signature Manicure", price: "$55", duration: "45 min" },
  { name: "Gel Manicure", price: "$65", duration: "50 min" },
  { name: "Luxury Pedicure", price: "$75", duration: "60 min" },
  { name: "Gel Extensions", price: "$95", duration: "90 min" },
  { name: "Nail Art (per nail)", price: "$10+", duration: "varies" },
];

const repairNailServices = [
  {
    name: "1 Finger",
    price: "$2.00",
    description: "Repair one damaged or broken nail on either hand or foot.",
  },
  {
    name: "2 Fingers",
    price: "$5.00",
    description: "Repair for any two damaged nails.",
  },
  {
    name: "3 Fingers",
    price: "$7.00",
    description: "Repair for three damaged or broken nails.",
  },
  {
    name: "4 Fingers",
    price: "$10.00",
    description: "Repair service for four nails that need fixing.",
  },
  {
    name: "5 Fingers Design",
    price: "$13.00",
    description: "Repair plus simple design on five nails.",
  },
  {
    name: "6 Fingers Design",
    price: "$16.00",
    description: "Repair plus design work on six nails.",
  },
  {
    name: "7 Fingers Design",
    price: "$17.00",
    description: "Repair and design for seven nails.",
  },
  {
    name: "8 Fingers Design",
    price: "$20.00",
    description: "Repair and design for eight nails.",
  },
  {
    name: "9 Fingers",
    price: "$23.00",
    description: "Repair for nine nails needing extra care.",
  },
  {
    name: "10 Fingers Design",
    price: "$25.00",
    description: "Full set repair and design on all ten nails.",
  },
];

const kidsMenuServices = [
  {
    name: "Princess Mani",
    price: "$15.00",
    description: "Gentle manicure for kids with soft filing and polish.",
  },
  {
    name: "Princess Pedi",
    price: "$25.00",
    description: "Relaxing pedicure for kids with soak, trim, and polish.",
  },
  {
    name: "Princess Combo",
    price: "$35.00",
    description: "Princess manicure and pedicure package for kids.",
  },
  {
    name: "Kid Polish Change Hand",
    price: "$7.00",
    description: "Polish change on hands only for kids.",
  },
  {
    name: "Kid Polish Change Toes",
    price: "$7.00",
    description: "Polish change on toes only for kids.",
  },
  {
    name: "Add Gel",
    price: "$10.00",
    description: "Upgrade to gel polish for kids' services.",
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
              Classic Nail Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Our signature nail care services using premium products for
              long-lasting results.
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                {nailServices.map((service) => (
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

      {/* Repair Nails Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Repair Nails
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Restore your nails to their beautiful best with our expert repair
              services.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {repairNailServices.map((service) => (
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

            {/* Book This Service Button for Repair Nails */}
            <div className="mt-8">
              <Link to="/booking">
                <Button variant="hero" className="w-full">
                  <Sparkles className="w-4 h-4" />
                  Book This Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Menu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Kids Menu
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Special pampering packages designed just for our little
              princesses.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {kidsMenuServices.map((service) => (
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

            {/* Book This Service Button for Kids Menu */}
            <div className="mt-8">
              <Link to="/booking">
                <Button variant="hero" className="w-full">
                  <Sparkles className="w-4 h-4" />
                  Book This Service
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
