import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "gradient";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "solid", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg transition-all duration-300",
          {
            "glass-card": variant === "glass",
            "glass-card-solid": variant === "solid",
            "bg-gradient-to-br from-surface/90 to-surface-alt/70 backdrop-blur-xl border border-border/50": variant === "gradient",
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
