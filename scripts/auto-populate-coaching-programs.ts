import { coachingPrograms } from "../utils/coaching-programs";
import { sanityWriteClient } from "../utils/sanity-client";

async function autoPopulateCoachingPrograms() {
  console.log("🚀 AUTOMATED COACHING PROGRAMS POPULATION");
  console.log("=".repeat(50));
  console.log(
    `📊 Attempting to populate ${coachingPrograms.length} coaching programs automatically`
  );
  console.log("");

  let successCount = 0;
  let errorCount = 0;

  try {
    for (const [index, program] of coachingPrograms.entries()) {
      try {
        console.log(
          `📝 [${index + 1}/${coachingPrograms.length}] Creating: "${program.title}"`
        );

        const sanityDoc = {
          _type: "coachingProgram",
          _id: `coaching-${program.slug}`, // Use predictable ID
          title: program.title,
          slug: {
            _type: "slug",
            current: program.slug,
          },
          description: program.description,
          whoItsFor: program.whoItsFor,
          purpose: program.purpose,
          innerFocus: program.innerFocus,
          otherFocus: program.otherFocus,
          outerFocus: program.outerFocus,
          programHighlights: program.programHighlights,
          keyBenefits: program.keyBenefits,
          category: program.category,
          featured: index === 0, // First program featured
          publishedAt: new Date().toISOString(),
        };

        // Try to create or update
        const result = await sanityWriteClient.createOrReplace(sanityDoc);
        console.log(`   ✅ SUCCESS: ${result._id}`);
        successCount++;
      } catch (programError) {
        console.log(
          `   ❌ ERROR: ${programError instanceof Error ? programError.message : "Unknown error"}`
        );
        errorCount++;
      }

      console.log(""); // Empty line for readability
    }

    console.log("🎉 COACHING PROGRAMS POPULATION COMPLETED!");
    console.log("=".repeat(60));
    console.log(`✅ Successfully created: ${successCount} programs`);
    console.log(`❌ Failed creations: ${errorCount} programs`);
    console.log(
      `📊 Total processed: ${successCount + errorCount}/${coachingPrograms.length}`
    );

    if (successCount > 0) {
      console.log("\n📋 NEXT STEPS:");
      console.log("1. 🎯 Go to http://localhost:3333");
      console.log("2. 📂 Click 'Coaching Program' in the sidebar");
      console.log("3. ✨ Review and customize your coaching programs");
      console.log("4. 🖼️  Upload hero images for each program");
      console.log("5. 🧪 Test at http://localhost:3000/coaching/");

      console.log("\n🎊 Your Coaching Programs are now CMS-powered!");
    }

    if (errorCount > 0) {
      console.log("\n⚠️  Some programs failed to migrate.");
      console.log("These can be created manually in Sanity Studio.");
    }
  } catch (error) {
    console.error("❌ Population failed:", error);
    console.log("\n📋 Manual creation required via Sanity Studio.");
  }
}

// Run the population
if (require.main === module) {
  autoPopulateCoachingPrograms()
    .then(() => {
      console.log("✅ Script completed!");
    })
    .catch((error) => {
      console.error("💥 Script failed:", error.message);
    });
}

export { autoPopulateCoachingPrograms };
