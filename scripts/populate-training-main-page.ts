import { sanityWriteClient } from "../utils/sanity-client";

// This script populates the Training Main Page CMS with proper data
async function populateTrainingMainPage() {
  console.log("🚀 Starting Training Main Page CMS Population...");

  try {
    // Check if Training Main Page document exists
    const existingDoc = await sanityWriteClient.fetch(
      `*[_type == "trainingMainPage"][0]`
    );

    if (existingDoc) {
      console.log("✅ Training Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      console.log("Title:", existingDoc.title);
      return;
    }

    // Create the Training Main Page document
    const trainingMainPageData = {
      _type: "trainingMainPage",
      title: "TRAINING",
      subtitle: "Empower Teams.",
      description: "Elevate Performance.",

      // Hero image - using Training_Hero.png as default
      heroImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image-5f7e3e4b8c9d3e2f1a0b1c2d3e4f5a6b7c8d9e0f-800x600-png", // Placeholder - needs actual upload
        },
      },

      // Dynamic overlay opacity
      heroOverlayOpacity: 0.4,

      // Training Programs Section Configuration
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

      // SEO Meta tags
      metaTitle: "Training - Energy In Motion",
      metaDescription:
        "Empower teams and elevate performance through our comprehensive training programs. Leadership, emotional intelligence, communication skills, and more.",
    };

    console.log("📝 Creating Training Main Page document...");

    const result = await sanityWriteClient.create(trainingMainPageData);

    console.log("✅ Successfully created Training Main Page!");
    console.log("Document ID:", result._id);
    console.log("Title:", result.title);
    console.log("Hero Overlay Opacity:", result.heroOverlayOpacity);
    console.log(
      "Programs Section Background:",
      result.trainingProgramsSection.backgroundColor
    );
    console.log(
      "Categories Count:",
      result.trainingProgramsSection.categories.length
    );

    return result;
  } catch (error) {
    console.error("❌ Error populating Training Main Page:", error);
    throw error;
  }
}

// Upload hero image function
async function uploadHeroImage() {
  console.log("📸 Uploading Training Hero Image...");

  try {
    // Note: In a real scenario, you'd upload the actual image file
    // For now, we'll create a reference to the existing Training_Hero.png

    const imageAsset = await sanityWriteClient.assets.upload(
      "image",
      "/public/images/programs/Training_Hero.png", // Path to the image
      {
        filename: "Training_Hero.png",
      }
    );

    console.log("✅ Hero image uploaded successfully!");
    console.log("Image ID:", imageAsset._id);

    return imageAsset;
  } catch (error) {
    console.error("❌ Error uploading hero image:", error);
    console.log(
      "💡 Note: You may need to manually upload the image via Sanity Studio"
    );
    return null;
  }
}

// Main execution
async function main() {
  console.log("🎯 Training Main Page CMS Population Script");
  console.log("==========================================");

  try {
    // Step 1: Upload hero image (optional)
    const heroImage = await uploadHeroImage();

    // Step 2: Populate the main page data
    await populateTrainingMainPage();

    console.log("\n🎉 Training Main Page CMS Population Complete!");
    console.log("\n📋 Next Steps:");
    console.log("1. Go to Sanity Studio at http://localhost:3333");
    console.log("2. Click on 'Training Main Page' in the sidebar");
    console.log("3. Upload your hero image if not already uploaded");
    console.log("4. Adjust overlay opacity (0.0 to 1.0)");
    console.log("5. Customize training categories and background color");
    console.log("6. Test the changes at http://localhost:3000/training");
  } catch (error) {
    console.error("💥 Script failed:", error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

export { populateTrainingMainPage, uploadHeroImage };
