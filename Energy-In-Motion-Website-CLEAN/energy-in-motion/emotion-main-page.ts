export default {
  name: 'emotionMainPage',
  title: 'E-Motion Main Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'E-MOTION',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Express. Explore.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Emotional Freedom.',
    },
    {
      name: 'heroImage',
      title: 'Main Hero Image',
      type: 'image',
      description: 'This image will appear on the main E-Motion page and cascade to all sub-pages',
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
      name: 'emotionProgramsSection',
      title: 'E-Motion Programs Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'E-Motion Programs',
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
          title: 'E-Motion Categories',
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
                  description: 'e.g., #emotional-intelligence',
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
            {name: 'Emotional Intelligence', link: '#emotional-intelligence', order: 1},
            {name: 'Empathy Development', link: '#empathy-development', order: 2},
            {name: 'Self-Awareness', link: '#self-awareness', order: 3},
            {name: 'Emotional Regulation', link: '#emotional-regulation', order: 4},
            {name: 'Mindfulness Practice', link: '#mindfulness-practice', order: 5},
            {name: 'Stress Management', link: '#stress-management', order: 6},
            {name: 'Interpersonal Skills', link: '#interpersonal-skills', order: 7},
            {name: 'Emotional Healing', link: '#emotional-healing', order: 8},
            {name: 'Personal Growth', link: '#personal-growth', order: 9},
          ],
        },
      ],
    },

    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for the E-Motion page',
      initialValue: 'E-Motion - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the E-Motion page',
      initialValue:
        'Explore emotional intelligence and personal growth through our transformative E-Motion programs. Express, explore, and find emotional freedom.',
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
