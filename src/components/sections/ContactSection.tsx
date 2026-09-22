import { useEffect, useRef, useState } from "react";
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
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ramaalfin",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:ramaalfin7@gmail.com",
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
    <section id="contact" ref={sectionRef} className="py-section lg:py-band">
      <div className="container px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span
              className="text-sm font-medium uppercase"
              style={{ color: "hsl(276 100% 82%)", letterSpacing: "-0.5px" }}
            >
              Get In Touch
            </span>
          </RevealText>
          <RevealText delay={100}>
            <h2
              className="text-4xl md:text-5xl lg:text-[55px] font-medium mt-4 mb-6"
              style={{ letterSpacing: "-2px", lineHeight: 1 }}
            >
              Let&apos;s Work Together
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="max-w-2xl mx-auto" style={{ color: "hsl(0 0% 64%)" }}>
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
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
            <h3
              className="text-xl mb-8 font-medium"
              style={{ letterSpacing: "-0.5px" }}
            >
              Contact Information
            </h3>

            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-lg transition-all duration-300",
                    "hover:bg-surface",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ background: "hsl(276 100% 82% / 0.1)" }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: "hsl(276 100% 82%)" }}
                    />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "hsl(0 0% 56%)" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium transition-colors hover:text-accent"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: "hsl(0 0% 100%)" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="font-medium mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Connect with me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-lg transition-all duration-300 hover:scale-110",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    background: "hsl(0 0% 10%)",
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" style={{ color: "hsl(0 0% 64%)" }} />
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div
              className={cn(
                "mt-8 p-4 rounded-lg transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{
                background: "hsl(78 70% 65% / 0.05)",
                border: "1px solid hsl(78 70% 65% / 0.15)",
                transitionDelay: "500ms",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: "hsl(78 70% 65%)" }}
                />
                <p className="font-medium" style={{ color: "hsl(78 70% 65%)" }}>
                  Available for new opportunities
                </p>
              </div>
              <p className="text-sm mt-2" style={{ color: "hsl(0 0% 56%)" }}>
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
            <div className="glass-card-solid p-8">
              <h3
                className="text-xl mb-6 font-medium"
                style={{ letterSpacing: "-0.5px" }}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(0 0% 64%)" }}
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
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 input-glow"
                    style={{
                      background: "hsl(0 0% 7%)",
                      border: "1px solid hsl(0 0% 18%)",
                      color: "hsl(0 0% 100%)",
                      letterSpacing: "-0.5px",
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(0 0% 64%)" }}
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
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 input-glow"
                    style={{
                      background: "hsl(0 0% 7%)",
                      border: "1px solid hsl(0 0% 18%)",
                      color: "hsl(0 0% 100%)",
                      letterSpacing: "-0.5px",
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(0 0% 64%)" }}
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
                    className="w-full px-4 py-3 rounded-lg resize-none transition-all duration-300 input-glow"
                    style={{
                      background: "hsl(0 0% 7%)",
                      border: "1px solid hsl(0 0% 18%)",
                      color: "hsl(0 0% 100%)",
                      letterSpacing: "-0.5px",
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: "hsl(0 0% 91%)",
                    color: "hsl(0 0% 4%)",
                    letterSpacing: "-0.5px",
                  }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
