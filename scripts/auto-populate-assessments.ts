import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Assessment data to populate
const assessmentData = [
  {
    title: "Hogan",
    slug: "hogan",
    description:
      "Hogan Assessment Systems is one of the world leaders in personality assessment and leadership development with products and services in 56 countries and 47 languages. Hogan has over 30 years of experience helping businesses dramatically reduce turnover and improve performance by identifying people, developing key talent, and improving leadership potential. Phoenix Consulting is Hogan's certified partner throughout the MENA region with a track record of being Hogan's most efficient solutions and great value of all clients' investment in their Talent Management.",
    keyFeatures: [
      "Personality assessment for leadership development",
      "Available in 56 countries and 47 languages",
      "Over 30 years of experience",
      "Reduce turnover and improve performance",
      "Identify and develop key talent",
      "Improve leadership potential",
    ],
    targetAudience:
      "Business leaders, HR professionals, and organizations seeking comprehensive personality assessment for leadership development.",
    assessmentDetails: {
      duration: "15-20 minutes per assessment",
      format: "Online questionnaire",
      reportType: "Comprehensive personality and leadership reports",
    },
    category: "Assessment - Personality",
    featured: true,
  },
  {
    title: "ECR",
    slug: "ecr",
    description:
      "The Emotional Capital Report (ECR) is a comprehensive assessment tool that measures emotional intelligence competencies and provides insights into leadership potential and interpersonal effectiveness.",
    keyFeatures: [
      "Measures emotional intelligence competencies",
      "Provides leadership potential insights",
      "Evaluates interpersonal effectiveness",
      "360° feedback capabilities",
      "Comprehensive EQ analysis",
    ],
    targetAudience:
      "Leaders, managers, and individuals seeking to develop emotional intelligence and interpersonal skills.",
    assessmentDetails: {
      duration: "25-30 minutes",
      format: "Online assessment with 360° feedback option",
      reportType: "Emotional intelligence and leadership effectiveness report",
    },
    category: "Assessment - EQ",
    featured: true,
  },
  {
    title: "Saville",
    slug: "saville",
    description:
      "Saville Assessment offers cutting-edge psychometric assessments that help organizations make better people decisions through scientifically robust and innovative assessment solutions.",
    keyFeatures: [
      "Cutting-edge psychometric assessments",
      "Scientifically robust methodology",
      "Innovative assessment solutions",
      "Better people decisions",
      "Comprehensive talent evaluation",
    ],
    targetAudience:
      "Organizations and HR professionals seeking advanced psychometric assessment solutions for talent management.",
    assessmentDetails: {
      duration: "Various durations depending on assessment type",
      format: "Online psychometric testing",
      reportType: "Detailed psychometric and behavioral reports",
    },
    category: "Assessment - Psychometric",
    featured: false,
  },
  {
    title: "AssessFirst",
    slug: "assessfirst",
    description:
      "AssessFirst provides predictive HR analytics and assessment solutions that help companies identify, develop, and retain top talent through data-driven insights.",
    keyFeatures: [
      "Predictive HR analytics",
      "Data-driven talent insights",
      "AI-powered assessment solutions",
      "Talent identification and development",
      "Employee retention strategies",
    ],
    targetAudience:
      "HR departments and talent acquisition teams seeking data-driven recruitment and development solutions.",
    assessmentDetails: {
      duration: "20-35 minutes",
      format: "AI-driven online assessment",
      reportType: "Predictive analytics and talent reports",
    },
    category: "Assessment - Behavioral",
    featured: false,
  },
  {
    title: "Paytech",
    slug: "paytech",
    description:
      "Paytech offers comprehensive assessment and evaluation tools designed to measure various aspects of professional competency and organizational fit.",
    keyFeatures: [
      "Comprehensive competency assessment",
      "Organizational fit evaluation",
      "Professional skill measurement",
      "Multi-faceted assessment approach",
      "Industry-specific evaluations",
    ],
    targetAudience:
      "Organizations seeking comprehensive professional competency and organizational fit assessments.",
    assessmentDetails: {
      duration: "30-45 minutes",
      format: "Comprehensive online evaluation",
      reportType: "Professional competency and fit analysis",
    },
    category: "Assessment",
    featured: false,
  },
];

// Auto-populate Assessment documents
async function autoPopulateAssessments() {
  console.log("🎯 AUTO-POPULATING Assessment Documents...");

  try {
    console.log("🔍 Checking existing assessments...");
    const existingAssessments = await sanityClient.fetch(
      `*[_type == "assessment"]`
    );

    console.log(`Found ${existingAssessments.length} existing assessments`);

    let createdCount = 0;
    let skippedCount = 0;

    for (const assessment of assessmentData) {
      // Check if assessment already exists
      const existingAssessment = existingAssessments.find(
        (existing: any) => existing.slug?.current === assessment.slug
      );

      if (existingAssessment) {
        console.log(`⏭️  Skipping "${assessment.title}" - already exists`);
        skippedCount++;
        continue;
      }

      console.log(`📝 Creating "${assessment.title}"...`);

      try {
        const documentData = {
          _type: "assessment",
          title: assessment.title,
          slug: {
            _type: "slug",
            current: assessment.slug,
          },
          description: assessment.description,
          keyFeatures: assessment.keyFeatures,
          targetAudience: assessment.targetAudience,
          assessmentDetails: assessment.assessmentDetails,
          category: assessment.category,
          featured: assessment.featured,
          publishedAt: new Date().toISOString(),
        };

        const result = await sanityWriteClient.create(documentData);
        console.log(`✅ Created "${assessment.title}" (ID: ${result._id})`);
        createdCount++;
      } catch (error) {
        console.error(`❌ Failed to create "${assessment.title}":`, error);
      }
    }

    console.log("\n🎉 ASSESSMENT POPULATION COMPLETED!");
    console.log("════════════════════════════════════════");
    console.log(`✅ Created: ${createdCount} new assessments`);
    console.log(`⏭️  Skipped: ${skippedCount} existing assessments`);
    console.log(`📊 Total: ${createdCount + skippedCount} assessments`);

    console.log("\n🎯 WHAT'S NOW AVAILABLE:");
    assessmentData.forEach((assessment, index) => {
      console.log(`${index + 1}. ${assessment.title} (${assessment.category})`);
    });

    console.log("\n📋 NEXT STEPS:");
    console.log("1. Go to http://localhost:3333");
    console.log("2. Click 'Assessment' in sidebar to see all assessments");
    console.log("3. Click 'Assessment Main Page' to configure main settings");
    console.log("4. Test at http://localhost:3000/assessments/");

    return { created: createdCount, skipped: skippedCount };
  } catch (error) {
    console.error("❌ Failed to populate assessments:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Please create manually via Sanity Studio...");
    }

    throw error;
  }
}

// Run the auto-population
if (require.main === module) {
  autoPopulateAssessments()
    .then((result) => {
      console.log(
        `\n🚀 COMPLETED! Created ${result.created}, skipped ${result.skipped}`
      );
    })
    .catch((error) => {
      console.error("💥 Auto-population failed:", error.message);
      console.log("\n📋 Please follow manual creation steps.");
    });
}

export { autoPopulateAssessments };
