/**
 * Test Image URL Generation
 * Debug script to check if Sanity images are being converted properly
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { convertToLegacyFormat, TrainingCourse } from "../types/sanity";

async function testImageUrls() {
  console.log("🔍 TESTING IMAGE URL GENERATION");
  console.log("=".repeat(50));

  try {
    // Fetch raw Sanity data
    const rawData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );
    console.log(`📊 Found ${rawData.length} courses from Sanity`);
    console.log("");

    for (const course of rawData) {
      console.log(`📝 Course: "${course.title}"`);
      console.log(`   Slug: ${course.slug.current}`);

      if (course.heroImage?.asset?._ref) {
        console.log(`   ✅ Has image: ${course.heroImage.asset._ref}`);

        // Convert using our function
        const converted = convertToLegacyFormat(course);
        console.log(`   🔗 Converted URL: ${converted.heroImage}`);
      } else {
        console.log(`   ❌ No image uploaded`);
      }
      console.log("");
    }

    console.log("🧪 TESTING SPECIFIC COURSE IMAGE CONVERSION");
    console.log("-".repeat(50));

    // Find a course with an image
    const courseWithImage = rawData.find((c) => c.heroImage?.asset?._ref);
    if (courseWithImage) {
      console.log(`🎯 Testing: "${courseWithImage.title}"`);
      console.log(
        `📸 Raw image ref: ${courseWithImage.heroImage?.asset?._ref}`
      );

      const converted = convertToLegacyFormat(courseWithImage);
      console.log(`🌐 Generated URL: ${converted.heroImage}`);

      // Test URL construction manually
      const ref = courseWithImage.heroImage!.asset!._ref;
      const parts = ref.replace("image-", "").split("-");
      const extension = parts.pop();
      const imageId = parts.join("-");
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

      console.log(`🔧 Manual construction:`);
      console.log(`   Project ID: ${projectId}`);
      console.log(`   Dataset: ${dataset}`);
      console.log(`   Image ID: ${imageId}`);
      console.log(`   Extension: ${extension}`);
      console.log(
        `   Final URL: https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${extension}`
      );
    }
  } catch (error) {
    console.error("❌ Error testing image URLs:", error);
  }
}

testImageUrls().catch(console.error);
