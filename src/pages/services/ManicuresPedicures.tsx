import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const ManicuresPedicures = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
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
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-blush flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-12 h-12 text-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4">
              Manicures & Pedicures
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Coming soon...
            </p>
            <p className="text-muted-foreground mb-8">
              We're crafting the perfect pampering experience for your hands and
              feet. Stay tuned for our exquisite collection of manicure and
              pedicure services.
            </p>
            <div className="mt-8">
              <Link to="/services">
                <Button variant="outline">Back to All Services</Button>
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
            badge="Stay Tuned"
            title="More Services Coming Soon"
            subtitle="Subscribe to our newsletter to be notified when our new services launch."
            light
          />
          <Link to="/contact">
            <Button variant="gold" size="xl" className="gold-shimmer">
              <Sparkles className="w-5 h-5" />
              Get Notified
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ManicuresPedicures;
