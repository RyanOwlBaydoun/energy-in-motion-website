# Assessments Section Images

This directory contains images for the Assessments for Personal & Team Growth section.

## 📁 Directory Structure

```
public/images/assessments/
├── hogan-icon.png           # Hogan Assessments icon
├── ecr-icon.png            # ECR icon
├── saville-icon.png        # Saville icon
├── assesFirst-icon.png     # AssesFirst icon
├── psytech-icon.png        # Psytech icon
└── README.md               # This file
```

## 🎯 Assessment Tools

### Current Assessments Featured

1. **Hogan Assessments**

   - Description: "Personality & leadership profiling"
   - Focus: Leadership assessment and personality profiling

2. **ECR**

   - Description: "Emotional intelligence & 360° feedback"
   - Focus: Emotional intelligence measurement

3. **Saville**

   - Description: "Science-based assessments to hire and develop talent."
   - Focus: Talent acquisition and development

4. **AssesFirst**

   - Description: "AI-driven behavioral tools for predictive hiring."
   - Focus: AI-powered hiring solutions

5. **Psytech**
   - Description: "Global psychometric solutions tailored for regions."
   - Focus: Regional psychometric assessments

## 🎨 Icon Specifications

### Assessment Icons

- **Size**: 64x64px minimum (for w-16 h-16 containers)
- **Format**: PNG or SVG preferred
- **Background**: Transparent
- **Colors**: Should work with coral circular background (#FF6B57)
- **Style**: Professional, clean icons representing each assessment tool

### Current Implementation

The component currently uses `TrendingUp` icon from Lucide React for all assessments. This provides visual consistency while custom icons are being prepared.

## 🔄 To Add Custom Icons

1. Add your assessment tool icons to this directory
2. Update the `AssessmentCard` component to accept an `iconPath` prop
3. Create an icon mapping in the `AssessmentsSection` component
4. Replace the Lucide icon with Next.js `<Image>` component

## 💡 Icon Suggestions

- **Hogan**: Professional profile or leadership symbol
- **ECR**: Heart with brain or emotional intelligence symbol
- **Saville**: Scientific/analytical icon or talent symbol
- **AssesFirst**: AI or technology-related icon
- **Psytech**: Global or psychological assessment symbol

## 📋 Component Structure

```typescript
interface AssessmentCardProps {
  title: string;
  description: string;
  iconPath?: string; // For future custom icons
}
```

## 🎯 Layout Details

- **Desktop**: 2-column layout with title on left, cards on right
- **Mobile**: Single column, stacked layout
- **Cards**: 3 on left column, 2 on right column
- **Button**: "Book an EQ Assessment" - right-aligned on desktop, centered on mobile
