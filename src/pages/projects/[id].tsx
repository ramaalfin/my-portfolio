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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
            <Link
              href="/#projects"
              className="text-primary hover:underline inline-flex items-center gap-2"
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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream/30 to-transparent">
        <div className="container px-4 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-sunset/10 text-sunset">
                  Featured Project
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card font-medium hover:bg-muted/50 transition-colors"
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
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl mb-8">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg glass-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 bg-cream/30">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl mb-8">Detailed Features</h2>
            <div className="space-y-6">
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
                    <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-8">
                    {feature.description}
                  </p>
                  {feature.metrics && (
                    <div className="ml-8 mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
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
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl mb-8">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:bg-muted/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-cream/30">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="font-serif text-3xl mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can help bring your project to life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card font-medium hover:bg-muted/50 transition-colors"
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
