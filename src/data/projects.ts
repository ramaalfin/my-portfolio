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
        id: "heyhao-platform",
        title: "HeyHao — Community & Group Management Platform",
        company: "Personal Project",
        period: "2026",
        year: "2026",
        description:
            "Full-stack community platform with real-time messaging, revenue analytics, and comprehensive group management capabilities.",
        longDescription:
            "Built and architected a full-stack community platform end-to-end — a high-performance React 18 dashboard and a robust Node.js/Express.js REST API — supporting complex group management, user interactions, and real-time data synchronization.",
        highlights: [
            "Real-time messaging with <50ms latency for 1,000+ concurrent connections",
            "Comprehensive revenue analytics with Chart.js visualization",
            "JWT authentication with token rotation and refresh mechanisms",
            "90+ Lighthouse performance scores",
            "TanStack Query caching reducing query times by ~45%",
        ],
        detailedFeatures: [
            {
                title: "Real-time Messaging System",
                description:
                    "Engineered using Socket.IO with WebSocket connection management, room-based messaging, typing indicators, and online/offline presence tracking.",
                metrics: "<50ms message latency for 1,000+ concurrent connections",
            },
            {
                title: "Revenue Analytics Engine",
                description:
                    "Comprehensive analytics integrated with Chart.js, visualizing monthly revenue trends, VIP group statistics, and transaction history, powered by custom payment processing backend with transaction rollback mechanisms.",
            },
            {
                title: "Full-Stack Authentication",
                description:
                    "Implemented JWT access and refresh tokens, token rotation, and middleware-based route protection, securing all API surfaces and ensuring seamless user session continuity.",
            },
            {
                title: "Performance Optimization",
                description:
                    "System-wide performance optimization implementing TanStack Query caching and code splitting on frontend, alongside strategic database indexing and connection pooling with Prisma ORM.",
                metrics: "~45% reduction in query times, 90+ Lighthouse scores",
            },
            {
                title: "Responsive UI Component Library",
                description:
                    "Developed with TailwindCSS and React Hook Form, implementing mobile-first design patterns, loading states, and error boundaries for consistent cross-device experience.",
            },
        ],
        tech: [
            "React 18",
            "TypeScript",
            "Vite",
            "TailwindCSS",
            "TanStack Query",
            "Socket.IO Client",
            "Chart.js",
            "React Hook Form",
            "Zod",
            "Node.js",
            "Express.js",
            "Prisma ORM",
        ],
        category: "Web",
        featured: true,
    },
    {
        id: "heyhao-mobile",
        title: "HeyHao Mobile App — Cross-Platform Community App",
        company: "Personal Project",
        period: "2026",
        year: "2026",
        description:
            "Cross-platform mobile application for iOS and Android with 50+ screens, real-time chat, and comprehensive revenue analytics.",
        longDescription:
            "Architected a cross-platform mobile application for iOS and Android with 50+ screens and components, implementing feature-based folder structure with clear separation of concerns to support a scalable community and group management platform.",
        highlights: [
            "50+ screens with feature-based architecture",
            "Real-time chat with <50ms message latency",
            "Revenue analytics dashboard with interactive charts",
            "~60% reduction in unnecessary API calls",
            "~40% reduction in runtime errors with TypeScript",
        ],
        detailedFeatures: [
            {
                title: "Cross-Platform Architecture",
                description:
                    "Architected for iOS and Android with 50+ screens and components, implementing feature-based folder structure with clear separation of concerns.",
            },
            {
                title: "Real-time Chat Integration",
                description:
                    "Integrated Socket.IO client with WebSocket connection management, typing indicators, online/offline presence tracking, and message delivery confirmation.",
                metrics: "<50ms message latency",
            },
            {
                title: "Revenue Analytics Dashboard",
                description:
                    "Built comprehensive dashboard with react-native-gifted-charts, displaying monthly revenue trends with interactive bar charts, VIP group statistics, and latest member transactions.",
            },
            {
                title: "Efficient State Management",
                description:
                    "Implemented combining Redux Toolkit for global state (auth, app settings) and TanStack Query for server state with automatic caching and background refetching.",
                metrics: "~60% reduction in unnecessary API calls",
            },
            {
                title: "Type-Safe API Integration",
                description:
                    "Engineered with 100% TypeScript coverage and custom hooks (useAuth, useGroup, useChat, useTransaction) for data fetching, automatic JWT token refresh, and request/response interceptors.",
                metrics: "~40% reduction in runtime errors",
            },
            {
                title: "Custom React Hooks",
                description:
                    "Designed for WebSocket events (useSocket, useMessages, useTypingIndicator) with automatic cleanup and reconnection logic, and implemented image caching for optimal performance with large media content.",
            },
        ],
        tech: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "TanStack Query",
            "Socket.IO Client",
            "NativeWind",
            "react-native-gifted-charts",
            "React Hook Form",
            "Zod",
        ],
        category: "Mobile",
        featured: true,
    },
    {
        id: "fiberzone",
        title: "Fiberzone — Corporate Fiber Internet Platform",
        company: "PT Varnion Teknologi Semesta",
        period: "November 2025",
        year: "2025",
        description:
            "Corporate fiber internet platform with SSR, payment integration, and promotional pricing engine.",
        longDescription:
            "Official website for fiber internet service provider featuring unlimited packages without FUP, with fast and stable connections. Implemented SSR for optimal performance and integrated payment gateway.",
        highlights: [
            "Lighthouse performance score 95+ (up from 72)",
            "~35% reduction in initial page load time",
            "BOGO promotional pricing engine with validation",
            "Full authentication flows with JWT",
            "Feature-based architecture with global state separation",
        ],
        detailedFeatures: [
            {
                title: "Performance Optimization",
                description:
                    "Lifted Lighthouse performance score through SSR, image optimization, and critical-path CSS inlining.",
                metrics: "95+ Lighthouse score, ~35% faster load time",
            },
            {
                title: "Promotional Pricing Engine",
                description:
                    "Engineered BOGO promotional pricing with configurable validation rules, handling edge-case discount stacking, expiry logic and implemented dynamic pricing calculation with real-time feedback.",
            },
            {
                title: "Authentication System",
                description:
                    "Built full authentication flows (login, forgot password, reset password) with JWT token handling and middleware-based route protection.",
            },
            {
                title: "Code Architecture",
                description:
                    "Structured the codebase with feature-based architecture and global state separation for maintainability and scalability.",
            },
            {
                title: "SEO Optimization",
                description:
                    "Integrated structured data and Open Graph metadata for SEO, improving page indexability for target service-area keywords.",
            },
        ],
        tech: [
            "Next.js (Pages Router)",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "REST API",
            "SSR",
            "IForte Pay",
        ],
        category: "Web",
        featured: true,
        liveUrl: "https://fiberzone.id",
    },
    {
        id: "hiring-management",
        title: "Hiring Management System — Multi-Role Recruitment Platform",
        company: "Personal Project",
        period: "November 2025",
        year: "2025",
        description:
            "Multi-role recruitment platform with dynamic form builder, magic link authentication, and gesture-based photo capture.",
        longDescription:
            "Comprehensive hiring management system with dynamic form rendering, multiple authentication methods, and AI-powered features for modern recruitment workflows.",
        highlights: [
            "Dynamic form builder from backend-driven JSON schema",
            "JWT + Magic link passwordless authentication",
            "Multi-role access with RBAC and IDOR protection",
            "99.9% email delivery rate with Resend",
            "10x faster queries (500ms → 50ms)",
            "Gesture-based photo capture with TensorFlow.js",
        ],
        detailedFeatures: [
            {
                title: "Dynamic Form Builder",
                description:
                    "Architected rendering complex application forms from backend-driven JSON schema, eliminating hardcoded field definitions and enabling rapid customization.",
            },
            {
                title: "Advanced Authentication",
                description:
                    "Implemented JWT authentication with refresh token cycle and Axios interceptor pattern, plus magic link passwordless authentication with one-time verification codes and 30-minute expiry.",
            },
            {
                title: "Database Design & Security",
                description:
                    "Designed normalized PostgreSQL schema with Prisma ORM for multi-role access (Admin/Candidate), implementing middleware-enforced RBAC, IDOR protection, and email verification requirements.",
            },
            {
                title: "Email Service Integration",
                description:
                    "Integrated Resend email service with automatic provider switching, solving SMTP port blocking issues.",
                metrics: "99.9% delivery rate",
            },
            {
                title: "Database Performance",
                description:
                    "Optimized with strategic indexing for faster query execution.",
                metrics: "10x faster queries (500ms → 50ms average response time)",
            },
            {
                title: "AI-Powered Photo Capture",
                description:
                    "Built gesture-based photo capture using TensorFlow.js Hand Pose + MediaPipe for touchless document scanning, improving accessibility.",
            },
        ],
        tech: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "PostgreSQL",
            "Prisma ORM",
            "JWT",
            "Resend",
            "Cloudinary",
            "TensorFlow.js",
            "MediaPipe",
        ],
        category: "Web",
        featured: true,
        liveUrl: "https://squeezy-hiring.netlify.app",
    },
];
