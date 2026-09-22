import React, { useRef, useState } from "react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiGit,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import Image from "next/image";
import { RevealText } from "../ui/AnimatedText";
import { AnimatePresence, motion } from "motion/react";

const techStacks1 = [
  { icon: <SiReact className="w-7 h-7" />, color: "#61DAFB", text: "React.js" },
  { icon: <SiNextdotjs className="w-7 h-7" />, color: "#FFFFFF", text: "Next.js" },
  { icon: <SiTypescript className="w-7 h-7" />, color: "#3178C6", text: "TypeScript" },
  { icon: <SiJavascript className="w-7 h-7" />, color: "#F7DF1E", text: "JavaScript" },
  { icon: <SiTailwindcss className="w-7 h-7" />, color: "#06B6D4", text: "Tailwind CSS" },
  { icon: <SiHtml5 className="w-7 h-7" />, color: "#E34F26", text: "HTML5" },
  { icon: <TbBrandReactNative className="w-7 h-7" />, color: "#61DAFB", text: "React Native" },
];

const techStacks2 = [
  { icon: <SiExpo className="w-7 h-7" />, color: "#FFFFFF", text: "Expo" },
  { icon: <SiNodedotjs className="w-7 h-7" />, color: "#339933", text: "Node.js" },
  { icon: <SiExpress className="w-7 h-7" />, color: "#FFFFFF", text: "Express.js" },
  { icon: <SiLaravel className="w-7 h-7" />, color: "#FF2D20", text: "Laravel" },
  { icon: <SiPhp className="w-7 h-7" />, color: "#777BB4", text: "PHP" },
  { icon: <SiMongodb className="w-7 h-7" />, color: "#47A248", text: "MongoDB" },
  { icon: <SiPostgresql className="w-7 h-7" />, color: "#4169E1", text: "PostgreSQL" },
];

const techStacks3 = [
  { icon: <SiMysql className="w-7 h-7" />, color: "#4479A1", text: "MySQL" },
  { icon: <SiRedux className="w-7 h-7" />, color: "#764ABC", text: "Redux" },
  {
    icon: (
      <Image
        src="/assets/icons/zustand.svg"
        width={30}
        height={30}
        alt="zustand-icon"
        loading="lazy"
        priority={false}
        quality={85}
      />
    ),
    color: "#F97316",
    text: "Zustand",
  },
  {
    icon: (
      <Image
        src="/assets/icons/React-Query.svg"
        width={30}
        height={30}
        alt="React-Query-icon"
        loading="lazy"
        priority={false}
        quality={85}
      />
    ),
    color: "#EF4444",
    text: "TanStack Query",
  },
  { icon: <SiGit className="w-7 h-7" />, color: "#F05032", text: "Git" },
  { icon: <VscCode className="w-7 h-7" />, color: "#007ACC", text: "VS Code" },
];

const MarqueeItem = ({ tech, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-3 md:mx-4 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          className="w-14 h-14 md:w-18 md:h-18 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300"
          style={{
            background: isHovered ? `${tech.color}15` : "hsl(0 0% 10%)",
            border: `1px solid ${isHovered ? `${tech.color}30` : "hsl(0 0% 18%)"}`,
          }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            style={{ color: tech.color }}
            animate={{
              scale: isHovered ? 0 : 1,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {tech.icon}
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="font-medium text-xs text-center leading-tight"
                  style={{ color: tech.color }}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {tech.text}
                </motion.h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export const TechStackSection2 = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      id="tech"
      className="relative py-20 lg:py-section overflow-hidden"
      style={{ background: "hsl(0 0% 7%)" }}
      ref={container}
    >
      <div className="container px-5 mx-auto mb-16 lg:mb-24 text-center relative z-10">
        <div className="text-center mb-16">
          <RevealText>
            <span
              className="text-sm font-medium uppercase"
              style={{ color: "hsl(276 100% 82%)", letterSpacing: "-0.5px" }}
            >
              Tech Stack
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2
              className="text-4xl md:text-5xl lg:text-[55px] font-medium mt-4 mb-6"
              style={{ letterSpacing: "-2px", lineHeight: 1 }}
            >
              Technologies I Work With
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="max-w-2xl mx-auto" style={{ color: "hsl(0 0% 64%)" }}>
              A showcase of the tools and technologies that power my projects
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <SimpleMarquee
          className="w-full"
          baseVelocity={-6}
          repeat={6}
          draggable={true}
          scrollSpringConfig={{ damping: 40, stiffness: 350 }}
          slowDownFactor={0.2}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 50, stiffness: 200 }}
          direction="left"
        >
          {techStacks1.map((tech, i) => (
            <MarqueeItem key={i} tech={tech} />
          ))}
        </SimpleMarquee>
        <SimpleMarquee
          className="w-full"
          baseVelocity={-3}
          repeat={3}
          draggable={true}
          scrollSpringConfig={{ damping: 40, stiffness: 350 }}
          slowDownFactor={0.2}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 50, stiffness: 200 }}
          direction="right"
        >
          {techStacks2.map((tech, i) => (
            <MarqueeItem key={i} tech={tech} />
          ))}
        </SimpleMarquee>
        <SimpleMarquee
          className="w-full"
          baseVelocity={-6}
          repeat={6}
          draggable={true}
          scrollSpringConfig={{ damping: 40, stiffness: 350 }}
          slowDownFactor={0.2}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 50, stiffness: 200 }}
          direction="left"
        >
          {techStacks3.map((tech, i) => (
            <MarqueeItem key={i} tech={tech} />
          ))}
        </SimpleMarquee>
      </div>
    </section>
  );
};
