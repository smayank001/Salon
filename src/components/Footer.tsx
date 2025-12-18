import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Heart,
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
                PolishedNails
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
                href="https://www.instagram.com/polishednails2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@polishednails1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                {/* TikTok SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://share.google/MIKSqOLoPmQ783bCE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                </svg>
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
                  11434 Olio Rd
                  <br />
                  Fishers, IN 46037
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+13175777888"
                  className="text-champagne/70 hover:text-gold transition-colors"
                >
                  +1 317-577-7888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:polishednails11434@gmail.com"
                  className="text-champagne/70 hover:text-gold transition-colors"
                >
                  polishednails11434@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-champagne/70 text-sm">
                  <p>Mon - Fri: 9:30AM - 7:30PM</p>
                  <p>Saturday: 9:00AM - 7:00PM</p>
                  <p>Sunday: 11:00AM - 5:00PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-champagne/50 text-sm">
              © {new Date().getFullYear()} PolishedNails. All rights reserved.
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
