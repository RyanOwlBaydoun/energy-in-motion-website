export default {
  name: 'coachingMainPage',
  title: 'Coaching Main Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'COACHING',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Clarity. Confidence.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Real Change.',
    },
    {
      name: 'heroImage',
      title: 'Main Hero Image',
      type: 'image',
      description: 'This image will appear on the main coaching page and cascade to all sub-pages',
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
      name: 'coachingProgramsSection',
      title: 'Coaching Programs Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Coaching Programs',
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
          title: 'Coaching Categories',
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
                  description: 'e.g., #leadership-coaching',
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
            {name: 'Leadership Coaching', link: '#leadership-coaching', order: 1},
            {name: 'Career Coaching', link: '#career-coaching', order: 2},
            {name: 'Youth & Adolescence', link: '#youth-adolescence', order: 3},
            {name: 'Executive Coaching', link: '#executive-coaching', order: 4},
            {name: 'EQ Coaching', link: '#eq-coaching', order: 5},
            {name: 'Positive Psychology', link: '#positive-psychology', order: 6},
            {name: 'Business Coaching', link: '#business-coaching', order: 7},
            {name: 'Relationship Coaching', link: '#relationship-coaching', order: 8},
            {name: 'Wellbeing Group Coaching', link: '#wellbeing-group-coaching', order: 9},
            {name: 'Team Coaching', link: '#team-coaching', order: 10},
            {name: 'Life Coaching', link: '#life-coaching', order: 11},
          ],
        },
      ],
    },

    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for the coaching page',
      initialValue: 'Coaching - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the coaching page',
      initialValue:
        'Transform your leadership potential with our comprehensive coaching programs. Leadership, career, executive coaching and more.',
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
