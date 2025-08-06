import { sanityWriteClient } from "../utils/sanity-client";

// Create Training Main Page document in Sanity CMS
async function createTrainingMainPageDocument() {
  console.log("🎯 Creating Training Main Page Document in Sanity CMS...");

  try {
    // Check if document already exists
    const existingDoc = await sanityWriteClient.fetch(
      `*[_type == "trainingMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ Training Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      return existingDoc;
    }

    // Create the document without image first (to be uploaded manually)
    const trainingMainPageData = {
      _type: "trainingMainPage",
      title: "TRAINING",
      subtitle: "Empower Teams.",
      description: "Elevate Performance.",

      // Hero overlay opacity - CMS controlled
      heroOverlayOpacity: 0.4,

      // Training Programs Section - CMS controlled
      trainingProgramsSection: {
        title: "Training Programs",
        backgroundColor: "#E8DDD4", // This controls the background color in the grid
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

    console.log("📝 Creating document in Sanity...");

    const result = await sanityWriteClient.create(trainingMainPageData);

    console.log("🎉 Successfully created Training Main Page document!");
    console.log("Document ID:", result._id);
    console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
    console.log(
      "Training Programs Background:",
      result.trainingProgramsSection.backgroundColor
    );
    console.log(
      "Categories Count:",
      result.trainingProgramsSection.categories.length
    );

    console.log("\n📋 NEXT STEPS:");
    console.log("1. Go to http://localhost:3333 and refresh the page");
    console.log("2. Click 'Training Main Page' in the sidebar");
    console.log("3. Open the document that was just created");
    console.log("4. Upload your hero image in the 'Main Hero Image' field");
    console.log("5. Save/Publish the document");
    console.log("6. Test at http://localhost:3000/training/");

    return result;
  } catch (error) {
    console.error("❌ Error creating Training Main Page document:", error);

    // If it's a permissions error, provide manual instructions
    if (error.statusCode === 403) {
      console.log("\n🔧 MANUAL CREATION REQUIRED:");
      console.log("Since API permissions are limited, please create manually:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Training Main Page' in sidebar");
      console.log("3. Click 'Create New' button");
      console.log("4. Fill in the fields as shown above");
    }

    throw error;
  }
}

// Run the function
if (require.main === module) {
  createTrainingMainPageDocument()
    .then(() => {
      console.log("✅ Script completed successfully!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Script failed:", error.message);
      process.exit(1);
    });
}

export { createTrainingMainPageDocument };
