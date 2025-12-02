import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    content: "11434 Olio Rd\nFishers, IN 46037",
    link: "https://maps.google.com/maps?q=11434+Olio+Rd,+Fishers,+IN+46037",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    content: "+1 317-577-7888",
    link: "tel:+13175777888",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "hello@polishednails.com",
    link: "mailto:hello@polishednails.com",
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:30 AM - 7:30 PM" },
  { day: "Saturday", time: "9:00 AM - 7:00 PM" },
  { day: "Sunday", time: "11:00 AM - 5:00 PM" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const phoneNumber = "+1 317-577-7888";
    const message = `*New Message from PolishedNails Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Show success message
    toast.success("Redirecting to WhatsApp!", {
      description: "WhatsApp will open with your message pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Get in Touch"
              title="We'd Love to Hear From You"
              subtitle="Questions, feedback, or just want to say hello? Our team is here to help make your beauty experience exceptional."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl font-semibold text-plum mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 border-border focus:border-plum focus:ring-plum/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 border-border focus:border-plum focus:ring-plum/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 317-577-7888"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12 border-border focus:border-plum focus:ring-plum/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      required
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="h-12 border-border focus:border-plum focus:ring-plum/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="border-border focus:border-plum focus:ring-plum/20"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl font-semibold text-plum mb-6">
                Contact Information
              </h2>

              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-plum group-hover:bg-plum group-hover:text-champagne transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-blush rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <h3 className="font-serif text-xl font-semibold text-plum">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-foreground">{item.day}</span>
                      <span className="font-medium text-plum">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-blush relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3249414407596!2d-85.92195482401175!3d39.956487171517296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ca64a4d3ffff%3A0x5f02cc043bfc026f!2s11434%20Olio%20Rd%2C%20Fishers%2C%20IN%2046037%2C%20USA!5e0!3m2!1sen!2sin!4v1764701883043!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PolishedNails Location"
          className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-plum text-champagne relative overflow-hidden">
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionHeading
            badge="Stay Connected"
            title="Join Our VIP List"
            subtitle="Be the first to know about exclusive offers, new services, and beauty tips."
            light
          />
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-14 bg-champagne/10 border-gold/30 text-champagne placeholder:text-champagne/50 focus:border-gold"
            />
            <Button variant="gold" size="lg" className="gold-shimmer">
              <Sparkles className="w-4 h-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
