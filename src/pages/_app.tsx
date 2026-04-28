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
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";

// Register GSAP plugins sekali di level app
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Singleton Lenis — satu instance untuk seluruh app
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
    });

    // Sync Lenis scroll event ke GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Gunakan GSAP ticker sebagai RAF loop — lebih efisien dari requestAnimationFrame manual
    const tickerCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Reset scroll ke top saat navigasi antar halaman
    // Lenis tidak auto-reset seperti native scroll browser
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      gsap.ticker.remove(tickerCallback);
      router.events.off("routeChangeComplete", handleRouteChange);
      lenis.destroy();
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
