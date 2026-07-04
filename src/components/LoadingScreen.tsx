import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Generate random seeds — stable per mount
function randomSeeds(count: number): string[] {
  return Array.from({ length: count }, () =>
    Math.random().toString(36).substring(2, 10),
  );
}

// Shared square box size — uniform untuk huruf & gambar
const BOX_SIZE = "clamp(64px, 13vw, 120px)";

// Shared exit easing
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">(
    "enter",
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const seeds = useMemo(() => randomSeeds(8), []);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Cycle through images during hold phase
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
    if (phase === "exit" && cycleRef.current) {
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

  // Animation timeline
  useEffect(() => {
    const ENTER_DURATION = 400;
    const HOLD_DURATION = 1800;
    const EXIT_DURATION = 800;

    const enterTimer = setTimeout(() => setPhase("hold"), ENTER_DURATION);
    const exitTimer = setTimeout(
      () => setPhase("exit"),
      ENTER_DURATION + HOLD_DURATION,
    );
    const doneTimer = setTimeout(
      () => {
        setPhase("done");
        window.dispatchEvent(new CustomEvent("loading:complete"));
        onComplete();
      },
      ENTER_DURATION + HOLD_DURATION + EXIT_DURATION,
    );

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  const isExit = phase === "exit";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "#0d0d0d" }}
      animate={{ opacity: isExit ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {/* ── Huruf R ── */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center select-none overflow-hidden"
          style={{ width: BOX_SIZE, height: BOX_SIZE }}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isExit ? 0 : 1,
            x: isExit ? -window.innerWidth * 0.5 - 80 : 0,
          }}
          transition={{
            opacity: { duration: 0.35, ease: "easeOut" },
            x: { duration: 0.75, ease: EXIT_EASE },
          }}
        >
          <span
            className="text-white leading-none flex items-center justify-center"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 500,
              fontSize: BOX_SIZE,
            }}
          >
            R
          </span>
        </motion.div>

        {/* ── Gambar random bergantian ── */}
        <motion.div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderRadius: "3px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isExit ? 0 : 1,
            scale: isExit ? 0 : 1,
          }}
          transition={{
            opacity: { duration: 0.35, delay: 0.1, ease: "easeOut" },
            scale: {
              duration: isExit ? 0.5 : 0.45,
              delay: isExit ? 0 : 0.08,
              ease: isExit ? EXIT_EASE : [0.16, 1, 0.3, 1],
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

        {/* ── Huruf A ── */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center select-none overflow-hidden"
          style={{ width: BOX_SIZE, height: BOX_SIZE }}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isExit ? 0 : 1,
            x: isExit ? window.innerWidth * 0.5 + 80 : 0,
          }}
          transition={{
            opacity: { duration: 0.35, ease: "easeOut" },
            x: { duration: 0.75, ease: EXIT_EASE },
          }}
        >
          <span
            className="text-white leading-none flex items-center justify-center"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 500,
              fontSize: BOX_SIZE,
            }}
          >
            A
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
