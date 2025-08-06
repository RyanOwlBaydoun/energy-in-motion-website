/**
 * Test Empty Sections Fix
 * Verify that empty sections are properly hidden
 */

import { sanityClient } from "../utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "../utils/sanity-queries";
import { TrainingCourse, convertToLegacyFormat } from "../types/sanity";

console.log("🔍 TESTING EMPTY SECTIONS FIX");
console.log("=".repeat(50));

async function testEmptySectionsFix() {
  try {
    // 1. Fetch OUga Bouga course specifically
    console.log("📡 Fetching OUga Bouga course...");
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );

    const ougaBougaCourse = sanityData.find(
      (course) => course.title === "OUga Bouga"
    );

    if (!ougaBougaCourse) {
      console.log("❌ OUga Bouga course not found in CMS");
      return;
    }

    console.log("✅ Found OUga Bouga course");

    // 2. Convert to legacy format
    const legacyCourse = convertToLegacyFormat(ougaBougaCourse);

    // 3. Check field values
    console.log("\n🔍 FIELD ANALYSIS:");
    console.log("-".repeat(30));

    const fields = [
      { name: "Purpose", value: legacyCourse.purpose },
      { name: "Inner Focus", value: legacyCourse.innerFocus },
      { name: "Other Focus", value: legacyCourse.otherFocus },
      { name: "Outer Focus", value: legacyCourse.outerFocus },
    ];

    fields.forEach((field) => {
      const hasContent = field.value && field.value.trim();
      const status = hasContent ? "✅ SHOW" : "❌ HIDE";
      const preview = hasContent
        ? `"${field.value.substring(0, 30)}..."`
        : "(empty)";

      console.log(`${field.name}: ${status} - ${preview}`);
    });

    // 4. Test conditional rendering logic
    console.log("\n🎯 CONDITIONAL RENDERING TEST:");
    console.log("-".repeat(35));

    const shouldShowPurpose =
      legacyCourse.purpose && legacyCourse.purpose.trim();
    const shouldShowInnerFocus =
      legacyCourse.innerFocus && legacyCourse.innerFocus.trim();
    const shouldShowOtherFocus =
      legacyCourse.otherFocus && legacyCourse.otherFocus.trim();
    const shouldShowOuterFocus =
      legacyCourse.outerFocus && legacyCourse.outerFocus.trim();

    console.log(`Purpose section: ${shouldShowPurpose ? "VISIBLE" : "HIDDEN"}`);
    console.log(`Inner Focus: ${shouldShowInnerFocus ? "VISIBLE" : "HIDDEN"}`);
    console.log(`Other Focus: ${shouldShowOtherFocus ? "VISIBLE" : "HIDDEN"}`);
    console.log(`Outer Focus: ${shouldShowOuterFocus ? "VISIBLE" : "HIDDEN"}`);

    // 5. Count visible sections
    const visibleSections = [
      shouldShowPurpose,
      shouldShowInnerFocus,
      shouldShowOtherFocus,
      shouldShowOuterFocus,
    ].filter(Boolean).length;

    console.log(`\n📊 SUMMARY: ${visibleSections}/4 sections will be visible`);

    // 6. Expected behavior
    console.log("\n💡 EXPECTED RESULT:");
    console.log("- Empty sections should NOT appear on the webpage");
    console.log("- Only sections with content should be visible");
    console.log("- No empty labels like 'Other Focus: ' should show");

    console.log("\n🌐 TEST THE FIX:");
    console.log("🔗 Visit: http://localhost:3000/training/ouga-bouga");
    console.log("✅ Empty sections should now be completely hidden!");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

testEmptySectionsFix();
