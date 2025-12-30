import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLParagraphElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || hasAnimatedRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Setup Lenis
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

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
          const charElements = chars.map((char, charIndex) => {
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
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
          className="reveal-type text-2xl md:text-4xl lg:text-5xl font-serif text-center leading-relaxed text-gray-900 dark:text-gray-100"
          style={{
            wordSpacing: "0.1em",
            letterSpacing: "0.01em",
          }}
        >
          Front-End Developer with 2 years of experience in designing,
          developing, and testing modern web and mobile applications. I hold a
          Bachelor's degree in Information Technology from Bina Sarana
          Informatika University.
        </p>
      </div>
    </section>
  );
};
