import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Auto-create Coaching Main Page document with all required fields
async function autoCreateCoachingMainPage() {
  console.log("🎯 AUTO-CREATING Coaching Main Page Document...");

  try {
    // First, check if document already exists
    console.log("🔍 Checking for existing Coaching Main Page document...");
    const existingDoc = await sanityClient.fetch(
      `*[_type == "coachingMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ Coaching Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      console.log("Title:", existingDoc.title);
      console.log("Hero Overlay Opacity:", existingDoc.heroOverlayOpacity);
      console.log(
        "Coaching Programs Background:",
        existingDoc.coachingProgramsSection?.backgroundColor
      );
      return existingDoc;
    }

    console.log(
      "📝 No existing document found. Creating new Coaching Main Page..."
    );

    // Create complete document structure
    const documentData = {
      _type: "coachingMainPage",
      _id: "coaching-main-page", // Set explicit ID to avoid duplicates

      // Basic fields
      title: "COACHING",
      subtitle: "Clarity. Confidence.",
      description: "Real Change.",

      // Hero overlay opacity - controls the dark overlay
      heroOverlayOpacity: 0.4,

      // Coaching Programs Section - controls the grid appearance
      coachingProgramsSection: {
        title: "Coaching Programs",
        backgroundColor: "#E8DDD4", // This controls the beige background
        categories: [
          {
            name: "Leadership Coaching",
            link: "#leadership-coaching",
            order: 1,
          },
          { name: "Career Coaching", link: "#career-coaching", order: 2 },
          { name: "Youth & Adolescence", link: "#youth-adolescence", order: 3 },
          { name: "Executive Coaching", link: "#executive-coaching", order: 4 },
          { name: "EQ Coaching", link: "#eq-coaching", order: 5 },
          {
            name: "Positive Psychology",
            link: "#positive-psychology",
            order: 6,
          },
          { name: "Business Coaching", link: "#business-coaching", order: 7 },
          {
            name: "Relationship Coaching",
            link: "#relationship-coaching",
            order: 8,
          },
          {
            name: "Wellbeing Group Coaching",
            link: "#wellbeing-group-coaching",
            order: 9,
          },
          { name: "Team Coaching", link: "#team-coaching", order: 10 },
          { name: "Life Coaching", link: "#life-coaching", order: 11 },
        ],
      },

      // SEO Meta tags
      metaTitle: "Coaching - Energy In Motion",
      metaDescription:
        "Transform your leadership potential with our comprehensive coaching programs. Leadership, career, executive coaching and more.",
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
      console.log("\n🎉 COACHING MAIN PAGE CREATED SUCCESSFULLY!");
      console.log("════════════════════════════════════════════");
      console.log("Document ID:", result._id);
      console.log("Title:", result.title);
      console.log("Subtitle:", result.subtitle);
      console.log("Description:", result.description);
      console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
      console.log(
        "Programs Section Title:",
        result.coachingProgramsSection?.title
      );
      console.log(
        "Programs Background Color:",
        result.coachingProgramsSection?.backgroundColor
      );
      console.log(
        "Categories Count:",
        result.coachingProgramsSection?.categories?.length
      );

      console.log("\n🎯 WHAT'S NOW CMS-CONTROLLED:");
      console.log("✅ Hero Image: Upload via Sanity Studio");
      console.log(
        "✅ Overlay Opacity: Currently set to",
        result.heroOverlayOpacity
      );
      console.log(
        "✅ Grid Background: Currently set to",
        result.coachingProgramsSection?.backgroundColor
      );
      console.log("✅ Coaching Categories: All 11 categories configured");

      console.log("\n📋 NEXT STEPS:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Coaching Main Page' in sidebar");
      console.log("3. Upload your hero image");
      console.log("4. Test changes at http://localhost:3000/coaching/");

      return result;
    }
  } catch (error) {
    console.error("❌ Failed to create Coaching Main Page document:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Please create manually via Sanity Studio...");
    }

    throw error;
  }
}

// Run the auto-creation
if (require.main === module) {
  autoCreateCoachingMainPage()
    .then((result) => {
      if (result) {
        console.log("\n🚀 AUTO-CREATION COMPLETED SUCCESSFULLY!");
        console.log("Your Coaching Main Page is now fully CMS-controlled!");
      } else {
        console.log("\n⚠️  Please create manually via Sanity Studio.");
      }
    })
    .catch((error) => {
      console.error("💥 Auto-creation failed:", error.message);
      console.log("\n📋 Please follow manual creation steps.");
    });
}

export { autoCreateCoachingMainPage };
