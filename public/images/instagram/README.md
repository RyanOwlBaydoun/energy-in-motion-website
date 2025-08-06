# Instagram Reels Section Images

This directory contains images for the "Sarah on Instagram" section displaying Instagram Reels.

## 📁 Directory Structure

```
public/images/instagram/
├── reel-1.jpg         # "إنعزال أم إحترام؟"
├── reel-2.jpg         # "الإمتنان والتقدير"
├── reel-3.jpg         # "حتى التعاطف، هو فن"
├── reel-4.jpg         # (No caption)
├── reel-5.jpg         # "كيف يمكن للفشل أن يؤسس للنجاح؟"
└── README.md          # This file
```

## 🎨 Image Specifications

### Instagram Reel Thumbnails

- **Size**: 300px height, variable width (portrait orientation)
- **Aspect Ratio**: 9:16 (Instagram Stories/Reels format)
- **Format**: JPG or WebP preferred
- **Quality**: High quality for professional appearance
- **Content**: Sarah Dao in coaching/speaking scenarios

### Current Implementation

The component uses Next.js `<Image>` component with `fill` prop and `object-cover` for optimal display.

## 🎯 Reel Data Structure

### Current Reels

```javascript
const reelsData = [
  {
    image: "/images/instagram/reel-1.jpg",
    caption: "إنعزال أم إحترام؟",
  },
  {
    image: "/images/instagram/reel-2.jpg",
    caption: "الإمتنان والتقدير",
  },
  {
    image: "/images/instagram/reel-3.jpg",
    caption: "حتى التعاطف، هو فن",
  },
  {
    image: "/images/instagram/reel-4.jpg",
    caption: "",
  },
  {
    image: "/images/instagram/reel-5.jpg",
    caption: "كيف يمكن للفشل أن يؤسس للنجاح؟",
  },
];
```

### Arabic Caption Translations

- **"إنعزال أم إحترام؟"** - "Isolation or Respect?"
- **"الإمتنان والتقدير"** - "Gratitude and Appreciation"
- **"حتى التعاطف، هو فن"** - "Even Empathy is an Art"
- **"كيف يمكن للفشل أن يؤسس للنجاح؟"** - "How Can Failure Lay the Foundation for Success?"

## 🎨 Design Features

### Card Layout

- **Grid**: Responsive 2-5 columns based on screen size
- **Height**: Fixed 300px for consistent appearance
- **Rounded Corners**: `rounded-lg` for modern look
- **Hover Effects**: Shadow and lift animation

### Overlay Elements

- **Top Left**: Swipe icon (CornerUpLeft from Lucide)
- **Top Right**: Play icon (Play from Lucide, filled)
- **Bottom**: Arabic caption with dark purple background
- **Bottom Left**: "SarahDao" attribution

### Colors

- **Caption Background**: `#3B3B7C` with 80% opacity
- **Attribution Background**: Black with 50% opacity
- **Icons**: White with drop shadow

## 📱 Responsive Grid

| Screen Size | Columns | Breakpoint  |
| ----------- | ------- | ----------- |
| Mobile      | 2       | Default     |
| Small       | 3       | sm (640px)  |
| Medium      | 4       | md (768px)  |
| Large       | 5       | lg (1024px) |

## 🔄 To Update Instagram Content

1. Add your Instagram reel screenshots to this directory
2. Update the `reelsData` array in `InstagramReelsSection.tsx`
3. Ensure images are portrait orientation (9:16 aspect ratio)
4. Add appropriate Arabic captions for each reel

## 📋 Component Structure

```typescript
interface InstagramReelProps {
  image: string;
  caption: string;
}
```

## 💡 Image Content Guidelines

- **Portrait Orientation**: 9:16 aspect ratio like Instagram Stories/Reels
- **Professional Quality**: High resolution, good lighting
- **Consistent Styling**: Similar background/setting across reels
- **Clear Visibility**: Sarah should be clearly visible in each thumbnail
- **Engaging Thumbnails**: Choose compelling moments from each reel

## 🎯 Technical Implementation

- **Next.js Image**: Optimized loading and display
- **Hover Effects**: Smooth transitions with shadow and lift
- **Arabic Text**: Proper RTL text rendering
- **Responsive**: Works across all device sizes
- **Accessibility**: Alt text and proper semantic HTML

## 🔍 SEO Considerations

- **Alt Text**: Descriptive alt text for each image
- **Structured Data**: Could be enhanced with social media schema
- **Loading**: Lazy loading for performance optimization
