import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  image?: string; // Make image optional
  text: string;
  rating: number;
  service: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TestimonialCard = ({
  name,
  image, // image is now optional
  text,
  rating,
  service,
  className,
  style,
}: TestimonialCardProps) => {
  // Get the first letter of the name for the avatar
  const initial = name.charAt(0);

  return (
    <div
      className={cn(
        "bg-card p-8 rounded-2xl border border-border/50 relative overflow-hidden",
        "hover:shadow-card transition-all duration-500",
        className
      )}
      style={style}
    >
      {/* Gold Quote Icon */}
      <div className="absolute top-6 right-6 text-gold/20">
        <Quote size={48} />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={cn(
              "transition-colors",
              i < rating ? "text-gold fill-gold" : "text-border"
            )}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground/80 leading-relaxed mb-6 italic font-light">
        "{text}"
      </p>

      {/* Author Info with Initials */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-plum font-serif text-xl font-bold border-2 border-gold/30">
          {initial}
        </div>
        <div>
          <h4 className="font-serif font-semibold text-plum">{name}</h4>
          <p className="text-sm text-muted-foreground">{service}</p>
        </div>
      </div>
    </div>
  );
};
