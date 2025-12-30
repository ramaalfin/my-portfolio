"use client";

import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface StackingCardsProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  index: number;
  topPosition?: string;
}

const StackingCardsContext = createContext<{
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards?: number;
} | null>(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.03,
  totalCards,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn("relative", className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export function StackingCardItem({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) {
  const {
    progress,
    scaleMultiplier = 0.03,
    totalCards = 1,
  } = useStackingCardsContext();

  // Calculate scale - card pertama paling besar, terakhir paling kecil
  const scaleTo = 1 - (totalCards - 1 - index) * scaleMultiplier;

  // Range untuk scroll progress
  const startRange = index / totalCards;
  const endRange = (index + 1) / totalCards;

  const scale = useTransform(progress, [startRange, endRange], [1, scaleTo]);

  // Default top position dengan increment
  const top = topPosition ?? `${index * 5}%`;

  const { onDrag, ...restProps } = props;

  return (
    <motion.div
      className={cn(
        "sticky top-0 h-screen flex items-center justify-center",
        className
      )}
      style={{
        top,
        scale,
        zIndex: totalCards - index, // Card pertama di atas
      }}
      {...restProps}
    >
      {children}
    </motion.div>
  );
}
