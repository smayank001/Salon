import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, Sparkles, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Salon from "@/assets/Salon.jpg";

const testimonials = [
  {
    name: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "Absolutely divine experience! My nails have never looked this elegant. The attention to detail is impeccable, and the ambiance makes every visit feel like a retreat. I've recommended PolishedNailss to all my friends!",
    rating: 5,
    service: "Signature Gel Manicure",
    date: "November 2024",
  },
  {
    name: "Isabella Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "The best facial I've ever had! My skin is glowing and feels incredibly hydrated. The esthetician really understood my skin concerns and customized the treatment perfectly. I'm officially a client for life.",
    rating: 5,
    service: "Hydrating Facial",
    date: "November 2024",
  },
  {
    name: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    text: "My lash extensions are absolutely perfect! Natural yet glamorous, exactly what I wanted. The artist really listened to what I envisioned and exceeded all my expectations. Wake up beautiful every day!",
    rating: 5,
    service: "Volume Lash Extensions",
    date: "October 2024",
  },
  {
    name: "Olivia Williams",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop",
    text: "I was nervous about waxing, but the therapist made me feel so comfortable. The technique was gentle yet effective, and my skin has never been smoother. The premium products they use really make a difference!",
    rating: 5,
    service: "Full Body Waxing",
    date: "October 2024",
  },
  {
    name: "Ava Johnson",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    text: "The Royal Signature Facial was worth every penny! My skin looked years younger after just one session. The luxurious products and expert technique combined made this an unforgettable experience.",
    rating: 5,
    service: "Royal Signature Facial",
    date: "September 2024",
  },
  {
    name: "Mia Davis",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    text: "Been coming here for over a year and the quality never disappoints. The nail art is stunning, the staff remembers my preferences, and the salon is always immaculate. This is my happy place!",
    rating: 5,
    service: "Nail Art & Design",
    date: "September 2024",
  },
  {
    name: "Charlotte Brown",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    text: "Found my forever salon! The hybrid lashes are so lightweight I forget I'm wearing them, but I still look polished and put together. The retention is amazing too - 3+ weeks and still looking full!",
    rating: 5,
    service: "Hybrid Lash Set",
    date: "August 2024",
  },
  {
    name: "Amelia Garcia",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    text: "The attention to hygiene here is outstanding. Every tool is sterilized, and they use fresh supplies for each client. As someone who values cleanliness, this gives me complete peace of mind.",
    rating: 5,
    service: "Gel Extensions",
    date: "August 2024",
  },
  {
    name: "Harper Wilson",
    image: "https://images.unsplash.com/photo-1502323777036-f29e3972f82c?w=200&h=200&fit=crop",
    text: "Treated myself to a full pamper day and left feeling like a queen! The coordination between services was seamless, and every single treatment exceeded expectations. Pure luxury from start to finish.",
    rating: 5,
    service: "Full Pamper Package",
    date: "July 2024",
  },
];

const Testimonials = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Client Love"
              title="Real Stories, Real Results"
              subtitle="Don't just take our word for it — hear from the thousands of happy clients who've experienced the PolishedNailss difference."
            />

            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16 mt-8">
              {[
                { number: "10,000+", label: "Happy Clients" },
                { number: "5.0", label: "Average Rating" },
                { number: "250+", label: "5-Star Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-plum">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-plum text-champagne relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
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
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto text-gold/30 mb-6" />
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8">
              "PolishedNailss has completely transformed my self-care routine. The quality, 
              the atmosphere, the attention to detail — everything is simply unmatched. 
              This isn't just a salon; it's a sanctuary."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                alt="Featured client"
                className="w-16 h-16 rounded-full border-2 border-gold"
              />
              <div className="text-left">
                <p className="font-semibold text-champagne">Sophia Martinez</p>
                <p className="text-gold text-sm">VIP Member since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={cn(
                  "bg-card p-6 rounded-2xl border border-border/50 relative overflow-hidden",
                  "hover:shadow-card transition-all duration-500",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gold Quote */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-gold/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={cn(
                        i < testimonial.rating
                          ? "text-gold fill-gold"
                          : "text-border"
                      )}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-gold/30 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-plum">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.service} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      {/* <section className="py-16 bg-blush">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Watch & Listen"
            title="Video Testimonials"
            subtitle="See the transformations and hear directly from our happy clients."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-charcoal/10 rounded-2xl relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1560066984-138dadb4c035"
                      : i === 2
                      ? "1522337360788-8b13dee7a37e"
                      : "1519415510236-718bdfcd89c8"
                  }?w=600&h=340&fit=crop`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-plum/40 group-hover:bg-plum/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-gold">
                    <Play className="w-6 h-6 text-charcoal ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            badge="Your Turn"
            title="Ready to Experience the Magic?"
            subtitle="Join our family of happy clients and discover why PolishedNailss is Beverly Hills' favorite beauty destination."
          />
          <Link to="/booking">
            <Button variant="hero" size="lg" className="gold-shimmer">
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

export default Testimonials;
