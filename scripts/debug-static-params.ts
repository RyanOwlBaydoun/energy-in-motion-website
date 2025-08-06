/**
 * Debug Static Params Generation
 * Check what slugs are being generated for static params
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { convertToLegacyFormat, TrainingCourse } from "../types/sanity";
import { trainingCourses } from "../utils/training-courses";

async function debugStaticParams() {
  console.log("🔍 DEBUGGING STATIC PARAMS GENERATION");
  console.log("=".repeat(60));

  // Test the getAllCourses function logic
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

    return trainingCourses;
  }

  console.log("📊 TESTING getAllCourses() function:");
  const allCourses = await getAllCourses();
  console.log(`   Found ${allCourses.length} courses total`);
  console.log("");

  console.log("🔗 GENERATED STATIC PARAMS:");
  const staticParams = allCourses.map((course) => ({
    slug: course.slug,
  }));

  staticParams.forEach((param, index) => {
    console.log(`   ${index + 1}. slug: "${param.slug}"`);
  });

  console.log("");
  console.log("🎯 TESTING SPECIFIC SLUGS:");
  const testSlugs = [
    "mastering-eq-levels-1-2",
    "teamwork-leadership",
    "communication-skills",
  ];

  for (const testSlug of testSlugs) {
    const foundCourse = allCourses.find((c) => c.slug === testSlug);
    if (foundCourse) {
      console.log(`   ✅ "${testSlug}" → Found: "${foundCourse.title}"`);
    } else {
      console.log(`   ❌ "${testSlug}" → NOT FOUND`);
    }
  }

  console.log("");
  console.log("📋 ALL COURSE SLUGS:");
  allCourses.forEach((course, index) => {
    console.log(`   ${index + 1}. "${course.slug}" → "${course.title}"`);
  });

  console.log("");
  console.log("🔍 COMPARING SANITY vs STATIC DATA:");

  try {
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );
    const sanityConverted = sanityData.map(convertToLegacyFormat);

    console.log(`   Sanity courses: ${sanityConverted.length}`);
    console.log(`   Static courses: ${trainingCourses.length}`);
    console.log("");

    console.log("   Sanity slugs:");
    sanityConverted.forEach((c) => console.log(`     - ${c.slug}`));

    console.log("   Static slugs:");
    trainingCourses.forEach((c) => console.log(`     - ${c.slug}`));
  } catch (error) {
    console.error("   Error comparing data:", error);
  }
}

debugStaticParams().catch(console.error);
