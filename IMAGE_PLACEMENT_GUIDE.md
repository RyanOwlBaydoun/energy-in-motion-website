# Image Placement & Mobile Optimization Guide

## Where to Put Your Images - Clean Structure

### Directory Structure

```
public/images/
├── hero/                    # Hero section images
│   └── hero-coach.jpg       # Replace with your main coach photo
├── about/
│   ├── team/               # Team member photos (400x400px)
│   ├── office/             # Office/workspace photos
│   └── awards/             # Certifications and awards
├── services/
│   ├── coaching/           # Coaching session photos
│   ├── workshops/          # Workshop images
│   └── icons/              # Custom service icons
├── testimonials/
│   └── clients/            # Client photos (with permission)
├── blog/
│   ├── featured/           # Featured blog images
│   └── inline/             # Content images
├── icons/
│   ├── logo/               # Brand logos
│   │   └── logo.svg        # Your main logo
│   └── social/             # Social media icons
└── misc/
    ├── patterns/           # Background patterns
    └── placeholders/       # Placeholder images
```

## Mobile-First Optimization Strategy

### Priority Images (Load First)

1. **Hero Coach Photo** (`/images/hero/hero-coach.jpg`)
   - Desktop: 1200x800px (3:2 ratio)
   - Mobile: Optimized for vertical viewing
   - Format: WebP preferred, JPG fallback
   - Quality: 85-90% (high quality for hero)

### Recommended Image Sizes

#### Hero Section

- Desktop: 1200x800px (3:2) or 1920x1080px (16:9)
- Tablet: 800x600px (4:3)
- Mobile: 600x800px (3:4) - Portrait friendly

#### Team Photos

- Standard: 400x400px (square)
- High-DPI: 800x800px (downscaled)
- Format: WebP or JPG

#### Blog Images

- Featured: 1200x675px (16:9)
- Inline: 800x450px (16:9)
- Mobile: 600x338px (16:9)

#### Logos & Icons

- Logo: SVG (scalable) or multiple PNG sizes
- Icons: 32px, 64px, 128px, 256px
- Format: SVG preferred

## Performance Optimization Built-In

### Image Optimization Utilities

- Auto-sizing: Responsive image sizes
- Lazy loading: Images load when needed
- Blur placeholders: Smooth loading
- WebP conversion: Next.js optimizes formats
- Quality optimization: Balanced quality/size

### Mobile-Specific Optimizations

```javascript
sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw";
```

- Mobile (≤640px): Full width images
- Tablet (641-1024px): 80% width images
- Desktop (>1024px): 50% width images

## Step-by-Step Image Replacement

### 1. Replace Hero Image

```bash
# Place your coach photo here:
public/images/hero/hero-coach.jpg

# Recommended specs:
- Size: 1200x800px
- Format: JPG or WebP
- Quality: 85%
- File size: < 200KB
```

### 2. Replace Logo

```bash
# Place your logo here:
public/images/icons/logo/logo.svg
```

### 3. Add Team Photos

```bash
# Add team member photos:
public/images/about/team/
├── john-doe.jpg
├── jane-smith.jpg
└── team-group.jpg
```

## Image Optimization Tips

### Before Adding Images:

1. Compress using TinyPNG or ImageOptim
2. Choose the right format:
   - Photos: JPG or WebP
   - Graphics/logos: PNG or SVG
   - Simple icons: SVG
3. Resize to appropriate dimensions
4. Test on mobile devices

### Mobile Considerations:

- Vertical images work better on mobile
- Keep file sizes small (< 200KB for hero)
- Test loading speed on slow connections
- Ensure text readability on small screens

## Quick Start Checklist

- [ ] Replace hero-coach.jpg with your photo
- [ ] Replace logo.svg with your logo
- [ ] Add team photos to about/team/
- [ ] Test mobile responsiveness
- [ ] Check loading performance

Your images will be automatically optimized!
