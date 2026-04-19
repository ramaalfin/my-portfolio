export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    current: boolean;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        title: "Frontend Developer",
        company: "PT Varnion Teknologi Semesta",
        period: "Jun 2025 - Present",
        location: "Jakarta, Indonesia",
        current: true,
        description:
            "Engineered responsive web applications using React.js and Next.js with hybrid SSR/CSR rendering strategy, achieving exceptional performance scores and building scalable component systems.",
        achievements: [
            "Achieved Lighthouse performance scores of 95+ (up from 72) via targeted Core Web Vitals optimization",
            "Architected feature-based folder structures and reusable component systems, reducing cross-team development time across 3+ concurrent projects",
            "Integrated third-party payment gateway (IForte Pay) with centralized error handling, retry logic, and request deduplication",
            "Implemented 3D product visualizations using Three.js and GSAP-driven scroll animations",
            "Enforced security best practices including XSS/CSRF/CSP hardening, JWT-based auth flows, and input sanitization",
            "Delivered internationalization (i18n) support using JSON + Redux state pattern for multi-language rollout",
            "Increased test coverage from 35% to 85% by adding 50+ unit tests using Vitest and React Testing Library",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Three.js",
            "GSAP",
            "Redux",
            "Vitest",
            "React Testing Library",
        ],
    },
    {
        title: "Frontend Developer",
        company: "PT Mahardika Caraka Indonesia",
        period: "Feb 2024 - Aug 2025",
        location: "Jakarta, Indonesia",
        current: false,
        description:
            "Built and maintained production web & mobile features across multiple client projects, deploying 3 applications from prototype to production.",
        achievements: [
            "Built Educational Mobile App (React Native, Expo) with geolocation-based attendance, camera & file upload, and AsyncStorage token persistence",
            "Delivered production-ready APK via Expo EAS for cross-platform deployment",
            "Integrated REST APIs with centralized Axios interceptor pattern for token refresh, error normalization, and request deduplication",
            "Reduced API-related bug reports by standardizing error-handling behavior across all projects",
            "Produced technical documentation (component API reference, data-flow diagrams) improving onboarding time for new team members",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "React Native",
            "Expo",
            "TypeScript",
            "Redux",
            "Axios",
            "AsyncStorage",
        ],
    },
    {
        title: "Full-Stack Developer Intern",
        company: "PT INDI Teknokreasi Internasional",
        period: "Aug 2023 - Dec 2023",
        location: "Jakarta, Indonesia",
        current: false,
        description:
            "Developed full-stack applications and implemented RESTful APIs while collaborating with team members on project development.",
        achievements: [
            "Developed full-stack applications using Laravel and Next.js",
            "Implemented RESTful APIs with proper authentication and authorization",
            "Collaborated with team members on project planning and development",
            "Worked with MySQL databases for data management",
        ],
        technologies: ["Laravel", "Next.js", "MySQL", "REST API"],
    },
];
