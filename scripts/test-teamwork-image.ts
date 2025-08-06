/**
 * Test Teamwork & Leadership Image URL Conversion
 * Check if the updated image is properly converted from Sanity
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { TrainingCourse, convertToLegacyFormat } from "../types/sanity";

console.log("🔍 TESTING TEAMWORK & LEADERSHIP IMAGE");
console.log("=".repeat(50));

async function testTeamworkImage() {
  try {
    // 1. Fetch data directly from Sanity
    console.log("📡 Fetching from Sanity CMS...");
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );

    // 2. Find Teamwork & Leadership course
    const teamworkCourse = sanityData.find(
      (course) => course.title === "Teamwork & Leadership"
    );

    if (!teamworkCourse) {
      console.log("❌ Teamwork & Leadership course not found in CMS");
      return;
    }

    console.log("✅ Found Teamwork & Leadership course");
    console.log("📋 Raw Sanity Data:");
    console.log("   - Title:", teamworkCourse.title);
    console.log("   - Slug:", teamworkCourse.slug?.current);
    console.log(
      "   - Hero Image Asset Ref:",
      teamworkCourse.heroImage?.asset?._ref || "NO IMAGE"
    );

    // 3. Convert to legacy format
    console.log("\n🔄 Converting to Legacy Format...");
    const legacyCourse = convertToLegacyFormat(teamworkCourse);

    console.log("📋 Converted Data:");
    console.log("   - Title:", legacyCourse.title);
    console.log("   - Slug:", legacyCourse.slug);
    console.log(
      "   - Hero Image URL:",
      legacyCourse.heroImage || "NO IMAGE URL"
    );

    // 4. Test API route
    console.log("\n🌐 Testing API Route...");
    const apiResponse = await fetch(
      "http://localhost:3000/api/training-courses"
    );
    if (apiResponse.ok) {
      const apiData = await apiResponse.json();
      const apiTeamwork = apiData.find(
        (course: any) => course.title === "Teamwork & Leadership"
      );

      if (apiTeamwork) {
        console.log("✅ Found via API route");
        console.log(
          "   - API Image URL:",
          apiTeamwork.heroImage || "NO IMAGE URL"
        );

        // Compare URLs
        if (legacyCourse.heroImage === apiTeamwork.heroImage) {
          console.log("✅ Direct and API URLs match");
        } else {
          console.log("❌ URL mismatch between direct and API");
        }
      } else {
        console.log("❌ Not found via API route");
      }
    } else {
      console.log("❌ API route failed:", apiResponse.status);
    }
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

testTeamworkImage();
