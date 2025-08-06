export default {
  name: 'sarahMainPage',
  title: 'Sarah Main Page',
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
          initialValue: 'SARAH DAOU',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'EQ Coach',
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
          initialValue: 0.4,
        },
      ],
    },

    // About Sarah Section
    {
      name: 'aboutSection',
      title: 'About Sarah Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'About Sarah',
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
          name: 'introParagraph',
          title: 'Introduction Paragraph',
          type: 'text',
          initialValue:
            'Sarah Daou is a journalist by education, a leader by experience, and a coach by purpose. With 24 years in the corporate world—15 of which were spent in senior leadership roles—Sarah shifted gears to create Energy in Motion, a space for human development, emotional growth, and leadership evolution.',
        },
        {
          name: 'journeyParagraph',
          title: 'Journey Paragraph',
          type: 'text',
          initialValue:
            'Her journey is grounded in one belief: that we are born with strengths and shaped by life—but can always choose to reconnect with who we truly are and become the best version of ourselves.',
        },
      ],
    },

    // Philosophy & Beliefs Section
    {
      name: 'philosophySection',
      title: 'Philosophy & Beliefs Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Philosophy & Beliefs',
        },
        {
          name: 'approachText',
          title: 'Approach Introduction',
          type: 'string',
          initialValue: "Sarah's approach to coaching and training is rooted in:",
        },
        {
          name: 'philosophyPoints',
          title: 'Philosophy Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'point',
                  title: 'Philosophy Point',
                  type: 'text',
                },
              ],
            },
          ],
          initialValue: [
            {
              point: 'The power of emotional intelligence and neuroscience.',
            },
            {
              point: 'The belief that leadership is about people—not just strategies.',
            },
            {
              point:
                'The need for vulnerability, compassion, connection, and resilience in growth.',
            },
            {
              point:
                'A commitment to collective work, shared learning, and building a support system that grows together.',
            },
          ],
        },
        {
          name: 'closingText',
          title: 'Closing Text',
          type: 'text',
          initialValue:
            'She blends science with storytelling, structure with soul, and believes deeply in collaboration over competition.',
        },
      ],
    },

    // Energy in Motion Section
    {
      name: 'energyInMotionSection',
      title: 'Energy in Motion Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'text',
          initialValue: 'Energy in Motion\nA Collaborative Vision',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          initialValue:
            "Energy in Motion was never meant to be a solo mission. Sarah built the company as a collaborative platform, working hand-in-hand with certified, like-hearted trainers and coaches who share the same commitment to values, growth, and purpose. Every trainer is selected for their alignment with the company's mission and their excellence in delivery. Together, they deliver coaching and training experiences that are personal, practical, and transformational.",
        },
      ],
    },

    // Professional Hosting Section
    {
      name: 'professionalHostingSection',
      title: 'Professional Hosting & Facilitation Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Professional Hosting & Facilitation',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          initialValue:
            'In addition to her coaching and development work, Sarah is a seasoned Master of Ceremony, moderator, and facilitator. Over the past 20 years, she has hosted more than 100 high-level events, conferences, and panel discussions across sectors—from business, healthcare, and education to arts, culture, and social issues. Known for her warmth, clarity, and dynamic presence, she brings structure, soul, and storytelling to every stage she steps on—ensuring flow, engagement, and meaningful connection.',
        },
      ],
    },

    // Instagram Section
    {
      name: 'instagramSection',
      title: 'Instagram Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Sarah on Instagram',
        },
        {
          name: 'posts',
          title: 'Instagram Posts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Post Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'title',
                  title: 'Post Title',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Instagram Link',
                  type: 'url',
                },
                {
                  name: 'order',
                  title: 'Display Order',
                  type: 'number',
                  validation: (Rule: any) => Rule.min(1).max(10),
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'إنتزال أم إحترام؟',
              link: 'https://www.instagram.com/reel/DE-KoTxhKM7/',
              order: 1,
            },
            {
              title: 'الإمتنان والتقدير',
              link: 'https://www.instagram.com/reel/DEz_gyGSmRu/',
              order: 2,
            },
            {
              title: 'حتى التعاطف، هو فن',
              link: 'https://www.instagram.com/reel/DEVUHe8sCun/',
              order: 3,
            },
            {
              title: 'النجاح يحتاج إلى دقة',
              link: 'https://www.instagram.com/reel/DENdRPwM1Tv/',
              order: 4,
            },
            {
              title: 'كيف يمكن للفشل أن يؤسس للنجاح؟',
              link: 'https://www.instagram.com/reel/DD4h4NMMJvS/',
              order: 5,
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
      initialValue: 'Meet Sarah Dao - Energy In Motion',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      initialValue:
        'Learn about Sarah Dao, a certified coach and emotional intelligence practitioner dedicated to transforming individuals and organizations through purposeful leadership development and authentic growth.',
    },
  ],

  // Document preview in Sanity Studio
  preview: {
    select: {
      title: 'heroSection.title',
      subtitle: 'heroSection.subtitle',
      media: 'heroSection.backgroundImage',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: title || 'Sarah Main Page',
        subtitle: subtitle || 'EQ Coach',
        media: selection.media,
      }
    },
  },
}
