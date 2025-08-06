/**
 * Simple test migration script to populate Sanity with sample training courses
 * Run with: npx tsx scripts/test-migration.ts
 */

import { sanityWriteClient } from "../utils/sanity-client";
import { trainingCourses } from "../utils/training-courses";

async function testMigration() {
  console.log("🧪 Starting test migration with sample data...");

  try {
    // Take first 3 courses for testing
    const sampleCourses = trainingCourses.slice(0, 3);
    console.log(`📊 Migrating ${sampleCourses.length} sample courses`);

    for (const course of sampleCourses) {
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
        featured: false,
        publishedAt: new Date().toISOString(),
      };

      // Create document in Sanity
      const result = await sanityWriteClient.create(sanityDoc);
      console.log(`✅ Created: ${result._id} - ${result.title}`);
    }

    console.log("🎉 Test migration completed successfully!");
    console.log("📋 Next steps:");
    console.log("  1. Check Sanity Studio at http://localhost:3333");
    console.log("  2. Visit /test-cms to test the integration");
    console.log("  3. Verify data shows up correctly");
  } catch (error) {
    console.error("❌ Test migration failed:", error);
    process.exit(1);
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  testMigration();
}
