import { useEffect, useRef } from "react";
import { RevealText } from "../ui/AnimatedText";
import { MapPin, ChevronRight, Briefcase, Code, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experiences";

gsap.registerPlugin(ScrollTrigger);

const experienceIcons = [Briefcase, Code, Rocket];

export const ExperienceSectionHorizontal = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      if (!cards.length || !stackRef.current) return;

      const totalCards = cards.length;

      // Semua card di-stack di posisi yang sama (absolute).
      // Card selain pertama dimulai dari bawah (yPercent: 110).
      // z-index naik agar card lebih baru selalu di atas.
      cards.forEach((card, i) => {
        gsap.set(card, { zIndex: i + 1 });
        if (i > 0) gsap.set(card, { yPercent: 110 });
      });

      // ScrollTrigger mempin container & menjalankan timeline saat scroll.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: "top top",
          end: `+=${(totalCards - 1) * 700}`,
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Setiap card slide naik dari bawah, sebelumnya sedikit scale-down
      cards.forEach((card, i) => {
        if (i === 0) return;

        // Scale down + dorong sedikit ke atas card sebelumnya
        tl.to(
          cards[i - 1],
          {
            scale: 0.94,
            yPercent: -4,
            duration: 1,
            ease: "power2.inOut",
          },
          `card-${i}`,
        );

        // Slide masuk card baru dari bawah
        tl.to(
          card,
          {
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          `card-${i}`,
        );
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experiences"
      className="relative bg-gradient-to-b from-background via-cream/20 to-background"
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
              Scroll to explore my career timeline
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>
      </div>

      {/* Stack container — di-pin oleh GSAP ScrollTrigger */}
      <div ref={stackRef} className="relative h-screen">
        {/* Cards area: flex center, semua card tumpuk via absolute */}
        <div className="absolute inset-0 flex items-center justify-center px-4 lg:px-8 py-12">
          <div className="relative w-full max-w-5xl h-[78vh]">
            {experiences.map((item, index) => {
              const Icon = experienceIcons[index] || Briefcase;

              return (
                <div
                  key={index}
                  className="exp-card absolute inset-0 w-full h-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
                >
                  {/* Card Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 px-6 pt-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Chapter {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                          {item.period}
                        </h3>
                      </div>
                    </div>

                    {item.current && (
                      <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-forest/10 text-forest flex items-center gap-1.5 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Card Body — scrollable di dalam card */}
                  {/* data-lenis-prevent: cegah Lenis intercept scroll di dalam card */}
                  <div
                    data-lenis-prevent
                    className="px-6 py-6 space-y-5 overflow-y-auto h-[calc(100%-5rem)] lg:scrollbar-hide"
                  >
                    {/* Role & Company */}
                    <div>
                      <h4 className="text-2xl md:text-3xl font-display mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base text-primary font-medium">
                        @ {item.company}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {/* Key Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h5 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {item.achievements
                            .slice(0, 5)
                            .map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h5 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
