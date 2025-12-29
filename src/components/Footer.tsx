import { Heart, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-serif text-2xl inline-block mb-2">
              <span className="gradient-text">R</span>
              <span className="text-foreground">ama</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rama Alfin Baehaqi. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={cn(
              "p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300",
              "hover:scale-110 hover:shadow-lg"
            )}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
