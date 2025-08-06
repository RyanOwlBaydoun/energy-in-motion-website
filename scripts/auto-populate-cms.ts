/**
 * AUTOMATED CMS POPULATION SCRIPT
 * This script attempts multiple methods to populate your CMS automatically
 * Run with: npx tsx scripts/auto-populate-cms.ts
 */

import { trainingCourses } from "../utils/training-courses";
import { sanityWriteClient } from "../utils/sanity-client";

async function autoPopulateCMS() {
  console.log("🚀 AUTOMATED CMS POPULATION");
  console.log("=".repeat(50));
  console.log(
    `📊 Attempting to populate ${trainingCourses.length} courses automatically`
  );
  console.log("");

  // Method 1: Try direct API creation
  console.log("🔧 METHOD 1: Direct API Creation");
  let successCount = 0;
  let errorCount = 0;

  try {
    for (const [index, course] of trainingCourses.entries()) {
      try {
        console.log(
          `📝 [${index + 1}/${trainingCourses.length}] Creating: "${course.title}"`
        );

        const sanityDoc = {
          _type: "trainingCourse",
          _id: `training-${course.slug}`, // Use predictable ID
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
          featured: index < 3, // First 3 featured
          publishedAt: new Date().toISOString(),
        };

        // Try to create or update
        const result = await sanityWriteClient.createOrReplace(sanityDoc);
        console.log(`   ✅ SUCCESS: ${result._id}`);
        successCount++;
      } catch (courseError) {
        console.log(
          `   ❌ FAILED: ${courseError instanceof Error ? courseError.message : "Unknown error"}`
        );
        errorCount++;
      }
    }
  } catch (error) {
    console.error("❌ Direct API method failed:", error);
  }

  console.log("\n📊 RESULTS:");
  console.log(`✅ Successfully created: ${successCount} courses`);
  console.log(`❌ Failed: ${errorCount} courses`);

  if (successCount > 0) {
    console.log("\n🎉 SUCCESS! CMS Population Complete!");
    console.log("🔗 Test your results:");
    console.log("   1. Visit: http://localhost:3000/test-cms");
    console.log("   2. Click 'Fetch Sanity Data'");
    console.log(`   3. Should show ${successCount + 1} courses total`);
    console.log("   4. Check: http://localhost:3000/training");
    console.log("");
    console.log("🎯 Individual course URLs to test:");
    trainingCourses.slice(0, Math.min(successCount, 5)).forEach((course) => {
      console.log(`   • http://localhost:3000/training/${course.slug}`);
    });
  } else {
    console.log("\n⚠️ AUTOMATED METHOD FAILED");
    console.log("💡 ALTERNATIVE: Use Sanity Import Method");
    generateImportFile();
  }
}

function generateImportFile() {
  console.log("\n🔧 METHOD 2: Generating Import File");

  const importData = trainingCourses.map((course, index) => ({
    _type: "trainingCourse",
    _id: `training-${course.slug}`,
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
    featured: index < 3,
    publishedAt: new Date().toISOString(),
  }));

  // Write import file
  const fs = require("fs");
  fs.writeFileSync(
    "training-courses-import.json",
    JSON.stringify(importData, null, 2)
  );

  console.log("✅ Created: training-courses-import.json");
  console.log("📋 To import:");
  console.log("   1. cd energy-in-motion");
  console.log(
    "   2. npx sanity dataset import ../training-courses-import.json production"
  );
  console.log("");
}

autoPopulateCMS().catch(console.error);
