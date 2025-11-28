import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Check, ArrowRight, Gem, Flower2, Star, Heart } from "lucide-react";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacials from "@/assets/service-facials.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceWaxing from "@/assets/service-waxing.jpg";

const nailServices = [
  { name: "Classic Manicure", price: "$35", duration: "30 min" },
  { name: "Signature Manicure", price: "$55", duration: "45 min" },
  { name: "Gel Manicure", price: "$65", duration: "50 min" },
  { name: "Luxury Pedicure", price: "$75", duration: "60 min" },
  { name: "Gel Extensions", price: "$95", duration: "90 min" },
  { name: "Nail Art (per nail)", price: "$10+", duration: "varies" },
];

const facialServices = [
  { name: "Express Glow Facial", price: "$85", duration: "30 min" },
  { name: "Hydrating Facial", price: "$120", duration: "60 min" },
  { name: "Anti-Aging Treatment", price: "$150", duration: "75 min" },
  { name: "Deep Cleanse Facial", price: "$110", duration: "60 min" },
  { name: "Royal Signature Facial", price: "$200", duration: "90 min" },
];

const lashServices = [
  { name: "Classic Full Set", price: "$150", duration: "90 min" },
  { name: "Hybrid Full Set", price: "$180", duration: "120 min" },
  { name: "Volume Full Set", price: "$220", duration: "150 min" },
  { name: "Lash Fills (2 weeks)", price: "$65", duration: "45 min" },
  { name: "Lash Lift & Tint", price: "$85", duration: "60 min" },
];

const waxingServices = [
  { name: "Eyebrow Shaping", price: "$25", duration: "15 min" },
  { name: "Lip & Chin", price: "$20", duration: "15 min" },
  { name: "Full Face", price: "$55", duration: "30 min" },
  { name: "Underarms", price: "$30", duration: "15 min" },
  { name: "Full Legs", price: "$75", duration: "45 min" },
  { name: "Brazilian", price: "$65", duration: "30 min" },
];

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  services: { name: string; price: string; duration: string }[];
  features: string[];
  reverse?: boolean;
}

const ServiceSection = ({
  id,
  title,
  description,
  image,
  icon,
  services,
  features,
  reverse = false,
}: ServiceSectionProps) => (
  <section id={id} className="py-16 md:py-24 scroll-mt-24">
    <div className="container mx-auto px-4">
      <div className={`grid lg:grid-cols-2 gap-12 items-start ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Image */}
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold flex items-center justify-center text-charcoal shadow-gold">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className={reverse ? "lg:order-1" : ""}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Services List */}
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="p-4 bg-blush border-b border-border/50">
              <h3 className="font-serif text-lg font-semibold text-plum">Services & Pricing</h3>
            </div>
            <div className="divide-y divide-border/50">
              {services.map((service) => (
                <div key={service.name} className="p-4 flex items-center justify-between hover:bg-blush/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  <p className="font-serif text-xl font-semibold text-gold">{service.price}</p>
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
    </div>
  </section>
);

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

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { name: "Nails", href: "#nails", icon: <Gem className="w-4 h-4" /> },
              { name: "Facials", href: "#facials", icon: <Flower2 className="w-4 h-4" /> },
              { name: "Lashes", href: "#lashes", icon: <Star className="w-4 h-4" /> },
              { name: "Waxing", href: "#waxing", icon: <Heart className="w-4 h-4" /> },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-6 py-3 bg-champagne rounded-full text-plum font-medium hover:bg-plum hover:text-champagne transition-all duration-300 shadow-soft"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nails */}
      <ServiceSection
        id="nails"
        title="Nail Services"
        description="From classic elegance to bold artistry, our nail services transform your hands and feet into works of art. Our skilled technicians use only premium, long-lasting products for results that turn heads."
        image={serviceNails}
        icon={<Gem className="w-8 h-8" />}
        services={nailServices}
        features={[
          "Premium gel polish",
          "Nail art specialists",
          "Long-lasting results",
          "Hygienic practices",
          "Custom designs",
          "Relaxing experience",
        ]}
      />

      <div className="border-t border-border/30" />

      {/* Facials */}
      <ServiceSection
        id="facials"
        title="Facial Treatments"
        description="Rejuvenate your skin with our luxurious facial treatments. Using cutting-edge techniques and premium skincare products, we address your unique skin concerns for a radiant, youthful glow."
        image={serviceFacials}
        icon={<Flower2 className="w-8 h-8" />}
        services={facialServices}
        features={[
          "Customized treatments",
          "Premium products",
          "Deep hydration",
          "Anti-aging focus",
          "Relaxing atmosphere",
          "Expert estheticians",
        ]}
        reverse
      />

      <div className="border-t border-border/30" />

      {/* Lashes */}
      <ServiceSection
        id="lashes"
        title="Eyelash Services"
        description="Wake up every day with captivating eyes. Our lash artists create natural to dramatic looks using premium, lightweight extensions that protect your natural lashes while delivering stunning results."
        image={serviceLashes}
        icon={<Star className="w-8 h-8" />}
        services={lashServices}
        features={[
          "Premium silk lashes",
          "Certified artists",
          "Natural-looking",
          "Lightweight comfort",
          "Long retention",
          "Customized styles",
        ]}
      />

      <div className="border-t border-border/30" />

      {/* Waxing */}
      <ServiceSection
        id="waxing"
        title="Waxing Services"
        description="Experience smooth, silky skin with our gentle yet effective waxing services. We use premium hard and soft waxes to minimize discomfort while delivering long-lasting results."
        image={serviceWaxing}
        icon={<Heart className="w-8 h-8" />}
        services={waxingServices}
        features={[
          "Premium wax",
          "Gentle technique",
          "Hygienic tools",
          "Soothing aftercare",
          "Long-lasting",
          "Expert therapists",
        ]}
        reverse
      />

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
