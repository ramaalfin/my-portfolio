import { useEffect, useRef, useState } from "react";
import { RevealText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { flushSync } from "react-dom";

// Register Flip plugin sekali di module level
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

    // 1. Capture posisi semua card SEBELUM React re-render
    const state = Flip.getState(cards);

    // 2. Tambah class flip-animating — nonaktifkan CSS transform transition
    //    agar tidak konflik dengan GSAP selama animasi berlangsung
    cards.forEach((card) => card.classList.add("flip-animating"));

    // 3. Lock tinggi grid sebelum flushSync agar container tidak collapse
    //    saat card yang keluar di-set absolute oleh Flip
    grid.style.minHeight = `${grid.offsetHeight}px`;

    // 4. flushSync — paksa React update DOM secara synchronous
    //    agar Flip bisa membandingkan posisi lama vs baru dalam satu frame
    flushSync(() => {
      setActiveFilter(category);
    });

    // 5. Animasikan dari posisi lama ke posisi baru
    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true,
      onEnter: (elements) => {
        // Card baru yang muncul — fade + scale in
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }
        );
      },
      onLeave: (elements) => {
        // Card yang hilang — fade + scale out
        gsap.to(elements, {
          opacity: 0,
          scale: 0.85,
          duration: 0.3,
          ease: "power2.in",
        });
      },
      onComplete: () => {
        // 6. Reset setelah animasi selesai:
        //    - hapus flip-animating agar hover transform kembali smooth
        //    - reset minHeight agar grid menyesuaikan tinggi natural
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
      className="py-24 lg:py-32 bg-cream/30"
    >
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Portfolio
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 dark:text-muted-foreground">
              Featured Projects
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my expertise in
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
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
                      // Matikan hanya opacity & transform agar tidak konflik GSAP Flip
                      // tapi biarkan box-shadow, color, gap, dll tetap smooth saat hover
                      transition:
                        "box-shadow var(--transition-base), color var(--transition-base), gap var(--transition-base)",
                    }
              }
            >
              <div className="p-6 lg:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.company} • {project.period}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-sunset/10 text-sunset">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                      +{project.tech.length - 6} more
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <div className="mt-auto pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
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
