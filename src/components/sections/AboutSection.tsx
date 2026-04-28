import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLParagraphElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || hasAnimatedRef.current) return;

    // ScrollTrigger sudah di-register di _app.tsx, tidak perlu register ulang

    // Animasi dengan delay berdasarkan posisi kata
    if (revealTextRef.current) {
      const text = new SplitType(revealTextRef.current, {
        types: "lines,words",
        lineClass: "text-line",
        wordClass: "text-word",
      });

      // Set initial state - tanpa warna, hanya opacity dan position
      gsap.set(text.words, {
        opacity: 0,
        y: 20,
      });

      // Create master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: revealTextRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
          onEnter: () => {
            hasAnimatedRef.current = true;
          },
          onLeaveBack: () => {
            hasAnimatedRef.current = false;
          },
        },
      });

      // Animate each line with delay
      text?.lines?.forEach((line, lineIndex) => {
        const wordsInLine = line.querySelectorAll(".text-word");

        const lineTl = gsap.timeline();

        wordsInLine.forEach((word, wordIndex) => {
          const chars = word.textContent?.split("") || [];

          // Create word wrapper
          const wordWrapper = document.createElement("span");
          wordWrapper.className = "word-wrapper inline-block";

          // Wrap each character dengan class untuk animasi
          const charElements = chars.map((char) => {
            const span = document.createElement("span");
            span.className =
              "char-element inline-block opacity-0 translate-y-2.5 text-inherit";
            span.textContent = char;
            return span;
          });

          // Replace original word with wrapped characters
          charElements.forEach((span) => wordWrapper.appendChild(span));
          word.replaceWith(wordWrapper);

          // Animate characters - HANYA opacity dan transform, BUKAN color
          lineTl.to(
            charElements,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.02,
              ease: "power2.out",
            },
            wordIndex * 0.1
          );
        });

        masterTl.add(lineTl, lineIndex * 0.5);
      });
    }

    return () => {
      // Hanya kill ScrollTrigger yang dibuat di section ini
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Lenis di-destroy di _app.tsx, tidak perlu di sini
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-52 flex items-center bg-white dark:bg-black"
    >
      <div className="container px-4">
        <p
          ref={revealTextRef}
          className="reveal-type text-2xl md:text-4xl lg:text-5xl font-display text-center leading-relaxed text-gray-900 dark:text-gray-100"
          style={{
            wordSpacing: "0.1em",
            letterSpacing: "0.01em",
          }}
        >
          Frontend Engineer with 2+ years of experience delivering
          production-grade web and mobile applications at scale. Specialized in
          React.js, Next.js, and TypeScript, with a strong focus on rendering
          strategies, Core Web Vitals optimization, and scalable component
          architecture. Proven ability to improve Lighthouse scores to 95+,
          reduce load times by ~35%, and ship end-to-end features including
          real-time systems and fullstack integrations.
        </p>
      </div>
    </section>
  );
};
