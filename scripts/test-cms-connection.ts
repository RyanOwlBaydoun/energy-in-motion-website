/**
 * Test script to verify CMS connection and reading capabilities
 * Run with: npx tsx scripts/test-cms-connection.ts
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";

async function testCMSConnection() {
  console.log("🔍 Testing CMS Connection...");
  console.log(`📡 Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`📊 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);
  console.log(
    `🔑 API Token: ${process.env.SANITY_API_TOKEN ? "SET" : "NOT SET"}`
  );

  try {
    console.log("\n📖 Testing data fetch...");
    const data = await sanityClient.fetch(TRAINING_COURSES_QUERY);

    console.log(`✅ Connection successful!`);
    console.log(`📊 Found ${data.length} training courses in CMS`);

    if (data.length > 0) {
      console.log("\n📋 Sample course data:");
      data.slice(0, 2).forEach((course: any, index: number) => {
        console.log(`  ${index + 1}. ${course.title}`);
        console.log(`     Category: ${course.category}`);
        console.log(`     Slug: ${course.slug?.current || course.slug}`);
      });
    } else {
      console.log("\n⚠️  No courses found in CMS");
      console.log("🔧 You need to add content manually through Sanity Studio:");
      console.log("   1. Open http://localhost:3333");
      console.log("   2. Click 'Training Course'");
      console.log("   3. Add a few sample courses");
      console.log("   4. Run this test again");
    }
  } catch (error) {
    console.error("❌ Connection failed:", error);
    console.log("\n🔧 Troubleshooting steps:");
    console.log(
      "   1. Ensure Sanity Studio is running (http://localhost:3333)"
    );
    console.log("   2. Check environment variables in .env.local");
    console.log("   3. Verify project ID and dataset are correct");
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testCMSConnection();
}
