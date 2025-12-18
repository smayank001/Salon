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
            <div className="premium-card gold-border rounded-2xl overflow-hidden">
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
                  Specialized hand and foot care treatments for ultimate
                  pampering.
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

      {/* Waxing Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Waxing Services
            </h2>

            <p className="text-muted-foreground text-sm italic mb-6 text-center">
              "+" indicates price may vary based on hair growth
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
                {/* Left Column */}
                <div className="divide-y divide-border/50">
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Eyebrows</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $12+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Full Legs</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $42+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Upper Lips</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $12+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Sideburns</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $12+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Whole Face</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $26+
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="divide-y divide-border/50">
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Half Legs</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $32+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Under Arms</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $17+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Half Arms</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $37+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Full Arms</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $52+
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Acrylic Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Acrylic
            </h2>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Acrylic Full Set
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $45+
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Acrylic Fill In
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $28+
                    </p>
                  </div>
                </div>
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

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Add-Ons
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Add Gel Polish to Any Acrylic Service
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $15
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pink & White Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Pink & White
            </h2>

            <p className="text-muted-foreground text-sm italic mb-6 text-center">
              The classic French / two-tone pink & white look
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Pink & White Full Set
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $58
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Pink & White Fill In
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $40
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Pink Once Fill In
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $40
                    </p>
                  </div>
                </div>
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

      {/* Organic Dipping Powder Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Organic Dipping Powder
            </h2>

            <p className="text-muted-foreground text-sm italic mb-6 text-center">
              Lightweight, long-lasting powder system with minimal odor
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Over Natural Nails
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $48
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Over Natural Nails (French)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $53
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">Full Set</p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $53
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Full Set (French)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $58
                    </p>
                  </div>
                </div>
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

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Add-Ons
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      With Manicure Add
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gel Builder & Gel X Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Gel Builder & Gel X
            </h2>

            <p className="text-muted-foreground text-sm italic mb-6 text-center">
              Stronger, more flexible enhancements for longer-lasting nails
            </p>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Full Set (Gel Builder)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $65
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Fill In (Gel Builder)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $55
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Full Set (Gel X)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $65
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Fill In (Gel X)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $55
                    </p>
                  </div>
                </div>
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

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Add-Ons
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      With Manicure Add
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedicures Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Pedicures
            </h2>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 hover:shadow-lg group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Classic Pedicure
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Trimming and shaping nails, cuticle detailing, callus
                      treatment, sugar scrub, relaxing foot massage and polish.
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $40
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      Premium foot care experience with soak, exfoliation, and
                      relaxing massage.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden mt-1">
                    Hover for details
                  </p>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 hover:shadow-lg group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Deluxe Pedicure
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Classic pedicure plus callus treatment, sugar scrub and
                      paraffin mask for extra softness.
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $52
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      Classic pedicure enhanced with paraffin mask for extra
                      softness and hydration.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden mt-1">
                    Hover for details
                  </p>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 hover:shadow-lg group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Hot Spring Organic Spa Pedicure
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Callus treatment, organic sugar scrub, hot stone massage,
                      mask and collagen treatment (about 45 minutes).
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $57
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      Luxurious spa experience with organic ingredients and hot
                      stone therapy.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden mt-1">
                    Hover for details
                  </p>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 hover:shadow-lg group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Signature Pedicure
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Callus treatment, sugar scrub, hot stone massage, collagen
                      mask and extended massage (about 60 minutes).
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $62
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      Extended pampering session with comprehensive foot care
                      and massage therapy.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden mt-1">
                    Hover for details
                  </p>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 hover:shadow-lg group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Ultimate Pedicure
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The most luxurious option with intensive callus treatment,
                      sugar scrub, paraffin, hot stone massage, collagen mask
                      and extended relaxation time (around 60 minutes total).
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $72
                    </p>
                  </div>
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-card border border-border/50 rounded-lg shadow-lg p-3 z-10">
                    <p className="text-sm text-muted-foreground">
                      The ultimate indulgence with all premium treatments for
                      complete foot rejuvenation.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:hidden mt-1">
                    Hover for details
                  </p>
                </div>
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

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Add-Ons
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium text-foreground">
                      Add Gel Polish to Any Pedicure
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-serif text-xl font-semibold text-gold">
                      $15
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-plum mb-8 text-center">
              Additional Services
            </h2>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 bg-blush border-b border-border/50">
                <h3 className="font-serif text-lg font-semibold text-plum">
                  Services & Pricing
                </h3>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
                {/* Left Column */}
                <div className="divide-y divide-border/50">
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        French Manicure Design
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $10
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Polish Change Hands
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $10
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Polish Change Toes
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $12
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Remove Acrylic
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $15
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Remove Gel Polish Without Service
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $10
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Remove Dip Powder Without Service
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $15
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Nail Art Design
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $5+
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="divide-y divide-border/50">
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">Nail Repair</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $5+
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Paraffin Hands
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $10
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Paraffin Feet
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $15
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Gel Polish Change Hands
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $25
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Gel Polish Change Feet
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $30
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-colors group relative">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-medium text-foreground">
                        Modern Shape (coffin, stiletto, etc.)
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="font-serif text-xl font-semibold text-gold">
                        $5
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Cash Reward Note */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center">
              <p className="font-medium text-foreground">
                <span className="font-bold text-gold">Cash Reward:</span> Any
                full service paid in cash will receive an immediate $2 cash
                reward.
              </p>
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
