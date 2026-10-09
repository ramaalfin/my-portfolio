export interface Project {
    id: string;
    title: string;
    company: string;
    period: string;
    year: string;
    description: string;
    longDescription: string;
    highlights: string[];
    detailedFeatures: {
        title: string;
        description: string;
        metrics?: string;
    }[];
    tech: string[];
    category: "Web" | "Mobile";
    featured: boolean;
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        id: "nms-akses-internet",
        title: "NMS Akses Internet — National Network Monitoring",
        company: "PT Bangunindo Teknusa Jaya",
        period: "May 2026 - Present",
        year: "2026",
        description:
            "Internal monitoring platform for thousands of national internet service sites (VSAT & Fiber) — from site data and SLA onboarding to 24/7 monitoring, incident handling, evaluation, and provider billing. Internal system, not publicly accessible.",
        longDescription:
            "NMS Akses Internet manages the full lifecycle of Indonesia's national internet service sites: site master data, SLA onboarding, real-time monitoring, outage handling, performance evaluation, and provider payments. As the sole frontend contributor I delivered every module across 10 business cycles — 30 modules in total — on a legacy Nuxt 2 codebase while driving the migration to Nuxt 4 with Vue 3 and TypeScript.",
        highlights: [
            "30 frontend modules across 10 business cycles / 5 stages",
            "Real-time monitoring dashboard: Up/Down/Warning · uptime/ping/SQF/traffic",
            "5-phase Troubleshoot Ticket: detection → investigation → PMU approval → TTR → resolution",
            "SLA scoring & performance-based billing (Base − Penalty + Bonus)",
        ],
        detailedFeatures: [
            {
                title: "Foundation (Cycles 1–2, 9 modules)",
                description:
                    "Site master import with a simulation mode before production, DKH site master import (PPK contract rights), site relocation, provider/beam/data source managers, and BA Integration with auto-generated PDF templates.",
            },
            {
                title: "Operations (Cycles 3–5)",
                description:
                    "Real-time monitoring dashboard (Up/Down/Warning with uptime, ping, SQF, traffic), Troubleshoot Ticket across 5 phases with PMU approval, and Preventive Maintenance with dynamic forms and audit trails.",
            },
            {
                title: "Evaluation & Payment (Cycles 6–7)",
                description:
                    "SLA score calculation, two-way reconciliation with providers, BA Verification (Start → Final), and billing based on Base − Penalty + Bonus with budget utilization.",
                metrics: "SLA weights: uptime 40% · ping 20% · SQF 20% · traffic 10% · DHCP 10%",
            },
            {
                title: "Support (Cycles 8–10, 12+ modules)",
                description:
                    "Six analytics reports, 5-level user management with read-only BPK auditors, and the NMT document management system for archiving.",
            },
            {
                title: "Authorization",
                description:
                    "Approval acts as the gate that moves work from 'done' to 'officially recognized', with RBAC across 5 user levels and per-site-group access rules.",
            },
        ],
        tech: [
            "Nuxt 4",
            "Vue 3",
            "TypeScript",
            "Vuetify",
            "Tailwind CSS",
            "Pinia",
            "Nuxt 2 (legacy)",
            "Vue 2",
        ],
        category: "Web",
        featured: true,
    },
    {
        id: "pmt-bht-pms-ai",
        title: "PMT/BHT PMS AI — BAKTI Site Construction Platform",
        company: "PT Bangunindo Teknusa Jaya",
        period: "Aug 2026 - Present",
        year: "2026",
        description:
            "Project management system for building BAKTI internet sites (VSAT & Fiber Optic) across Indonesia — planning through maintenance until On-Air. Internal system, not publicly accessible.",
        longDescription:
            "PMT/BHT PMS AI is used by BAKTI, PMO, PMU, vendors, and O&M teams to manage site construction end-to-end. I led the frontend migration from Nuxt 3 to Nuxt 4 with Vue 3 and TypeScript, covering 16 modules organized as one continuous workflow across 5 blocks — frontend only, the backend was untouched.",
        highlights: [
            "Migrated frontend Nuxt 3 → Nuxt 4 + Vue 3 + TypeScript",
            "16 modules in 5 blocks forming a single workflow",
            "Approval as the key moment: work goes from 'done' to 'officially recognized'",
            "Site Package access control: PMU sees all, vendors only their own sites",
        ],
        detailedFeatures: [
            {
                title: "Block A · Planning",
                description:
                    "Project Phase (site batches), Contractor (vendor + supervisor), Site Information (sites + coordinates → PMO), and Team management.",
            },
            {
                title: "Block B · Material",
                description:
                    "Warehouse stock, Asset (unique codes · BMN), and Site Asset allocation from warehouse to site.",
            },
            {
                title: "Block C · Evidence & Approval",
                description:
                    "The heart of the workflow: Form Laporan Integrasi (data + photo + video), Manual Bulk Report, PMU Approval, and NMS Integration. Focus on validated input and reliable uploads.",
            },
            {
                title: "Block D · Monitoring",
                description:
                    "PMU Dashboard for the big picture and Vendor Dashboard restricted to each vendor's own sites.",
            },
            {
                title: "Block E · Authorization",
                description:
                    "Admin System User, My Profile, Admin User, and Site Package — the access gate in front of every block.",
            },
        ],
        tech: [
            "Nuxt 4",
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "Pinia",
            "Vuetify",
            "Nuxt 3 (legacy)",
        ],
        category: "Web",
        featured: true,
    },
    {
        id: "fiberzone",
        title: "Fiberzone — Corporate Fiber Internet Platform",
        company: "PT Varnion Teknologi Semesta",
        period: "Jul 2025 - Apr 2026",
        year: "2025",
        description:
            "Corporate fiber internet platform with coverage checking, end-to-end online subscription, client-side OCR onboarding, and payment integration.",
        longDescription:
            "Official website of a corporate fiber ISP: package catalog, coverage area check, online subscription and checkout, KTP/NPWP OCR onboarding, blog, and promotions — built with a team of 10+ engineers on GitLab merge-request workflows. I was the top contributor and led the subscription & checkout flow from coverage check to order status.",
        highlights: [
            "Top contributor: primary author of 81 of 189 core source modules",
            "End-to-end subscription flow: coverage → package → order → promo → payment → invoice",
            "Client-side OCR for KTP/NPWP (Tesseract.js) with form auto-fill",
            "Next.js 14 → 15 / React 18 → 19 migration with image & bundle optimization",
        ],
        detailedFeatures: [
            {
                title: "Subscription & Checkout",
                description:
                    "Coverage check with Leaflet, package selection, promo engine (BOGO, Rp0 promos) with validation rules, payment integration, invoices, and order status tracking.",
            },
            {
                title: "Client-side OCR Onboarding",
                description:
                    "Tesseract.js extracts KTP/NPWP fields automatically with image compression and form auto-fill to speed up customer onboarding.",
            },
            {
                title: "Security",
                description:
                    "AES-encrypted access/refresh tokens (CryptoJS), middleware route protection, reCAPTCHA v3, and a complete forgot-password → OTP → reset flow.",
            },
            {
                title: "Resilience & Operations",
                description:
                    "30-second timeouts, exponential backoff retries, fail-safe service layer with Indonesian error messages, and a zero-rebuild maintenance mode toggled via environment variable.",
            },
            {
                title: "Performance & Migration",
                description:
                    "Led the Next.js 14 → 15 and React 18 → 19 upgrade with AVIF/WebP images, lazy loading, and deferred analytics.",
            },
        ],
        tech: [
            "Next.js",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Leaflet",
            "Tesseract.js",
            "GSAP",
            "Framer Motion",
        ],
        category: "Web",
        featured: true,
        liveUrl: "https://fiberzone.id",
    },
    {
        id: "varnion-bali-company-profile",
        title: "Varnion Bali — Company Profile Website",
        company: "PT Varnion Teknologi Semesta",
        period: "Aug - Sep 2025",
        year: "2025",
        description:
            "Two-page company profile (Home + Product) for an ISP serving hotels & resorts in Bali, with scroll-based animations and a self-hosted brand font.",
        longDescription:
            "Static company profile for Varnion's Bali unit, an ISP focused on hospitality clients. Working with a team of 4, I owned the /product page end-to-end — hero, product carousels, activity gallery, hotel testimonials, and location section — plus the reusable layout, SEO metadata, and analytics.",
        highlights: [
            "Owned the /product page end-to-end: hero, 3 product carousels, testimonials, location",
            "Scroll animations with AOS and Framer Motion (whileInView hero sequence)",
            "Reusable MainLayout + Footer, local SEO metadata, and Google Analytics 4",
            "Mobile-first variants with animation-safe sliders",
        ],
        detailedFeatures: [
            {
                title: "Product Page",
                description:
                    "Hero banner with separate desktop/mobile variants, product carousel (Keponet, Megalos, Vlepo), activity carousel, testimonial slider with a reusable star-rating component for three premium Bali hotels, and a location section.",
            },
            {
                title: "Animation",
                description:
                    "AOS (900ms duration, 80px offset, once) for long sections plus Framer Motion variants triggered with whileInView to orchestrate the hero sequence: container → text → CTA.",
            },
            {
                title: "Layout, SEO & Analytics",
                description:
                    "MainLayout (header + children + footer) and a 108-line Footer built from scratch, local SEO metadata, and Google Analytics 4 in the root layout.",
            },
            {
                title: "Self-hosted Brand Font",
                description:
                    "Causten font (18 OTF sources + license) served statically from public/ — no third-party requests and no bundling issues.",
            },
            {
                title: "Delivery",
                description:
                    "Feature-branch workflow (dev-rama → development → master) with GitLab review and CI deployment via Docker standalone image.",
            },
        ],
        tech: [
            "Next.js 15",
            "React 19",
            "Tailwind CSS v4",
            "Framer Motion",
            "AOS",
            "Swiper",
            "GitLab CI",
            "Docker",
        ],
        category: "Web",
        featured: false,
    },
    {
        id: "getjob-hiring-platform",
        title: "GetJob — Multi-Role Hiring Platform",
        company: "Personal Project (Freelance)",
        period: "Oct 2025 - May 2026",
        year: "2025",
        description:
            "Multi-role recruitment platform with 3 separate dashboards (Admin, Employer, Candidate), RBAC at the edge, Kanban ATS, and gesture-based photo capture.",
        longDescription:
            "Job marketplace with three distinct dashboards built as the sole frontend contributor, from architecture to accessibility. Runs on Next.js App Router with Edge Middleware RBAC, a schema-driven dynamic application form, and a browser-side computer-vision capture flow.",
        highlights: [
            "Sole frontend contributor: 3 dashboards (Admin, Employer, Candidate)",
            "RBAC in Next.js Edge Middleware: JWT decode, role guards, auto-redirect",
            "6-stage Kanban ATS with drag-and-drop and optimistic updates",
            "Gesture-based photo capture with TensorFlow.js + MediaPipe, fully client-side",
        ],
        detailedFeatures: [
            {
                title: "Edge RBAC",
                description:
                    "JWT decoded in Edge Middleware with separate candidate/admin/employer route guards and role-based redirects decided before render.",
            },
            {
                title: "Kanban ATS",
                description:
                    "Six-stage drag-and-drop board with optimistic updates, automatic rollback on failure, toasts, and UI latency measured explicitly with performance.mark (target under 100 ms).",
            },
            {
                title: "Passwordless Auth",
                description:
                    "Magic link authentication (login, registration, email verification) with silent token refresh through an Axios interceptor, request replay, and a recursion guard.",
            },
            {
                title: "Schema-driven Application Form",
                description:
                    "Zod validation schema built at runtime from backend requirement flags (mandatory/optional/off) — no hardcoded forms.",
            },
            {
                title: "Browser Computer Vision",
                description:
                    "TensorFlow.js Hand Pose + MediaPipe capture a photo automatically from a 3-finger gesture, entirely in the browser.",
            },
            {
                title: "Accessibility",
                description:
                    "WCAG 2.1 AA audit with 7+ findings fixed: ARIA landmarks, control labels, modal focus traps, and keyboard instructions for drag-and-drop.",
            },
        ],
        tech: [
            "Next.js 14",
            "TypeScript",
            "Tailwind CSS",
            "shadcn / Radix",
            "TanStack Query",
            "Zustand",
            "React Hook Form",
            "Zod",
            "TensorFlow.js",
            "MediaPipe",
            "Vercel",
        ],
        category: "Web",
        featured: true,
        githubUrl: "https://github.com/ramaalfin/fe-hiring-platform",
    },
    {
        id: "heyhao-web",
        title: "HeyHao — Paid Community Dashboard (Web)",
        company: "Personal Project",
        period: "Feb - Apr 2026",
        year: "2026",
        description:
            "Web dashboard for a paid community platform: free & VIP groups, real-time chat, monetization, payouts, and a separate admin console.",
        longDescription:
            "Feature-based React 19 dashboard with a type-safe API layer: 7 feature modules following a consistent api → hooks → pages pattern, real-time chat over Socket.IO, and a monetization flow from discovery to checkout and admin payout approval. Built in a 6-week cycle.",
        highlights: [
            "Feature-based architecture: 7 feature modules, 21 pages",
            "Real-time Socket.IO chat with typed event contract",
            "Monetization flow: checkout → revenue dashboard → payout approval",
            "Type-safe API layer: 43 endpoint functions with Zod response validation",
        ],
        detailedFeatures: [
            {
                title: "Real-time Chat",
                description:
                    "Singleton SocketClient with a typed event contract, a pendingRooms queue that fixes the join-before-auth race condition, message deduplication across REST + realtime sources, typing indicator, and presence.",
            },
            {
                title: "Seamless Sessions",
                description:
                    "Access/refresh token rotation via Axios response headers, two separate auth boundaries (user/admin) with loader-based route guards, and 401 recovery.",
            },
            {
                title: "Monetization",
                description:
                    "Discover → checkout → success flow, monthly revenue dashboard with Chart.js, balance checks, withdrawal requests, and an admin payout console with transfer-proof upload behind its own auth boundary.",
            },
            {
                title: "Type-safe API Layer",
                description:
                    "43 endpoint functions across 3 Axios instances with runtime Zod validation of API responses, 32 custom hooks, and consistent error toasts — enforced by strict tsc and ESLint 9 in the build pipeline.",
            },
        ],
        tech: [
            "React 19",
            "TypeScript",
            "Vite 6",
            "React Router v7",
            "TanStack Query",
            "Tailwind CSS v4",
            "Socket.IO Client",
            "Chart.js",
            "React Hook Form",
            "Zod",
        ],
        category: "Web",
        featured: true,
        githubUrl: "https://github.com/ramaalfin/heyhao-fe",
    },
    {
        id: "heyhao-mobile",
        title: "HeyHao Mobile App — Cross-Platform Community App",
        company: "Personal Project",
        period: "2026",
        year: "2026",
        description:
            "Cross-platform mobile app (iOS & Android) for paid communities: real-time chat, paid groups, WebView checkout, and a revenue dashboard.",
        longDescription:
            "Sole mobile developer with full ownership from auth to payment. Feature-based React Native app with 9 feature modules and 21 screens in strict TypeScript, a resilient Axios layer with automatic token refresh, and about 99 Jest test cases guarding the auth and state logic.",
        highlights: [
            "Feature-based React Native app: 9 feature modules, 21 screens",
            "Resilient Axios layer: auto refresh with queued request replay",
            "End-to-end paid-group checkout via WebView payment gateway",
            "~99 Jest test cases covering token refresh, errors, Redux slices",
        ],
        detailedFeatures: [
            {
                title: "Cross-Platform Architecture",
                description:
                    "9 feature modules and 21 screens for iOS and Android with clear separation of concerns, in strict TypeScript.",
            },
            {
                title: "Resilient API Layer",
                description:
                    "Singleton Axios client per domain with interceptors, automatic 401 refresh, and a request replay queue that prevents a thundering-herd against the auth endpoint.",
            },
            {
                title: "Payment Flow",
                description:
                    "Full group checkout: transaction API → WebView payment gateway → success/failure redirect detection → receipt, alongside free/paid group CRUD with multipart asset upload.",
            },
            {
                title: "Revenue Dashboard",
                description:
                    "Monthly revenue bar charts (react-native-gifted-charts), VIP group/member statistics, and payout history with status badges and masked account numbers.",
            },
            {
                title: "Quality",
                description:
                    "~99 Jest test cases (token refresh with axios-mock-adapter, error handler, Redux slices, persist rehydration), ESLint (airbnb) + Prettier with path aliases synchronized across Babel, TypeScript, and Jest.",
            },
        ],
        tech: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "redux-persist",
            "Socket.IO Client",
            "NativeWind",
            "react-native-gifted-charts",
            "Jest",
            "Axios",
        ],
        category: "Mobile",
        featured: true,
        githubUrl: "https://github.com/ramaalfin/heyhao-app",
    },
];
