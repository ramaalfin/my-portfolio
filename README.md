# Rama Alfin Baehaqi - Portfolio

Frontend Engineer portfolio showcasing 2+ years of experience delivering production-grade web and mobile applications.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Project Showcase**: Detailed project pages with comprehensive feature breakdowns
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Modern UI**: Glassmorphism design with smooth animations
- **SEO Optimized**: Structured data and meta tags for better discoverability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: Radix UI
- **Icons**: Lucide React, React Icons

## 📂 Project Structure

```
src/
├── components/
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── ui/             # Reusable UI components
│   └── fancy/          # Advanced animated components
├── data/
│   ├── projects.ts     # Project data and metadata
│   └── experiences.ts  # Work experience data
├── pages/
│   ├── index.tsx       # Home page
│   └── projects/
│       └── [id].tsx    # Dynamic project detail pages
└── styles/
    └── globals.css     # Global styles and design system
```

## 🎨 Featured Projects

### HeyHao Platform (2026)
Full-stack community platform with real-time messaging, revenue analytics, and comprehensive group management.

**Tech**: React 18, TypeScript, Socket.IO, TanStack Query, Node.js, Express.js, Prisma ORM

**Highlights**:
- <50ms message latency for 1,000+ concurrent connections
- 90+ Lighthouse performance scores
- ~45% reduction in query times

### HeyHao Mobile App (2026)
Cross-platform mobile application for iOS and Android with 50+ screens and real-time chat.

**Tech**: React Native, TypeScript, Redux Toolkit, Socket.IO Client, NativeWind

**Highlights**:
- 50+ screens with feature-based architecture
- ~60% reduction in unnecessary API calls
- ~40% reduction in runtime errors

### Fiberzone (2025)
Corporate fiber internet platform with SSR and payment integration.

**Tech**: Next.js, TypeScript, Zustand, IForte Pay

**Highlights**:
- Lighthouse score 95+ (up from 72)
- ~35% reduction in page load time
- Live: [fiberzone.id](https://fiberzone.id)

### Hiring Management System (2025)
Multi-role recruitment platform with dynamic forms and AI-powered features.

**Tech**: Next.js, PostgreSQL, Prisma ORM, TensorFlow.js, MediaPipe

**Highlights**:
- 10x faster queries (500ms → 50ms)
- Gesture-based photo capture
- Live: [squeezy-hiring.netlify.app](https://squeezy-hiring.netlify.app)

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Content Management

### Adding New Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: "project-slug",
  title: "Project Title",
  company: "Company Name",
  period: "Month Year",
  year: "YYYY",
  description: "Short description",
  longDescription: "Detailed description",
  highlights: ["Key point 1", "Key point 2"],
  detailedFeatures: [
    {
      title: "Feature Name",
      description: "Feature description",
      metrics: "Optional metrics"
    }
  ],
  tech: ["Tech1", "Tech2"],
  category: "Web" | "Mobile",
  featured: true,
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

### Updating Experience

Edit `src/data/experiences.ts` to update work experience:

```typescript
{
  title: "Job Title",
  company: "Company Name",
  period: "Month Year - Month Year",
  location: "City, Country",
  current: true | false,
  description: "Role description",
  achievements: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2"]
}
```

## 🎨 Design System

The portfolio uses a nature-inspired color palette:

- **Primary**: Terracotta (#D97757)
- **Accent**: Ocean Blue (#4A90E2)
- **Forest**: Deep Green (#5A8F6F)
- **Sunset**: Warm Orange (#E67E50)

### Key Features:
- Glassmorphism effects
- Smooth scroll animations
- Responsive typography
- Dark mode support

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Build & Deploy

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📄 License

This project is private and proprietary.

## 📧 Contact

- **Email**: ramaalfin7@gmail.com
- **LinkedIn**: [linkedin.com/in/rama-alfin-baehaqi](https://linkedin.com/in/rama-alfin-baehaqi)
- **Location**: Bogor, Indonesia
