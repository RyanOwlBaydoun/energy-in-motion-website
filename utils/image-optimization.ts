/**
 * Image Optimization Utilities
 * Helper functions for managing images with Next.js optimization
 */

/**
 * Generate responsive image sizes string for next/image
 * @param breakpoints - Array of [breakpoint, width] tuples
 * @returns Formatted sizes string for next/image
 */
export function generateImageSizes(breakpoints: [number, string][]): string {
  return breakpoints
    .map(([bp, width], index) => {
      if (index === breakpoints.length - 1) {
        return width; // Last breakpoint doesn't need max-width
      }
      return `(max-width: ${bp}px) ${width}`;
    })
    .join(", ");
}

/**
 * Common responsive image sizes for different use cases
 */
export const imageSizes = {
  hero: generateImageSizes([
    [640, "100vw"], // Mobile: full width
    [1024, "80vw"], // Tablet: 80% width
    [1200, "50vw"], // Desktop: 50% width
  ]),

  card: generateImageSizes([
    [640, "100vw"], // Mobile: full width
    [768, "50vw"], // Tablet: half width
    [1024, "33vw"], // Desktop: third width
  ]),

  fullWidth: generateImageSizes([
    [640, "100vw"], // Always full width
  ]),

  thumbnail: generateImageSizes([
    [640, "150px"], // Mobile: fixed small size
    [768, "200px"], // Tablet: medium size
    [1024, "250px"], // Desktop: larger size
  ]),
};

/**
 * Generate a low-quality placeholder for blur effect
 * @param width - Image width
 * @param height - Image height
 * @returns Base64 encoded blur placeholder
 */
export function generateBlurDataURL(
  width: number = 10,
  height: number = 10
): string {
  // Simple gray blur placeholder
  const canvas = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>
  `;

  const base64 = Buffer.from(canvas).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Image path helpers for consistent file organization
 */
export const imagePaths = {
  hero: "/images/hero/",
  about: "/images/about/",
  services: "/images/services/",
  testimonials: "/images/testimonials/",
  blog: "/images/blog/",
  icons: "/images/icons/",
  logo: "/images/icons/logo/",
  team: "/images/about/team/",
} as const;

/**
 * Get optimized image props for common use cases
 */
export function getImageProps(
  src: string,
  alt: string,
  options: {
    priority?: boolean;
    sizes?: string;
    quality?: number;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
  } = {}
) {
  return {
    src,
    alt,
    quality: options.quality || 85,
    priority: options.priority || false,
    sizes: options.sizes || imageSizes.card,
    placeholder: options.placeholder || "empty",
    blurDataURL: options.blurDataURL || generateBlurDataURL(),
    ...options,
  };
}

/**
 * Mobile-first image optimization presets
 */
export const imagePresets = {
  hero: {
    priority: true,
    sizes: imageSizes.hero,
    quality: 90,
    placeholder: "blur" as const,
  },

  card: {
    priority: false,
    sizes: imageSizes.card,
    quality: 85,
    placeholder: "blur" as const,
  },

  thumbnail: {
    priority: false,
    sizes: imageSizes.thumbnail,
    quality: 80,
    placeholder: "blur" as const,
  },

  background: {
    priority: false,
    sizes: imageSizes.fullWidth,
    quality: 75,
    placeholder: "blur" as const,
  },
} as const;
