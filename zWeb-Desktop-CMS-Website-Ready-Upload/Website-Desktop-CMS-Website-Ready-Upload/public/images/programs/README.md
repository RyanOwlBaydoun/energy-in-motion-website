# Latest Programs Section Images

This directory contains images for the Latest Programs section cards.

## 📁 Directory Structure

```
public/images/programs/
├── self-confidence.jpg       # Self-Confidence & Leadership program
├── executive-coaching.jpg    # Executive Leadership Coaching
├── team-coaching.jpg        # Team Performance Coaching
├── career-coaching.jpg      # Career Development Coaching
├── eq-assessment.jpg        # Emotional Intelligence Assessment
├── emotional-regulation.jpg # Emotional Regulation Workshop
├── mindfulness.jpg          # Mindfulness & Wellbeing
└── README.md               # This file
```

## 🎨 Image Specifications

### Program Card Images

- **Size**: 400x220px minimum (for responsive display)
- **Aspect Ratio**: 16:9 or similar landscape format
- **Format**: JPG or WebP preferred
- **Quality**: High quality, professional appearance
- **Content**: Should show people in training/coaching scenarios

### Current Implementation

The component uses Next.js `<Image>` component with `fill` prop and `object-cover` for optimal responsive behavior.

## 🎯 Program Categories

### Training Programs

- **Self-Confidence & Leadership** (3 cards currently)
  - Path: `/images/programs/self-confidence.jpg`
  - Description: "A foundational workshop on self-awareness, regulation, and social connection."
  - Badge: "Training - Leadership"

### Coaching Programs

- **Executive Leadership Coaching**

  - Path: `/images/programs/executive-coaching.jpg`
  - Description: "Personalized coaching sessions for senior leaders and executives."
  - Badge: "Coaching - Executive"

- **Team Performance Coaching**

  - Path: `/images/programs/team-coaching.jpg`
  - Description: "Comprehensive team coaching for enhanced collaboration and results."
  - Badge: "Coaching - Team"

- **Career Development Coaching**
  - Path: `/images/programs/career-coaching.jpg`
  - Description: "Individual coaching focused on career growth and professional development."
  - Badge: "Coaching - Career"

### E-motions Programs

- **Emotional Intelligence Assessment**

  - Path: `/images/programs/eq-assessment.jpg`
  - Description: "Comprehensive EQ evaluation and development program."
  - Badge: "E-motions - Assessment"

- **Emotional Regulation Workshop**

  - Path: `/images/programs/emotional-regulation.jpg`
  - Description: "Learn effective strategies for managing emotions in professional settings."
  - Badge: "E-motions - Workshop"

- **Mindfulness & Wellbeing**
  - Path: `/images/programs/mindfulness.jpg`
  - Description: "Mindfulness practices for enhanced emotional wellbeing and performance."
  - Badge: "E-motions - Mindfulness"

## 🔄 To Update Program Data

1. Add your program images to this directory
2. Update the `programsData` object in `LatestProgramsSection.tsx`
3. Ensure image paths match the file names exactly

## 📋 Card Component Structure

```typescript
interface ProgramCardProps {
  title: string;
  description: string;
  category: string;
  imagePath: string;
}
```

## 🎨 Design Features

- **Responsive Grid**: 1 column mobile, 2 columns tablet, 3 columns desktop
- **Hover Effects**: Soft shadow on card hover
- **Category Badges**: White badges with rounded corners, positioned top-left
- **Image Handling**: Next.js Image component with `fill` and `object-cover`
- **Tab System**: Interactive tabs to switch between program categories

## 💡 Image Content Suggestions

- **Training**: Groups of people in workshop settings, presentation scenarios
- **Coaching**: One-on-one or small group coaching sessions
- **E-motions**: Mindfulness, emotional intelligence, wellbeing scenarios
- **Professional**: Business casual attire, office or modern training environments
- **Diverse**: Include diverse groups of people across different backgrounds
