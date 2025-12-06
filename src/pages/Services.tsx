import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Check,
  ArrowRight,
  Gem,
  Flower2,
  Star,
  Heart,
} from "lucide-react";
// Images are now served statically from public folder

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Services"
              title="Luxurious Beauty Treatments"
              subtitle="Discover our comprehensive range of premium services designed to pamper, rejuvenate, and transform."
            />
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4">
              Our Service Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of beauty services, each designed to
              enhance your natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nails Card */}
            <div className="premium-card gold-border rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/service-nails.jpg"
                  alt="Nails"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum">
                  <Gem className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                  Nails
                </h3>
                <p className="text-muted-foreground mb-4">
                  Signature manicures, gel extensions, and exquisite nail art.
                </p>
                <Link to="/services/nails">
                  <Button variant="outline" className="w-full">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Facials Card */}
            <div className="premium-card gold-border rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/service-facials.jpg"
                  alt="Facials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum">
                  <Flower2 className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                  Facials
                </h3>
                <p className="text-muted-foreground mb-4">
                  Luxurious hydrating treatments for radiant, glowing skin.
                </p>
                <Link to="/services/facials">
                  <Button variant="outline" className="w-full">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Lashes Card */}
            <div className="premium-card gold-border rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/service-lashes.jpg"
                  alt="Lashes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                  Lashes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Volume, hybrid, and classic extensions for captivating eyes.
                </p>
                <Link to="/services/lashes">
                  <Button variant="outline" className="w-full">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Waxing Card */}
            <div className="premium-card gold-border rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/service-waxing.jpg"
                  alt="Waxing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum">
                  <Heart className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                  Waxing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Gentle, premium waxing services for silky smooth results.
                </p>
                <Link to="/services/waxing">
                  <Button variant="outline" className="w-full">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Manicures & Pedicures Card */}
            <div className="premium-card gold-border rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/manipedi.jpg"
                  alt="Manicures & Pedicures"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                  Manicures & Pedicures
                </h3>
                <p className="text-muted-foreground mb-4">
                  Specialized care for your hands and feet.
                </p>
                <Link to="/services/manicures-pedicures">
                  <Button variant="outline" className="w-full">
                    See more
                    <ArrowRight className="w-4 h-4 ml-2" />
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
            title="Book Your Beauty Experience"
            subtitle="Choose your service and let our expert artists create magic for you."
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

export default Services;
