/**
 * Create NDJSON Import File for Sanity
 * Generates newline-delimited JSON format that Sanity can import
 */

import { trainingCourses } from "./utils/training-courses";
import * as fs from "fs";

console.log("🔧 CREATING NDJSON IMPORT FILE");
console.log("=".repeat(40));

const ndjsonLines: string[] = [];

trainingCourses.forEach((course, index) => {
  const sanityDoc = {
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
    featured: index < 3, // First 3 featured
    publishedAt: new Date().toISOString(),
  };

  // Add each document as a separate line (NDJSON format)
  ndjsonLines.push(JSON.stringify(sanityDoc));
});

// Write NDJSON file (one JSON object per line)
const ndjsonContent = ndjsonLines.join("\n");
fs.writeFileSync("training-courses.ndjson", ndjsonContent);

console.log(`✅ Created: training-courses.ndjson`);
console.log(`📊 Generated ${ndjsonLines.length} training courses`);
console.log("");
console.log("📋 TO IMPORT INTO SANITY:");
console.log("1. cd energy-in-motion");
console.log(
  "2. npx sanity dataset import ../training-courses.ndjson production"
);
console.log("");
console.log("🎯 This will automatically populate your entire CMS!");
