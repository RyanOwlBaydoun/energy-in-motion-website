import { sanityClient } from "../utils/sanity-client";

async function createHomeMainPage() {
  console.log("🏠 Creating Home Main Page document...");

  try {
    const homeMainPageDocument = {
      _type: "homeMainPage",
      heroSection: {
        overlayOpacity: 0.4,
        mainTitle1: "Empower.",
        mainTitle2: "Evolve.",
        mainTitle3: "Energize.",
        subtitle: "Through Leadership, Emotional Intelligence & Purpose",
        ctaButtonText: "Start Your Journey",
        ctaButtonLink: "#contact",
      },
      energyInMotionSection: {
        content: `At Energy in Motion, we believe that true transformation begins with one simple yet
powerful shift—from within. We are a coaching and training practice dedicated to
human development across all life stages. From children and youth to adults and
professionals, we empower individuals with the tools to reconnect with themselves,
evolve through purposeful learning, and energize their lives with emotional strength,
clarity, and confidence.`,
      },
      servicesSection: {
        sectionTitle: "Services That",
        sectionSubtitle: "Drive Growth",
        ctaButtonText: "Explore Programs",
        tabs: [
          {
            tabName: "Coaching",
            services: [
              { serviceName: "Leadership", serviceSubname: "Coaching" },
              { serviceName: "Executive", serviceSubname: "Coaching" },
              { serviceName: "Business", serviceSubname: "Coaching" },
              { serviceName: "Team", serviceSubname: "Coaching" },
              { serviceName: "Career", serviceSubname: "Coaching" },
              { serviceName: "EQ", serviceSubname: "Coaching" },
              { serviceName: "Youth &", serviceSubname: "Adolescence" },
              { serviceName: "Positive", serviceSubname: "Psychology" },
            ],
          },
          {
            tabName: "Training",
            services: [
              { serviceName: "Leadership", serviceSubname: "" },
              { serviceName: "Professional", serviceSubname: "Development" },
              { serviceName: "Sales", serviceSubname: "" },
              { serviceName: "Business", serviceSubname: "Communication" },
              { serviceName: "Emotional", serviceSubname: "Intelligence" },
              {
                serviceName: "EQ for Healthcare",
                serviceSubname: "Professionals",
              },
              { serviceName: "Wellbeing", serviceSubname: "" },
              { serviceName: "Youth", serviceSubname: "Development" },
              { serviceName: "Women", serviceSubname: "Empowerment" },
            ],
          },
          {
            tabName: "E-motions",
            services: [],
          },
        ],
      },
      assessmentsSection: {
        sectionTitle: "Assessments for\nPersonal & Team Growth",
        sectionSubtitle: "",
        sectionDescription:
          "Unlock your leadership and emotional\nintelligence potential with certified tools.",
        ctaButtonText: "Book an EQ Assessment",
        leftAssessments: [
          {
            title: "Hogan Assessments",
            description: "Personality & leadership profiling",
          },
          {
            title: "Saville",
            description:
              "Science-based assessments to\nhire and develop talent.",
          },
          {
            title: "Psytech",
            description: "Global psychometric solutions\ntailored for regions.",
          },
        ],
        rightAssessments: [
          {
            title: "ECR",
            description: "Emotional intelligence &\n360° feedback",
          },
          {
            title: "AssesFirst",
            description: "AI-driven behavioral tools for\npredictive hiring.",
          },
        ],
      },
      latestProgramsSection: {
        sectionTitle: "Latest",
        sectionSubtitle: "Programs",
        tabs: [
          {
            tabName: "Coaching",
            programs: [
              {
                title: "Executive Leadership Coaching",
                description:
                  "Personalized coaching sessions for senior leaders and executives.",
                category: "Coaching - Executive",
              },
              {
                title: "Team Performance Coaching",
                description:
                  "Comprehensive team coaching for enhanced collaboration and results.",
                category: "Coaching - Team",
              },
              {
                title: "Career Development Coaching",
                description:
                  "Individual coaching focused on career growth and professional development.",
                category: "Coaching - Career",
              },
            ],
          },
          {
            tabName: "Training",
            programs: [],
          },
          {
            tabName: "E-motions",
            programs: [],
          },
        ],
      },
      aboutSarahSection: {
        sectionLabel: "// ABOUT US",
        title: "Meet Sarah Daou",
        subtitle: "Empowering Leaders.",
        description: "Elevating Emotional Intelligence.",
        credentials: [
          "Certified Hogan, ECR, ECR 360, ECR Youth Assessor",
          "Emotional Intelligence Practitioner – Six Seconds",
          "Advanced Coaching Diploma – Noble Manhattan UK",
          "Inspirational Leadership – Case Western Reserve University",
        ],
        buttonText: "Explore more",
        buttonLink: "/about/sarah",
      },
      instagramSection: {
        sectionTitle: "Sarah on Instagram",
        posts: [
          {
            title: "إنتزال أم إحترام؟",
            link: "https://www.instagram.com/reel/DE-KoTxhKM7/",
            order: 1,
          },
          {
            title: "الإمتنان والتقدير",
            link: "https://www.instagram.com/reel/DEz_gyGSmRu/",
            order: 2,
          },
          {
            title: "حتى التعاطف، هو فن",
            link: "https://www.instagram.com/reel/DEVUHe8sCun/",
            order: 3,
          },
          {
            title: "النجاح يحتاج إلى دقة",
            link: "https://www.instagram.com/reel/DENdRPwM1Tv/",
            order: 4,
          },
          {
            title: "كيف يمكن للفشل أن يؤسس للنجاح؟",
            link: "https://www.instagram.com/reel/DD4h4NMMJvS/",
            order: 5,
          },
        ],
      },
      testimonialsSection: {
        sectionTitle: "Real Success Stories",
        sectionSubtitle: "from Our Clients",
        testimonials: [
          {
            quote:
              "Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
            name: "NATALIE BROOKS",
            company: "Emaar Properties",
            order: 1,
          },
          {
            quote:
              "Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
            name: "NATALIE BROOKS",
            company: "Emaar Properties",
            order: 2,
          },
          {
            quote:
              "Our Backyard has been \ncompletely transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
            name: "NATALIE BROOKS",
            company: "Emaar Properties",
            order: 3,
          },
        ],
      },
      industryInsightsSection: {
        sectionLabel: "// NEWS/POST",
        sectionTitle: "Latest updates",
        sectionSubtitle: "and coaching",
        sectionHighlight: "Industry Insights",
        blogPosts: [
          {
            title: "Mental wellness and Resilience The Power of Coaching",
            description:
              "In the fast-paced world of entrepreneurship, time is one of...",
            order: 1,
          },
          {
            title: "How to Maintain Work-Life Balance in a Busy world",
            description:
              "In the fast-paced world of entrepreneurship, time is one of...",
            order: 2,
          },
        ],
      },
      metaTitle:
        "Energy In Motion - Transforming Leadership Through Emotional Intelligence",
      metaDescription:
        "Empower, evolve, and energize your leadership potential through our comprehensive coaching, training, and assessment programs. Expert guidance for personal and professional growth.",
    };

    const result = await sanityClient.create(homeMainPageDocument);

    console.log("✅ Home Main Page document created successfully!");
    console.log("📄 Document ID:", result._id);
    console.log("\n🎯 Next Steps:");
    console.log("1. Go to http://localhost:3333");
    console.log("2. Navigate to 'Home Main Page'");
    console.log("3. Upload hero background image");
    console.log("4. Upload Sarah's photo");
    console.log("5. Upload program images");
    console.log("6. Upload Instagram post images");
    console.log("7. Upload blog post images");
    console.log("8. Publish the document");

    return result;
  } catch (error) {
    console.error("❌ Error creating Home Main Page document:", error);

    if (error instanceof Error && error.message.includes("permission")) {
      console.log("\n🔐 Permission Issue Detected!");
      console.log("The API token doesn't have write permissions.");
      console.log("Please create the document manually in Sanity Studio:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Home Main Page' in the sidebar");
      console.log("3. Click '+ Create New'");
      console.log("4. The document will be pre-filled with default values");
      console.log("5. Upload your images and publish");
    }

    throw error;
  }
}

// Run the script
createHomeMainPage()
  .then(() => {
    console.log("🎉 Script completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Script failed:", error);
    process.exit(1);
  });
