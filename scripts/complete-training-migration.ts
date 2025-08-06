/**
 * COMPLETE TRAINING MIGRATION: Static → Dynamic CMS
 * This script migrates all 11 static training courses to Sanity CMS
 * Run with: npx tsx scripts/complete-training-migration.ts
 */

import { sanityWriteClient } from "../utils/sanity-client";
import { trainingCourses } from "../utils/training-courses";

async function migrateAllTrainingCourses() {
  console.log("🚀 COMPLETE TRAINING MIGRATION: Static → Dynamic CMS");
  console.log("=".repeat(60));
  console.log(`📊 Found ${trainingCourses.length} training courses to migrate`);
  console.log("");

  let successCount = 0;
  let errorCount = 0;

  try {
    for (const [index, course] of trainingCourses.entries()) {
      console.log(
        `📝 [${index + 1}/${trainingCourses.length}] Migrating: "${course.title}"`
      );
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Category: ${course.category}`);

      try {
        // Convert legacy format to Sanity format
        const sanityDoc = {
          _type: "trainingCourse",
          title: course.title,
          slug: {
            _type: "slug",
            current: course.slug,
          },
          description: course.description,
          whoItsFor: course.whoItsFor,
          purpose: course.purpose,
          innerFocus: course.innerFocus,
          otherFocus: course.otherFocus,
          outerFocus: course.outerFocus,
          programHighlights: course.programHighlights,
          keyBenefits: course.keyBenefits,
          category: course.category,
          featured: index < 3, // Mark first 3 as featured
          publishedAt: new Date().toISOString(),
        };

        // Create document in Sanity
        const result = await sanityWriteClient.create(sanityDoc);
        console.log(`   ✅ SUCCESS: Created with ID ${result._id}`);
        successCount++;
      } catch (error) {
        console.log(
          `   ❌ ERROR: ${error instanceof Error ? error.message : "Unknown error"}`
        );
        errorCount++;
      }

      console.log(""); // Empty line for readability
    }

    console.log("🎉 MIGRATION COMPLETED!");
    console.log("=".repeat(60));
    console.log(`✅ Successfully migrated: ${successCount} courses`);
    console.log(`❌ Failed migrations: ${errorCount} courses`);
    console.log(
      `📊 Total processed: ${successCount + errorCount}/${trainingCourses.length}`
    );

    if (successCount > 0) {
      console.log("");
      console.log("🎯 NEXT STEPS:");
      console.log(
        "1. 🌐 Visit http://localhost:3000/training to see dynamic content"
      );
      console.log(
        "2. 🎛️ Visit http://localhost:3333 to manage content in Sanity Studio"
      );
      console.log(
        "3. 🧪 Visit http://localhost:3000/test-cms to verify integration"
      );
      console.log("4. 🔗 Test individual course pages: /training/[slug]");
      console.log("");
      console.log("🚀 YOUR TRAINING SYSTEM IS NOW FULLY DYNAMIC!");
    }

    if (errorCount > 0) {
      console.log("");
      console.log("⚠️ TROUBLESHOOTING:");
      console.log("- Check your .env.local file has SANITY_API_TOKEN");
      console.log("- Ensure Sanity Studio is running on port 3333");
      console.log("- Verify write permissions in your Sanity project");
    }
  } catch (error) {
    console.error("💥 MIGRATION FAILED:", error);
    console.log("");
    console.log("🔧 COMMON SOLUTIONS:");
    console.log("1. Check .env.local file exists with proper tokens");
    console.log(
      "2. Ensure Sanity Studio is running: cd energy-in-motion && npm run dev"
    );
    console.log("3. Verify your Sanity API token has write permissions");
    console.log("4. Try running: npm install --legacy-peer-deps");
    process.exit(1);
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  migrateAllTrainingCourses();
}
