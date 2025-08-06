import { sanityClient, sanityWriteClient } from "../utils/sanity-client";

// Force update the Assessment Main Page to include displayBoxPhoto toggle
async function updateAssessmentMainPageToggle() {
  console.log(
    "🔧 UPDATING Assessment Main Page with Display Box Photo Toggle..."
  );

  try {
    // First, check if document exists
    console.log("🔍 Checking for existing Assessment Main Page document...");
    const existingDoc = await sanityClient.fetch(
      `*[_type == "assessmentMainPage"][0]`
    );

    if (!existingDoc) {
      console.log("❌ No Assessment Main Page document found!");
      console.log("Please create one first via Sanity Studio.");
      return;
    }

    console.log("✅ Found existing document:", existingDoc._id);
    console.log("Current displayBoxPhoto value:", existingDoc.displayBoxPhoto);

    // Update the document to ensure displayBoxPhoto field is present
    const updateData = {
      displayBoxPhoto:
        existingDoc.displayBoxPhoto !== undefined
          ? existingDoc.displayBoxPhoto
          : false, // Default to false for assessments
    };

    console.log("🚀 Updating document with displayBoxPhoto field...");

    const result = await sanityWriteClient
      .patch(existingDoc._id)
      .set(updateData)
      .commit();

    if (result) {
      console.log("\n🎉 ASSESSMENT MAIN PAGE UPDATED SUCCESSFULLY!");
      console.log("════════════════════════════════════════════");
      console.log("Document ID:", result._id);
      console.log("Title:", result.title);
      console.log("Display Box Photo:", result.displayBoxPhoto);

      console.log("\n📋 NEXT STEPS:");
      console.log("1. Go to http://localhost:3333");
      console.log("2. Refresh the page (Ctrl+F5)");
      console.log("3. Click 'Assessment Main Page' in sidebar");
      console.log("4. You should now see the 'Display Box Photo' toggle!");
      console.log("5. Toggle it ON/OFF to control images in detail pages");

      return result;
    }
  } catch (error) {
    console.error("❌ Failed to update Assessment Main Page:", error);

    if (error.statusCode === 403) {
      console.log("\n🔧 PERMISSION ISSUE DETECTED");
      console.log("Please try manually in Sanity Studio:");
      console.log("1. Go to Assessment Main Page");
      console.log("2. Edit the document");
      console.log("3. Save/Publish it again");
      console.log("4. This will refresh the schema fields");
    }

    throw error;
  }
}

// Run the update
if (require.main === module) {
  updateAssessmentMainPageToggle()
    .then((result) => {
      if (result) {
        console.log("\n🚀 UPDATE COMPLETED SUCCESSFULLY!");
        console.log("Your Display Box Photo toggle should now be visible!");
      }
    })
    .catch((error) => {
      console.error("💥 Update failed:", error.message);
      console.log("\n📋 Please try manual refresh in Sanity Studio.");
    });
}

export { updateAssessmentMainPageToggle };
