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
    content: "polishednails11434@gmail.com",
    link: "mailto:polishednails11434@gmail.com",
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
                    href="https://www.instagram.com/polishednails2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@polishednails1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    {/* TikTok SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://share.google/MIKSqOLoPmQ783bCE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-plum flex items-center justify-center text-champagne hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
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
