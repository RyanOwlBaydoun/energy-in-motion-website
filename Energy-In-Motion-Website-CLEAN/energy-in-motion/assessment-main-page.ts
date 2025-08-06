export default {
  name: 'assessmentMainPage',
  title: 'Assessment Main Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'ASSESSMENTS',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Insight. Clarity.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Growth.',
    },
    {
      name: 'heroImage',
      title: 'Shared Hero Image',
      type: 'image',
      description:
        'This image will appear on ALL assessment pages (main and individual assessments)',
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
      name: 'assessmentProgramsSection',
      title: 'Assessment Programs Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Assessments',
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
          title: 'Assessment Categories',
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
                  description: 'e.g., #personality-assessment',
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
            {name: 'Personality Assessment', link: '#personality-assessment', order: 1},
            {name: 'Leadership Assessment', link: '#leadership-assessment', order: 2},
            {name: 'Behavioral Assessment', link: '#behavioral-assessment', order: 3},
            {name: 'Emotional Intelligence', link: '#emotional-intelligence', order: 4},
            {name: 'Psychometric Testing', link: '#psychometric-testing', order: 5},
            {name: '360° Feedback', link: '#360-feedback', order: 6},
          ],
        },
      ],
    },

    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for the assessments page',
      initialValue: 'Assessments - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the assessments page',
      initialValue:
        'Comprehensive assessment solutions for personality, leadership, and behavioral evaluation. Measure potential and transform performance.',
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
