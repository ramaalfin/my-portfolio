# Testing Guide - Portfolio Updates

## Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Testing Checklist

### ✅ Home Page Updates

#### Hero Section
- [ ] Title displays "Rama Alfin Baehaqi"
- [ ] Subtitle shows "Frontend Engineer" (not "Front-End Developer")
- [ ] Description mentions "production-grade web and mobile applications"
- [ ] All social links work (Email, LinkedIn, GitHub)
- [ ] "View My Work" button scrolls to projects section
- [ ] "Get In Touch" button scrolls to contact section

#### About Section
- [ ] Text mentions "2+ years of experience"
- [ ] Mentions "Lighthouse scores to 95+"
- [ ] Mentions "~35% load time reduction"
- [ ] Text animates on scroll
- [ ] Responsive on mobile devices

#### Experience Section
- [ ] Shows 3 work experiences
- [ ] PT Varnion Teknologi Semesta marked as current
- [ ] Each experience shows key achievements
- [ ] Technologies displayed as tags
- [ ] Timeline animation works on scroll
- [ ] Responsive layout on mobile

#### Projects Section
- [ ] Shows 4 featured projects:
  - HeyHao Platform
  - HeyHao Mobile App
  - Fiberzone
  - Hiring Management System
- [ ] Filter buttons work (All, Web, Mobile)
- [ ] Each project card is clickable
- [ ] Hover effects work on project cards
- [ ] "View Details" link appears on hover
- [ ] Tech stack tags display correctly
- [ ] "+X more" indicator shows when tech stack > 6 items

### ✅ Project Detail Pages

Test each project detail page:

#### 1. HeyHao Platform
URL: `/projects/heyhao-platform`

- [ ] Page loads without errors
- [ ] Back button returns to home page projects section
- [ ] Category badge shows "Web"
- [ ] "Featured Project" badge displays
- [ ] Company and period information correct
- [ ] Long description displays
- [ ] Key highlights section shows 5 items
- [ ] Detailed features section shows 5 features
- [ ] Metrics display correctly (e.g., "<50ms message latency")
- [ ] Technology stack shows all 12 technologies
- [ ] CTA buttons work ("Get In Touch", "View More Projects")
- [ ] Responsive on mobile

#### 2. HeyHao Mobile App
URL: `/projects/heyhao-mobile`

- [ ] Page loads without errors
- [ ] Category badge shows "Mobile"
- [ ] All sections render correctly
- [ ] 6 detailed features display
- [ ] Technology stack shows 9 technologies
- [ ] Animations work on scroll

#### 3. Fiberzone
URL: `/projects/fiberzone`

- [ ] Page loads without errors
- [ ] "View Live Site" button appears
- [ ] Live URL links to https://fiberzone.id
- [ ] Company shows "PT Varnion Teknologi Semesta"
- [ ] All content displays correctly

#### 4. Hiring Management System
URL: `/projects/hiring-management`

- [ ] Page loads without errors
- [ ] "View Live Site" button appears
- [ ] Live URL links to https://squeezy-hiring.netlify.app
- [ ] 6 detailed features display
- [ ] All metrics show correctly

### ✅ Navigation & Routing

- [ ] Navigation bar works on all pages
- [ ] Smooth scroll works for anchor links
- [ ] Browser back/forward buttons work correctly
- [ ] Direct URL access works for all project pages
- [ ] 404 page shows for invalid project IDs

### ✅ Responsive Design

Test on different screen sizes:

#### Mobile (< 768px)
- [ ] Navigation collapses appropriately
- [ ] Project cards stack vertically
- [ ] Text remains readable
- [ ] Buttons are easily tappable
- [ ] Images/icons scale correctly

#### Tablet (768px - 1024px)
- [ ] 2-column grid for projects
- [ ] Proper spacing maintained
- [ ] Navigation displays correctly

#### Desktop (> 1024px)
- [ ] Full layout displays
- [ ] Hover effects work
- [ ] Animations smooth
- [ ] No horizontal scroll

### ✅ Performance

- [ ] Home page loads quickly
- [ ] Project detail pages load quickly
- [ ] No console errors
- [ ] No console warnings (except Tailwind ambiguous class warning)
- [ ] Images load properly
- [ ] Animations don't cause lag

### ✅ SEO & Meta Tags

Check in browser dev tools:

- [ ] Page title: "Rama Alfin Baehaqi | Frontend Engineer Portfolio"
- [ ] Meta description includes "production-grade applications"
- [ ] Structured data (JSON-LD) present in `<head>`
- [ ] Open Graph tags present (if implemented)

### ✅ Dark Mode

- [ ] Toggle dark mode works
- [ ] All text remains readable
- [ ] Colors adjust appropriately
- [ ] Project cards maintain contrast
- [ ] Animations work in both modes

### ✅ Accessibility

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on images (if any)
- [ ] Proper heading hierarchy
- [ ] Links have descriptive text
- [ ] Color contrast meets WCAG standards

## Common Issues & Solutions

### Issue: Project detail page shows 404
**Solution**: Make sure you're using the correct project ID from `src/data/projects.ts`:
- `heyhao-platform`
- `heyhao-mobile`
- `fiberzone`
- `hiring-management`

### Issue: Build fails
**Solution**: 
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Styles not applying
**Solution**:
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### Issue: TypeScript errors
**Solution**: Check that all imports are correct and types match the interfaces in data files.

## Testing Data Updates

### To Add a New Project:

1. Edit `src/data/projects.ts`
2. Add new project object with all required fields
3. Restart dev server
4. Navigate to `/projects/your-project-id`
5. Verify all sections display correctly

### To Update Experience:

1. Edit `src/data/experiences.ts`
2. Update or add experience object
3. Refresh home page
4. Check experience section displays correctly

## Browser Testing

Test on multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Testing

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Target scores: 90+ for all categories

### Network Testing
1. Open DevTools Network tab
2. Throttle to "Fast 3G"
3. Reload page
4. Verify acceptable load times

## Final Checklist

Before considering testing complete:
- [ ] All sections of home page work
- [ ] All 4 project detail pages work
- [ ] Navigation works everywhere
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] Build succeeds
- [ ] Dark mode works
- [ ] Links open correctly
- [ ] Animations are smooth
- [ ] Content matches CV

## Reporting Issues

If you find any issues:
1. Note the page/section where issue occurs
2. Describe expected vs actual behavior
3. Include browser and device information
4. Check console for error messages
5. Take screenshots if helpful

---

**Happy Testing! 🚀**
