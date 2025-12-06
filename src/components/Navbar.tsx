import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-champagne/95 backdrop-blur-md shadow-soft py-2"
            : "bg-transparent py-3"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center relative group">
            <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/logopn-removebg.jpg"
              alt="Polished Nails Logo"
              className="h-20 w-auto object-contain relative"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "gold-underline text-sm font-medium tracking-wide transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-charcoal"
                    : isScrolled
                    ? "text-charcoal hover:text-gold"
                    : "text-charcoal/80 hover:text-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking">
              <Button variant="hero" size="sm" className="ml-2">
                <Sparkles className="w-4 h-4" />
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-plum shadow-2xl transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "py-4 text-lg font-medium tracking-wide border-b border-gold/20 transition-all duration-300",
                    "animate-slide-in-right",
                    location.pathname === link.path
                      ? "text-charcoal"
                      : "text-champagne hover:text-charcoal hover:pl-2"
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-gold/60" />
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/booking" className="block">
                <Button variant="gold" size="lg" className="w-full">
                  <Sparkles className="w-5 h-5" />
                  Book Your Ritual
                </Button>
              </Link>
            </div>
            <div className="mt-auto pb-8">
              <p className="text-champagne/60 text-sm text-center">
                ✨ 5-Star Rated Salon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
