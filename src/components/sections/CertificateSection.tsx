import Image from "next/image";
import { Award, Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const certificates = [
  {
    title: "MERN Stack Development",
    publisher: "WPU Course",
    date: "April 2025",
    description:
      "Comprehensive MERN Stack course covering MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.",
    url: "/assets/sertif/wpucourse.png",
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["MongoDB", "Express", "React", "Node.js", "Full-Stack"],
    duration: "3 Months",
    level: "Advanced",
    issued: "April 15, 2025",
    credentialId: "WPU-2025-001",
  },
  {
    title: "Bootcamp Full-Stack JavaScript Developer MERN",
    publisher: "BuildWith Angga",
    date: "December 2025",
    description:
      "Intensive bootcamp focused on full-stack JavaScript development using the MERN stack, culminating in the creation of an event website.",
    url: "/assets/sertif/full-stack-javascript-next-js-developer-build-job-portal-website.jpg",
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["JavaScript", "MERN", "Bootcamp", "Advanced"],
    duration: "4 Months",
    level: "Expert",
    issued: "December 10, 2025",
    credentialId: "BWA-2025-789",
  },
  {
    title: "Full-Stack Javascript Next JS Developer",
    publisher: "BuildWith Angga",
    date: "August 2025",
    description:
      "Comprehensive course on building a job portal website using Next.js, focusing on full-stack JavaScript development.",
    url: "/assets/sertif/bootcamp-full-stack-javascript-developer-mern-website-event.jpg",
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["Next.js", "TypeScript", "SSR", "Modern Stack"],
    duration: "3 Months",
    level: "Intermediate",
    issued: "August 22, 2025",
    credentialId: "BWA-2025-456",
  },
  {
    title: "Advanced React Patterns",
    publisher: "Frontend Masters",
    date: "March 2025",
    description:
      "Deep dive into advanced React patterns, performance optimization, and state management strategies.",
    url: "/assets/sertif/placeholder.png",
    bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tags: ["React", "Hooks", "Performance", "Patterns"],
    duration: "2 Months",
    level: "Advanced",
    issued: "March 18, 2025",
    credentialId: "FEM-2025-123",
  },
  {
    title: "TypeScript Masterclass",
    publisher: "CodeWithMosh",
    date: "January 2025",
    description:
      "Master TypeScript from basics to advanced features, including generics, decorators, and advanced type manipulation.",
    url: "/assets/sertif/placeholder.png",
    bgColor: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
    tags: ["TypeScript", "Generics", "Advanced Types", "Decorators"],
    duration: "2 Months",
    level: "Advanced",
    issued: "January 30, 2025",
    credentialId: "CWM-2025-789",
  },
  {
    title: "Cloud Architecture & AWS",
    publisher: "AWS Training",
    date: "November 2024",
    description:
      "Learn cloud architecture principles and AWS services for building scalable and reliable applications.",
    url: "/assets/sertif/placeholder.png",
    bgColor: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
    tags: ["AWS", "Cloud", "Architecture", "DevOps"],
    duration: "3 Months",
    level: "Intermediate",
    issued: "November 15, 2024",
    credentialId: "AWS-2024-456",
  },
];

export const CertificateSection = () => {
  const handleStackComplete = () => {
    console.log("Certificate stack animation completed!");
  };

  return (
    <section
      id="certificates"
      className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* ScrollStack Container */}
      <div className="relative min-h-screen">
        <ScrollStack
          className="h-full"
          itemDistance={80}
          itemScale={0.05}
          itemStackDistance={30}
          stackPosition="30%"
          scaleEndPosition="15%"
          baseScale={0.8}
          scaleDuration={0.6}
          rotationAmount={0.5}
          blurAmount={2}
          useWindowScroll={true}
          onStackComplete={handleStackComplete}
        >
          {certificates.map((cert, index) => (
            <ScrollStackItem key={index} itemClassName="group">
              <div
                className="absolute inset-0 rounded-[40px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                style={{ background: cert.bgColor }}
              >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10 h-full p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 text-white">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {cert.date}
                        </span>
                        <span className="w-1 h-1 bg-white rounded-full" />
                        <Clock className="w-4 h-4" />
                        <span className="text-sm opacity-90">
                          {cert.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        {cert.title}
                      </h3>

                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-5 h-5 text-blue-100" />
                        <p className="text-lg text-blue-100 font-semibold">
                          {cert.publisher}
                        </p>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          {cert.level}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-white/80 mb-3">
                        Skills Gained
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-white/70">Issued</p>
                          <p className="font-medium">{cert.issued}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/70">Credential ID</p>
                          <p className="font-mono text-sm">
                            {cert.credentialId}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn relative px-6 py-3 bg-white text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <span className="relative z-10 flex items-center gap-2">
                        View Certificate
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform group-hover/btn:scale-110 transition-transform duration-500" />
                    </button>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 relative">
                    <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                      <Image
                        src={cert.url}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Certificate Badge */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="px-4 py-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-full shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                          <Award className="w-5 h-5" />
                          <span>Certified</span>
                        </div>
                      </div>

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full" />
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full" />
                    </div>

                    {/* Floating Number */}
                    <div className="absolute -top-6 -left-6 z-20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-40 h-40">
                  <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white/30 rounded-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32">
                  <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-white/30 rounded-full" />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};
