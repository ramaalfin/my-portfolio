import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

function randomSeeds(count: number): string[] {
  return Array.from({ length: count }, () =>
    Math.random().toString(36).substring(2, 10),
  );
}

const BOX_SIZE = "clamp(64px, 13vw, 120px)";
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<
    "enter" | "hold" | "exitLetters" | "exitScreen" | "done"
  >("enter");
  const [activeIndex, setActiveIndex] = useState(0);
  const seeds = useMemo(() => randomSeeds(8), []);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "hold" && !cycleRef.current) {
      cycleRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          let next;
          do {
            next = Math.floor(Math.random() * seeds.length);
          } while (next === prev && seeds.length > 1);
          return next;
        });
      }, 200);
    }
    if (phase === "exitLetters" && cycleRef.current) {
      clearInterval(cycleRef.current);
      cycleRef.current = null;
    }
    return () => {
      if (cycleRef.current) {
        clearInterval(cycleRef.current);
        cycleRef.current = null;
      }
    };
  }, [phase, seeds.length]);

  useEffect(() => {
    const ENTER_DURATION = 400;
    const HOLD_DURATION = 1800;
    const EXIT_LETTERS_DURATION = 800;
    const EXIT_SCREEN_DURATION = 700;

    const enterTimer = setTimeout(() => setPhase("hold"), ENTER_DURATION);
    const exitLettersTimer = setTimeout(
      () => setPhase("exitLetters"),
      ENTER_DURATION + HOLD_DURATION,
    );
    const exitScreenTimer = setTimeout(
      () => setPhase("exitScreen"),
      ENTER_DURATION + HOLD_DURATION + EXIT_LETTERS_DURATION,
    );
    const doneTimer = setTimeout(
      () => {
        setPhase("done");
        window.dispatchEvent(new CustomEvent("loading:complete"));
        onComplete();
      },
      ENTER_DURATION + HOLD_DURATION + EXIT_LETTERS_DURATION + EXIT_SCREEN_DURATION,
    );

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitLettersTimer);
      clearTimeout(exitScreenTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  const isExitLetters =
    phase === "exitLetters" || phase === "exitScreen" || phase === "done";
  const isExitScreen = phase === "exitScreen" || phase === "done";

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
      animate={{
        y: isExitScreen ? "-100%" : "0%",
      }}
      transition={{
        y: { duration: 0.7, ease: EXIT_EASE },
      }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {/* Letter R */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center select-none overflow-hidden"
          style={{ width: BOX_SIZE, height: BOX_SIZE }}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isExitLetters ? 0 : 1,
            x: isExitLetters ? -window.innerWidth * 0.5 - 80 : 0,
          }}
          transition={{
            opacity: { duration: 0.35, ease: "easeOut" },
            x: { duration: 0.75, ease: EXIT_EASE },
          }}
        >
          <span
            className="text-white leading-none flex items-center justify-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: BOX_SIZE,
              letterSpacing: "-2px",
            }}
          >
            R
          </span>
        </motion.div>

        {/* Random image */}
        <motion.div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderRadius: "4px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isExitLetters ? 0 : 1,
            scale: isExitLetters ? 0 : 1,
          }}
          transition={{
            opacity: { duration: 0.35, delay: 0.1, ease: "easeOut" },
            scale: {
              duration: isExitLetters ? 0.5 : 0.45,
              delay: isExitLetters ? 0 : 0.08,
              ease: isExitLetters ? EXIT_EASE : [0.16, 1, 0.3, 1],
            },
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={seeds[activeIndex]}
              src={`https://picsum.photos/seed/${seeds[activeIndex]}/200/200`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Letter A */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center select-none overflow-hidden"
          style={{ width: BOX_SIZE, height: BOX_SIZE }}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isExitLetters ? 0 : 1,
            x: isExitLetters ? window.innerWidth * 0.5 + 80 : 0,
          }}
          transition={{
            opacity: { duration: 0.35, ease: "easeOut" },
            x: { duration: 0.75, ease: EXIT_EASE },
          }}
        >
          <span
            className="text-white leading-none flex items-center justify-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: BOX_SIZE,
              letterSpacing: "-2px",
            }}
          >
            A
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
