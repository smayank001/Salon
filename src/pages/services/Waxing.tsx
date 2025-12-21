import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, Heart } from "lucide-react";

const waxingServices = [
  {
    name: "Eyebrows",
    price: "$17",
    duration: "",
    description:
      "Shaping and cleaning up the eyebrows for a defined, polished look.",
  },
  {
    name: "Full Legs",
    price: "$62",
    duration: "",
    description:
      "Waxing from upper thighs down to the ankles for completely smooth legs.",
  },
  {
    name: "Chin",
    price: "$14",
    duration: "",
    description: "Removes unwanted hair from the chin area.",
  },
  {
    name: "Sideburns",
    price: "$15",
    duration: "",
    description: "Cleans and shapes the sideburn area along the cheeks.",
  },
  {
    name: "Whole Face",
    price: "$62",
    duration: "",
    description:
      "Full-face waxing (excluding eyebrows) to remove facial hair and leave skin smooth.",
  },
  {
    name: "Half Legs (Upper or Lower)",
    price: "$52",
    duration: "",
    description:
      "Wax either upper legs or lower legs only, depending on the client's choice.",
  },
  {
    name: "Upper Lips",
    price: "$12",
    duration: "",
    description: "Quick waxing service to remove hair from the upper lip.",
  },
  {
    name: "Under Arms",
    price: "$27",
    duration: "",
    description: "Waxing for smooth, hair-free underarms.",
  },
  {
    name: "Full Arms",
    price: "$52",
    duration: "",
    description: "Waxing from shoulders to wrists for both arms.",
  },
  {
    name: "Half Arms",
    price: "$37",
    duration: "",
    description: "Wax either upper arms or forearms only.",
  },
  {
    name: "Bikini",
    price: "$52",
    duration: "",
    description:
      "Clean-up around the bikini line for a neat, tidy finish. Service for women only.",
  },
];

const Waxing = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Waxing Services"
              title="Silky Smooth Results"
              subtitle="Experience smooth, silky skin with our gentle yet effective waxing services using premium hard and soft waxes."
            />
          </div>
        </div>
      </section>

      {/* Waxing Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4 text-center">
              Waxing Treatments
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Our comprehensive waxing services designed to minimize discomfort
              while delivering long-lasting results.
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                {waxingServices.map((service) => (
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
            title="Book Your Waxing Experience"
            subtitle="Choose your favorite waxing service and let our expert therapists create magic for you."
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

export default Waxing;
