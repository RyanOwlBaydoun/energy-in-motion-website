/**
 * Migration script to move existing training courses from utils/training-courses.ts to Sanity CMS
 * Run with: npx tsx scripts/migrate-training-courses.ts
 */

import { sanityWriteClient } from "../utils/sanity-client";
import { trainingCourses } from "../utils/training-courses";

async function migrateTrainingCourses() {
  console.log("🚀 Starting training courses migration...");
  console.log(`📊 Found ${trainingCourses.length} courses to migrate`);

  try {
    for (const course of trainingCourses) {
      console.log(`📝 Migrating: ${course.title}`);

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
        featured: false, // Default to false, can be updated in CMS
        publishedAt: new Date().toISOString(),
      };

      // Create document in Sanity
      const result = await sanityWriteClient.create(sanityDoc);
      console.log(`✅ Created: ${result._id}`);
    }

    console.log("🎉 Migration completed successfully!");
    console.log("📋 Next steps:");
    console.log("  1. Go to your Sanity Studio to review the migrated content");
    console.log("  2. Update components to use Sanity data");
    console.log("  3. Test the integration");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  migrateTrainingCourses();
}
