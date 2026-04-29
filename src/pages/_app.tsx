import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatePresence, motion } from "framer-motion";

// Register GSAP plugins sekali di level app
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Native scroll — tidak pakai Lenis agar scroll terasa responsif
    // GSAP ScrollTrigger bekerja langsung dengan native scroll
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      ScrollTrigger.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}
