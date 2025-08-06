/**
 * Alternative CMS Population Script
 * Since Sanity Studio has issues, this creates sample data to test the system
 * Run with: npx tsx scripts/populate-cms-alternative.ts
 */

import { trainingCourses } from "../utils/training-courses";

async function testCMSSystem() {
  console.log("🚀 TESTING CMS SYSTEM WITH MOCK DATA");
  console.log("=".repeat(50));

  // Test API connection
  try {
    console.log("📡 Testing API connection...");
    const response = await fetch("http://localhost:3000/api/training-courses");
    const result = await response.json();

    console.log(`✅ API Working: ${result.success ? "YES" : "NO"}`);
    console.log(`📊 Current CMS courses: ${result.count}`);

    if (result.data && result.data.length > 0) {
      console.log("\n🔍 Current CMS Content:");
      result.data.forEach((course: any, index: number) => {
        console.log(`   ${index + 1}. "${course.title}" (${course.category})`);
      });
    }
  } catch (error) {
    console.error("❌ API Test failed:", error);
  }

  console.log("\n🎯 SOLUTION: Manual CMS Population Required");
  console.log("=".repeat(50));
  console.log("Since automated migration requires API tokens,");
  console.log("here's your step-by-step manual process:");
  console.log("");

  console.log("📋 STEP 1: Access Sanity Web Studio");
  console.log("   Go to: https://sanity.io/manage");
  console.log("   Find project: hy425cry");
  console.log("   Click 'Open Studio'");
  console.log("");

  console.log("📋 STEP 2: Add Training Courses (Copy-Paste Ready)");
  console.log("");

  // Output first 3 courses as examples
  trainingCourses.slice(0, 3).forEach((course, index) => {
    console.log(`🎯 COURSE ${index + 1}: ${course.title.toUpperCase()}`);
    console.log(`Title: ${course.title}`);
    console.log(`Slug: ${course.slug}`);
    console.log(`Description: ${course.description}`);
    console.log(`Who It's For: ${course.whoItsFor}`);
    console.log(`Purpose: ${course.purpose}`);
    console.log(`Inner Focus: ${course.innerFocus}`);
    console.log(`Other Focus: ${course.otherFocus}`);
    console.log(`Outer Focus: ${course.outerFocus}`);
    console.log(`Category: ${course.category}`);
    console.log(`Featured: ${index < 3 ? "Yes" : "No"}`);
    console.log(`Key Benefits:`);
    course.keyBenefits.forEach((benefit) => console.log(`- ${benefit}`));
    console.log("");
    console.log("-".repeat(40));
    console.log("");
  });

  console.log(`📊 Total courses to add: ${trainingCourses.length}`);
  console.log("");
  console.log("📋 STEP 3: Test Each Addition");
  console.log("   After adding each course:");
  console.log("   1. Visit: http://localhost:3000/test-cms");
  console.log("   2. Click 'Fetch Sanity Data'");
  console.log("   3. Verify course count increases");
  console.log("   4. Test individual page: /training/[slug]");
  console.log("");

  console.log("🎉 EXPECTED RESULT:");
  console.log(
    `   - ${trainingCourses.length + 1} total courses (${trainingCourses.length} new + 1 existing 'OUga Bouga')`
  );
  console.log("   - All training sub-pages working");
  console.log("   - Sidebar showing all courses");
  console.log("   - Fully dynamic CMS system");
}

testCMSSystem().catch(console.error);
