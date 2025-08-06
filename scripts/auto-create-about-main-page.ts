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

async function createAboutMainPage() {
  try {
    console.log("🚀 Starting About Main Page creation...");

    const aboutMainPageData = {
      _type: "aboutMainPage",
      heroSection: {
        title: "ABOUT",
        subtitle: "Clarity. Courage.",
        description: "Human Impact.",
        overlayOpacity: 0.6,
      },
      introSection: {
        content:
          "At Energy in Motion, we believe that true transformation begins with one simple yet powerful shift—from within. We are a coaching and training practice dedicated to human development across all life stages. From children and youth to adults and professionals, we empower individuals with the tools to reconnect with themselves, evolve through purposeful learning, and energize their lives with emotional strength, clarity, and confidence. Whether in schools, companies, healthcare facilities or individual journeys, we help people shift—from stress to strength, from confusion to clarity, from functioning to flourishing.",
      },
      missionSection: {
        title: "Empowering growth through",
        subtitle: "Personalized Guidance",
        mission: {
          title: "Our Mission",
          content:
            "To cultivate a world where every person—child, youth, or adult—can access their emotional, mental, and human potential, confidently navigate life's challenges, and lead with resilience, empathy, and purpose.",
        },
        vision: {
          title: "Our Vision",
          content:
            "To design and deliver evidence-based, emotionally intelligent coaching and training programs that:",
          points: [
            "Empower individuals to develop life skills and self-awareness.",
            "Support youth in navigating social, emotional, and academic pressures.",
            "Equip professionals and healthcare workers with tools to lead, communicate, and care with empathy and effectiveness.",
            "Promote purposeful leadership and a culture of growth, responsibility, and connection.",
          ],
        },
      },
      coreValues: {
        title: "Our Core Value",
        values: [
          {
            number: "1.",
            title: "Human-Centered Growth",
            description: "We believe people come before strategies.",
          },
          {
            number: "2.",
            title: "Emotional Intelligence",
            description:
              "Self-awareness and empathy are at the heart of every program.",
          },
          {
            number: "3.",
            title: "Purpose & Authenticity",
            description: 'Helping individuals find their "why."',
          },
          {
            number: "4.",
            title: "Compassion & Empathy",
            description:
              "We listen deeply, grow gently, and guide intentionally.",
          },
          {
            number: "5.",
            title: "Youth Empowerment",
            description:
              "Preparing youth not just to succeed—but to understand and love who they are.",
          },
          {
            number: "6.",
            title: "Resilience Through Vulnerability",
            description: "We honor the power of being real and rising again.",
          },
          {
            number: "7.",
            title: "Innovation with Heart",
            description:
              "We blend science and emotion to make learning personal and impactful.",
          },
        ],
      },
      sarahSection: {
        sectionLabel: "// ABOUT US",
        title: "Meet Sarah Daou",
        subtitle: "Empowering Leaders.",
        description: "Elevating Emotional Intelligence.",
        credentials: [
          "Certified Hogan, ECR, ECR 360, ECR Youth Assessor",
          "Emotional Intelligence Practitioner – Six Seconds",
          "Advanced Coaching Diploma – Noble Manhattan UK",
          "Inspirational Leadership – Case Western Reserve University",
        ],
        buttonText: "Explore more",
        buttonLink: "/about/sarah",
      },
      teamSection: {
        title: "Experienced Coaches",
        subtitle: "Dedicated to you",
        teamMembers: [
          {
            name: "Team Member 1",
            role: "Senior Coach",
            bio: "Experienced professional dedicated to empowering growth.",
          },
          {
            name: "Team Member 2",
            role: "Leadership Coach",
            bio: "Specialized in leadership development and emotional intelligence.",
          },
          {
            name: "Team Member 3",
            role: "Youth Coach",
            bio: "Passionate about youth development and empowerment.",
          },
        ],
      },
      metaTitle: "About - Energy In Motion",
      metaDescription:
        "Empowering leaders and elevating emotional intelligence through personalized guidance and evidence-based coaching programs.",
    };

    // Check if document already exists
    const existingDoc = await client.fetch(`*[_type == "aboutMainPage"][0]`);

    if (existingDoc) {
      console.log("📄 About Main Page document already exists!");
      console.log("Document ID:", existingDoc._id);
      return existingDoc;
    }

    // Create new document
    const result = await client.create(aboutMainPageData);
    console.log("✅ About Main Page created successfully!");
    console.log("Document ID:", result._id);
    return result;
  } catch (error) {
    console.error("❌ Error creating About Main Page:", error);
    throw error;
  }
}

// Run the script
createAboutMainPage()
  .then(() => {
    console.log("🎉 About Main Page setup complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Setup failed:", error);
    process.exit(1);
  });
