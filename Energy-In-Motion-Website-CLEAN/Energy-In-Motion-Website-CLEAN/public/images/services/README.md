# Services Section Images

This directory contains images for the Services That Drive Growth section.

## 📁 Directory Structure

```
public/images/services/
├── growth-icon.png          # Main service icon (circular orange/coral)
├── coaching/               # Coaching service icons
├── training/               # Training service icons
├── emotions/               # E-motions service icons
└── README.md              # This file
```

## 🎨 Icon Specifications

### Service Icons

- **Size**: 64x64px minimum (for w-16 h-16 containers)
- **Format**: PNG or SVG preferred
- **Background**: Transparent
- **Colors**: Should work with coral/orange circular background
- **Style**: Simple, clean icons that represent each service

### Current Implementation

The component currently uses `TrendingUp` icon from Lucide React for all services. This is a temporary solution.

## 🔄 To Add Custom Icons

1. Add your icon files to the appropriate subdirectory
2. Update the `ServiceCard` component to use the `iconPath` prop
3. Pass different icon paths for each service in the `ServicesSection` component

## 📋 Services Requiring Icons

### Training Tab (Default)

- Leadership
- Professional Development
- Sales
- Business Communication
- Emotional Intelligence
- EQ for Healthcare Professionals
- Wellbeing
- Youth Development
- Women Empowerment

### Coaching Tab

- Leadership Coaching
- Executive Coaching
- Team Coaching
- Performance Coaching
- Career Coaching
- Life Coaching

### E-motions Tab

- Emotional Assessment
- Emotional Regulation
- Stress Management
- Mindfulness Training
- Emotional Awareness
- Resilience Building

## 💡 Icon Ideas

- **Leadership**: Crown, star, or person with arms up
- **Professional Development**: Upward arrow, growth chart, or briefcase
- **Sales**: Handshake, target, or money symbol
- **Communication**: Speech bubble, microphone, or people talking
- **Emotional Intelligence**: Heart with brain, emotional faces, or EQ symbol
- **Healthcare**: Medical cross, stethoscope, or health symbol
- **Wellbeing**: Wellness symbol, balance scale, or meditation pose
- **Youth Development**: Young person, graduation cap, or growth symbol
- **Women Empowerment**: Female symbol, raised fist, or empowerment icon
