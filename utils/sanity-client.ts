import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

// Ensure projectId is lowercase and only contains valid characters
const normalizedProjectId = projectId.toLowerCase().replace(/[^a-z0-9-]/g, "").trim();

if (!normalizedProjectId || !dataset) {
  throw new Error("Missing Sanity project configuration");
}

// Client for fetching data in the app
export const sanityClient = createClient({
  projectId: normalizedProjectId,
  dataset,
  useCdn: false, // Disable CDN for development to avoid caching issues
  apiVersion: "2023-12-12",
  perspective: "published", // Only fetch published content
  stega: false, // Disable visual editing features for client-side
});

// Client for mutations (writing data) - requires auth token
export const sanityWriteClient = createClient({
  projectId: normalizedProjectId,
  dataset,
  useCdn: false,
  apiVersion: "2023-12-12",
  token,
  perspective: "published",
});

// Utility function for image URLs
export function urlFor(source: any) {
  if (!source?.asset?._ref) {
    return null;
  }

  const ref = source.asset._ref;
  const parts = ref.replace("image-", "").split("-");
  const extension = parts.pop();
  const imageId = parts.join("-");

  return `https://cdn.sanity.io/images/${normalizedProjectId.trim()}/${dataset}/${imageId}.${extension}`;
}

// Enhanced utility function for image URLs with width/height
export function getSanityImageUrl(source: any) {
  if (!source?.asset?._ref) {
    return {
      width: () => ({ height: () => ({ url: () => null }) }),
      height: () => ({ url: () => null }),
      url: () => null,
    };
  }

  const ref = source.asset._ref;
  const parts = ref.replace("image-", "").split("-");
  const extension = parts.pop();
  const imageId = parts.join("-");

  const baseUrl = `https://cdn.sanity.io/images/${normalizedProjectId.trim()}/${dataset}/${imageId}.${extension}`;

  return {
    width: (w: number) => ({
      height: (h: number) => ({
        url: () => `${baseUrl}?w=${w}&h=${h}&fit=crop&crop=center`,
      }),
      url: () => `${baseUrl}?w=${w}`,
    }),
    height: (h: number) => ({
      url: () => `${baseUrl}?h=${h}`,
    }),
    url: () => baseUrl,
  };
}
