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
        title: "Frontend Engineer",
        company: "PT Bangunindo Teknusa Jaya",
        period: "Jun 2026 - Present",
        location: "Indonesia",
        current: true,
        description:
            "Frontend engineer on two internal enterprise Vue/Nuxt platforms for Indonesia's national internet program: NMS Akses Internet (network monitoring & provider SLA) and PMT/BHT PMS AI (BAKTI site construction management). Both are internal systems and are not publicly accessible.",
        achievements: [
            "Built the entire frontend of NMS Akses Internet across 10 business cycles (30 modules) — simulated site-master imports, BA Integration with auto-generated PDFs, real-time monitoring dashboards, 5-phase incident tickets with PMU approval, SLA scoring, and performance-based billing",
            "Migrated PMT/BHT PMS AI from Nuxt 3 to Nuxt 4 + Vue 3 + TypeScript: 16 modules in 5 workflow blocks (planning, material, evidence & approval, monitoring, authorization)",
            "Implemented Site Package authorization (per-site-group access) and 5-level RBAC — PMU sees everything, vendors only their own sites, BPK auditors read-only",
            "Wrote end-to-end business documentation for all 10 cycles plus contribution presentations for probation and module reviews",
        ],
        technologies: [
            "Vue 3",
            "Nuxt 2 / 4",
            "TypeScript",
            "Vuetify",
            "Tailwind CSS",
            "Pinia",
            "Vue 2",
        ],
    },
    {
        title: "Frontend Developer",
        company: "PT Varnion Teknologi Semesta",
        period: "Jun 2025 - May 2026",
        location: "Jakarta, Indonesia",
        current: false,
        description:
            "Frontend developer on Fiberzone, a production corporate fiber ISP platform, and the Varnion Bali company profile — working alongside a team of 10+ engineers on GitLab merge-request workflows.",
        achievements: [
            "Top contributor on Fiberzone (production ISP platform, 10+ engineers) — primary author of 81 of 189 core source modules (pages, components, services, store, middleware)",
            "Owned the end-to-end subscription & checkout flow: Leaflet coverage check, package selection, promo engine (BOGO, Rp0 promos), payment integration, invoices, and order status",
            "Shipped client-side OCR for KTP/NPWP (Tesseract.js) with automatic field extraction, image compression, and form auto-fill to speed up customer onboarding",
            "Hardened security: AES-encrypted access/refresh tokens (CryptoJS), middleware route protection, reCAPTCHA v3, and a complete forgot-password → OTP → reset flow",
            "Built network resilience (30s timeouts, exponential backoff retries, safe fallbacks) and a zero-rebuild maintenance mode toggled via environment variable in middleware",
            "Led the Next.js 14 → 15 / React 18 → 19 migration with AVIF/WebP images, lazy loading, deferred analytics, and bundle reduction; set ESLint + Prettier standards and GitLab MR review flow",
        ],
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "GSAP",
            "Framer Motion",
            "Leaflet",
            "Tesseract.js",
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
            "Built Educational Mobile App (React Native, Expo) with geolocation-based attendance, camera & attachment upload, and AsyncStorage token persistence",
            "Delivered production-ready APK via Expo EAS for cross-platform deployment",
            "Integrated REST APIs across projects with a centralized Axios interceptor pattern for token refresh, error normalization, and request deduplication",
            "Produced technical documentation (component API reference, data-flow diagrams) for two ongoing projects, improving onboarding time for new team members",
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
