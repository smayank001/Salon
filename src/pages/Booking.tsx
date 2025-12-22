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

type ServiceCategory = "facials" | "lashes" | "waxing" | "nails";
// | "manicures-pedicures";
// Add this interface to define the service structure
interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  womenOnly?: boolean;
}

// Update the serviceOptions type to include new services
const serviceOptions: Record<ServiceCategory, Service[]> = {
  facials: [
    {
      id: "express-facial",
      name: "Express Facial",
      price: 40,
      duration: "20 min",
    },
    {
      id: "herbal-facial",
      name: "Herbal Facial",
      price: 50,
      duration: "25 min",
    },
    {
      id: "gold-facial",
      name: "Gold Facial",
      price: 60,
      duration: "40 min",
    },
    {
      id: "deep-cleaning-facial",
      name: "Deep Cleaning Facial",
      price: 95,
      duration: "45 min",
    },
    {
      id: "seaweed-facial",
      name: "Seaweed Facial",
      price: 100,
      duration: "45 min",
    },
    {
      id: "acne-facial",
      name: "Acne Facial",
      price: 95,
      duration: "45 min",
    },
    {
      id: "body-scrub",
      name: "Body Scrub (Only Women)",
      price: 200,
      duration: "2 hours",
      womenOnly: true,
    },
    {
      id: "micro-dermabrasion",
      name: "Micro Dermabrasion",
      price: 150,
      duration: "1 hour",
    },
    {
      id: "micro-needling",
      name: "Micro Needling",
      price: 150,
      duration: "1 hour",
    },
    {
      id: "hydra-facial-basic",
      name: "Hydra-Facial (Basic)",
      price: 200,
      duration: "1 hour 25 min",
    },
    {
      id: "hydra-facial-serum",
      name: "Hydra-Facial (Serum)",
      price: 275,
      duration: "1 hour 25 min",
    },
    {
      id: "hydra-facial-cupping",
      name: "Hydra-Facial (Cupping)",
      price: 350,
      duration: "1 hour 25 min",
    },
    {
      id: "derma-planing",
      name: "Derma-Planing",
      price: 75,
      duration: "45 min",
    },
  ],
  lashes: [
    // Updated Eyelash New Set prices (reduced by $20)
    {
      id: "classic-set",
      name: "Classic set",
      price: 90,
      duration: "90 min",
    },
    {
      id: "yy-mink",
      name: "YY mink",
      price: 95,
      duration: "90 min",
    },
    {
      id: "2-tips-mascara-look",
      name: "2 tips mascara look",
      price: 100,
      duration: "90 min",
    },
    {
      id: "natural-volume",
      name: "Natural volume",
      price: 110,
      duration: "90 min",
    },
    {
      id: "wispy-natural-volume",
      name: "Wispy natural volume",
      price: 120,
      duration: "90 min",
    },
    {
      id: "full-volume",
      name: "Full volume",
      price: 125,
      duration: "90 min",
    },
    {
      id: "wispy-full-volume",
      name: "Wispy full volume",
      price: 140,
      duration: "90 min",
    },
    {
      id: "maga-volume",
      name: "Maga volume",
      price: 200,
      duration: "90 min",
    },
    {
      id: "wispy-mega-volume",
      name: "Wispy mega volume",
      price: 150,
      duration: "90 min",
    },
    {
      id: "fairy-set",
      name: "Fairy set",
      price: 120,
      duration: "90 min",
    },
    {
      id: "designed-set",
      name: "Designed set",
      price: 120,
      duration: "90 min",
    },
    // Other lash services (unchanged)
    {
      id: "lash-fills",
      name: "Lash Fills (2 weeks)",
      price: 65,
      duration: "45 min",
    },
    {
      id: "lash-lift",
      name: "Lash Lift & Tint",
      price: 85,
      duration: "60 min",
    },
  ],
  waxing: [
    { id: "eyebrows", name: "Eyebrows", price: 17, duration: "" },
    { id: "full-legs", name: "Full Legs", price: 62, duration: "" },
    { id: "chin", name: "Chin", price: 14, duration: "" },
    { id: "sideburns", name: "Sideburns", price: 15, duration: "" },
    { id: "whole-face", name: "Whole Face", price: 62, duration: "" },
    {
      id: "half-legs",
      name: "Half Legs (Upper or Lower)",
      price: 52,
      duration: "",
    },
    { id: "upper-lips", name: "Upper Lips", price: 12, duration: "" },
    { id: "under-arms", name: "Under Arms", price: 27, duration: "" },
    { id: "full-arms", name: "Full Arms", price: 52, duration: "" },
    { id: "half-arms", name: "Half Arms", price: 37, duration: "" },
    { id: "bikini", name: "Bikini", price: 52, duration: "", womenOnly: true },
  ],
  nails: [
    // Manicure Services
    {
      id: "classic-manicure",
      name: "Classic Manicure",
      price: 25,
      duration: "30 min",
    },
    {
      id: "deluxe-manicure",
      name: "Deluxe Manicure",
      price: 40,
      duration: "45 min",
    },
    {
      id: "add-gel-polish-to-any-manicure",
      name: "Add Gel Polish to Any Manicure",
      price: 15,
      duration: "15 min",
    },
    // Princess Menu
    {
      id: "princess-manicure",
      name: "Princess Manicure",
      price: 20,
      duration: "20 min",
    },
    {
      id: "princess-pedicure",
      name: "Princess Pedicure",
      price: 30,
      duration: "30 min",
    },
    {
      id: "princess-combo",
      name: "Princess Combo",
      price: 40,
      duration: "50 min",
    },
    // Pedicure Services
    {
      id: "classic-pedicure",
      name: "Classic Pedicure",
      price: 40,
      duration: "45 min",
    },
    {
      id: "deluxe-pedicure",
      name: "Deluxe Pedicure",
      price: 52,
      duration: "60 min",
    },
    {
      id: "hot-spring-organic-spa-pedicure",
      name: "Hot Spring Organic Spa Pedicure",
      price: 57,
      duration: "45 min",
    },
    {
      id: "signature-pedicure",
      name: "Signature Pedicure",
      price: 62,
      duration: "50 min",
    },
    {
      id: "ultimate-pedicure",
      name: "Ultimate Pedicure",
      price: 72,
      duration: "60 min",
    },
    {
      id: "add-gel-polish-to-any-pedicure",
      name: "Add Gel Polish to Any Pedicure",
      price: 15,
      duration: "15 min",
    },
    // Acrylic Services
    {
      id: "acrylic-full-set",
      name: "Acrylic Full Set",
      price: 38,
      duration: "60 min",
    },
    // Organic Dipping Powder Services
    {
      id: "over-natural-nails",
      name: "Over Natural Nails",
      price: 48,
      duration: "60 min",
    },
    // Gel X Services
    {
      id: "full-set-gel-x",
      name: "Full Set (Gel X)",
      price: 65,
      duration: "75 min",
    },
    {
      id: "fill-in-gel-x",
      name: "Fill In (Gel X)",
      price: 55,
      duration: "60 min",
    },
    {
      id: "with-manicure-add",
      name: "With Manicure Add",
      price: 10,
      duration: "30 min",
    },
  ],
  // "manicures-pedicures": [
  //   // Manicure Services
  //   {
  //     id: "mp-classic-manicure",
  //     name: "Classic Manicure",
  //     price: 25,
  //     duration: "30 min",
  //   },
  //   {
  //     id: "mp-deluxe-manicure",
  //     name: "Deluxe Manicure",
  //     price: 40,
  //     duration: "45 min",
  //   },
  //   {
  //     id: "mp-add-gel-polish-to-any-manicure",
  //     name: "Add Gel Polish to Any Manicure",
  //     price: 15,
  //     duration: "15 min",
  //   },
  //   // Princess Menu
  //   {
  //     id: "mp-princess-manicure",
  //     name: "Princess Manicure",
  //     price: 20,
  //     duration: "20 min",
  //   },
  //   {
  //     id: "mp-princess-pedicure",
  //     name: "Princess Pedicure",
  //     price: 30,
  //     duration: "30 min",
  //   },
  //   {
  //     id: "mp-princess-combo",
  //     name: "Princess Combo",
  //     price: 40,
  //     duration: "50 min",
  //   },
  //   // Pedicure Services
  //   {
  //     id: "mp-classic-pedicure",
  //     name: "Classic Pedicure",
  //     price: 40,
  //     duration: "45 min",
  //   },
  //   {
  //     id: "mp-deluxe-pedicure",
  //     name: "Deluxe Pedicure",
  //     price: 52,
  //     duration: "60 min",
  //   },
  //   {
  //     id: "mp-hot-spring-organic-spa-pedicure",
  //     name: "Hot Spring Organic Spa Pedicure",
  //     price: 57,
  //     duration: "45 min",
  //   },
  //   {
  //     id: "mp-signature-pedicure",
  //     name: "Signature Pedicure",
  //     price: 62,
  //     duration: "50 min",
  //   },
  //   {
  //     id: "mp-ultimate-pedicure",
  //     name: "Ultimate Pedicure",
  //     price: 72,
  //     duration: "60 min",
  //   },
  //   {
  //     id: "mp-add-gel-polish-to-any-pedicure",
  //     name: "Add Gel Polish to Any Pedicure",
  //     price: 15,
  //     duration: "15 min",
  //   },
  // ],
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
    {
      id: "nails" as ServiceCategory,
      name: "Nails",
      icon: <Gem className="w-6 h-6" />,
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

    // Calculate base total
    let total = selectedServices.reduce((sum, serviceId) => {
      const service = serviceOptions[selectedCategory].find(
        (s) => s.id === serviceId
      );
      return sum + (service?.price || 0);
    }, 0);

    // Apply Derma-Planing + Hydra-Facial discount rule
    const hasDermaPlaning = selectedServices.includes("derma-planing");
    const hasHydraFacial = selectedServices.some((id) =>
      id.startsWith("hydra-facial")
    );

    if (hasDermaPlaning && hasHydraFacial) {
      // Apply 50% discount on Derma-Planing
      const dermaPlaningService = serviceOptions.facials.find(
        (s) => s.id === "derma-planing"
      );
      const discount = (dermaPlaningService?.price || 0) * 0.5;
      total -= discount;
    }

    return total;
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
    // Prepare booking details for email
    const serviceNames = selectedServices
      .map(
        (id) =>
          serviceOptions[selectedCategory!]?.find((s) => s.id === id)?.name
      )
      .join(", ");

    const bookingDetails = {
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone,
      services: serviceNames,
      appointmentDate: selectedDate?.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
      appointmentTime: selectedTime,
      totalAmount: calculateTotal(),
      specialNotes: formData.notes,
    };

    // Create mailto link with pre-filled content
    const subject = `Appointment Booking - ${bookingDetails.clientName}`;
    const body = `
Hello,

I would like to book an appointment with PolishedNails. Here are my details:

Name: ${bookingDetails.clientName}
Email: ${bookingDetails.clientEmail}
Phone: ${bookingDetails.clientPhone}
Services: ${bookingDetails.services}
Date: ${bookingDetails.appointmentDate}
Time: ${bookingDetails.appointmentTime}
Total Amount: $${bookingDetails.totalAmount}

Special Notes:
${bookingDetails.specialNotes || "None"}

Please confirm this appointment at your earliest convenience.

Thank you!
    `.trim();

    // Encode subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=polishednails11434@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank");

    // Show success message
    toast.success("Redirecting to Gmail!", {
      description: "Please send the email to complete your booking.",
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                                {service.womenOnly && (
                                  <span className="ml-2 text-xs bg-plum/10 text-plum px-2 py-1 rounded">
                                    Women Only
                                  </span>
                                )}
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
                          date <
                            new Date(
                              new Date().setDate(new Date().getDate() - 1)
                            ) || date.getDay() === 0
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
                    {/* Show discount message if applicable */}
                    {selectedServices.includes("derma-planing") &&
                      selectedServices.some((id) =>
                        id.startsWith("hydra-facial")
                      ) && (
                        <div className="text-sm text-muted-foreground italic">
                          50% discount applied on Derma-Planing when booked with
                          Hydra-Facial
                        </div>
                      )}
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
