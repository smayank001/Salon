import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4",
            "opacity-0 animate-fade-in",
            light
              ? "bg-champagne/20 text-champagne"
              : "bg-blush text-plum"
          )}
        >
          <Sparkles className="w-4 h-4 text-gold" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight",
          "opacity-0 animate-fade-in-up",
          light ? "text-champagne" : "text-plum"
        )}
        style={{ animationDelay: "100ms" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl leading-relaxed",
            "opacity-0 animate-fade-in-up",
            centered && "mx-auto",
            light ? "text-champagne/70" : "text-muted-foreground"
          )}
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>
      )}
      
      {/* Decorative Gold Line */}
      <div
        className={cn(
          "mt-6 flex items-center gap-3",
          centered && "justify-center",
          "opacity-0 animate-fade-in"
        )}
        style={{ animationDelay: "300ms" }}
      >
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold" />
        <Sparkles className="w-4 h-4 text-gold" />
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold" />
      </div>
    </div>
  );
};
