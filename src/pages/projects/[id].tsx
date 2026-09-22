import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { projects, Project } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  Calendar,
  Building2,
  ExternalLink,
  Github,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find((p) => p.id === id);
      setProject(foundProject || null);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Rama Alfin Baehaqi`;
    }
  }, [project]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "hsl(0 0% 4%)" }}>
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-accent border-r-transparent border-b-accent border-l-transparent" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "hsl(0 0% 4%)" }}>
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-medium mb-4" style={{ letterSpacing: "-1.5px" }}>Project Not Found</h1>
            <Link
              href="/#projects"
              className="hover:underline inline-flex items-center gap-2"
              style={{ color: "hsl(276 100% 82%)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "hsl(0 0% 4%)" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container px-5 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 hover:underline transition-colors mb-8 group"
            style={{ color: "hsl(0 0% 56%)" }}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{ background: "hsl(276 100% 82% / 0.1)", color: "hsl(276 100% 82%)" }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ background: "hsl(78 70% 65% / 0.1)", color: "hsl(78 70% 65%)" }}
                >
                  Featured Project
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-[55px] font-medium mb-6"
              style={{ letterSpacing: "-2px", lineHeight: 1, color: "hsl(0 0% 100%)" }}
            >
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-6" style={{ color: "hsl(0 0% 56%)" }}>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{project.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "hsl(0 0% 64%)", letterSpacing: "-0.5px" }}
            >
              {project.longDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{ background: "hsl(0 0% 91%)", color: "hsl(0 0% 4%)", letterSpacing: "-0.5px" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card font-medium transition-colors"
                  style={{ color: "hsl(0 0% 64%)" }}
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container px-5 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-2xl mb-8 font-medium"
              style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
            >
              Key Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg glass-card"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "hsl(276 100% 82%)" }} />
                  <span style={{ color: "hsl(0 0% 64%)" }}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container px-5 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-2xl mb-8 font-medium"
              style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
            >
              Detailed Features
            </h2>
            <div className="space-y-5">
              {project.detailedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-6 rounded-lg glass-card",
                    "opacity-0 animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="w-5 h-5 shrink-0 mt-1" style={{ color: "hsl(276 100% 82%)" }} />
                    <h3
                      className="font-medium text-lg"
                      style={{ letterSpacing: "-0.5px", color: "hsl(0 0% 100%)" }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="leading-relaxed mb-2 ml-8"
                    style={{ color: "hsl(0 0% 64%)" }}
                  >
                    {feature.description}
                  </p>
                  {feature.metrics && (
                    <div
                      className="ml-8 mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{ background: "hsl(276 100% 82% / 0.1)", color: "hsl(276 100% 82%)" }}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      {feature.metrics}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container px-5 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-2xl mb-8 font-medium"
              style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
            >
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg glass-card text-sm font-medium transition-colors hover:bg-surface"
                  style={{ color: "hsl(0 0% 64%)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-5 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <h2
              className="text-2xl mb-4 font-medium"
              style={{ letterSpacing: "-1px", color: "hsl(0 0% 100%)" }}
            >
              Interested in working together?
            </h2>
            <p className="mb-8" style={{ color: "hsl(0 0% 56%)" }}>
              Let&apos;s discuss how I can help bring your project to life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-colors"
                style={{ background: "hsl(0 0% 91%)", color: "hsl(0 0% 4%)", letterSpacing: "-0.5px" }}
              >
                Get In Touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass-card font-medium transition-colors"
                style={{ color: "hsl(0 0% 64%)" }}
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
