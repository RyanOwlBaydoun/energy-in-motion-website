export default {
  name: 'trainingMainPage',
  title: 'Training Main Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'TRAINING',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Empower Teams.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Elevate Performance.',
    },
    {
      name: 'heroImage',
      title: 'Main Hero Image',
      type: 'image',
      description: 'This image will appear on the main training page and cascade to all sub-pages',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroOverlayOpacity',
      title: 'Hero Overlay Opacity',
      type: 'number',
      description: 'Control the darkness of the overlay (0.0 to 1.0)',
      initialValue: 0.4,
      validation: (Rule: any) => Rule.min(0).max(1),
    },
    {
      name: 'trainingProgramsSection',
      title: 'Training Programs Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Training Programs',
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code (e.g., #E8DDD4)',
          initialValue: '#E8DDD4',
        },
        {
          name: 'categories',
          title: 'Training Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Category Name',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'link',
                  title: 'Link/Anchor',
                  type: 'string',
                  description: 'e.g., #leadership',
                },
                {
                  name: 'order',
                  title: 'Display Order',
                  type: 'number',
                },
              ],
            },
          ],
          initialValue: [
            {name: 'Leadership', link: '#leadership', order: 1},
            {name: 'Business Communication', link: '#business-communication', order: 2},
            {name: 'Wellbeing', link: '#wellbeing', order: 3},
            {name: 'Professional Development', link: '#professional-development', order: 4},
            {name: 'Emotional Intelligence', link: '#emotional-intelligence', order: 5},
            {name: 'Youth Development', link: '#youth-development', order: 6},
            {name: 'Sales', link: '#sales', order: 7},
            {name: 'EQ for Healthcare Professionals', link: '#eq-healthcare', order: 8},
            {name: 'Women Empowerment', link: '#women-empowerment', order: 9},
          ],
        },
      ],
    },

    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for the training page',
      initialValue: 'Training - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the training page',
      initialValue:
        'Empower teams and elevate performance through our comprehensive training programs. Leadership, emotional intelligence, communication skills, and more.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'heroImage',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: `${title} - Main Page`,
        subtitle: subtitle,
      }
    },
  },
}
