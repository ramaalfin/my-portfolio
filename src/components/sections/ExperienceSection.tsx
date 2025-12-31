import { useEffect, useRef, useState } from "react";
import { RevealText } from "../ui/AnimatedText";
import { MapPin } from "lucide-react";

import { useScroll, useTransform, motion } from "framer-motion";

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
  },
  {
    title: "Front-End Developer",
    company: "PT Mahardika Caraka Indonesia",
    period: "Feb 2024 - Jun 2025",
    location: "Remote",
    current: false,
    description:
      "Developed features, sliced UI from Figma, and rebuilt mobile apps with React Native.",
    technologies: ["React Native", "Figma", "Redux", "Firebase", "Jest"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "PT INDI Teknokreasi Internasional",
    period: "Aug 2023 - Dec 2023",
    location: "Jakarta, Indonesia",
    current: false,
    description:
      "Developed full-stack applications using React.js and Node.js, implemented RESTful APIs, and collaborated with team members on project development.",
    technologies: ["Laravel", "Next.js", "MySQL"],
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="experiences"
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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 dark:text-muted-foreground">
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
        <div className="" ref={containerRef}>
          <div ref={ref} className="relative w-full flex gap-20 flex-col">
            {experiences.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 ">
                    {item.period}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {item.period}
                  </h3>

                  <div className="max-w-[52rem] ml-auto bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700">
                    <h4 className="text-xl font-semibold mb-2">
                      {item.title} @{" "}
                      <span className="text-primary">{item.company} </span>
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <MapPin className="mr-2" size={14} /> {item.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
