import React, { useRef } from "react";
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

const techStacks1 = [
  {
    icon: <SiReact className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <SiNextdotjs className="w-6 h-6" />,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
  },
  {
    icon: <SiTypescript className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: <SiJavascript className="w-6 h-6" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: <SiTailwindcss className="w-6 h-6" />,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: <SiHtml5 className="w-6 h-6" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: <TbBrandReactNative className="w-6 h-6" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
];

const techStacks2 = [
  {
    icon: <SiExpo className="w-6 h-6" />,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
  },
  {
    icon: <SiNodedotjs className="w-6 h-6" />,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    icon: <SiExpress className="w-6 h-6" />,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10",
  },
  {
    icon: <SiLaravel className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: <SiPhp className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <SiMongodb className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: <SiPostgresql className="w-6 h-6" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
];

const techStacks3 = [
  {
    icon: <SiMysql className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: <SiRedux className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: (
      <Image
        src="/assets/icons/zustand.svg"
        width={30}
        height={30}
        alt="zustand-icon"
      />
    ),
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: (
      <Image
        src="/assets/icons/React-Query.svg"
        width={30}
        height={30}
        alt="React-Query-icon"
      />
    ),
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <SiGit className="w-6 h-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    icon: <VscCode className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const MarqueeItem = ({ tech }: any) => (
  <div className="mx-3 md:mx-4 cursor-pointer group">
    <div className="relative">
      <div
        className={`
        flex flex-col items-center justify-center 
        p-4 md:p-6 rounded-2xl 
        transition-all duration-300 ease-out
        group-hover:scale-105 group-hover:shadow-xl
        ${tech.bgColor} border border-gray-200/50
      `}
      >
        {/* Icon Container */}
        <div
          className={`
          w-14 h-14 md:w-16 md:h-16 rounded-full 
          flex items-center justify-center mb-3
          ${tech.bgColor} border border-gray-200/30
          group-hover:scale-110 transition-transform duration-300
        `}
        >
          <div className={tech.color}>{tech.icon}</div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </div>
);

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
          baseVelocity={-3}
          repeat={3}
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
          baseVelocity={-3}
          repeat={3}
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
