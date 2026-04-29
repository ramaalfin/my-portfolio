import { useState } from "react";
import { RevealText } from "../ui/AnimatedText";
import {
  MapPin,
  ChevronRight,
  Briefcase,
  Code,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { experiences } from "@/data/experiences";
import { motion, AnimatePresence } from "framer-motion";

const experienceIcons = [Briefcase, Code, Rocket];

export const ExperienceSectionHorizontal = () => {
  // Find the index of the current experience to open by default
  const defaultOpenIndex = experiences.findIndex((item) => item.current);
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex !== -1 ? defaultOpenIndex : 0,
  );

  return (
    <section
      id="experiences"
      className="relative bg-gradient-to-b from-background via-cream/20 to-background py-24"
    >
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16">
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
              Explore my career timeline and professional achievements.
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((item, index) => {
            const Icon = experienceIcons[index] || Briefcase;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "hsl(var(--card))" : "transparent",
                  borderColor: isOpen ? "hsl(var(--border))" : "transparent",
                }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "shadow-lg"
                    : "border-transparent hover:border-border/50 hover:bg-card/50"
                }`}
              >
                {/* Header (Trigger) */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-primary">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-forest/10 text-forest flex items-center gap-1.5 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mt-1">
                        @ {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-end w-full md:w-auto shrink-0 mt-4 md:mt-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full ${
                        isOpen
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Body (Collapsible Content) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="border-t border-border pt-6">
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                            {item.description}
                          </p>

                          {/* Key Achievements */}
                          {item.achievements &&
                            item.achievements.length > 0 && (
                              <div className="mb-6">
                                <h5 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">
                                  Key Achievements
                                </h5>
                                <ul className="space-y-3">
                                  {item.achievements.map((achievement, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-3"
                                    >
                                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                      <span className="text-sm text-muted-foreground leading-relaxed">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          <div className="space-y-6">
                            {/* Tech Stack */}
                            <div>
                              <h5 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">
                                Technologies
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 transition-colors cursor-default"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Location */}
                            <div>
                              <h5 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">
                                Location
                              </h5>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 shrink-0" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
