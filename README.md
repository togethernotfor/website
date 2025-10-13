# Together, Not For - Website

Official website for Together, Not For - a socially conscious software solutions company serving local governments, small businesses, and non-profits.

## About

Together, Not For provides custom software solutions designed to empower and uplift communities. Our mission centers on community impact, transparent collaboration, and custom-built technology that serves the public good.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Theme**: next-themes (dark mode support)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This site is deployed on **Vercel** with automatic deployments from the `main` branch.

### Vercel Configuration

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (automatic)
- **Install Command**: `npm install`
- **Node Version**: 18.x

### Environment Variables

No environment variables are currently required for production builds.

### Deploy to Vercel

The easiest way to deploy this Next.js app is through [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Every push to `main` will automatically trigger a new deployment
5. Pull requests will generate preview deployments

Alternatively, deploy using the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog routes (infrastructure ready)
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── blog/             # Blog components
│   ├── ui/               # shadcn/ui components
│   ├── Contact.tsx       # Contact CTA section
│   ├── Intro.tsx         # Hero section
│   ├── Portfolio.tsx     # Project showcase
│   ├── Values.tsx        # Value propositions
│   └── WhoWeServe.tsx    # Target audiences
├── data/                 # Data files
│   ├── blog-posts.ts     # Blog post definitions
│   └── projects.ts       # Portfolio projects
└── lib/
    └── utils.ts          # Utility functions

public/
├── blog/                 # Blog images
├── projects/             # Project images
├── favicon.ico          # Standard favicon
├── favicon-96x96.png    # Modern browsers
├── apple-touch-icon.png # iOS/macOS devices
└── seo-cropped.png      # Social media preview image
```

## Key Features

### SEO Optimized

- Comprehensive metadata in `src/app/layout.tsx`
- Open Graph and Twitter Card support
- Optimized favicons for all platforms
- Semantic HTML structure

### Mobile-First Design

- Responsive layouts with Tailwind breakpoints
- Touch-friendly interface elements
- Optimized spacing for mobile viewports
- Progressive enhancement for larger screens

### Accessibility

- `prefers-reduced-motion` support for animations
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Theme toggle with full keyboard accessibility

### Performance

- Static site generation where possible
- Optimized images with Next.js Image component
- Minimized bundle sizes
- Fast page loads

## Content Management

### Adding Projects

Edit `src/data/projects.ts` to add new portfolio projects:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  description: "Brief description",
  category: "government" | "business" | "nonprofit",
  image: ProjectImage,
  imageAlt: "Image description",
  href: "https://project-url.com",
  featured: true, // Optional
}
```

### Adding Blog Posts (Future)

Blog infrastructure is ready. Edit `src/data/blog-posts.ts` when ready to publish:

```typescript
{
  slug: "post-slug",
  title: "Post Title",
  excerpt: "Brief excerpt",
  content: "Full content",
  publishedAt: "2024-01-01",
  author: "Author Name",
  category: "Technology",
  featuredImage: "/blog/image.jpg",
}
```

## Brand Guidelines

### Colors

- **Primary Yellow**: `#FFE548` (cover-yellow)
- **Text**: System foreground/background
- **Accent**: Yellow for CTAs and highlights

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Clean, readable spacing

### Voice & Tone

- Community-focused
- Transparent and honest
- Mission-driven
- Collaborative ("together")

## Development Notes

### Path Aliases

- `@/` maps to `src/`
- Example: `import { cn } from "@/lib/utils"`

### Custom Utilities

- `cn()` - Class name merger (clsx + tailwind-merge)
- Located in `src/lib/utils.ts`

### Theme Support

- Light/dark mode via next-themes
- System preference detection
- Persistent theme selection

## Completed Phases

✅ **Phase 1**: Landing Page Modernization (Hero, Who We Serve, Values, Portfolio, Contact)
✅ **Phase 2**: Blog Infrastructure (Routes, components, data structure ready)
✅ **Phase 3**: Brand Animation Enhancement (Motion scroll animations)
✅ **Phase 4**: Dark Mode Toggle (shadcn/ui implementation with theme persistence)

## Future Enhancements

See `future/modernization-plan.md` for detailed roadmap:

- **Phase 4**: Blog Content Launch (First 3-5 posts)
- **Phase 5**: Interactive Features (Filtering, search, testimonials)
- **Phase 6**: Growth Features (Analytics, A/B testing, lead magnets)

## Documentation

- **CLAUDE.md** - Development guide for AI assistance
- **future/modernization-plan.md** - Comprehensive roadmap
- **future/social-media-setup.md** - Social media checklist

## Contact

- **Email**: info@togethernotfor.com
- **Website**: https://togethernotfor.com

## License

Private - All rights reserved by Together, Not For
