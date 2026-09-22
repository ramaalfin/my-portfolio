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
  const defaultOpenIndex = experiences.findIndex((item) => item.current);
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex !== -1 ? defaultOpenIndex : 0,
  );

  return (
    <section
      id="experiences"
      className="relative py-section"
      style={{ background: "hsl(0 0% 4%)" }}
    >
      <div className="container px-5 lg:px-8">
        <div className="text-center mb-16">
          <RevealText>
            <span
              className="text-sm font-medium uppercase"
              style={{ color: "hsl(276 100% 82%)", letterSpacing: "-0.5px" }}
            >
              Experiences
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2
              className="text-4xl md:text-5xl lg:text-[55px] font-medium mt-4 mb-6"
              style={{ letterSpacing: "-2px", lineHeight: 1 }}
            >
              My Professional Journey
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="max-w-2xl mx-auto" style={{ color: "hsl(0 0% 64%)" }}>
              Explore my career timeline and professional achievements.
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {experiences.map((item, index) => {
            const Icon = experienceIcons[index] || Briefcase;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "hsl(0 0% 10%)" : "transparent",
                  borderColor: isOpen ? "hsl(0 0% 18%)" : "transparent",
                }}
                className="rounded-lg border transition-colors duration-300 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-md shrink-0 transition-colors ${
                        isOpen
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                      style={{
                        background: isOpen ? "hsl(276 100% 82% / 0.1)" : "hsl(0 0% 10%)",
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span
                          className="text-sm font-medium"
                          style={{ color: "hsl(276 100% 82%)" }}
                        >
                          {item.period}
                        </span>
                        {item.current && (
                          <span
                            className="px-2 py-0.5 text-[10px] font-medium rounded-full flex items-center gap-1.5 shrink-0"
                            style={{
                              background: "hsl(78 70% 65% / 0.1)",
                              color: "hsl(78 70% 65%)",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{ background: "hsl(78 70% 65%)" }}
                            />
                            Current
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-lg md:text-xl font-medium leading-tight"
                        style={{ color: "hsl(0 0% 100%)", letterSpacing: "-0.5px" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "hsl(0 0% 56%)" }}
                      >
                        @ {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-end w-full md:w-auto shrink-0 mt-4 md:mt-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-md ${
                        isOpen ? "text-accent" : "text-muted-foreground"
                      }`}
                      style={{
                        background: isOpen ? "hsl(276 100% 82% / 0.1)" : "hsl(0 0% 10%)",
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div
                          className="pt-6"
                          style={{ borderTop: "1px solid hsl(0 0% 18%)" }}
                        >
                          <p
                            className="leading-relaxed text-sm md:text-base mb-6"
                            style={{ color: "hsl(0 0% 64%)" }}
                          >
                            {item.description}
                          </p>

                          {item.achievements && item.achievements.length > 0 && (
                            <div className="mb-6">
                              <h5
                                className="text-xs font-medium mb-3 uppercase"
                                style={{ color: "hsl(0 0% 100%)", letterSpacing: "-0.5px" }}
                              >
                                Key Achievements
                              </h5>
                              <ul className="space-y-3">
                                {item.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <ChevronRight
                                      className="w-4 h-4 shrink-0 mt-1"
                                      style={{ color: "hsl(276 100% 82%)" }}
                                    />
                                    <span
                                      className="text-sm leading-relaxed"
                                      style={{ color: "hsl(0 0% 64%)" }}
                                    >
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="space-y-6">
                            <div>
                              <h5
                                className="text-xs font-medium mb-3 uppercase"
                                style={{ color: "hsl(0 0% 100%)", letterSpacing: "-0.5px" }}
                              >
                                Technologies
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 text-xs font-medium rounded-full cursor-default"
                                    style={{
                                      background: "rgba(255, 255, 255, 0.05)",
                                      color: "hsl(0 0% 64%)",
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5
                                className="text-xs font-medium mb-3 uppercase"
                                style={{ color: "hsl(0 0% 100%)", letterSpacing: "-0.5px" }}
                              >
                                Location
                              </h5>
                              <div
                                className="flex items-center gap-2 text-sm"
                                style={{ color: "hsl(0 0% 56%)" }}
                              >
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
