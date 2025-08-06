import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Auto-create Training Main Page document with all required fields
async function autoCreateTrainingMainPage() {
  console.log("🎯 AUTO-CREATING Training Main Page Document...");

  try {
    // First, check if document already exists
    console.log("🔍 Checking for existing Training Main Page document...");
    const existingDoc = await sanityClient.fetch(
      `*[_type == "trainingMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ Training Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      console.log("Title:", existingDoc.title);
      console.log("Hero Overlay Opacity:", existingDoc.heroOverlayOpacity);
      console.log(
        "Training Programs Background:",
        existingDoc.trainingProgramsSection?.backgroundColor
      );
      return existingDoc;
    }

    console.log(
      "📝 No existing document found. Creating new Training Main Page..."
    );

    // Create complete document structure
    const documentData = {
      _type: "trainingMainPage",
      _id: "training-main-page", // Set explicit ID to avoid duplicates

      // Basic fields
      title: "TRAINING",
      subtitle: "Empower Teams.",
      description: "Elevate Performance.",

      // Hero overlay opacity - controls the dark overlay
      heroOverlayOpacity: 0.4,

      // Training Programs Section - controls the grid appearance
      trainingProgramsSection: {
        title: "Training Programs",
        backgroundColor: "#E8DDD4", // This controls the beige background
        categories: [
          { name: "Leadership", link: "#leadership", order: 1 },
          {
            name: "Business Communication",
            link: "#business-communication",
            order: 2,
          },
          { name: "Wellbeing", link: "#wellbeing", order: 3 },
          {
            name: "Professional Development",
            link: "#professional-development",
            order: 4,
          },
          {
            name: "Emotional Intelligence",
            link: "#emotional-intelligence",
            order: 5,
          },
          { name: "Youth Development", link: "#youth-development", order: 6 },
          { name: "Sales", link: "#sales", order: 7 },
          {
            name: "EQ for Healthcare Professionals",
            link: "#eq-healthcare",
            order: 8,
          },
          { name: "Women Empowerment", link: "#women-empowerment", order: 9 },
        ],
      },

      // SEO Meta tags
      metaTitle: "Training - Energy In Motion",
      metaDescription:
        "Empower teams and elevate performance through our comprehensive training programs. Leadership, emotional intelligence, communication skills, and more.",
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
      console.log("\n🎉 TRAINING MAIN PAGE CREATED SUCCESSFULLY!");
      console.log("════════════════════════════════════════════");
      console.log("Document ID:", result._id);
      console.log("Title:", result.title);
      console.log("Subtitle:", result.subtitle);
      console.log("Description:", result.description);
      console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
      console.log(
        "Programs Section Title:",
        result.trainingProgramsSection?.title
      );
      console.log(
        "Programs Background Color:",
        result.trainingProgramsSection?.backgroundColor
      );
      console.log(
        "Categories Count:",
        result.trainingProgramsSection?.categories?.length
      );

      console.log("\n🎯 WHAT'S NOW CMS-CONTROLLED:");
      console.log("✅ Hero Image: Upload via Sanity Studio");
      console.log(
        "✅ Overlay Opacity: Currently set to",
        result.heroOverlayOpacity
      );
      console.log(
        "✅ Grid Background: Currently set to",
        result.trainingProgramsSection?.backgroundColor
      );
      console.log("✅ Training Categories: All 9 categories configured");

      console.log("\n📋 NEXT STEPS:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Training Main Page' in sidebar");
      console.log("3. Upload your hero image");
      console.log("4. Test changes at http://localhost:3000/training/");

      return result;
    }
  } catch (error) {
    console.error("❌ Failed to create Training Main Page document:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Creating via Sanity Studio manually...");
      return await createViaStudio();
    }

    throw error;
  }
}

// Alternative method: Create via Studio interface simulation
async function createViaStudio() {
  console.log("🎨 Attempting Studio-based creation...");

  try {
    // Use a transaction approach
    const transaction = sanityWriteClient.transaction().createOrReplace({
      _id: "training-main-page",
      _type: "trainingMainPage",
      title: "TRAINING",
      subtitle: "Empower Teams.",
      description: "Elevate Performance.",
      heroOverlayOpacity: 0.4,
      trainingProgramsSection: {
        title: "Training Programs",
        backgroundColor: "#E8DDD4",
        categories: [
          { name: "Leadership", link: "#leadership", order: 1 },
          {
            name: "Business Communication",
            link: "#business-communication",
            order: 2,
          },
          { name: "Wellbeing", link: "#wellbeing", order: 3 },
          {
            name: "Professional Development",
            link: "#professional-development",
            order: 4,
          },
          {
            name: "Emotional Intelligence",
            link: "#emotional-intelligence",
            order: 5,
          },
          { name: "Youth Development", link: "#youth-development", order: 6 },
          { name: "Sales", link: "#sales", order: 7 },
          {
            name: "EQ for Healthcare Professionals",
            link: "#eq-healthcare",
            order: 8,
          },
          { name: "Women Empowerment", link: "#women-empowerment", order: 9 },
        ],
      },
      metaTitle: "Training - Energy In Motion",
      metaDescription:
        "Empower teams and elevate performance through our comprehensive training programs.",
    });

    const result = await transaction.commit();
    console.log("✅ SUCCESS: Created via transaction method!");
    return result;
  } catch (error) {
    console.error("❌ Transaction method also failed:", error);
    console.log("\n📋 MANUAL CREATION REQUIRED:");
    console.log("Please follow the manual steps provided earlier.");
    return null;
  }
}

// Run the auto-creation
if (require.main === module) {
  autoCreateTrainingMainPage()
    .then((result) => {
      if (result) {
        console.log("\n🚀 AUTO-CREATION COMPLETED SUCCESSFULLY!");
        console.log("Your Training Main Page is now fully CMS-controlled!");
      } else {
        console.log("\n⚠️  Please create manually via Sanity Studio.");
      }
    })
    .catch((error) => {
      console.error("💥 Auto-creation failed:", error.message);
      console.log("\n📋 Please follow manual creation steps.");
    });
}

export { autoCreateTrainingMainPage };
