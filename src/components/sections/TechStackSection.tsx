import { useEffect, useRef, useState } from "react";
import { RevealText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React.js", icon: "⚛️", color: "from-[#61DAFB]/20 to-[#61DAFB]/5" },
      { name: "Next.js", icon: "▲", color: "from-foreground/10 to-foreground/5" },
      { name: "TypeScript", icon: "TS", color: "from-[#3178C6]/20 to-[#3178C6]/5" },
      { name: "JavaScript", icon: "JS", color: "from-[#F7DF1E]/20 to-[#F7DF1E]/5" },
      { name: "Tailwind CSS", icon: "🎨", color: "from-[#06B6D4]/20 to-[#06B6D4]/5" },
      { name: "HTML/CSS", icon: "📄", color: "from-[#E34F26]/20 to-[#E34F26]/5" },
    ],
  },
  {
    title: "Mobile",
    techs: [
      { name: "React Native", icon: "📱", color: "from-[#61DAFB]/20 to-[#61DAFB]/5" },
      { name: "Expo", icon: "🚀", color: "from-foreground/10 to-foreground/5" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: "🟢", color: "from-[#339933]/20 to-[#339933]/5" },
      { name: "Express.js", icon: "⚡", color: "from-foreground/10 to-foreground/5" },
      { name: "Laravel", icon: "🔴", color: "from-[#FF2D20]/20 to-[#FF2D20]/5" },
      { name: "PHP", icon: "🐘", color: "from-[#777BB4]/20 to-[#777BB4]/5" },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "MongoDB", icon: "🍃", color: "from-[#47A248]/20 to-[#47A248]/5" },
      { name: "PostgreSQL", icon: "🐘", color: "from-[#4169E1]/20 to-[#4169E1]/5" },
      { name: "MySQL", icon: "🐬", color: "from-[#4479A1]/20 to-[#4479A1]/5" },
    ],
  },
  {
    title: "State Management",
    techs: [
      { name: "Redux", icon: "🔄", color: "from-[#764ABC]/20 to-[#764ABC]/5" },
      { name: "Zustand", icon: "🐻", color: "from-foreground/10 to-foreground/5" },
      { name: "TanStack Query", icon: "🔍", color: "from-[#FF4154]/20 to-[#FF4154]/5" },
    ],
  },
  {
    title: "Tools",
    techs: [
      { name: "Git", icon: "🔧", color: "from-[#F05032]/20 to-[#F05032]/5" },
      { name: "Figma", icon: "🎨", color: "from-[#F24E1E]/20 to-[#F24E1E]/5" },
      { name: "VS Code", icon: "💻", color: "from-[#007ACC]/20 to-[#007ACC]/5" },
    ],
  },
];

export const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

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

  return (
    <section id="tech" ref={sectionRef} className="py-24 lg:py-32">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Technologies</span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Tech Stack
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "transition-all duration-700 ease-smooth",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-serif text-xl mb-4 text-muted-foreground">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={cn(
                      "tech-icon group relative px-4 py-3 rounded-xl cursor-default",
                      "bg-gradient-to-br border border-border/50",
                      tech.color,
                      "transition-all duration-300",
                      hoveredTech === tech.name && "shadow-lg scale-105"
                    )}
                    style={{ 
                      transitionDelay: `${categoryIndex * 100 + techIndex * 50}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="font-medium text-sm">{tech.name}</span>
                    </div>
                    
                    {/* 3D shine effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={cn(
            "mt-16 p-8 rounded-3xl bg-muted/30 transition-all duration-700 ease-smooth",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Years of Experience", value: "2+" },
              { label: "Projects Completed", value: "15+" },
              { label: "Technologies", value: "20+" },
              { label: "Happy Clients", value: "10+" },
            ].map((stat, index) => (
              <div key={stat.label} className="p-4">
                <p className="font-serif text-4xl lg:text-5xl gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
