import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const separatorRef = useRef<HTMLHRElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const hasRevealed = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // ═══════════════════════════════════════════════════════════
  // Reduced motion detection
  // ═══════════════════════════════════════════════════════════
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ═══════════════════════════════════════════════════════════
  // Block reveal
  // ═══════════════════════════════════════════════════════════
  useEffect(() => {
    if (reducedMotion) return;

    let headingSplit: SplitType | null = null;

    const runReveal = () => {
      if (hasRevealed.current) return;
      if (
        !headingRef.current ||
        !separatorRef.current ||
        !detailsRef.current ||
        !bodyRef.current ||
        !portraitRef.current
      )
        return;

      hasRevealed.current = true;

      headingSplit = new SplitType(headingRef.current, { types: "chars" });
      const tl = gsap.timeline();
      tlRef.current = tl;

      // 1. Heading — chars rise up
      tl.to(headingRef.current, { opacity: 1, duration: 0.01 }).from(
        headingSplit.chars,
        {
          opacity: 0,
          y: 60,
          stagger: 0.04,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // 2. Separator line — draw from center
      tl.fromTo(
        separatorRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.3",
      );

      // 3. Detail columns — fade up
      if (detailsRef.current) {
        const items = gsap.utils.toArray(
          detailsRef.current.children,
        ) as HTMLElement[];
        tl.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      // 4. Body text — fade up
      tl.fromTo(
        bodyRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3",
      );

      // 5. Portrait — scale reveal
      tl.fromTo(
        portraitRef.current,
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=0.4",
      );
    };

    const handleLoadingComplete = () => {
      setTimeout(runReveal, 500);
    };

    // HMR reload: app already loaded, reveal immediately
    if ((window as any).__heroReady) {
      const timer = setTimeout(runReveal, 300);
      return () => {
        clearTimeout(timer);
        headingSplit?.revert();
        tlRef.current?.kill();
      };
    }

    // Initial load: wait for loading:complete event
    window.addEventListener("loading:complete", handleLoadingComplete);

    return () => {
      window.removeEventListener("loading:complete", handleLoadingComplete);
      headingSplit?.revert();
      tlRef.current?.kill();
    };
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden z-10 bg-white"
    >
      <div className="container w-full max-w-5xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col lg:items-center pt-12 md:pt-32 lg:pt-36 pb-12 md:pb-16">
        {/* ── Heading: "Rama Alfin" — large bold sans-serif ── */}
        <h1
          ref={headingRef}
          className="font-hero text-9xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-wider leading-[0.9] text-left lg:text-center"
          style={{ color: "#000", opacity: 0 }}
        >
          Rama <br className="sm:hidden" /> Alfin
        </h1>

        {/* ── Thin separator line ── */}
        <hr
          ref={separatorRef}
          className="w-full max-w-lg border-0 h-px mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12"
          style={{
            backgroundColor: "#d1d1d1",
            opacity: 0,
            transformOrigin: "center",
          }}
        />

        {/* ── Three-column details ── */}
        <div
          ref={detailsRef}
          className="flex flex-col md:flex-row lg:items-center justify-center gap-3 md:gap-8 lg:gap-12 text-left lg:text-center"
        >
          <span
            className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase"
            style={{ color: "#555", opacity: 0 }}
          >
            Frontend Engineer & AI Enthusiast
          </span>
          <span
            className="hidden md:inline font-mono text-sm"
            style={{ color: "#ccc", opacity: 0 }}
          >
            |
          </span>
          <span
            className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase"
            style={{ color: "#555", opacity: 0 }}
          >
            Based in Bogor, Indonesia
          </span>
          <span
            className="hidden md:inline font-mono text-sm"
            style={{ color: "#ccc", opacity: 0 }}
          >
            |
          </span>
          <span
            className="font-mono text-xs md:text-sm tracking-[0.06em] uppercase"
            style={{ color: "#555", opacity: 0 }}
          >
            Working Globally
          </span>
        </div>

        {/* ── Body text paragraph ── */}
        <p
          ref={bodyRef}
          className="font-sans text-base md:text-lg lg:text-xl font-bold leading-relaxed lg:text-center max-w-80 md:max-w-xl lg:max-w-2xl mt-8 md:mt-10 lg:mt-12"
          style={{ color: "#1a1a1a", opacity: 0 }}
        >
          [A visionary Frontend Engineer from Indonesia, showcasing a portfolio
          of visually stunning campaigns that blend artistry and innovation.]
        </p>
      </div>
      {/* ── Portrait — chest up, centered ── */}
      <div
        ref={portraitRef}
        className="relative w-full md:w-auto md:max-w-md lg:max-w-xl md:mx-auto md:mt-14 lg:mt-16 overflow-hidden bg-gray-100 md:bg-transparent"
        style={{ opacity: 0 }}
      >
        <img
          src="/assets/rama-nobg.png"
          alt="Rama Alfin Baehaqi"
          className="w-full h-auto object-cover max-h-[340px] md:max-h-[400px] lg:max-h-[480px]"
          style={{
            objectPosition: "top",
          }}
        />
      </div>
    </section>
  );
};
