export default {
  name: 'trainingCourse',
  title: 'Training Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    // Optional icon controls
    {
      name: 'iconSource',
      title: 'Icon Source',
      type: 'string',
      options: { list: [{title: 'Upload', value: 'upload'}, {title: 'Library', value: 'library'}], layout: 'radio' },
    },
    {
      name: 'iconSvg',
      title: 'Icon SVG (Upload)',
      type: 'file',
      options: { accept: 'image/svg+xml' },
      hidden: ({parent}: any) => parent?.iconSource !== 'upload',
    },
    {
      name: 'iconKey',
      title: 'Icon Library Key',
      type: 'string',
      description: 'e.g., lucide icon name',
      hidden: ({parent}: any) => parent?.iconSource !== 'library',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'whoItsFor',
      title: "Who It's For",
      type: 'text',
    },
    {
      name: 'purpose',
      title: 'Purpose',
      type: 'text',
    },
    {
      name: 'innerFocus',
      title: 'Inner Focus',
      type: 'text',
    },
    {
      name: 'otherFocus',
      title: 'Other Focus',
      type: 'text',
    },
    {
      name: 'outerFocus',
      title: 'Outer Focus',
      type: 'text',
    },
    {
      name: 'programHighlights',
      title: 'Program Highlights',
      type: 'object',
      fields: [
        {
          name: 'level1',
          title: 'Level 1',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
        {
          name: 'level2',
          title: 'Level 2',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Training - Leadership', value: 'Training - Leadership'},
          {title: 'Training - Communication', value: 'Training - Communication'},
          {title: 'Training - Development', value: 'Training - Development'},
          {title: 'Training - Wellbeing', value: 'Training - Wellbeing'},
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'displayBoxPhoto',
      title: 'Display Box Photo',
      type: 'boolean',
      description: 'Show/hide the course image on the detail page',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'heroImage',
    },
    prepare(selection: any) {
      const {title, category} = selection
      return {
        title,
        subtitle: category,
      }
    },
  },
}
