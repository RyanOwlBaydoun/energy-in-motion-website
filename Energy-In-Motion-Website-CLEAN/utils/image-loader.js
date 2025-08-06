/**
 * Custom Image Loader for Development Cache Busting
 * Adds timestamp to prevent image caching during development
 */

export default function imageLoader({ src, width, quality }) {
  // Only add cache busting in development
  if (process.env.NODE_ENV === "development") {
    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}t=${Date.now()}&w=${width}&q=${quality || 75}`;
  }

  // In production, use normal URLs
  return `${src}?w=${width}&q=${quality || 75}`;
}
