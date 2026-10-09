import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    (window as any).__heroReady = true;
  }, []);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");

    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      ScrollTrigger.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Head>
          <meta name="theme-color" content="#0A0A0A" />
        </Head>

        {/* SVG Filters — efek liquid/water distortion */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="liquid-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.025"
                numOctaves="3"
                seed="1"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="8s"
                  values="0.012 0.025;0.016 0.032;0.012 0.025"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="18"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <Toaster />
        <Sonner />

        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
