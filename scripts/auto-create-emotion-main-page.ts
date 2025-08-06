import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Auto-create E-Motion Main Page document with all required fields
async function autoCreateEmotionMainPage() {
  console.log("🎯 AUTO-CREATING E-Motion Main Page Document...");

  try {
    // First, check if document already exists
    console.log("🔍 Checking for existing E-Motion Main Page document...");
    const existingDoc = await sanityClient.fetch(
      `*[_type == "emotionMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ E-Motion Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      console.log("Title:", existingDoc.title);
      console.log("Hero Overlay Opacity:", existingDoc.heroOverlayOpacity);
      console.log(
        "E-Motion Programs Background:",
        existingDoc.emotionProgramsSection?.backgroundColor
      );
      return existingDoc;
    }

    console.log(
      "📝 No existing document found. Creating new E-Motion Main Page..."
    );

    // Create complete document structure
    const documentData = {
      _type: "emotionMainPage",
      _id: "emotion-main-page", // Set explicit ID to avoid duplicates

      // Basic fields
      title: "E-MOTION",
      subtitle: "Express. Explore.",
      description: "Emotional Freedom.",

      // Hero overlay opacity - controls the dark overlay
      heroOverlayOpacity: 0.4,

      // E-Motion Programs Section - controls the grid appearance
      emotionProgramsSection: {
        title: "E-Motion Programs",
        backgroundColor: "#E8DDD4", // This controls the beige background
        categories: [
          {
            name: "Emotional Intelligence",
            link: "#emotional-intelligence",
            order: 1,
          },
          {
            name: "Empathy Development",
            link: "#empathy-development",
            order: 2,
          },
          { name: "Self-Awareness", link: "#self-awareness", order: 3 },
          {
            name: "Emotional Regulation",
            link: "#emotional-regulation",
            order: 4,
          },
          {
            name: "Mindfulness Practice",
            link: "#mindfulness-practice",
            order: 5,
          },
          { name: "Stress Management", link: "#stress-management", order: 6 },
          {
            name: "Interpersonal Skills",
            link: "#interpersonal-skills",
            order: 7,
          },
          { name: "Emotional Healing", link: "#emotional-healing", order: 8 },
          { name: "Personal Growth", link: "#personal-growth", order: 9 },
        ],
      },

      // SEO Meta tags
      metaTitle: "E-Motion - Energy In Motion",
      metaDescription:
        "Explore emotional intelligence and personal growth through our transformative E-Motion programs. Express, explore, and find emotional freedom.",
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
      console.log("\n🎉 E-MOTION MAIN PAGE CREATED SUCCESSFULLY!");
      console.log("════════════════════════════════════════════");
      console.log("Document ID:", result._id);
      console.log("Title:", result.title);
      console.log("Subtitle:", result.subtitle);
      console.log("Description:", result.description);
      console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
      console.log(
        "Programs Section Title:",
        result.emotionProgramsSection?.title
      );
      console.log(
        "Programs Background Color:",
        result.emotionProgramsSection?.backgroundColor
      );
      console.log(
        "Categories Count:",
        result.emotionProgramsSection?.categories?.length
      );

      console.log("\n🎯 WHAT'S NOW CMS-CONTROLLED:");
      console.log("✅ Hero Image: Upload via Sanity Studio");
      console.log(
        "✅ Overlay Opacity: Currently set to",
        result.heroOverlayOpacity
      );
      console.log(
        "✅ Grid Background: Currently set to",
        result.emotionProgramsSection?.backgroundColor
      );
      console.log("✅ E-Motion Categories: All 9 categories configured");

      console.log("\n📋 NEXT STEPS:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'E-Motion Main Page' in sidebar");
      console.log("3. Upload your hero image");
      console.log("4. Test changes at http://localhost:3000/e-motion/");

      return result;
    }
  } catch (error) {
    console.error("❌ Failed to create E-Motion Main Page document:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Please create manually via Sanity Studio...");
    }

    throw error;
  }
}

// Run the auto-creation
if (require.main === module) {
  autoCreateEmotionMainPage()
    .then((result) => {
      if (result) {
        console.log("\n🚀 AUTO-CREATION COMPLETED SUCCESSFULLY!");
        console.log("Your E-Motion Main Page is now fully CMS-controlled!");
      } else {
        console.log("\n⚠️  Please create manually via Sanity Studio.");
      }
    })
    .catch((error) => {
      console.error("💥 Auto-creation failed:", error.message);
      console.log("\n📋 Please follow manual creation steps.");
    });
}

export { autoCreateEmotionMainPage };
