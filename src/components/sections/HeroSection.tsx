import { useEffect, useRef, useState } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { gsap } from "gsap";
import SplitType from "split-type";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const slicesContainerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const reducedMotionRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // ── Mouse-follow ambient glow ──
  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;

      gsap.to(glow, {
        opacity: 0.6,
        x: `${x}%`,
        y: `${y}%`,
        duration: 2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 1 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ── Reduced motion detection ──
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ── Block reveal — triggered after loading screen completes ──
  useEffect(() => {
    let headingSplit: SplitType | null = null;

    const runReveal = () => {
      if (!headingRef.current || !taglineRef.current) return;

      headingSplit = new SplitType(headingRef.current, { types: "chars" });
      const tl = gsap.timeline();
      tlRef.current = tl;

      // Act I — Name: 3D character drop-in
      tl.to(headingRef.current, { opacity: 1, duration: 0.01 }).from(
        headingSplit.chars,
        {
          opacity: 0,
          y: 120,
          rotateX: -90,
          stagger: 0.06,
          duration: 1.1,
          ease: "power4.out",
        },
      );

      // Act II — Tagline: blur-in reveal
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // Act III — Horizontal slice glitch reveal (photo)
      const slicesContainer = slicesContainerRef.current;
      if (slicesContainer) {
        const slices = gsap.utils.toArray(
          slicesContainer.children,
        ) as HTMLElement[];

        if (reducedMotionRef.current) {
          gsap.set(slices, { x: "0%" });
          gsap.set(slicesContainer, { opacity: 1 });
        } else {
          // Set initial positions: alternate left/right
          gsap.set(slices, {
            x: (i) => (i % 2 === 0 ? "-120%" : "120%"),
          });
          // Staggered slide-in with back easing for glitchy overshoot
          tl.to(
            slices,
            {
              x: "0%",
              duration: 0.8,
              stagger: 0.06,
              ease: "back.out(1.4)",
            },
            "-=0.6",
          );
          // Fade the container in
          tl.fromTo(
            slicesContainer,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 },
            "-=0.4",
          );
        }
      }
    };

    // Wait for loading screen, then sync with page fade-in (0.4s)
    const handleLoadingComplete = () => {
      setTimeout(runReveal, 500);
    };

    window.addEventListener("loading:complete", handleLoadingComplete);

    return () => {
      window.removeEventListener("loading:complete", handleLoadingComplete);
      headingSplit?.revert();
      tlRef.current?.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 bg-white"
    >
      {/* ── Noise texture — editorial/print luxury feel ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* ── Subtle radial vignette ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(255,255,255,0.4) 100%)",
        }}
      />

      <ParticleBackground />

      {/* ── Mouse-follow ambient glow ── */}
      <div
        ref={glowRef}
        className="absolute z-10 w-[700px] h-[700px] rounded-full pointer-events-none opacity-0"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity",
        }}
      />

      {/* ── Gradient blobs — richer, softer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px] animate-blob" />
        <div
          className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sunset/4 rounded-full blur-[140px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ── Corner accents — framing the composition ── */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-primary/15 z-20 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-primary/15 z-20 hidden lg:block" />

      {/* ── Content ── */}
      <div className="container relative z-20 px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* ── Left Column: Text ── */}
          <div className="text-center lg:text-left">
            {/* Name — hidden until loading completes */}
            <h1
              ref={headingRef}
              className="font-hero text-5xl md:text-8xl lg:text-9xl xl:text-[14rem] font-extrabold tracking-[0.03em] mb-10 [perspective:1000px] leading-[0.9]"
              style={{ transformStyle: "preserve-3d", opacity: 0 }}
            >
              RAMA <br /> ALFIN
            </h1>

            {/* Tagline — hidden until loading completes */}
            <p
              ref={taglineRef}
              className="font-hero text-lg md:text-2xl lg:text-3xl font-medium tracking-[0.12em] text-muted-foreground"
              style={{ opacity: 0 }}
            >
              Bringing digital ideas alive
            </p>

            {/* Mobile photo — visible only below lg breakpoint */}
            <div className="lg:hidden flex items-center justify-center mt-12">
              <img
                src="/assets/rama.png"
                alt="Rama Alfin Baehaqi"
                className="w-3/4 max-w-[280px] h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Right Column: Horizontal Slice Photo (desktop only) ── */}
          <div
            ref={slicesContainerRef}
            className="relative hidden lg:flex items-center justify-center w-full"
            style={{
              minHeight: "clamp(350px, 55vh, 650px)",
              opacity: 0,
            }}
          >
            {Array.from({ length: 8 }, (_, i) => {
              const topInset = (i / 8) * 100;
              const bottomInset = ((8 - 1 - i) / 8) * 100;
              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/assets/rama.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    clipPath: `inset(${topInset}% 0 ${bottomInset}% 0)`,
                    borderRadius: "1rem",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
