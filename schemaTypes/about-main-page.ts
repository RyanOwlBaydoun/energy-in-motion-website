export default {
  name: 'aboutMainPage',
  title: 'About Main Page',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'ABOUT',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Clarity. Courage.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Human Impact.',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'overlayOpacity',
          title: 'Overlay Opacity',
          type: 'number',
          description: 'Dark overlay opacity (0.0 to 1.0)',
          validation: (Rule: any) => Rule.min(0).max(1),
          initialValue: 0.6,
        },
      ],
    },

    // Introduction Section
    {
      name: 'introSection',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Introduction Content',
          type: 'text',
          initialValue:
            'At Energy in Motion, we believe that true transformation begins with one simple yet powerful shift—from within. We are a coaching and training practice dedicated to human development across all life stages. From children and youth to adults and professionals, we empower individuals with the tools to reconnect with themselves, evolve through purposeful learning, and energize their lives with emotional strength, clarity, and confidence. Whether in schools, companies, healthcare facilities or individual journeys, we help people shift—from stress to strength, from confusion to clarity, from functioning to flourishing.',
        },
      ],
    },

    // Mission/Vision/Values Section
    {
      name: 'missionSection',
      title: 'Mission/Vision/Values Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Empowering growth through',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Personalized Guidance',
        },
        {
          name: 'sectionImage',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'mission',
          title: 'Our Mission',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Mission Title',
              type: 'string',
              initialValue: 'Our Mission',
            },
            {
              name: 'content',
              title: 'Mission Content',
              type: 'text',
              initialValue:
                "To cultivate a world where every person—child, youth, or adult—can access their emotional, mental, and human potential, confidently navigate life's challenges, and lead with resilience, empathy, and purpose.",
            },
          ],
        },
        {
          name: 'vision',
          title: 'Our Vision',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Vision Title',
              type: 'string',
              initialValue: 'Our Vision',
            },
            {
              name: 'content',
              title: 'Vision Content',
              type: 'text',
              initialValue:
                'To design and deliver evidence-based, emotionally intelligent coaching and training programs that:',
            },
            {
              name: 'points',
              title: 'Vision Points',
              type: 'array',
              of: [{type: 'string'}],
              initialValue: [
                'Empower individuals to develop life skills and self-awareness.',
                'Support youth in navigating social, emotional, and academic pressures.',
                'Equip professionals and healthcare workers with tools to lead, communicate, and care with empathy and effectiveness.',
                'Promote purposeful leadership and a culture of growth, responsibility, and connection.',
              ],
            },
          ],
        },
      ],
    },

    // Core Values Section
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Core Values Title',
          type: 'string',
          initialValue: 'Our Core Value',
        },
        {
          name: 'values',
          title: 'Values List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                },
                {
                  name: 'title',
                  title: 'Value Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Value Description',
                  type: 'text',
                },
              ],
            },
          ],
          initialValue: [
            {
              number: '1.',
              title: 'Human-Centered Growth',
              description: 'We believe people come before strategies.',
            },
            {
              number: '2.',
              title: 'Emotional Intelligence',
              description: 'Self-awareness and empathy are at the heart of every program.',
            },
            {
              number: '3.',
              title: 'Purpose & Authenticity',
              description: 'Helping individuals find their "why."',
            },
            {
              number: '4.',
              title: 'Compassion & Empathy',
              description: 'We listen deeply, grow gently, and guide intentionally.',
            },
            {
              number: '5.',
              title: 'Youth Empowerment',
              description:
                'Preparing youth not just to succeed—but to understand and love who they are.',
            },
            {
              number: '6.',
              title: 'Resilience Through Vulnerability',
              description: 'We honor the power of being real and rising again.',
            },
            {
              number: '7.',
              title: 'Innovation with Heart',
              description: 'We blend science and emotion to make learning personal and impactful.',
            },
          ],
        },
      ],
    },

    // Meet Sarah Section
    {
      name: 'sarahSection',
      title: 'Meet Sarah Section',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          initialValue: '// ABOUT US',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Meet Sarah Daou',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Empowering Leaders.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Elevating Emotional Intelligence.',
        },
        {
          name: 'photo',
          title: "Sarah's Photo",
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'credentials',
          title: 'Credentials',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Certified Hogan, ECR, ECR 360, ECR Youth Assessor',
            'Emotional Intelligence Practitioner – Six Seconds',
            'Advanced Coaching Diploma – Noble Manhattan UK',
            'Inspirational Leadership – Case Western Reserve University',
          ],
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Explore more',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/about/sarah',
        },
      ],
    },

    // Team Section
    {
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Team Section Title',
          type: 'string',
          initialValue: 'Experienced Coaches',
        },
        {
          name: 'subtitle',
          title: 'Team Section Subtitle',
          type: 'string',
          initialValue: 'Dedicated to you',
        },
        {
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'photo',
                  title: 'Photo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'role',
                  title: 'Role',
                  type: 'string',
                },
                {
                  name: 'bio',
                  title: 'Bio',
                  type: 'text',
                },
              ],
            },
          ],
          initialValue: [
            {
              name: 'Team Member 1',
              role: 'Senior Coach',
              bio: 'Experienced professional dedicated to empowering growth.',
            },
            {
              name: 'Team Member 2',
              role: 'Leadership Coach',
              bio: 'Specialized in leadership development and emotional intelligence.',
            },
            {
              name: 'Team Member 3',
              role: 'Youth Coach',
              bio: 'Passionate about youth development and empowerment.',
            },
          ],
        },
      ],
    },

    // SEO Fields
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for the about page',
      initialValue: 'About - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the about page',
      initialValue:
        'Empowering leaders and elevating emotional intelligence through personalized guidance and evidence-based coaching programs.',
    },
  ],
  preview: {
    select: {
      title: 'heroSection.title',
      subtitle: 'heroSection.subtitle',
      media: 'heroSection.backgroundImage',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: title || 'About Main Page',
        subtitle: subtitle || 'About page configuration',
      }
    },
  },
}
