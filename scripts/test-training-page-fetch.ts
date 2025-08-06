/**
 * Test Training Page Fetch Logic
 * Simulate exactly what the training page does
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { convertToLegacyFormat, TrainingCourse } from "../types/sanity";
import { trainingCourses as fallbackCourses } from "../utils/training-courses";

console.log("🔍 TESTING TRAINING PAGE FETCH LOGIC");
console.log("=".repeat(50));

async function getTrainingCourses() {
  try {
    console.log("📡 Attempting Sanity client fetch...");
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );

    console.log(`✅ Raw Sanity data: ${sanityData?.length || 0} courses`);

    if (sanityData && sanityData.length > 0) {
      console.log("✅ Sanity data is valid, converting to legacy format...");
      const convertedData = sanityData.map(convertToLegacyFormat);

      console.log(`✅ Converted data: ${convertedData.length} courses`);

      // Check Teamwork & Leadership specifically
      const teamwork = convertedData.find(
        (c) => c.title === "Teamwork & Leadership"
      );
      if (teamwork) {
        console.log("✅ Found Teamwork & Leadership in converted data:");
        console.log(`   Image: ${teamwork.heroImage || "NO IMAGE"}`);
      } else {
        console.log("❌ Teamwork & Leadership not found in converted data");
      }

      return convertedData;
    } else {
      console.log("❌ Sanity data is empty or invalid, using fallback");
      return fallbackCourses; // Fallback to static data
    }
  } catch (error) {
    console.error("❌ Error fetching training courses from CMS:", error);
    console.log("🔄 Falling back to static data");
    return fallbackCourses; // Fallback to static data
  }
}

async function testTrainingPageLogic() {
  console.log("🎯 SIMULATING TRAINING PAGE LOGIC");
  console.log("-".repeat(30));

  const courses = await getTrainingCourses();

  console.log(`\n📊 FINAL RESULT: ${courses.length} courses`);

  const teamwork = courses.find((c) => c.title === "Teamwork & Leadership");
  if (teamwork) {
    console.log("✅ Final Teamwork & Leadership course:");
    console.log(`   Title: ${teamwork.title}`);
    console.log(`   Slug: ${teamwork.slug}`);
    console.log(`   Image: ${teamwork.heroImage || "NO IMAGE"}`);
    console.log(`   Source: ${teamwork.heroImage ? "CMS" : "Static Fallback"}`);
  }

  console.log("\n💡 CONCLUSION:");
  if (teamwork?.heroImage) {
    console.log("✅ Training page SHOULD show the updated image");
  } else {
    console.log("❌ Training page will show fallback/no image");
  }
}

testTrainingPageLogic();
