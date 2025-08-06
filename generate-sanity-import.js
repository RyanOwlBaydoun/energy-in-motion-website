/**
 * Generate Sanity Import File
 * Creates a JSON file that can be imported directly into Sanity
 */

const { trainingCourses } = require("./utils/training-courses");
const fs = require("fs");

console.log("🔧 GENERATING SANITY IMPORT FILE");
console.log("=".repeat(40));

const importData = trainingCourses.map((course, index) => ({
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
}));

// Write the import file
fs.writeFileSync(
  "training-courses-import.json",
  JSON.stringify(importData, null, 2)
);

console.log("✅ Created: training-courses-import.json");
console.log(`📊 Generated ${importData.length} training courses`);
console.log("");
console.log("📋 TO IMPORT INTO SANITY:");
console.log("1. cd energy-in-motion");
console.log(
  "2. npx sanity dataset import ../training-courses-import.json production --replace"
);
console.log("");
console.log("🎯 This will automatically populate your entire CMS!");
