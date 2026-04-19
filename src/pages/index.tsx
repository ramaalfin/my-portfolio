import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection2 } from "@/components/sections/TechStackSection2";
import StackingCardsDemo from "@/components/sections/StackingCardsDemo";

const Index = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = "Rama Alfin Baehaqi | Frontend Engineer Portfolio";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Frontend Engineer with 2+ years of experience delivering production-grade web and mobile applications. Specialized in React.js, Next.js, and TypeScript with focus on performance optimization and scalable architecture."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Frontend Engineer with 2+ years of experience delivering production-grade web and mobile applications. Specialized in React.js, Next.js, and TypeScript with focus on performance optimization and scalable architecture.";
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rama Alfin Baehaqi",
      jobTitle: "Frontend Engineer",
      url: window.location.href,
      sameAs: [
        "https://linkedin.com/in/rama-alfin-baehaqi",
        "https://github.com/ramaalfin",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Performance Optimization",
        "Core Web Vitals",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogor",
        addressCountry: "Indonesia",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      {/* <StackingCardsDemo /> */}
      <TechStackSection2 />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
