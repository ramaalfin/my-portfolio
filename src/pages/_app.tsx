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

// Register GSAP plugins sekali di level app
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

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
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Toaster />
        <Sonner />

        {/* Loading Screen — tampil hanya saat initial load */}
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

        {/* Page content — hidden sampai loading selesai, lalu fade in */}
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
