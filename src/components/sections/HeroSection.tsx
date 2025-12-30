import { useEffect, useRef, useState } from "react";
import { Typewriter, GradientText } from "@/components/ui/AnimatedText";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MapPin, Mail, Linkedin, Github, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 1500);
    const timer2 = setTimeout(() => setShowCTA(true), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
          <div
            className="mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              Available for new opportunities
            </span>
          </div>

          {/* Main Heading with Typewriter */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            <span className="block text-foreground">
              <Typewriter text="Rama Alfin Baehaqi" speed={80} />
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className={cn(
              "transition-all duration-[5000ms] ease-smooth",
              showSubtitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              <GradientText animate>Front-End Developer</GradientText>
            </p>
            {/* <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Transforming ideas into high-performance digital experiences with
              <span className="text-primary"> React.js</span>,
              <span className="text-accent"> Next.js</span>, and
              <span className="text-forest"> React Native</span>
            </p> */}
          </div>

          {/* Location */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 mb-8 transition-all duration-700 ease-smooth",
              showSubtitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bogor, Indonesia
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-smooth",
              showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
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
            className={cn(
              "flex items-center justify-center gap-4 mt-12 mb-20 transition-all duration-700 ease-smooth",
              showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
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
