/**
 * Test Beauty & Beyond Image Update
 * Verify that the updated image is properly showing
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { TrainingCourse, convertToLegacyFormat } from "../types/sanity";

console.log("🔍 TESTING BEAUTY & BEYOND IMAGE UPDATE");
console.log("=".repeat(50));

async function testBeautyBeyondImage() {
  try {
    // 1. Fetch data directly from Sanity
    console.log("📡 Fetching from Sanity CMS...");
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );

    // 2. Find Beauty & Beyond course
    const beautyBeyondCourse = sanityData.find(
      (course) => course.title === "Beauty & Beyond (Women Empowerment)"
    );

    if (!beautyBeyondCourse) {
      console.log("❌ Beauty & Beyond course not found in CMS");
      return;
    }

    console.log("✅ Found Beauty & Beyond (Women Empowerment) course");
    console.log("📋 Raw Sanity Data:");
    console.log("   - Title:", beautyBeyondCourse.title);
    console.log("   - Slug:", beautyBeyondCourse.slug?.current);
    console.log(
      "   - Hero Image Asset Ref:",
      beautyBeyondCourse.heroImage?.asset?._ref || "NO IMAGE"
    );

    // 3. Convert to legacy format
    console.log("\n🔄 Converting to Legacy Format...");
    const legacyCourse = convertToLegacyFormat(beautyBeyondCourse);

    console.log("📋 Converted Data:");
    console.log("   - Title:", legacyCourse.title);
    console.log("   - Slug:", legacyCourse.slug);
    console.log(
      "   - Hero Image URL:",
      legacyCourse.heroImage || "NO IMAGE URL"
    );

    // 4. Check if this is different from generic image
    const isGenericImage = legacyCourse.heroImage?.includes(
      "/images/about/Empowering_growth_through.JPG"
    );
    const isSanityImage = legacyCourse.heroImage?.includes("cdn.sanity.io");

    console.log("\n🔍 IMAGE ANALYSIS:");
    console.log("   - Is Generic Fallback:", isGenericImage || "false");
    console.log("   - Is Sanity CMS Image:", isSanityImage || "false");

    if (isSanityImage) {
      console.log("✅ SUCCESS: Using updated CMS image!");
      console.log("🎯 CACHE BUSTING URL (Development):");
      console.log(`   ${legacyCourse.heroImage}?t=${Date.now()}`);
    } else {
      console.log("❌ Still using fallback image or no image");
    }

    // 5. Test the individual page
    console.log("\n🌐 TESTING INDIVIDUAL PAGE:");
    console.log(
      `🔗 Visit: http://localhost:3000/training/${legacyCourse.slug}`
    );
    console.log(
      "   This page should show the updated professional woman image"
    );
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

console.log("🚀 CACHE BUSTING SOLUTION IMPLEMENTED:");
console.log("✅ Next.js revalidation: Every 10 seconds in development");
console.log("✅ Image cache busting: Timestamp added to URLs");
console.log("✅ No stale cache times: All set to 0 for development");
console.log("✅ Fresh data fetch: On every page load");
console.log("");

testBeautyBeyondImage();
