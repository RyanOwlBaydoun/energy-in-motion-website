import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Auto-create Assessment Main Page document with all required fields
async function autoCreateAssessmentMainPage() {
  console.log("🎯 AUTO-CREATING Assessment Main Page Document...");

  try {
    // First, check if document already exists
    console.log("🔍 Checking for existing Assessment Main Page document...");
    const existingDoc = await sanityClient.fetch(
      `*[_type == "assessmentMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ Assessment Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      console.log("Title:", existingDoc.title);
      console.log("Hero Overlay Opacity:", existingDoc.heroOverlayOpacity);
      console.log(
        "Assessment Programs Background:",
        existingDoc.assessmentProgramsSection?.backgroundColor
      );
      return existingDoc;
    }

    console.log(
      "📝 No existing document found. Creating new Assessment Main Page..."
    );

    // Create complete document structure
    const documentData = {
      _type: "assessmentMainPage",
      _id: "assessment-main-page", // Set explicit ID to avoid duplicates

      // Basic fields
      title: "ASSESSMENTS",
      subtitle: "Measure. Develop.",
      description: "Transform Potential.",

      // Hero overlay opacity - controls the dark overlay
      heroOverlayOpacity: 0.4,

      // Assessment Programs Section - controls the grid appearance
      assessmentProgramsSection: {
        title: "Assessments",
        backgroundColor: "#E8DDD4", // This controls the beige background
        categories: [
          {
            name: "Personality Assessment",
            link: "#personality-assessment",
            order: 1,
          },
          {
            name: "Leadership Assessment",
            link: "#leadership-assessment",
            order: 2,
          },
          {
            name: "Behavioral Assessment",
            link: "#behavioral-assessment",
            order: 3,
          },
          {
            name: "Emotional Intelligence",
            link: "#emotional-intelligence",
            order: 4,
          },
          {
            name: "Psychometric Testing",
            link: "#psychometric-testing",
            order: 5,
          },
          {
            name: "360° Feedback",
            link: "#360-feedback",
            order: 6,
          },
        ],
      },

      // Display Box Photo toggle - controls images in detail pages
      displayBoxPhoto: false, // Set to false for assessments by default

      // SEO Meta tags
      metaTitle: "Assessments - Energy In Motion",
      metaDescription:
        "Comprehensive assessment solutions for personality, leadership, and behavioral evaluation. Measure potential and transform performance.",
    };

    // Try multiple creation methods
    let result = null;

    console.log("🚀 Attempting document creation...");

    // Method 1: Try with explicit ID
    try {
      result = await sanityWriteClient.createOrReplace(documentData);
      console.log("✅ SUCCESS: Document created with createOrReplace!");
    } catch (error) {
      console.log("⚠️  createOrReplace failed, trying create...");

      // Method 2: Try regular create without explicit ID
      try {
        const { _id, ...dataWithoutId } = documentData;
        result = await sanityWriteClient.create(dataWithoutId);
        console.log("✅ SUCCESS: Document created with create!");
      } catch (error2) {
        console.log("⚠️  Regular create failed, trying patch...");

        // Method 3: Try creating with patch
        try {
          result = await sanityWriteClient
            .patch(documentData._id)
            .setIfMissing(documentData)
            .commit();
          console.log("✅ SUCCESS: Document created with patch!");
        } catch (error3) {
          throw error3;
        }
      }
    }

    if (result) {
      console.log("\n🎉 ASSESSMENT MAIN PAGE CREATED SUCCESSFULLY!");
      console.log("════════════════════════════════════════════");
      console.log("Document ID:", result._id);
      console.log("Title:", result.title);
      console.log("Subtitle:", result.subtitle);
      console.log("Description:", result.description);
      console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
      console.log(
        "Programs Section Title:",
        result.assessmentProgramsSection?.title
      );
      console.log(
        "Programs Background Color:",
        result.assessmentProgramsSection?.backgroundColor
      );
      console.log(
        "Categories Count:",
        result.assessmentProgramsSection?.categories?.length
      );
      console.log("Display Box Photo:", result.displayBoxPhoto);

      console.log("\n🎯 WHAT'S NOW CMS-CONTROLLED:");
      console.log("✅ Shared Hero Image: Upload via Sanity Studio");
      console.log(
        "✅ Overlay Opacity: Currently set to",
        result.heroOverlayOpacity
      );
      console.log(
        "✅ Grid Background: Currently set to",
        result.assessmentProgramsSection?.backgroundColor
      );
      console.log("✅ Assessment Categories: All 6 categories configured");
      console.log(
        "✅ Display Box Photo: Set to",
        result.displayBoxPhoto,
        "(can be toggled)"
      );

      console.log("\n📋 NEXT STEPS:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Assessment Main Page' in sidebar");
      console.log("3. Upload your shared hero image");
      console.log("4. Test changes at http://localhost:3000/assessments/");

      return result;
    }
  } catch (error) {
    console.error("❌ Failed to create Assessment Main Page document:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Please create manually via Sanity Studio...");
    }

    throw error;
  }
}

// Run the auto-creation
if (require.main === module) {
  autoCreateAssessmentMainPage()
    .then((result) => {
      if (result) {
        console.log("\n🚀 AUTO-CREATION COMPLETED SUCCESSFULLY!");
        console.log("Your Assessment Main Page is now fully CMS-controlled!");
      } else {
        console.log("\n⚠️  Please create manually via Sanity Studio.");
      }
    })
    .catch((error) => {
      console.error("💥 Auto-creation failed:", error.message);
      console.log("\n📋 Please follow manual creation steps.");
    });
}

export { autoCreateAssessmentMainPage };
