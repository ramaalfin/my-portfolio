import { useEffect, useRef, useState } from "react";
import { RevealText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { flushSync } from "react-dom";

gsap.registerPlugin(Flip);

const categories = ["All", "Web", "Mobile"];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFilter = (category: string) => {
    if (category === activeFilter || !gridRef.current) return;

    const grid = gridRef.current;
    const cards = grid.querySelectorAll<HTMLElement>(".project-card");

    const state = Flip.getState(cards);
    cards.forEach((card) => card.classList.add("flip-animating"));
    grid.style.minHeight = `${grid.offsetHeight}px`;

    flushSync(() => {
      setActiveFilter(category);
    });

    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true,
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          scale: 0.85,
          duration: 0.3,
          ease: "power2.in",
        });
      },
      onComplete: () => {
        grid.querySelectorAll<HTMLElement>(".project-card").forEach((card) =>
          card.classList.remove("flip-animating")
        );
        grid.style.minHeight = "";
      },
    });
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-section lg:py-band"
      style={{ background: "hsl(0 0% 4%)" }}
    >
      <div className="container px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span
              className="text-sm font-medium uppercase"
              style={{ color: "hsl(276 100% 82%)", letterSpacing: "-0.5px" }}
            >
              Portfolio
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2
              className="text-4xl md:text-5xl lg:text-[55px] font-medium mt-4 mb-6"
              style={{ letterSpacing: "-2px", lineHeight: 1 }}
            >
              Featured Projects
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="max-w-2xl mx-auto" style={{ color: "hsl(0 0% 64%)" }}>
              A selection of projects I&apos;ve worked on, showcasing my expertise in
              web and mobile development
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        {/* Filter Tabs */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "text-black"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{
                background:
                  activeFilter === category
                    ? "hsl(0 0% 91%)"
                    : "rgba(255, 255, 255, 0.05)",
                letterSpacing: "-0.5px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "project-card group block",
                !isVisible && "opacity-0 translate-y-8",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
              style={
                !isVisible
                  ? {
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                      transitionDelay: `${index * 100}ms`,
                    }
                  : {
                      transition:
                        "box-shadow var(--transition-base), color var(--transition-base)",
                    }
              }
            >
              <div className="p-6 lg:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="text-xs font-medium uppercase"
                      style={{ color: "hsl(276 100% 82%)", letterSpacing: "-0.5px" }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-lg lg:text-xl mt-1 transition-colors"
                      style={{
                        color: "hsl(0 0% 100%)",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "hsl(0 0% 56%)" }}>
                      {project.company} • {project.period}
                    </p>
                  </div>
                  {project.featured && (
                    <span
                      className="shrink-0 px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: "hsl(78 70% 65% / 0.1)",
                        color: "hsl(78 70% 65%)",
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "hsl(0 0% 56%)" }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "hsl(0 0% 56%)" }}
                    >
                      <ChevronRight
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "hsl(276 100% 82%)" }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "hsl(0 0% 56%)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "hsl(0 0% 56%)",
                      }}
                    >
                      +{project.tech.length - 6} more
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div
                  className="mt-auto pt-4"
                  style={{ borderTop: "1px solid hsl(0 0% 18%)" }}
                >
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all"
                    style={{ color: "hsl(276 100% 82%)" }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
