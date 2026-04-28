import { useEffect, useRef } from "react";
import { RevealText } from "../ui/AnimatedText";
import { MapPin, ChevronRight, Briefcase, Code, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experiences";

// Icon mapping per experience
const experienceIcons = [Briefcase, Code, Rocket];

export const ExperienceSectionHorizontal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!horizontalRef.current || !containerRef.current) return;

    const horizontal = horizontalRef.current;
    const container = containerRef.current;

    // Calculate total scroll width
    const scrollWidth = horizontal.scrollWidth - window.innerWidth;

    // Set initial state: cards visible dari awal
    const cards = horizontal.querySelectorAll(".experience-slide");
    gsap.set(cards, { opacity: 1, scale: 1 });

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animate horizontal movement
    tl.to(horizontal, {
      x: -scrollWidth,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-background via-cream/20 to-background overflow-hidden"
    >
      {/* Section Header */}
      <div className="container px-4 lg:px-8 pt-24">
        <div className="text-center">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Experiences
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              My Professional Journey
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scroll horizontally to explore my career timeline
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-screen">
        <div
          ref={horizontalRef}
          className="absolute top-0 left-0 h-full flex items-center gap-8 px-4 lg:px-8"
        >
          {experiences.map((item, index) => {
            const Icon = experienceIcons[index] || Briefcase;

            return (
              <div
                key={index}
                className="experience-slide flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[50vw] h-[80vh] flex flex-col"
              >
                {/* Chapter Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Chapter {index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {item.period}
                    </h3>
                  </div>
                  {item.current && (
                    <span className="ml-auto shrink-0 px-3 py-1.5 text-xs font-medium rounded-full bg-forest/10 text-forest flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex-1 glass-card p-8 overflow-y-auto scrollbar-hide">
                  <h4 className="text-2xl md:text-3xl font-display mb-2">
                    {item.title}
                  </h4>
                  <p className="text-lg text-primary font-medium mb-4">
                    @ {item.company}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wider">
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {item.achievements.slice(0, 5).map((achievement, i) => (
                          <li
                            key={i}
                            className="achievement-item flex items-start gap-3"
                          >
                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wider">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-badge px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 hover:bg-muted transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End Spacer */}
          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  );
};
