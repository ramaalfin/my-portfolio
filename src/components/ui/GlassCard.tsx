import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "gradient";
  hover3D?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "glass", hover3D = false, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          {
            "glass-card": variant === "glass",
            "glass-card-solid": variant === "solid",
            "bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50": variant === "gradient",
            "card-3d": hover3D,
            "hover:glow-primary": glow,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
