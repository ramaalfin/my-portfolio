import { useEffect, useRef, useState } from "react";
import { RevealText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Fiberzone Website",
    company: "PT Varnion Teknologi Semesta",
    period: "November 2025",
    description:
      "Official website for fiber internet service provider with unlimited packages without FUP, featuring fast and stable connections.",
    highlights: [
      "Map visualization for coverage checking",
      "Order management system with payment integration",
      "OCR feature for NPWP and KTP using tesseract.js",
      "SSR implementation for optimal performance",
    ],
    tech: ["Next.js", "Tailwind CSS", "Zustand", "TypeScript"],
    category: "Web",
    featured: true,
  },
  {
    title: "Hiring Management Web App",
    company: "Personal Project",
    period: "November 2025",
    description:
      "Full-stack hiring platform for recruiters to manage job vacancies and applicants with advanced features.",
    highlights: [
      "Magic Link & Traditional Authentication",
      "Hand Gesture Photo Capture",
      "Dynamic Application Forms",
      "Candidate Management with resizable columns",
    ],
    tech: ["Next.js", "Express.js", "MongoDB", "Zustand", "Cloudinary"],
    category: "Web",
    featured: true,
  },
  {
    title: "Event Management System",
    company: "WPU Course",
    period: "August 2025",
    description:
      "MERN Stack event management platform with role-based access control and Midtrans payment integration.",
    highlights: [
      "Event, category, and banner management",
      "Transaction with invoice & barcode generation",
      "Swagger API documentation",
    ],
    tech: ["Next.js", "Express.js", "Node.js", "MongoDB"],
    category: "Web",
  },
  {
    title: "Asiatri Mobile App",
    company: "PT Mahardika Caraka Indonesia",
    period: "November 2024",
    description:
      "Park employee management app for permits, attendance using camera/location, and daily task management.",
    highlights: [
      "React Native with Expo rebuild",
      "Camera and location integration",
      "Async storage authentication",
    ],
    tech: ["React Native", "Expo", "TypeScript"],
    category: "Mobile",
  },
  {
    title: "Edmois School Apps",
    company: "PT Mahardika Caraka Indonesia",
    period: "May 2024",
    description:
      "Multi-school application platform (Daarennisa, Bina Qurani, Edelweiss) for parents and school staff.",
    highlights: [
      "Push notifications with FCM",
      "Document upload and download",
      "Camera integration",
    ],
    tech: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
  },
];

const categories = ["All", "Web", "Mobile"];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
              onClick={() => setActiveFilter(category)}
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className={cn(
                "project-card group",
                "transition-all duration-500 ease-smooth",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 lg:p-8">
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
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
