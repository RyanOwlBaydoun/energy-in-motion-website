export default {
  name: 'homeMainPage',
  title: 'Home Main Page',
  type: 'document',
  description:
    '📝 TEXT FORMATTING GUIDE:\n\n🔸 LINE BREAKS: Press Enter to create new lines in text fields\n🔸 BOLD TEXT: Wrap text with *asterisks* to make it bold (e.g., *Important Text* becomes **Important Text**)\n\nThese features work in all multi-line text fields throughout the CMS.',
  fields: [
    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        // Sizing controls
        {
          name: 'minHeightDesktopPx',
          title: 'Min Height (Desktop, px)',
          type: 'number',
          initialValue: 840,
        },
        {
          name: 'minHeightMobilePx',
          title: 'Min Height (Mobile, px)',
          type: 'number',
          initialValue: 560,
        },
        {
          name: 'bottomSpacingPx',
          title: 'Bottom Spacing (px)',
          type: 'number',
          initialValue: 80,
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
        {
          name: 'mainTitle1',
          title: 'Main Title Line 1',
          type: 'string',
          initialValue: 'Empower.',
        },
        {
          name: 'mainTitle2',
          title: 'Main Title Line 2',
          type: 'string',
          initialValue: 'Evolve.',
        },
        {
          name: 'mainTitle3',
          title: 'Main Title Line 3',
          type: 'string',
          initialValue: 'Energize.',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Through Leadership, Emotional Intelligence & Purpose',
        },
        {
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Start Your Journey',
        },
        {
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'url',
          initialValue: '#contact',
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
          name: 'content',
          title: 'Content',
          type: 'text',
          initialValue:
            'At Energy in Motion, we believe that true transformation begins with one simple yet powerful shift—from within. We are a coaching and training practice dedicated to human development across all life stages. From children and youth to adults and professionals, we empower individuals with the tools to reconnect with themselves, evolve through purposeful learning, and energize their lives with emotional strength, clarity, and confidence.',
        },
      ],
    },

    // Services Section
    {
      name: 'servicesSection',
      title: 'Services That Drive Growth Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Services That',
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Drive Growth',
        },
        {
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Explore Programs',
        },
        {
          name: 'ctaHref',
          title: 'CTA Href',
          type: 'url',
          initialValue: '/training',
        },
        {
          name: 'ctaStyle',
          title: 'CTA Style',
          type: 'string',
          options: { list: [ {title: 'Primary', value: 'primary'}, {title: 'Secondary', value: 'secondary'} ], layout: 'radio' },
          initialValue: 'primary',
        },
        {
          name: 'tabs',
          title: 'Service Tabs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'tabName',
                  title: 'Tab Name',
                  type: 'string',
                },
                {
                  name: 'services',
                  title: 'Services',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'serviceName',
                          title: 'Service Name',
                          type: 'string',
                        },
                        {
                          name: 'serviceSubname',
                          title: 'Service Subname',
                          type: 'string',
                        },
                        // Global icons per service/program/feature
                        {
                          name: 'iconSource',
                          title: 'Icon Source',
                          type: 'string',
                          options: {
                            list: [
                              {title: 'Upload', value: 'upload'},
                              {title: 'Library', value: 'library'},
                            ],
                            layout: 'radio',
                          },
                        },
                        {
                          name: 'iconSvg',
                          title: 'Icon SVG (Upload)',
                          type: 'file',
                          options: {accept: 'image/svg+xml'},
                          hidden: ({parent}: any) => parent?.iconSource !== 'upload',
                        },
                        {
                          name: 'iconKey',
                          title: 'Icon Library Key',
                          type: 'string',
                          description: 'e.g., lucide icon name',
                          hidden: ({parent}: any) => parent?.iconSource !== 'library',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          initialValue: [
            {
              tabName: 'Coaching',
              services: [
                {serviceName: 'Leadership', serviceSubname: 'Coaching'},
                {serviceName: 'Executive', serviceSubname: 'Coaching'},
                {serviceName: 'Business', serviceSubname: 'Coaching'},
                {serviceName: 'Team', serviceSubname: 'Coaching'},
                {serviceName: 'Career', serviceSubname: 'Coaching'},
                {serviceName: 'EQ', serviceSubname: 'Coaching'},
                {serviceName: 'Youth &', serviceSubname: 'Adolescence'},
                {serviceName: 'Positive', serviceSubname: 'Psychology'},
              ],
            },
            {
              tabName: 'Training',
              services: [
                {serviceName: 'Leadership', serviceSubname: ''},
                {serviceName: 'Professional', serviceSubname: 'Development'},
                {serviceName: 'Sales', serviceSubname: ''},
                {serviceName: 'Business', serviceSubname: 'Communication'},
                {serviceName: 'Emotional', serviceSubname: 'Intelligence'},
                {serviceName: 'EQ for Healthcare', serviceSubname: 'Professionals'},
                {serviceName: 'Wellbeing', serviceSubname: ''},
                {serviceName: 'Youth', serviceSubname: 'Development'},
                {serviceName: 'Women', serviceSubname: 'Empowerment'},
              ],
            },
            {
              tabName: 'E-motions',
              services: [],
            },
          ],
        },
      ],
    },

    // Assessments Section
    {
      name: 'assessmentsSection',
      title: 'Assessments Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title (Multi-line supported)',
          type: 'text',
          description: 'Press Enter for line breaks. Use *text* for bold formatting.',
          initialValue: 'Assessments for\nPersonal & Team Growth',
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle (Multi-line supported)',
          type: 'text',
          description:
            'Press Enter for line breaks. Use *text* for bold formatting. Leave empty if not needed.',
          initialValue: '',
        },
        {
          name: 'sectionDescription',
          title: 'Section Description (Multi-line supported)',
          type: 'text',
          description: 'Press Enter for line breaks. Use *text* for bold formatting.',
          initialValue:
            'Unlock your leadership and emotional\nintelligence potential with certified tools.',
        },
        {
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Book an EQ Assessment',
        },
        {
          name: 'ctaHref',
          title: 'CTA Href',
          type: 'url',
          initialValue: '/assessments',
        },
        {
          name: 'leftAssessments',
          title: 'Left Column Assessments',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Assessment Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Assessment Description',
                  type: 'text',
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'Hogan Assessments',
              description: 'Personality & leadership profiling',
            },
            {
              title: 'Saville',
              description: 'Science-based assessments to\nhire and develop talent.',
            },
            {
              title: 'Psytech',
              description: 'Global psychometric solutions\ntailored for regions.',
            },
          ],
        },
        {
          name: 'rightAssessments',
          title: 'Right Column Assessments',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Assessment Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Assessment Description',
                  type: 'text',
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'ECR',
              description: 'Emotional intelligence &\n360° feedback',
            },
            {
              title: 'AssesFirst',
              description: 'AI-driven behavioral tools for\npredictive hiring.',
            },
          ],
        },
      ],
    },

    // Latest Programs Section
    {
      name: 'latestProgramsSection',
      title: 'Latest Programs Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Latest',
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Programs',
        },
        {
          name: 'tabs',
          title: 'Program Tabs',
          type: 'array',
          validation: (Rule: any) => Rule.max(3).error('Maximum 3 tabs allowed'),
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'tabName',
                  title: 'Tab Name',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'programs',
                  title: 'Programs (Manual Selection)',
                  type: 'array',
                  of: [
                    { type: 'reference', to: [{type: 'trainingCourse'}, {type: 'coachingProgram'}, {type: 'emotionProgram'}] },
                  ],
                },
                // Per-card overrides
                {
                  name: 'overrides',
                  title: 'Per-card Overrides (by index)',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {name: 'overrideTitle', title: 'Override Title', type: 'string'},
                        {name: 'overrideExcerpt', title: 'Override Excerpt', type: 'text'},
                        {name: 'overrideCtaLabel', title: 'Override CTA Label', type: 'string'},
                        {name: 'overrideCtaHref', title: 'Override CTA Href', type: 'url'},
                      ],
                    },
                  ],
                },
                // Card width consistency controls
                { name: 'cardMaxWidthPx', title: 'Card Max Width (px)', type: 'number', initialValue: 260 },
                { name: 'cardsPerRowDesktop', title: 'Cards Per Row (Desktop)', type: 'number', initialValue: 3 },
                { name: 'cardsPerRowMobile', title: 'Cards Per Row (Mobile)', type: 'number', initialValue: 1 },
              ],
            },
          ],
          initialValue: [
            {
              tabName: 'Coaching',
              programs: [
                {
                  title: 'Executive Leadership Coaching',
                  description: 'Personalized coaching sessions for senior leaders and executives.',
                  category: 'Coaching - Executive',
                },
                {
                  title: 'Team Performance Coaching',
                  description:
                    'Comprehensive team coaching for enhanced collaboration and results.',
                  category: 'Coaching - Team',
                },
                {
                  title: 'Career Development Coaching',
                  description:
                    'Individual coaching focused on career growth and professional development.',
                  category: 'Coaching - Career',
                },
              ],
            },
            {
              tabName: 'Training',
              programs: [],
            },
            {
              tabName: 'E-motions',
              programs: [],
            },
          ],
        },
      ],
    },

    // About Sarah Section
    {
      name: 'aboutSarahSection',
      title: 'Meet Sarah Daou Section',
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
        // Image container controls
        { name: 'imageAspectRatio', title: 'Image Aspect Ratio (e.g., 4/5)', type: 'string' },
        { name: 'containerWidthPercentDesktop', title: 'Container Width % (Desktop)', type: 'number', initialValue: 45 },
        { name: 'containerWidthPercentMobile', title: 'Container Width % (Mobile)', type: 'number', initialValue: 90 },
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
          type: 'url',
          initialValue: '/about/sarah',
        },
      ],
    },

    // Instagram Section
    {
      name: 'instagramSection',
      title: 'Sarah on Instagram Section',
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

    // Testimonials Section
    {
      name: 'testimonialsSection',
      title: 'Real Success Stories Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Real Success Stories',
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'from Our Clients',
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                },
                {
                  name: 'name',
                  title: 'Client Name',
                  type: 'string',
                },
                {
                  name: 'company',
                  title: 'Company',
                  type: 'string',
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
              quote:
                'Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations',
              name: 'NATALIE BROOKS',
              company: 'Emaar Properties',
              order: 1,
            },
            {
              quote:
                'Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations',
              name: 'NATALIE BROOKS',
              company: 'Emaar Properties',
              order: 2,
            },
            {
              quote:
                'Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations',
              name: 'NATALIE BROOKS',
              company: 'Emaar Properties',
              order: 3,
            },
          ],
        },
      ],
    },

    // Industry Insights Section
    {
      name: 'industryInsightsSection',
      title: 'Latest Updates & Industry Insights Section',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          initialValue: '// NEWS/POST',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Latest updates',
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'and coaching',
        },
        {
          name: 'sectionHighlight',
          title: 'Section Highlight',
          type: 'string',
          initialValue: 'Industry Insights',
        },
        {
          name: 'blogPosts',
          title: 'Blog Posts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Post Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Post Description',
                  type: 'text',
                },
                {
                  name: 'image',
                  title: 'Post Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'link',
                  title: 'Post Link',
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
              title: 'Mental wellness and Resilience The Power of Coaching',
              description: 'In the fast-paced world of entrepreneurship, time is one of...',
              order: 1,
            },
            {
              title: 'How to Maintain Work-Life Balance in a Busy world',
              description: 'In the fast-paced world of entrepreneurship, time is one of...',
              order: 2,
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
      initialValue: 'Energy In Motion - Transforming Leadership Through Emotional Intelligence',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      initialValue:
        'Empower, evolve, and energize your leadership potential through our comprehensive coaching, training, and assessment programs. Expert guidance for personal and professional growth.',
    },
  ],

  // Document preview in Sanity Studio
  preview: {
    select: {
      title: 'heroSection.mainTitle1',
      subtitle: 'heroSection.subtitle',
      media: 'heroSection.backgroundImage',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: title || 'Home Main Page',
        subtitle: subtitle || 'Main website homepage',
        media: selection.media,
      }
    },
  },
}
