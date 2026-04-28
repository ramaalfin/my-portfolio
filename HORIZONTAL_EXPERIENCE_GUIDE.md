# Horizontal Experience Section — Implementation Guide

## 🎯 Overview

Horizontal scroll timeline yang mengubah scroll vertikal menjadi horizontal movement. Setiap experience adalah "slide" penuh layar dengan animasi entrance yang smooth.

---

## 📁 Files Created

```
src/components/sections/
├── ExperienceSection.tsx              ← Original (vertical timeline dengan Quick Wins)
└── ExperienceSectionHorizontal.tsx    ← NEW (horizontal scroll)
```

---

## 🔄 Switching Between Versions

### **Pakai Horizontal (Current):**
```tsx
// src/pages/index.tsx
import { ExperienceSectionHorizontal } from "@/components/sections/ExperienceSectionHorizontal";

<ExperienceSectionHorizontal />
```

### **Kembali ke Vertical:**
```tsx
// src/pages/index.tsx
import { ExperienceSection } from "@/components/sections/ExperienceSection";

<ExperienceSection />
```

---

## ✨ Key Features

### **1. Horizontal Scroll Transform**
```tsx
gsap.to(horizontal, {
  x: -scrollWidth,  // Geser ke kiri sejauh total width
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: () => `+=${scrollWidth}`,
    scrub: 1,        // Smooth 1:1 dengan scroll
    pin: true,       // Pin section saat scroll
  },
});
```

**Cara kerja:**
- User scroll vertikal → GSAP transform jadi horizontal movement
- Section di-pin saat scroll melewatinya
- Total scroll distance = lebar semua card

---

### **2. Progress Bar**
```tsx
<div className="relative w-full h-1 bg-muted/30 rounded-full">
  <div
    ref={progressBarRef}
    className="... origin-left scale-x-0 bg-gradient-to-r from-primary via-sunset to-accent"
  />
</div>
```

**Animasi:**
```tsx
gsap.to(progressBarRef.current, {
  scaleX: 1,  // 0 → 1 seiring scroll
  scrollTrigger: {
    scrub: 0.3,  // Sedikit lag untuk smooth feel
  },
});
```

---

### **3. Card Entrance Animation**
```tsx
gsap.fromTo(
  card,
  { opacity: 0, scale: 0.9 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: card,
      containerAnimation: tl,  // ← PENTING: referensi ke timeline horizontal
      start: "left 80%",       // Trigger saat card 80% dari kiri viewport
    },
  }
);
```

**`containerAnimation` adalah kunci:**
- Tanpa ini, ScrollTrigger tidak tahu card sedang bergerak horizontal
- Dengan ini, trigger position dihitung relatif terhadap horizontal movement

---

### **4. Stagger Animations**

**Achievements:**
```tsx
gsap.fromTo(
  achievements,
  { opacity: 0, x: -30 },
  {
    opacity: 1,
    x: 0,
    stagger: 0.08,  // Setiap item delay 80ms
    scrollTrigger: {
      containerAnimation: tl,
      start: "left 70%",
    },
  }
);
```

**Tech Badges:**
```tsx
gsap.fromTo(
  techStack,
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    stagger: 0.05,
    ease: "back.out(1.4)",  // Bounce effect
  }
);
```

---

## 🎨 Layout Structure

```
┌─────────────────────────────────────────┐
│  Header + Progress Bar (fixed)         │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │ Ch 1 │  │ Ch 2 │  │ Ch 3 │  ←──────┤ Horizontal scroll
│  │      │  │      │  │      │         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
├─────────────────────────────────────────┤
│  Scroll Hint (fixed bottom)            │
└─────────────────────────────────────────┘
```

**Card sizing:**
- Desktop: `w-[50vw]` (50% viewport width)
- Tablet: `w-[70vw]`
- Mobile: `w-[90vw]`
- Height: `h-[80vh]` (80% viewport height)

---

## 🔧 Customization

### **Adjust Scroll Speed**
```tsx
scrollTrigger: {
  scrub: 1,  // 1 = smooth, 0.5 = faster, 2 = slower
}
```

### **Change Card Width**
```tsx
className="w-[90vw] md:w-[70vw] lg:w-[50vw]"
//         ↑ mobile  ↑ tablet   ↑ desktop
```

### **Modify Entrance Timing**
```tsx
scrollTrigger: {
  start: "left 80%",  // 80% = early, 50% = center, 20% = late
}
```

### **Add More Icons**
```tsx
const experienceIcons = [
  Briefcase,  // Experience 1
  Code,       // Experience 2
  Rocket,     // Experience 3
  Zap,        // Experience 4 (tambahkan jika ada)
];
```

---

## 📱 Mobile Considerations

**Sudah dihandle:**
- Card width responsive (`w-[90vw]` di mobile)
- Touch scroll works natively
- Overflow scroll di card content (`overflow-y-auto`)

**Catatan:**
- Horizontal scroll di mobile terasa natural karena mirip swipe gesture
- Progress bar membantu user tahu posisi mereka

---

## 🐛 Troubleshooting

### **Problem: Section tidak pin**
```tsx
// Pastikan containerRef di-set ke wrapper, bukan horizontal container
<div ref={containerRef}>  ← Pin target
  <div ref={horizontalRef}>  ← Yang digeser
```

### **Problem: Card animation tidak jalan**
```tsx
// Pastikan containerAnimation di-set
scrollTrigger: {
  containerAnimation: tl,  ← WAJIB untuk horizontal scroll
}
```

### **Problem: Scroll terlalu cepat/lambat**
```tsx
// Adjust scrub value
scrub: 1,  // 0 = instant, 1 = smooth, 2+ = very smooth
```

---

## 🎯 Performance Tips

1. **Lazy load achievements:** Hanya render 5 pertama
2. **Use `will-change`:** Sudah di-handle GSAP otomatis
3. **Cleanup ScrollTrigger:** Sudah ada di `return () => {}`
4. **Avoid re-renders:** `useEffect` hanya jalan sekali

---

## 🚀 Next Steps (Optional Enhancements)

1. **Parallax background:** Geser background lebih lambat dari cards
2. **Mouse wheel hijack:** Horizontal scroll dengan mouse wheel
3. **Keyboard navigation:** Arrow keys untuk next/prev card
4. **Snap points:** Card snap ke center saat scroll berhenti
5. **Chapter navigation:** Dots indicator untuk jump ke chapter tertentu

---

## 📊 Comparison: Vertical vs Horizontal

| Aspect | Vertical (Original) | Horizontal (New) |
|--------|-------------------|------------------|
| **Uniqueness** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Mobile UX** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Maintenance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 💡 Recommendation

**Use Horizontal if:**
- Portfolio target: Senior/Lead Frontend roles
- Want to showcase advanced GSAP skills
- Audience: Tech-savvy recruiters/developers

**Use Vertical if:**
- Portfolio target: Mid-level roles
- Priority: Readability over wow factor
- Audience: Non-technical stakeholders

---

Dibuat dengan ❤️ menggunakan GSAP ScrollTrigger + Lenis
