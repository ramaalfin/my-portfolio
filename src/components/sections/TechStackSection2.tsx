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
  {
    icon: <SiReact className="w-8 h-8" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    text: "React.js",
  },
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    text: "Next.js",
  },
  {
    icon: <SiTypescript className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
    text: "TypeScript",
  },
  {
    icon: <SiJavascript className="w-8 h-8" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    text: "JavaScript",
  },
  {
    icon: <SiTailwindcss className="w-8 h-8" />,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    text: "Tailwind CSS",
  },
  {
    icon: <SiHtml5 className="w-8 h-8" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    text: "HTML5",
  },
  {
    icon: <TbBrandReactNative className="w-8 h-8" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    text: "React Native",
  },
];

const techStacks2 = [
  {
    icon: <SiExpo className="w-8 h-8" />,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    text: "Expo",
  },
  {
    icon: <SiNodedotjs className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/20",
    text: "Node.js",
  },
  {
    icon: <SiExpress className="w-8 h-8" />,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10",
    borderColor: "border-gray-400/20",
    text: "Express.js",
  },
  {
    icon: <SiLaravel className="w-8 h-8" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    text: "Laravel",
  },
  {
    icon: <SiPhp className="w-8 h-8" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    text: "PHP",
  },
  {
    icon: <SiMongodb className="w-8 h-8" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    text: "MongoDB",
  },
  {
    icon: <SiPostgresql className="w-8 h-8" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    text: "PostgreSQL",
  },
];

const techStacks3 = [
  {
    icon: <SiMysql className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
    text: "MySQL",
  },
  {
    icon: <SiRedux className="w-8 h-8" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    text: "Redux",
  },
  {
    icon: (
      <Image
        src="/assets/icons/zustand.svg"
        width={35}
        height={35}
        alt="zustand-icon"
        loading="lazy"
        priority={false}
        quality={85}
      />
    ),
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    text: "Zustand",
  },
  {
    icon: (
      <Image
        src="/assets/icons/React-Query.svg"
        width={35}
        height={35}
        alt="React-Query-icon"
        loading="lazy"
        priority={false}
        quality={85}
      />
    ),
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    text: "TanStack Query",
  },
  {
    icon: <SiGit className="w-8 h-8" />,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    borderColor: "border-orange-600/20",
    text: "Git",
  },
  {
    icon: <VscCode className="w-8 h-8" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    text: "VS Code",
  },
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
          className={`
          w-14 h-14 md:w-20 md:h-20 rounded-full 
          flex items-center justify-center mb-3
          ${tech.bgColor} border ${tech.borderColor} 
          group-hover:scale-110 transition-transform duration-300
        `}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            className={tech.color}
            animate={{
              scale: isHovered ? 0 : 1,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {tech.icon}
          </motion.div>

          {/* Hover Text Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="font-semibold text-sm text-center leading-tight"
                  style={{
                    color: tech.color.replace("text-", "").split("/")[0],
                  }}
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

        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isHovered
              ? `0 0 20px 5px ${
                  tech.color.replace("text-", "").split("/")[0]
                }/30`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />

        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{
              borderColor: tech.color.replace("text-", "").split("/")[0],
            }}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        )}
      </div>
    </div>
  );
};

export const TechStackSection2 = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      id="tech"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden dark:from-black dark:to-gray-900/30"
      ref={container}
    >
      {/* Section Header */}
      <div className="container px-4 mx-auto mb-16 lg:mb-24 text-center relative z-10">
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Tech Stack
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Technologies I Work With
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of the tools and technologies that power my projects
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>
      </div>

      <div className="flex flex-col space-y-8">
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
