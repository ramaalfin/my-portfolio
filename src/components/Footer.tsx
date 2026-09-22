import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-8"
      style={{
        background: "hsl(0 0% 10%)",
        borderTop: "1px solid hsl(0 0% 18%)",
      }}
    >
      <div className="container px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl inline-block font-medium" style={{ letterSpacing: "-1px" }}>
              <span className="text-accent">R</span>
              <span style={{ color: "hsl(0 0% 100%)" }}>ama</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "hsl(0 0% 56%)", letterSpacing: "-0.5px" }}>
            © {new Date().getFullYear()} Rama Alfin Baehaqi. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={cn(
              "p-3 rounded-md transition-all duration-300",
              "hover:scale-110"
            )}
            style={{ background: "hsl(0 0% 7%)" }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" style={{ color: "hsl(0 0% 64%)" }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
