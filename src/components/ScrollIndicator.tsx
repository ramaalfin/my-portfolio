import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

export const ScrollIndicator = ({ targetId, className }: ScrollIndicatorProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group",
        className
      )}
      aria-label={`Scroll to ${targetId}`}
    >
      <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
      <div className="scroll-indicator">
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
  );
};
