export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Logo sizing (uniform across all pages)
    {
      name: 'logoWidthPercentDesktop',
      title: 'Logo Width % (Desktop)',
      type: 'number',
      description: 'Percentage width of the logo container on desktop (e.g., 12 for 12%)',
      initialValue: 12,
      validation: (Rule: any) => Rule.min(1).max(100),
    },
    // Per-part logo scaling (desktop/mobile)
    {
      name: 'logoEnergyScalePercentDesktop',
      title: 'ENERGY IN Scale % (Desktop)',
      type: 'number',
      description: 'Scale of the “ENERGY IN” text relative to its base size (100 = unchanged)',
      initialValue: 100,
      validation: (Rule: any) => Rule.min(10).max(400),
    },
    {
      name: 'logoEnergyScalePercentMobile',
      title: 'ENERGY IN Scale % (Mobile)',
      type: 'number',
      initialValue: 100,
      validation: (Rule: any) => Rule.min(10).max(400),
    },
    {
      name: 'logoMotionScalePercentDesktop',
      title: 'motion Scale % (Desktop)',
      type: 'number',
      description: 'Scale of the “motion” text relative to its base size (100 = unchanged)',
      initialValue: 100,
      validation: (Rule: any) => Rule.min(10).max(400),
    },
    {
      name: 'logoMotionScalePercentMobile',
      title: 'motion Scale % (Mobile)',
      type: 'number',
      initialValue: 100,
      validation: (Rule: any) => Rule.min(10).max(400),
    },
    {
      name: 'logoWidthPercentMobile',
      title: 'Logo Width % (Mobile)',
      type: 'number',
      description: 'Percentage width of the logo container on mobile (e.g., 40 for 40%)',
      initialValue: 40,
      validation: (Rule: any) => Rule.min(1).max(100),
    },
    {
      name: 'logoMaxWidthPx',
      title: 'Logo Max Width (px)',
      type: 'number',
      initialValue: 150,
      validation: (Rule: any) => Rule.min(40).max(600),
    },

    // Navigation typography
    {
      name: 'navFontSize',
      title: 'Navigation Font Size',
      type: 'string',
      description: 'CSS size string, e.g., clamp(0.9rem, 0.7vw, 1.1rem)',
      initialValue: 'clamp(0.9rem, 0.7vw, 1.1rem)',
    },
    {
      name: 'navLetterSpacing',
      title: 'Navigation Letter Spacing',
      type: 'number',
      description: 'em-based spacing (e.g., 0.02 means 0.02em). Leave empty for default',
    },

    // Global container widths/margins
    {
      name: 'contentMaxWidthPx',
      title: 'Content Max Width (px)',
      type: 'number',
      initialValue: 1280,
      validation: (Rule: any) => Rule.min(640).max(2560),
    },
    {
      name: 'containerPaddingXDesktop',
      title: 'Container Horizontal Padding (Desktop, px)',
      type: 'number',
      initialValue: 24,
      validation: (Rule: any) => Rule.min(0).max(128),
    },
    {
      name: 'containerPaddingXMobile',
      title: 'Container Horizontal Padding (Mobile, px)',
      type: 'number',
      initialValue: 16,
      validation: (Rule: any) => Rule.min(0).max(64),
    },
    {
      name: 'gridGutterDesktop',
      title: 'Grid Gutter (Desktop, px)',
      type: 'number',
      initialValue: 32,
      validation: (Rule: any) => Rule.min(0).max(96),
    },
    {
      name: 'gridGutterMobile',
      title: 'Grid Gutter (Mobile, px)',
      type: 'number',
      initialValue: 16,
      validation: (Rule: any) => Rule.min(0).max(64),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global styles and layout controls',
      }
    },
  },
}


