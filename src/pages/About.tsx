import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Sparkles,
  Award,
  Users,
  Gem,
  ArrowRight,
} from "lucide-react";
// salonInterior is now served statically from public folder

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion for Beauty",
    description:
      "Every service is delivered with genuine love for our craft and dedication to making you feel beautiful.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Premium Hygiene",
    description:
      "Hospital-grade sterilization and single-use tools ensure your safety is our top priority.",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Luxury Products",
    description:
      "We exclusively use premium, cruelty-free products from the world's finest beauty brands.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Expert Artistry",
    description:
      "Our team undergoes continuous training to master the latest techniques and trends.",
  },
];

const team = [
  {
    name: "Alexandra Rose",
    role: "Founder & Lead Artist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    specialty: "Nail Art & Design",
  },
  {
    name: "Victoria Chen",
    role: "Senior Lash Artist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    specialty: "Volume Lashes",
  },
  {
    name: "Sophia Williams",
    role: "Skin Specialist",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop",
    specialty: "Facials & Skincare",
  },
  {
    name: "Emma Davis",
    role: "Beauty Therapist",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop",
    specialty: "Waxing & Body Care",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="About Us"
              title="Our Story of Beauty & Excellence"
              subtitle="For over a decade, PolishedNails has been Fishers' most trusted destination for luxurious self-care experiences."
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative opacity-0 animate-fade-in-up">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/salon-interior-optimized.jpg"
                  alt="Our luxurious salon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-gold/20 backdrop-blur-sm border border-gold/30 flex flex-col items-center justify-center">
                <span className="font-serif text-4xl font-bold text-plum">
                  10+
                </span>
                <span className="text-sm text-muted-foreground">Years</span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum opacity-0 animate-fade-in-up">
                A Passion Born from Purpose
              </h2>
              <div
                className="space-y-4 text-muted-foreground opacity-0 animate-fade-in-up"
                style={{ animationDelay: "150ms" }}
              >
                <p className="leading-relaxed">
                  PolishedNails was founded in 2014 by Alexandra Rose, a
                  visionary beauty artist who believed that everyone deserves to
                  feel like royalty. What started as a small studio has
                  blossomed into Fishers' premier beauty destination.
                </p>
                <p className="leading-relaxed">
                  Our philosophy is simple: combine world-class artistry with
                  genuine care to create transformative experiences. Every
                  detail in our salon—from the calming ambiance to the premium
                  products we use—has been thoughtfully curated to make your
                  visit extraordinary.
                </p>
                <p className="leading-relaxed">
                  Today, our team of skilled artists continues Alexandra's
                  legacy, treating each client as family and each service as an
                  opportunity to create something beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blush relative overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-5" />
        <div className="container mx-auto px-4 relative">
          <SectionHeading
            badge="Our Philosophy"
            title="What We Stand For"
            subtitle="The principles that guide every service we provide and every relationship we build."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-champagne p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 opacity-0 animate-fade-in-up group cursor-pointer transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-plum/10 flex items-center justify-center text-plum mb-6 group-hover:bg-plum group-hover:text-champagne transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-plum mb-3 group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Meet the Artists"
            title="Our Talented Team"
            subtitle="Expert artisans dedicated to perfecting your beauty experience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-champagne/95 backdrop-blur-sm rounded-xl p-4 border-2 border-gold/20">
                    <h3 className="font-serif text-lg font-semibold text-plum">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm font-medium">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-plum text-champagne relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Clients" },
              { number: "15+", label: "Expert Artists" },
              { number: "50K+", label: "Services Done" },
              { number: "5.0", label: "Star Rating" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-champagne/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            badge="Join Our Family"
            title="Experience the Difference"
            subtitle="Ready to discover why thousands choose PolishedNails for their beauty rituals?"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="lg">
                <Sparkles className="w-5 h-5" />
                Book Your First Visit
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="lg">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
