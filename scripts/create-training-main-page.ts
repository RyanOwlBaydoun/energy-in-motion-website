import { sanityWriteClient } from "../utils/sanity-client";

async function createTrainingMainPage() {
  console.log("🎯 Creating Training Main Page in CMS...\n");

  try {
    const trainingMainPage = {
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
        "Empower teams and elevate performance through our comprehensive training programs. Leadership, emotional intelligence, communication skills, and more.",
    };

    const result = await sanityWriteClient.create(trainingMainPage);

    console.log("✅ SUCCESS: Training Main Page created!");
    console.log(`   Document ID: ${result._id}`);
    console.log("   Fields configured:");
    console.log("   ✅ Title, Subtitle, Description");
    console.log("   ✅ Hero Image field (ready for upload)");
    console.log("   ✅ Dynamic overlay opacity");
    console.log("   ✅ Training Programs section with categories");
    console.log("   ✅ SEO meta fields");

    console.log("\n🎨 NEXT STEPS:");
    console.log("1. Go to http://localhost:3333");
    console.log('2. Click "Training Main Page" in the sidebar');
    console.log('3. Upload a hero image in the "Main Hero Image" field');
    console.log("4. Customize the overlay opacity (0.0 to 1.0)");
    console.log("5. Modify the Training Programs categories if needed");
    console.log("6. Save and publish");
    console.log("7. Check http://localhost:3000/training to see changes");

    console.log("\n🚀 Your Training Main Page CMS is ready!");
  } catch (error) {
    console.error("❌ ERROR creating Training Main Page:", error);

    if (error.message?.includes("Insufficient permissions")) {
      console.log("\n🔧 PERMISSION ISSUE:");
      console.log(
        'The API token needs "Editor" permissions to create documents.'
      );
      console.log(
        "Please check your Sanity project settings and API token permissions."
      );
    } else if (error.message?.includes("already exists")) {
      console.log("\n✅ Training Main Page already exists in CMS!");
      console.log(
        "You can edit it at: http://localhost:3333/structure/trainingMainPage"
      );
    } else {
      console.log("\n🔧 TROUBLESHOOTING:");
      console.log(
        "1. Check if Sanity Studio is running (npm run dev in energy-in-motion folder)"
      );
      console.log("2. Verify environment variables in .env.local");
      console.log("3. Check API token permissions in Sanity project settings");
    }
  }
}

createTrainingMainPage();
