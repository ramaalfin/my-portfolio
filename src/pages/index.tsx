import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { TechStackSection2 } from "@/components/sections/TechStackSection2";
import { TimelineDemo } from "@/components/sections/TimelineDemo";
import StackingCardsDemo from "@/components/sections/StackingCardsDemo";

const Index = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = "Rama Alfin Baehaqi | Front-End Developer Portfolio";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Front-End Developer with 2+ years of experience in React.js, Next.js, and React Native. Building high-performance digital experiences."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Front-End Developer with 2+ years of experience in React.js, Next.js, and React Native. Building high-performance digital experiences.";
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rama Alfin Baehaqi",
      jobTitle: "Front-End Developer",
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
      <TimelineDemo />
      {/* <CertificateSection /> */}
      <StackingCardsDemo />
      <TechStackSection2 />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
