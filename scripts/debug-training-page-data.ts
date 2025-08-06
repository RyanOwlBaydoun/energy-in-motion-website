/**
 * Debug Training Page Data
 * Check exactly what data the training page is using
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { TrainingCourse, convertToLegacyFormat } from "../types/sanity";
import { trainingCourses } from "../utils/training-courses";

console.log("🐛 DEBUGGING TRAINING PAGE DATA SOURCE");
console.log("=".repeat(50));

async function debugTrainingPageData() {
  try {
    console.log("📊 COMPARING DATA SOURCES");
    console.log("-".repeat(30));

    // 1. Test CMS Data
    console.log("📡 Fetching from CMS...");
    const cmsData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );
    const cmsConverted = cmsData.map(convertToLegacyFormat);

    console.log(`✅ CMS Data: ${cmsData.length} courses`);

    // 2. Check Static Data
    console.log(`📋 Static Data: ${trainingCourses.length} courses`);

    // 3. Compare Teamwork & Leadership specifically
    console.log("\n🔍 TEAMWORK & LEADERSHIP COMPARISON:");
    console.log("-".repeat(40));

    const cmsTeamwork = cmsConverted.find(
      (c) => c.title === "Teamwork & Leadership"
    );
    const staticTeamwork = trainingCourses.find(
      (c) => c.title === "Teamwork & Leadership"
    );

    if (cmsTeamwork) {
      console.log("📡 CMS Version:");
      console.log(`   Title: ${cmsTeamwork.title}`);
      console.log(`   Slug: ${cmsTeamwork.slug}`);
      console.log(`   Image: ${cmsTeamwork.heroImage || "NO IMAGE"}`);
      console.log(
        `   Description: ${cmsTeamwork.description?.substring(0, 50)}...`
      );
    }

    if (staticTeamwork) {
      console.log("\n📋 Static Version:");
      console.log(`   Title: ${staticTeamwork.title}`);
      console.log(`   Slug: ${staticTeamwork.slug}`);
      console.log(`   Image: ${staticTeamwork.heroImage || "NO IMAGE"}`);
      console.log(
        `   Description: ${staticTeamwork.description?.substring(0, 50)}...`
      );
    }

    // 4. Test API Route
    console.log("\n🌐 Testing API Route...");
    try {
      const response = await fetch(
        "http://localhost:3000/api/training-courses"
      );
      if (response.ok) {
        const apiData = await response.json();
        console.log(
          `✅ API Route: ${Array.isArray(apiData) ? apiData.length : "Invalid"} courses`
        );

        if (Array.isArray(apiData)) {
          const apiTeamwork = apiData.find(
            (c: any) => c.title === "Teamwork & Leadership"
          );
          if (apiTeamwork) {
            console.log("📡 API Version:");
            console.log(`   Title: ${apiTeamwork.title}`);
            console.log(`   Image: ${apiTeamwork.heroImage || "NO IMAGE"}`);
          }
        }
      } else {
        console.log(`❌ API Route failed: ${response.status}`);
      }
    } catch (apiError) {
      console.log(`❌ API Route error: ${apiError}`);
    }

    // 5. Recommendation
    console.log("\n💡 RECOMMENDATIONS:");
    console.log("-".repeat(20));

    if (cmsTeamwork?.heroImage && staticTeamwork?.heroImage) {
      if (cmsTeamwork.heroImage !== staticTeamwork.heroImage) {
        console.log(
          "✅ CMS and Static images are different - this is expected"
        );
        console.log("🔧 If website shows static image, check component props");
      } else {
        console.log(
          "⚠️  CMS and Static images are the same - might be falling back"
        );
      }
    }
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

debugTrainingPageData();
