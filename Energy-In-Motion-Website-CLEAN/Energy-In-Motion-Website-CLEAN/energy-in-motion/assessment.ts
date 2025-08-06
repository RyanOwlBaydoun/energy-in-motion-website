export default {
  name: 'assessment',
  title: 'Assessment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Main features or benefits of this assessment',
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'text',
      description: 'Who this assessment is designed for',
    },
    {
      name: 'assessmentDetails',
      title: 'Assessment Details',
      type: 'object',
      fields: [
        {
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'How long the assessment takes',
        },
        {
          name: 'format',
          title: 'Format',
          type: 'string',
          description: 'Online, paper-based, interview, etc.',
        },
        {
          name: 'reportType',
          title: 'Report Type',
          type: 'string',
          description: 'Type of report generated',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Assessment', value: 'Assessment'},
          {title: 'Assessment - Personality', value: 'Assessment - Personality'},
          {title: 'Assessment - Leadership', value: 'Assessment - Leadership'},
          {title: 'Assessment - Behavioral', value: 'Assessment - Behavioral'},
          {title: 'Assessment - EQ', value: 'Assessment - EQ'},
          {title: 'Assessment - Psychometric', value: 'Assessment - Psychometric'},
          {title: 'Assessment - 360 Feedback', value: 'Assessment - 360 Feedback'},
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
      name: 'assessmentImage',
      title: 'Assessment Image',
      type: 'image',
      description: 'Optional image for this specific assessment',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Optional external link for more information or booking',
    },
    {
      name: 'displayBoxPhoto',
      title: 'Display Box Photo',
      type: 'boolean',
      description: 'Show/hide the assessment image on the detail page',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'assessmentImage',
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
