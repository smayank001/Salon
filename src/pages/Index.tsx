import { Link } from "react-router-dom";
import { Sparkles, Star, Heart, Gem, Flower2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlider } from "@/components/ImageSlider";
// Hero image is now served statically from public folder
// Other service images remain as imports for now

const services = [
  {
    title: "Nails",
    description:
      "Signature manicures, gel extensions, and exquisite nail art crafted with precision.",
    image: "/service-nails.jpg",
    icon: <Gem className="w-5 h-5" />,
    href: "/services/nails",
  },
  {
    title: "Facials",
    description:
      "Luxurious hydrating treatments for radiant, glowing skin that speaks volumes.",
    image: "/service-facials.jpg",
    icon: <Flower2 className="w-5 h-5" />,
    href: "/services/facials",
  },
  {
    title: "Eyelashes",
    description:
      "Volume, hybrid, and classic extensions for captivating, mesmerizing eyes.",
    image: "/service-lashes.jpg",
    icon: <Star className="w-5 h-5" />,
    href: "/services/lashes",
  },
  {
    title: "Waxing",
    description:
      "Gentle, premium waxing services for silky smooth results every time.",
    image: "/service-waxing.jpg",
    icon: <Heart className="w-5 h-5" />,
    href: "/services/waxing",
  },
];

const testimonials = [
  {
    name: "Sophia Martinez",
    text: "Absolutely divine experience! My nails have never looked this elegant. The attention to detail is impeccable, and the ambiance makes every visit feel like a retreat.",
    rating: 5,
    service: "Gel Manicure",
  },
  {
    name: "Isabella Chen",
    text: "The best facial I've ever had! My skin is glowing and feels incredibly hydrated. The products they use are clearly top-tier. I'm a client for life.",
    rating: 5,
    service: "Hydrating Facial",
  },
  {
    name: "Emma Thompson",
    text: "My lash extensions are perfect! Natural yet glamorous, exactly what I wanted. The artist really listened to what I envisioned and exceeded expectations.",
    rating: 5,
    service: "Volume Lashes",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <ImageSlider
            images={[
              "/uns.jpg",
              "/hero-nails.jpg",
              "/hydra.jpg",
              "/longlongnails.jpg",
              "/service-lashes.jpg",
              "/dermatologist-performing-laser-hair-removal-patient.jpg",
              "/waxing.jpg",
            ]}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
        </div>

        {/* Gold Dust Particles Effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-champagne text-sm mb-6 opacity-0 animate-fade-in">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span>5-Star Rated Luxury Salon</span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-champagne leading-tight mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              PolishedNails
              <span className="block text-gold mt-2">
                Luxurious Self-Care, Perfected.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-champagne/80 mb-8 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Nails • Facials • Eyelashes • Waxing — Book your pamper ritual.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Link to="/booking">
                <Button variant="gold" size="xl" className="gold-shimmer">
                  <Sparkles className="w-5 h-5" />
                  Book Your Ritual
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="gold-outline" size="xl">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-champagne/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="py-16 bg-blush relative overflow-hidden marble-overlay">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Gem className="w-8 h-8" />,
                name: "Nails",
                desc: "Art & Care",
                href: "/services/nails",
              },
              {
                icon: <Flower2 className="w-8 h-8" />,
                name: "Facials",
                desc: "Glow & Hydrate",
                href: "/services/facials",
              },
              {
                icon: <Star className="w-8 h-8" />,
                name: "Lashes",
                desc: "Volume & Length",
                href: "/services/lashes",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                name: "Waxing",
                desc: "Smooth & Gentle",
                href: "/services/waxing",
              },
            ].map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-champagne/50 hover:bg-champagne transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-plum/10 flex items-center justify-center text-plum mb-4 group-hover:bg-plum group-hover:text-champagne transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-plum">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative opacity-0 animate-fade-in-up">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/salon-interior-optimized.jpg"
                  alt="Our luxury salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-plum text-champagne px-6 py-4 rounded-xl shadow-lift">
                <p className="font-serif text-3xl font-semibold text-gold">
                  10+
                </p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                badge="Our Story"
                title="Where Luxury Meets Artistry"
                subtitle="At PolishedNails, we believe beauty is an art form. Our sanctuary offers more than services—we deliver transformative experiences that celebrate you."
                centered={false}
              />
              <div
                className="space-y-4 text-muted-foreground opacity-0 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <p>
                  Founded with a passion for perfection, our team of skilled
                  artists combines traditional techniques with modern innovation
                  to create stunning results that exceed expectations.
                </p>
                <p>
                  We use only premium, cruelty-free products and maintain the
                  highest standards of hygiene to ensure your comfort and
                  safety.
                </p>
              </div>
              <div
                className="mt-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <Link to="/about">
                  <Button variant="hero-outline">
                    Discover Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-blush relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Indulge in Royal Treatment"
            subtitle="Experience the pinnacle of beauty services, where every detail is crafted with love and expertise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>

          <div
            className="text-center mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Client Love"
            title="What Our Guests Say"
            subtitle="Real experiences from real people who've discovered the PolishedNails difference."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline">
                Read More Reviews
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-plum relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
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
            badge="Ready to Glow?"
            title="Book Your Pamper Ritual Today"
            subtitle="Reserve your spot at our luxury salon and experience the transformation you deserve."
            light
          />
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/booking">
              <Button variant="gold" size="xl" className="gold-shimmer">
                <Sparkles className="w-5 h-5" />
                Book Your Ritual
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="gold-outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
