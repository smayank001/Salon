import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  delay?: number;
}

export const ServiceCard = ({
  title,
  description,
  image,
  icon,
  href,
  className,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group premium-card gold-border overflow-hidden cursor-pointer",
        "opacity-0 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={href} className="block">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          
          {/* Gold Shimmer Overlay on Hover */}
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-champagne/90 backdrop-blur-sm flex items-center justify-center text-plum shadow-soft group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-2xl font-semibold text-plum mb-2 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-gold font-medium text-sm">
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </div>
  );
};
