import { createClient } from "@sanity/client";
import { config } from "dotenv";

// Load environment variables
config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Make sure you have this in your .env.local
  apiVersion: "2023-05-03",
});

async function createSarahMainPage() {
  try {
    console.log("🚀 Starting Sarah Main Page creation...");

    const sarahMainPageData = {
      _type: "sarahMainPage",
      heroSection: {
        title: "SARAH DAOU",
        subtitle: "EQ Coach",
        overlayOpacity: 0.4,
      },
      aboutSection: {
        sectionTitle: "About Sarah",
        introParagraph:
          "Sarah Daou is a journalist by education, a leader by experience, and a coach by purpose. With 24 years in the corporate world—15 of which were spent in senior leadership roles—Sarah shifted gears to create Energy in Motion, a space for human development, emotional growth, and leadership evolution.",
        journeyParagraph:
          "Her journey is grounded in one belief: that we are born with strengths and shaped by life—but can always choose to reconnect with who we truly are and become the best version of ourselves.",
      },
      philosophySection: {
        sectionTitle: "Philosophy & Beliefs",
        approachText: "Sarah's approach to coaching and training is rooted in:",
        philosophyPoints: [
          {
            point: "The power of emotional intelligence and neuroscience.",
          },
          {
            point:
              "The belief that leadership is about people—not just strategies.",
          },
          {
            point:
              "The need for vulnerability, compassion, connection, and resilience in growth.",
          },
          {
            point:
              "A commitment to collective work, shared learning, and building a support system that grows together.",
          },
        ],
        closingText:
          "She blends science with storytelling, structure with soul, and believes deeply in collaboration over competition.",
      },
      energyInMotionSection: {
        sectionTitle: "Energy in Motion\nA Collaborative Vision",
        content:
          "Energy in Motion was never meant to be a solo mission. Sarah built the company as a collaborative platform, working hand-in-hand with certified, like-hearted trainers and coaches who share the same commitment to values, growth, and purpose. Every trainer is selected for their alignment with the company's mission and their excellence in delivery. Together, they deliver coaching and training experiences that are personal, practical, and transformational.",
      },
      professionalHostingSection: {
        sectionTitle: "Professional Hosting & Facilitation",
        content:
          "In addition to her coaching and development work, Sarah is a seasoned Master of Ceremony, moderator, and facilitator. Over the past 20 years, she has hosted more than 100 high-level events, conferences, and panel discussions across sectors—from business, healthcare, and education to arts, culture, and social issues. Known for her warmth, clarity, and dynamic presence, she brings structure, soul, and storytelling to every stage she steps on—ensuring flow, engagement, and meaningful connection.",
      },
      instagramSection: {
        sectionTitle: "Sarah on Instagram",
        posts: [
          {
            title: "إنتزال أم إحترام؟",
            link: "https://www.instagram.com/reel/DE-KoTxhKM7/",
            order: 1,
          },
          {
            title: "الإمتنان والتقدير",
            link: "https://www.instagram.com/reel/DEz_gyGSmRu/",
            order: 2,
          },
          {
            title: "حتى التعاطف، هو فن",
            link: "https://www.instagram.com/reel/DEVUHe8sCun/",
            order: 3,
          },
          {
            title: "النجاح يحتاج إلى دقة",
            link: "https://www.instagram.com/reel/DENdRPwM1Tv/",
            order: 4,
          },
          {
            title: "كيف يمكن للفشل أن يؤسس للنجاح؟",
            link: "https://www.instagram.com/reel/DD4h4NMMJvS/",
            order: 5,
          },
        ],
      },
      metaTitle: "Meet Sarah Dao - Energy In Motion",
      metaDescription:
        "Learn about Sarah Dao, a certified coach and emotional intelligence practitioner dedicated to transforming individuals and organizations through purposeful leadership development and authentic growth.",
    };

    console.log("📝 Creating Sarah Main Page document...");

    const result = await client.create(sarahMainPageData);

    console.log("✅ Sarah Main Page created successfully!");
    console.log("📄 Document ID:", result._id);
    console.log("🔗 View in Sanity Studio: http://localhost:3333");

    return result;
  } catch (error: any) {
    console.error("❌ Error creating Sarah Main Page:", error.message);

    if (error.message.includes("Insufficient permissions")) {
      console.log("\n💡 MANUAL SETUP REQUIRED:");
      console.log("The API token doesn't have write permissions.");
      console.log(
        "Please create the Sarah Main Page manually in Sanity Studio:"
      );
      console.log("1. Go to http://localhost:3333");
      console.log("2. Click 'Sarah Main Page' in the sidebar");
      console.log("3. Click '+ Create New'");
      console.log("4. Fill in the content and upload images");
      console.log("5. Click 'Publish'");
    }

    throw error;
  }
}

// Run the script
createSarahMainPage()
  .then(() => {
    console.log("🎉 Script completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Script failed:", error);
    process.exit(1);
  });
