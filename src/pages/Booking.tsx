import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Sparkles,
  Gem,
  Flower2,
  Star,
  Heart,
  Check,
  CalendarDays,
  Clock,
  User,
  ChevronRight,
} from "lucide-react";

type ServiceCategory = "nails" | "facials" | "lashes" | "waxing";

const serviceOptions = {
  nails: [
    {
      id: "classic-mani",
      name: "Classic Manicure",
      price: 35,
      duration: "30 min",
    },
    {
      id: "signature-mani",
      name: "Signature Manicure",
      price: 55,
      duration: "45 min",
    },
    { id: "gel-mani", name: "Gel Manicure", price: 65, duration: "50 min" },
    {
      id: "luxury-pedi",
      name: "Luxury Pedicure",
      price: 75,
      duration: "60 min",
    },
    { id: "gel-ext", name: "Gel Extensions", price: 95, duration: "90 min" },
  ],
  facials: [
    {
      id: "express-glow",
      name: "Express Glow Facial",
      price: 85,
      duration: "30 min",
    },
    {
      id: "hydrating",
      name: "Hydrating Facial",
      price: 120,
      duration: "60 min",
    },
    {
      id: "anti-aging",
      name: "Anti-Aging Treatment",
      price: 150,
      duration: "75 min",
    },
    {
      id: "royal-facial",
      name: "Royal Signature Facial",
      price: 200,
      duration: "90 min",
    },
  ],
  lashes: [
    {
      id: "classic-full",
      name: "Classic Full Set",
      price: 150,
      duration: "90 min",
    },
    {
      id: "hybrid-full",
      name: "Hybrid Full Set",
      price: 180,
      duration: "120 min",
    },
    {
      id: "volume-full",
      name: "Volume Full Set",
      price: 220,
      duration: "150 min",
    },
    {
      id: "lash-lift",
      name: "Lash Lift & Tint",
      price: 85,
      duration: "60 min",
    },
  ],
  waxing: [
    { id: "brow", name: "Eyebrow Shaping", price: 25, duration: "15 min" },
    { id: "lip-chin", name: "Lip & Chin", price: 20, duration: "15 min" },
    { id: "full-face", name: "Full Face", price: 55, duration: "30 min" },
    { id: "brazilian", name: "Brazilian", price: 65, duration: "30 min" },
  ],
};

const timeSlots = ["9:30 AM - 7:30 PM"];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const categories = [
    {
      id: "nails" as ServiceCategory,
      name: "Nails",
      icon: <Gem className="w-6 h-6" />,
    },
    {
      id: "facials" as ServiceCategory,
      name: "Facials",
      icon: <Flower2 className="w-6 h-6" />,
    },
    {
      id: "lashes" as ServiceCategory,
      name: "Lashes",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: "waxing" as ServiceCategory,
      name: "Waxing",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    if (!selectedCategory) return 0;
    return selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions[selectedCategory].find(
        (s) => s.id === serviceId
      );
      return total + (service?.price || 0);
    }, 0);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedCategory && selectedServices.length > 0;
      case 2:
        return selectedDate && selectedTime;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    // Show success message without email notification
    toast.success("Booking Request Submitted!", {
      description: "We'll confirm your appointment shortly.",
    });

    // Reset form
    setStep(1);
    setSelectedCategory(null);
    setSelectedServices([]);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Book Now"
              title="Schedule Your Beauty Ritual"
              subtitle="Four simple steps to secure your spot at PolishedNails."
            />

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                      step >= s
                        ? "bg-plum text-champagne"
                        : "bg-blush text-muted-foreground"
                    )}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 4 && (
                    <div
                      className={cn(
                        "w-12 md:w-20 h-1 mx-2 rounded transition-colors duration-300",
                        step > s ? "bg-plum" : "bg-blush"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
              {/* Step 1: Choose Service */}
              {step === 1 && (
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-plum mb-2">
                    Choose Your Service
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Select a category and pick the services you'd like.
                  </p>

                  {/* Categories */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedServices([]);
                        }}
                        className={cn(
                          "p-6 rounded-xl border-2 transition-all duration-300 text-center",
                          selectedCategory === cat.id
                            ? "border-gold bg-blush shadow-gold"
                            : "border-border hover:border-gold/50 hover:bg-blush/50"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors",
                            selectedCategory === cat.id
                              ? "bg-plum text-champagne"
                              : "bg-plum/10 text-plum"
                          )}
                        >
                          {cat.icon}
                        </div>
                        <span className="font-medium text-foreground">
                          {cat.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Services */}
                  {selectedCategory && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground mb-4">
                        Select Services:
                      </h4>
                      {serviceOptions[selectedCategory].map((service) => (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={cn(
                            "w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between",
                            selectedServices.includes(service.id)
                              ? "border-gold bg-blush"
                              : "border-border hover:border-gold/50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                selectedServices.includes(service.id)
                                  ? "border-gold bg-gold text-charcoal"
                                  : "border-border"
                              )}
                            >
                              {selectedServices.includes(service.id) && (
                                <Check className="w-4 h-4" />
                              )}
                            </div>
                            <div className="text-left">
                              <p className="font-medium text-foreground">
                                {service.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {service.duration}
                              </p>
                            </div>
                          </div>
                          <span className="font-serif text-xl font-semibold text-gold">
                            ${service.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-plum mb-2 flex items-center gap-2">
                    <CalendarDays className="w-6 h-6 text-gold" />
                    Select Date & Time
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Choose when you'd like to visit us.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0
                        }
                        className="rounded-xl border border-border p-3"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gold" />
                        Available Times
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "p-3 rounded-lg border-2 font-medium transition-all duration-300",
                              selectedTime === time
                                ? "border-gold bg-blush text-plum"
                                : "border-border hover:border-gold/50 text-foreground"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-plum mb-2 flex items-center gap-2">
                    <User className="w-6 h-6 text-gold" />
                    Your Details
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tell us how to reach you.
                  </p>

                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Special Requests
                      </label>
                      <Textarea
                        placeholder="Any special notes or requests..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-plum mb-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-gold" />
                    Confirm Your Booking
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Review your details before confirming.
                  </p>

                  <div className="bg-blush rounded-xl p-6 space-y-4">
                    <div className="flex justify-between pb-4 border-b border-border/50">
                      <span className="text-muted-foreground">Services</span>
                      <span className="font-medium text-foreground">
                        {selectedServices
                          .map(
                            (id) =>
                              serviceOptions[selectedCategory!]?.find(
                                (s) => s.id === id
                              )?.name
                          )
                          .join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border/50">
                      <span className="text-muted-foreground">Date</span>
                      <span className="font-medium text-foreground">
                        {selectedDate?.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border/50">
                      <span className="text-muted-foreground">Time</span>
                      <span className="font-medium text-foreground">
                        {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border/50">
                      <span className="text-muted-foreground">Name</span>
                      <span className="font-medium text-foreground">
                        {formData.name}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-lg font-medium text-foreground">
                        Total
                      </span>
                      <span className="font-serif text-2xl font-bold text-gold">
                        ${calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="p-6 md:p-8 bg-blush/50 border-t border-border/50 flex justify-between items-center">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                {step === 1 && <div />}

                {step < 4 ? (
                  <Button
                    variant="hero"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={handleSubmit}
                    className="gold-shimmer"
                  >
                    <Sparkles className="w-5 h-5" />
                    Secure My Appointment
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Booking;
