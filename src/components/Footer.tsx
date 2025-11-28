import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Sparkles,
  Heart
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Book Now", path: "/booking" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Signature Manicures",
  "Luxury Pedicures",
  "Gel Extensions",
  "Hydrating Facials",
  "Eyelash Extensions",
  "Premium Waxing",
];

export const Footer = () => {
  return (
    <footer className="bg-plum text-champagne relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-champagne">
                PolishedNailss
              </h3>
              <p className="text-gold text-sm tracking-widest uppercase mt-1">
                Luxury Beauty
              </p>
            </div>
            <p className="text-champagne/70 leading-relaxed">
              Experience the art of self-care at its finest. Where luxury meets 
              precision, and every visit becomes a cherished ritual.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-champagne/70 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <Sparkles size={12} className="text-gold/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-medium text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-champagne/70 flex items-center gap-2">
                    <Sparkles size={12} className="text-gold/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-medium text-gold mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-champagne/70">
                  123 Luxury Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+15551234567" className="text-champagne/70 hover:text-gold transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@polishednailss.com" className="text-champagne/70 hover:text-gold transition-colors">
                  hello@polishednailss.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-champagne/70 text-sm">
                  <p>Mon - Fri: 9AM - 7PM</p>
                  <p>Saturday: 10AM - 6PM</p>
                  <p>Sunday: 11AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-champagne/50 text-sm">
              © {new Date().getFullYear()} PolishedNailss. All rights reserved.
            </p>
            {/* <p className="text-champagne/50 text-sm flex items-center gap-1">
              Crafted with <Heart size={14} className="text-gold" /> for beauty lovers
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
