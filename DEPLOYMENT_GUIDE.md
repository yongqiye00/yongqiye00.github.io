# 🚀 Academic Website Deployment Guide

## 📋 Overview
Modern Next.js academic portfolio with Framer Motion animations, responsive design, and comprehensive testing.

### 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (Recommended)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone <your-repo-url>
cd academic-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🎨 Architecture

### Data Layer (Single Source of Truth)
```
src/data/
├── profile.ts      # Personal information
├── publications.ts # Academic papers
└── news.ts         # News & updates
```

### Component Structure
```
src/components/
├── layout/         # Navbar, Footer, Layout wrapper
├── ui/             # Atomic components (Button, Card, Badge)
├── sections/       # Page sections (Hero, Publications, News)
└── publication-card.tsx # Core publication display
```

### Styling System
- **Colors**: Slate/Gray scale + Indigo-600 accent
- **Typography**: Inter (body) + Crimson Text (headings)
- **Spacing**: 8-point grid system
- **Animation**: Smooth, academic-focused transitions

---

## 🧪 Testing

### Comprehensive Testing Suite
Run the built-in testing suite to verify all functionality:

```javascript
// In browser console
window.academicWebsiteTests.runAllTests();

// Individual tests
window.academicWebsiteTests.testPageLoad();
window.academicWebsiteTests.testNavigation();
window.academicWebsiteTests.testPublicationFiltering();
```

### Test Coverage
✅ Page Load & Initialization
✅ Navigation & Smooth Scrolling
✅ Publication Filtering
✅ Responsive Design
✅ Animation Performance
✅ Data Integration
✅ Accessibility
✅ Error Handling

### Dual Verification Testing
The testing suite implements your required dual verification strategy:
1. **Console Logs**: Data flow, state updates, component behavior
2. **HTML Structure**: UI elements, data binding, visual updates

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Custom domain setup
vercel domains add yourdomain.com
```

**Benefits**:
- Automatic deployments from Git
- Built-in analytics
- SSL certificates
- Edge functions support

### Option 2: Netlify
```bash
# Build the application
npm run build

# Deploy dist/ folder to Netlify
# Or use Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

### Option 3: GitHub Pages
1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
```

2. Deploy:
```bash
npm run build
npm run export
# Upload out/ folder to GitHub Pages
```

---

## 🔧 Configuration

### SEO & Metadata
Update `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your academic portfolio description",
  keywords: ["your", "research", "keywords"],
  // Add Open Graph, Twitter Cards, etc.
};
```

### Analytics
1. **Google Analytics**: Add `NEXT_PUBLIC_GA_ID` to environment
2. **Vercel Analytics**: Enabled by default on Vercel
3. **Custom Analytics**: Add to `src/app/layout.tsx`

### Performance Optimization
```typescript
// next.config.js
const nextConfig = {
  // Image optimization
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif']
  },

  // Performance settings
  experimental: {
    optimizeCss: true
  }
};
```

---

## 📱 Content Management

### Updating Profile
Edit `src/data/profile.ts`:
```typescript
export const profile: Profile = {
  name: "Your Name",
  role: "Your Title",
  email: "your.email@university.edu",
  organizations: [
    { name: "University Name", url: "https://university.edu" }
  ],
  bio: "Your professional bio...",
  interests: ["Research", "Area1", "Area2"],
  social_links: {
    github: "https://github.com/yourusername",
    scholar: "https://scholar.google.com/yourid"
  },
  stats: {
    publications: 10,
    citations: 100,
    projects: 5
  }
};
```

### Adding Publications
Edit `src/data/publications.ts`:
```typescript
export const publications: Publication[] = [
  {
    id: "pub-2024-1",
    title: "Your Paper Title",
    authors: [
      { id: "author1", name: "Author Name", is_highlight: true },
      { id: "author2", name: "Co-author Name", is_highlight: false }
    ],
    venue: "Conference/Journal Name 2024",
    year: 2024,
    type: "conference", // conference, journal, workshop, thesis
    abstract: "Paper abstract...",
    tags: ["keyword1", "keyword2"],
    featured: true, // Highlight on homepage
    pdf_url: "https://arxiv.org/pdf/...",
    code_url: "https://github.com/...",
    doi: "10.1000/182"
  }
];
```

### Adding News Items
Edit `src/data/news.ts`:
```typescript
export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "News Headline",
    content: "News content...",
    date: "2024-11-26",
    type: "news", // news, update, award, talk
    url: "https://example.com" // optional
  }
];
```

---

## 🎯 Customization

### Colors & Design
Edit `src/app/globals.css`:
```css
:root {
  /* Update accent color */
  --color-indigo-600: #your-color;

  /* Update typography */
  --font-inter: 'Your Font', sans-serif;
}
```

### Animations
Edit `src/lib/animations.ts` to modify:
- Animation durations
- Easing functions
- Stagger delays
- Hover effects

### Component Styling
Modify Tailwind classes in components:
- Change spacing (`gap-4` → `gap-6`)
- Update colors (`bg-slate-50` → `bg-gray-50`)
- Adjust typography (`text-lg` → `text-xl`)

---

## 🔍 SEO & Performance

### Search Engine Optimization
✅ Semantic HTML structure
✅ Meta tags and Open Graph
✅ Structured data ready
✅ Sitemap generation
✅ robots.txt configuration

### Performance
✅ Image optimization
✅ Code splitting
✅ Font optimization
✅ Lazy loading ready
✅ Core Web Vitals optimized

### Accessibility
✅ ARIA labels and roles
✅ Keyboard navigation
✅ Color contrast compliance
✅ Screen reader compatible
✅ Focus management

---

## 🐛 Troubleshooting

### Common Issues

**Build Errors**:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Check TypeScript
npx tsc --noEmit
```

**Animation Issues**:
```javascript
// Check Framer Motion loading
console.log(window.framerMotion);

// Test animations manually
window.academicWebsiteTests.testAnimations();
```

**Styling Issues**:
```bash
# Check Tailwind configuration
npx tailwindcss --help

# Verify PostCSS processing
npm run postcss
```

### Performance Issues
- Use React.memo() for expensive components
- Implement virtual scrolling for large lists
- Optimize images with WebP format
- Enable compression on server

---

## 📊 Monitoring & Analytics

### Vercel Analytics
- Page views and visitors
- Web Vitals monitoring
- Error tracking
- Performance insights

### Google Analytics 4
```typescript
// Add to layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

### Performance Monitoring
- Core Web Vitals
- Lighthouse scores
- Bundle size analysis
- Render performance

---

## 🔐 Security

### Best Practices
✅ Input sanitization
✅ XSS protection
✅ CSRF tokens
✅ Secure headers
✅ HTTPS enforcement
✅ Dependency updates

### Content Security Policy
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'"
  }
];

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  }
};
```

---

## 📞 Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)

### Issues & Debugging
1. Check browser console for errors
2. Run comprehensive test suite
3. Verify environment variables
4. Check network tab for failed requests
5. Review build logs for warnings

### Maintenance
- Update dependencies regularly
- Monitor performance metrics
- Backup content data
- Review SEO ranking
- Update content periodically

---

## 🎉 Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] SEO metadata updated
- [ ] Images optimized
- [ ] Performance scores optimized
- [ ] Accessibility verified
- [ ] SSL certificate ready
- [ ] Custom domain configured

### Post-Deployment
- [ ] Verify all pages load
- [ ] Test navigation
- [ ] Check mobile responsiveness
- [ ] Validate forms and links
- [ ] Monitor console for errors
- [ ] Set up analytics
- [ ] Test SEO metadata
- [ ] Performance monitoring active

---

**🚀 Your modern academic website is ready for deployment!**

For support, check the comprehensive test suite in `test-comprehensive.js` or run `window.academicWebsiteTests.runAllTests()` in the browser console.