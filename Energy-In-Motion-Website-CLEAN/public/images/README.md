# Image Directory Structure

This directory contains all images used throughout the website, organized by section and purpose.

## 📁 Directory Structure

```
public/images/
├── hero/               # Hero section images
│   ├── hero-coach.jpg     # Main hero image (coach photo)
│   └── hero-bg.jpg        # Background images (if needed)
├── about/              # About section images
│   ├── team/              # Team member photos
│   ├── office/            # Office/environment photos
│   └── awards/            # Awards and certifications
├── services/           # Service-related images
│   ├── coaching/          # Coaching session photos
│   ├── workshops/         # Workshop images
│   └── icons/             # Service icons (if using custom)
├── testimonials/       # Client testimonial images
│   └── clients/           # Client photos (with permission)
├── blog/               # Blog post images
│   ├── featured/          # Featured blog images
│   └── inline/            # Inline content images
├── gallery/            # General gallery images
├── icons/              # Custom icons and logos
│   ├── logo/              # Brand logos
│   └── social/            # Social media icons
└── misc/               # Miscellaneous images
    ├── patterns/          # Background patterns
    └── placeholders/      # Placeholder images
```

## 📱 Mobile-First Optimization Guidelines

### Image Sizes & Formats

**Hero Images:**

- Desktop: 1920x1080px (16:9) or 1200x800px (3:2)
- Mobile: 800x600px (4:3) for better mobile display
- Format: WebP (preferred) or JPG
- Quality: 80-85% for balance of quality/size

**Team Photos:**

- Standard: 400x400px (square) or 300x400px (portrait)
- Format: WebP or JPG
- Quality: 75-80%

**Blog/Content Images:**

- Desktop: 1200x675px (16:9)
- Mobile: 800x450px (16:9)
- Format: WebP preferred

**Icons & Logos:**

- SVG format preferred (scalable)
- PNG for complex logos (multiple sizes: 32px, 64px, 128px, 256px)

### Naming Convention

Use kebab-case for consistency:

- ✅ `hero-coach-smiling.jpg`
- ✅ `team-member-john-doe.jpg`
- ✅ `service-business-coaching.webp`
- ❌ `Hero_Coach_Image.JPG`
- ❌ `TeamMember1.png`

### Performance Tips

1. **Always use next/image** for automatic optimization
2. **Provide multiple sizes** using the `sizes` prop
3. **Use appropriate loading strategy**:
   - `priority` for above-the-fold images
   - `lazy` (default) for below-the-fold images
4. **WebP format** when possible (90% smaller than PNG)
5. **Compress images** before uploading (tools: TinyPNG, ImageOptim)

## 📋 Image Checklist

Before adding images to this directory:

- [ ] Image is properly sized for its use case
- [ ] Image is compressed/optimized
- [ ] Filename follows kebab-case convention
- [ ] Image is placed in the correct subdirectory
- [ ] Alternative text (alt) is planned for accessibility
- [ ] Image has proper licensing/permissions

## 🔄 Replacing Placeholder Images

1. Add your images to the appropriate subdirectory
2. Update the component imports to reference your images
3. Delete placeholder files when no longer needed
4. Test on mobile devices to ensure proper display

## 📞 Need Help?

If you need help optimizing images or have questions about the structure, refer to the Next.js Image Optimization documentation.
