import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN");
  process.exit(1);
}

// Normalize projectId to avoid hidden whitespace/invalid chars
const normalizedProjectId = projectId
  .toString()
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, "")
  .replace(/\s+/g, "")
  .trim();

const normalizedDataset = dataset
  .toString()
  .toLowerCase()
  .replace(/[^a-z0-9_-]/g, "")
  .replace(/\s+/g, "")
  .trim();

const client = createClient({
  projectId: normalizedProjectId,
  dataset: normalizedDataset,
  apiVersion: "2023-12-12",
  token,
  useCdn: false,
});

async function run() {
  const docId = "siteSettings";
  const base = {
    _id: docId,
    _type: "siteSettings",
    logoWidthPercentDesktop: 12,
    logoWidthPercentMobile: 40,
    logoMaxWidthPx: 150,
    navFontSize: "clamp(0.9rem, 0.7vw, 1.1rem)",
    contentMaxWidthPx: 1280,
    containerPaddingXDesktop: 24,
    containerPaddingXMobile: 16,
    gridGutterDesktop: 32,
    gridGutterMobile: 16,
  } as any;

  try {
    await client.createOrReplace(base);
    console.log("✅ Site Settings ensured (documentId: siteSettings)");
  } catch (err) {
    console.error("❌ Failed to ensure Site Settings:", err);
    process.exit(1);
  }
}

run();
