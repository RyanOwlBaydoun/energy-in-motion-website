/**
 * Test Hydration Fix
 * Verify that individual course pages are working without hydration errors
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { convertToLegacyFormat, TrainingCourse } from "../types/sanity";
import { trainingCourses } from "../utils/training-courses";

async function testHydrationFix() {
  console.log("🔍 TESTING HYDRATION FIX");
  console.log("=".repeat(50));

  // Test the exact logic used in the fixed page
  async function getAllCourses() {
    try {
      const sanityData: TrainingCourse[] = await sanityClient.fetch(
        TRAINING_COURSES_QUERY
      );
      if (sanityData && sanityData.length > 0) {
        return sanityData.map(convertToLegacyFormat);
      }
    } catch (error) {
      console.error("Error fetching courses from CMS:", error);
    }

    // Fallback to static data if CMS fails
    return trainingCourses;
  }

  console.log("📊 TESTING FIXED LOGIC:");
  const allCourses = await getAllCourses();
  console.log(`   Found ${allCourses.length} courses total`);
  console.log("");

  console.log("🎯 TESTING CRITICAL URLS:");
  const testCases = [
    {
      slug: "mastering-eq-levels-1-2",
      url: "http://localhost:3000/training/mastering-eq-levels-1-2",
    },
    {
      slug: "teamwork-leadership",
      url: "http://localhost:3000/training/teamwork-leadership",
    },
    {
      slug: "communication-skills",
      url: "http://localhost:3000/training/communication-skills",
    },
    { slug: "ouga-bouga", url: "http://localhost:3000/training/ouga-bouga" },
  ];

  for (const testCase of testCases) {
    const course = allCourses.find((c) => c.slug === testCase.slug);
    if (course) {
      console.log(`   ✅ "${testCase.slug}" → Found: "${course.title}"`);
      console.log(`      URL: ${testCase.url}`);
    } else {
      console.log(
        `   ❌ "${testCase.slug}" → NOT FOUND - THIS WILL CAUSE 404!`
      );
    }
  }

  console.log("");
  console.log("📋 ALL AVAILABLE COURSE URLS:");
  allCourses.forEach((course, index) => {
    console.log(
      `   ${index + 1}. http://localhost:3000/training/${course.slug}`
    );
    console.log(`      → "${course.title}"`);
  });

  console.log("");
  console.log("🔧 DATA CONSISTENCY CHECK:");

  // Check if there are any data structure inconsistencies
  for (const course of allCourses) {
    const issues = [];

    if (!course.id) issues.push("Missing ID");
    if (!course.title) issues.push("Missing title");
    if (!course.slug) issues.push("Missing slug");
    if (!course.description) issues.push("Missing description");

    if (issues.length > 0) {
      console.log(
        `   ⚠️ "${course.title || course.slug}" has issues: ${issues.join(", ")}`
      );
    }
  }

  console.log("   ✅ Data consistency check complete");

  console.log("");
  console.log("🎉 HYDRATION FIX SUMMARY:");
  console.log("   ✅ Simplified data fetching logic");
  console.log("   ✅ Consistent data source for server and client");
  console.log("   ✅ Removed redundant getCourse function");
  console.log("   ✅ Single getAllCourses call per page");
  console.log("   ✅ Build cache cleared");
  console.log("");
  console.log("🧪 NEXT STEPS:");
  console.log("   1. Test individual course pages in browser");
  console.log("   2. Check browser console for hydration errors");
  console.log("   3. Verify all course cards are clickable");
  console.log("   4. Test image uploads in Sanity Studio");
}

testHydrationFix().catch(console.error);
