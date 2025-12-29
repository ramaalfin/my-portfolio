import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "../ui/AnimatedText";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Front-End Developer",
    company: "PT Varnion Teknologi Semesta",
    period: "June 2025 - Present",
    location: "Jakarta, Indonesia",
    current: true,
    description:
      "Building responsive UIs with React.js and Next.js, optimizing performance, and integrating APIs.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
    ],
    link: "#",
  },
  {
    title: "Front-End Developer",
    company: "PT Mahardika Caraka Indonesia",
    period: "Feb 2024 - Aug 2025",
    location: "Bogor, Indonesia",
    current: false,
    description:
      "Developed features, sliced UI from Figma, and rebuilt mobile apps with React Native.",
    technologies: ["React Native", "Figma", "Redux", "Firebase", "Jest"],
    link: "#",
  },
  {
    title: "Web Developer Intern",
    company: "Digital Creative Agency",
    period: "Sep 2023 - Jan 2024",
    location: "Remote",
    current: false,
    description:
      "Assisted in developing client websites, implemented responsive designs, and optimized site performance.",
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    link: "#",
  },
  {
    title: "Junior Frontend Developer",
    company: "Startup Studio",
    period: "Mar 2023 - Aug 2023",
    location: "Remote",
    current: false,
    description:
      "Created reusable components, fixed bugs, and collaborated with designers on UI/UX improvements.",
    technologies: ["Vue.js", "SCSS", "REST API", "Git", "Webpack"],
    link: "#",
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Setup smooth scroll
    const setupScrollAnimations = () => {
      // Animate progress line
      if (progressBarRef.current && timelineRef.current) {
        gsap.to(progressBarRef.current, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 30%",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }

      // Animate timeline items
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const circle = item.querySelector(".timeline-circle");
        const content = item.querySelector(".timeline-content");

        // Circle animation
        gsap.fromTo(
          circle,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );

        // Content animation
        gsap.fromTo(
          content,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              markers: false,
            },
          }
        );

        // Subtle background glow on hover
        const card = item.querySelector(".experience-card");
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    };

    // Initialize animations
    const timeoutId = setTimeout(setupScrollAnimations, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Experiences
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              My Professional Journey
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Timeline of my work experience, showcasing roles,
              responsibilities,
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-300">
            <div
              ref={progressBarRef}
              className="absolute top-0 left-0 w-full h-0 bg-blue-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`timeline-item relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-0`}
              >
                {/* Date - Desktop */}
                <div className="hidden lg:block w-1/2 pt-4">
                  <div
                    className={`flex items-center h-full pr-12 ${
                      index % 2 === 0
                        ? "text-left justify-end"
                        : "text-right justify-start lg:pl-12"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
                        exp.current
                          ? "bg-blue-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 lg:top-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="timeline-circle w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-xl" />
                    {exp.current && (
                      <div className="absolute inset-0 animate-ping rounded-full bg-blue-400" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`timeline-content experience-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                      index % 2 === 0 ? "lg:pl-4 lg:ml-12" : "lg:pr-4 lg:mr-12"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-blue-600 font-semibold flex items-center gap-2">
                            {exp.company}
                            <ExternalLink className="w-4 h-4" />
                          </p>
                        </div>

                        {/* Date - Mobile */}
                        <div className="lg:hidden">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500 mt-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Start/End Markers */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg" />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
