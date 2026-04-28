import { useEffect, useRef } from "react";
import { GradientText } from "@/components/ui/AnimatedText";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { gsap } from "gsap";
import SplitType from "split-type";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Split heading text into characters
    const split = new SplitType(headingRef.current, { types: "chars" });

    // Create master timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate greeting badge
    tl.from(greetingRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });

    // Animate heading characters with 3D rotation
    tl.from(
      split.chars,
      {
        opacity: 0,
        y: 60,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    // Animate subtitle
    tl.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Animate location
    tl.from(
      locationRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate CTA buttons
    tl.from(
      ctaRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate social links
    tl.from(
      socialRef.current?.children || [],
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    // Cleanup
    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden  z-10"
    >
      <ParticleBackground />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sunset/5 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div ref={greetingRef} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              Available for new opportunities
            </span>
          </div>

          {/* Main Heading — SplitType + GSAP per char */}
          <h1
            ref={headingRef}
            className="font-display text-4xl md:text-7xl lg:text-8xl tracking-tight mb-6 [perspective:800px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="block text-foreground">
              Rama Alfin Baehaqi
            </span>
          </h1>

          {/* Subtitle */}
          <div ref={subtitleRef}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              <GradientText animate>Frontend Engineer</GradientText>
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Delivering production-grade web and mobile applications with
              <span className="text-primary"> React.js</span>,
              <span className="text-accent"> Next.js</span>, and
              <span className="text-forest"> TypeScript</span>
            </p>
          </div>

          {/* Location */}
          <div ref={locationRef} className="flex items-center justify-center gap-4 mb-8">
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bogor, Indonesia
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-haptic group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-sunset to-primary bg-[length:200%_100%] transition-all duration-500 group-hover:bg-right" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-haptic px-8 py-4 rounded-full glass-card font-medium text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className="flex items-center justify-center gap-4 mt-12 mb-20"
          >
            {[
              {
                icon: Mail,
                href: "mailto:ramaalfin7@gmail.com",
                label: "Email",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/rama-alfin-baehaqi",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/ramaalfin",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-muted/50 hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ScrollIndicator targetId="about" />
        </div>
      </div>
    </section>
  );
};
