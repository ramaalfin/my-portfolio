import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ramaalfin7@gmail.com",
    href: "mailto:ramaalfin7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 852-4687-3358",
    href: "tel:+6285246873358",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bogor, Indonesia",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rama-alfin-baehaqi",
    color: "hover:bg-[#0077B5]/10 hover:text-[#0077B5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ramaalfin",
    color: "hover:bg-foreground/10",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:ramaalfin7@gmail.com",
    color: "hover:bg-primary/10 hover:text-primary",
  },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormState({ name: "", email: "", message: "" });

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Get In Touch
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 dark:text-muted-foreground">
              Let's Work Together
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
          </RevealText>
          <RevealText delay={300}>
            <div className="section-divider mx-auto mt-6" />
          </RevealText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700 ease-smooth",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <h3 className="font-serif text-2xl mb-8">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                    "hover:bg-muted/50",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-4 rounded-xl bg-muted/50 transition-all duration-300",
                    social.color,
                    "hover:scale-110",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div
              className={cn(
                "mt-8 p-4 rounded-xl bg-forest/5 border border-forest/20 transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-forest animate-pulse" />
                <p className="font-medium text-forest">
                  Available for new opportunities
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Open to full-time positions and freelance projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700 ease-smooth",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <GlassCard variant="solid" className="p-8">
              <h3 className="font-serif text-2xl mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                      "transition-all duration-300 input-glow"
                    )}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                      "transition-all duration-300 input-glow"
                    )}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                      "transition-all duration-300 input-glow"
                    )}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-haptic w-full py-4 rounded-xl font-medium transition-all duration-300",
                    "bg-primary text-primary-foreground",
                    "hover:shadow-lg hover:shadow-primary/25",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
