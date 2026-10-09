import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Experiences", href: "#experiences" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Hide navbar in hero, reveal when scrolled
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    gsap.set(container, { yPercent: -100 });

    const st = ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top",
      onEnter: () => {
        gsap.to(container, {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      onLeaveBack: () => {
        gsap.to(container, {
          yPercent: -100,
          duration: 0.6,
          ease: "power3.in",
          overwrite: "auto",
        });
      },
    });

    const onLoadingDone = () => {
      setTimeout(() => ScrollTrigger.refresh(), 600);
    };
    window.addEventListener("loading:complete", onLoadingDone);

    return () => {
      st.kill();
      window.removeEventListener("loading:complete", onLoadingDone);
    };
  }, []);

  // Scroll progress + active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Drawer open/close with GSAP
  useEffect(() => {
    const drawer = drawerRef.current;
    const overlay = overlayRef.current;
    if (!drawer || !overlay) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(drawer, { x: "100%" });
      gsap.set(overlay, { opacity: 0, display: "none" });
      gsap.to(overlay, {
        opacity: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(drawer, {
        x: "0%",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "";
      gsap.to(drawer, {
        x: "100%",
        duration: 0.35,
        ease: "power3.in",
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <div ref={navContainerRef} className="fixed top-0 left-0 right-0 z-40">
        {/* Scroll Progress */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="px-4 md:px-6 pt-3">
          <div
            className={cn(
              "liquid-glass flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 transition-all duration-500",
              isOpen && "liquid-glass-active"
            )}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
            >
              <span
                className="text-xl font-medium"
                style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
              >
                Rama
              </span>
            </a>

            {/* Hamburger — 2 lines */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col items-end justify-center gap-[6px]"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block h-[1.5px] rounded-full transition-all duration-300",
                  isOpen ? "w-5 rotate-45 translate-y-[3.75px]" : "w-6"
                )}
                style={{ background: "hsl(0 0% 100%)" }}
              />
              <span
                className={cn(
                  "block h-[1.5px] rounded-full transition-all duration-300",
                  isOpen ? "w-5 -rotate-45 -translate-y-[3.75px]" : "w-4"
                )}
                style={{ background: "hsl(0 0% 100%)" }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Overlay ── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0, 0, 0, 0.6)", display: "none" }}
        onClick={() => setIsOpen(false)}
      />

      {/* ── Drawer ── */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-[280px] md:w-[320px] flex flex-col"
        style={{
          background: "hsl(0 0% 6%)",
          borderLeft: "1px solid hsl(0 0% 14%)",
          transform: "translateX(100%)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5">
          <span
            className="text-xl font-medium"
            style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
          >
            Rama
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
            style={{ color: "hsl(0 0% 64%)" }}
            aria-label="Close menu"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Drawer Divider */}
        <div style={{ borderTop: "1px solid hsl(0 0% 14%)" }} />

        {/* Nav Links */}
        <div className="flex-1 flex flex-col px-5 md:px-8 py-6 gap-1">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "py-3 text-base font-medium transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                )}
                style={{ letterSpacing: "-0.5px" }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="px-5 md:px-8 py-6" style={{ borderTop: "1px solid hsl(0 0% 14%)" }}>
          <p className="text-xs" style={{ color: "hsl(0 0% 40%)", letterSpacing: "-0.5px" }}>
            © {new Date().getFullYear()} Rama Alfin Baehaqi
          </p>
        </div>
      </div>
    </>
  );
};
