// TypeScript types for Sanity content

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface TrainingCourse {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  whoItsFor?: string;
  purpose?: string;
  innerFocus?: string;
  otherFocus?: string;
  outerFocus?: string;
  programHighlights?: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits?: string[];
  category: string;
  featured: boolean;
  publishedAt: string;
  heroImage?: SanityImage;
  displayBoxPhoto?: boolean;
}

export interface TrainingMainPage {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: SanityImage;
  heroOverlayOpacity: number;
  trainingProgramsSection: {
    title: string;
    backgroundColor: string;
    categories: Array<{
      name: string;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface CoachingProgram {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  whoItsFor?: string;
  purpose?: string;
  innerFocus?: string;
  otherFocus?: string;
  outerFocus?: string;
  programHighlights?: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits?: string[];
  category: string;
  featured: boolean;
  publishedAt: string;
  heroImage?: SanityImage;
  displayBoxPhoto?: boolean;
}

export interface CoachingMainPage {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: SanityImage;
  heroOverlayOpacity: number;
  coachingProgramsSection: {
    title: string;
    backgroundColor: string;
    categories: Array<{
      name: string;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface EmotionProgram {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  whoItsFor?: string;
  purpose?: string;
  innerFocus?: string;
  otherFocus?: string;
  outerFocus?: string;
  programHighlights?: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits?: string[];
  category: string;
  featured: boolean;
  publishedAt: string;
  heroImage?: SanityImage;
  displayBoxPhoto?: boolean;
}

export interface EmotionMainPage {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: SanityImage;
  heroOverlayOpacity: number;
  emotionProgramsSection: {
    title: string;
    backgroundColor: string;
    categories: Array<{
      name: string;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface Assessment {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  keyFeatures?: string[];
  targetAudience?: string;
  assessmentDetails?: {
    duration?: string;
    format?: string;
    reportType?: string;
  };
  category: string;
  featured: boolean;
  publishedAt: string;
  assessmentImage?: SanityImage;
  externalLink?: string;
  displayBoxPhoto?: boolean;
}

export interface AssessmentMainPage {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: SanityImage;
  heroOverlayOpacity: number;
  assessmentProgramsSection: {
    title: string;
    backgroundColor: string;
    categories: Array<{
      name: string;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface AboutMainPage {
  _id: string;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: SanityImage;
    overlayOpacity: number;
  };
  introSection: {
    content: string;
  };
  missionSection: {
    title: string;
    subtitle: string;
    sectionImage: SanityImage;
    mission: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
      points: string[];
    };
  };
  coreValues: {
    title: string;
    values: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  sarahSection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    description: string;
    photo: SanityImage;
    credentials: string[];
    buttonText: string;
    buttonLink: string;
  };
  teamSection: {
    title: string;
    subtitle: string;
    teamMembers: Array<{
      name: string;
      photo: SanityImage;
      role: string;
      bio: string;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface SarahMainPage {
  _id: string;
  heroSection: {
    title: string;
    subtitle: string;
    backgroundImage: SanityImage;
    overlayOpacity: number;
  };
  aboutSection: {
    sectionTitle: string;
    photo: SanityImage;
    introParagraph: string;
    journeyParagraph: string;
  };
  philosophySection: {
    sectionTitle: string;
    approachText: string;
    philosophyPoints: Array<{
      point: string;
    }>;
    closingText: string;
  };
  energyInMotionSection: {
    sectionTitle: string;
    content: string;
  };
  professionalHostingSection: {
    sectionTitle: string;
    content: string;
  };
  instagramSection: {
    sectionTitle: string;
    posts: Array<{
      image: SanityImage;
      title: string;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface Assessment {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  category: string;
  featured: boolean;
}

export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  position?: string;
  quote: string;
  photo?: SanityImage;
  featured: boolean;
  order: number;
}

// Legacy interface compatibility (for gradual migration)
export interface LegacyTrainingCourse {
  id: string;
  title: string;
  slug: string;
  description: string;
  whoItsFor: string;
  purpose: string;
  innerFocus: string;
  otherFocus: string;
  outerFocus: string;
  programHighlights: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits: string[];
  category: string;
  heroImage?: string;
  displayBoxPhoto?: boolean;
}

export interface LegacyCoachingProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  whoItsFor: string;
  purpose: string;
  innerFocus: string;
  otherFocus: string;
  outerFocus: string;
  programHighlights: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits: string[];
  category: string;
  heroImage?: string;
  displayBoxPhoto?: boolean;
}

export interface LegacyEmotionProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  whoItsFor: string;
  purpose: string;
  innerFocus: string;
  otherFocus: string;
  outerFocus: string;
  programHighlights: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits: string[];
  category: string;
  heroImage?: string;
  displayBoxPhoto?: boolean;
}

export interface LegacyAssessment {
  id: string;
  title: string;
  slug: string;
  description: string;
  keyFeatures?: string[];
  targetAudience?: string;
  assessmentDetails?: {
    duration?: string;
    format?: string;
    reportType?: string;
  };
  category: string;
  externalLink?: string;
  assessmentImage?: any; // Sanity image object
  displayBoxPhoto?: boolean;
}

// Utility function to convert Sanity data to legacy format
export function convertToLegacyFormat(
  sanityData: TrainingCourse
): LegacyTrainingCourse {
  // Convert Sanity image to URL if available
  let imageUrl: string | undefined = undefined;

  if (sanityData.heroImage?.asset?._ref) {
    const ref = sanityData.heroImage.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId.toString().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\s+/g, "").trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    imageUrl = `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  }

  return {
    id: sanityData._id,
    title: sanityData.title,
    slug: sanityData.slug.current,
    description: sanityData.description,
    whoItsFor: sanityData.whoItsFor || "",
    purpose: sanityData.purpose || "",
    innerFocus: sanityData.innerFocus || "",
    otherFocus: sanityData.otherFocus || "",
    outerFocus: sanityData.outerFocus || "",
    programHighlights: sanityData.programHighlights || {},
    keyBenefits: sanityData.keyBenefits || [],
    category: sanityData.category,
    heroImage: imageUrl,
    displayBoxPhoto: sanityData.displayBoxPhoto ?? false,
  };
}

// Utility function to convert Coaching Sanity data to legacy format
export function convertCoachingToLegacyFormat(
  sanityData: CoachingProgram
): LegacyCoachingProgram {
  // Convert Sanity image to URL if available
  let imageUrl: string | undefined = undefined;

  if (sanityData.heroImage?.asset?._ref) {
    const ref = sanityData.heroImage.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId.toString().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\s+/g, "").trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    imageUrl = `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  }

  return {
    id: sanityData._id,
    title: sanityData.title,
    slug: sanityData.slug.current,
    description: sanityData.description,
    whoItsFor: sanityData.whoItsFor || "",
    purpose: sanityData.purpose || "",
    innerFocus: sanityData.innerFocus || "",
    otherFocus: sanityData.otherFocus || "",
    outerFocus: sanityData.outerFocus || "",
    programHighlights: sanityData.programHighlights || {},
    keyBenefits: sanityData.keyBenefits || [],
    category: sanityData.category,
    heroImage: imageUrl,
    displayBoxPhoto: sanityData.displayBoxPhoto,
  };
}

// Utility function to convert E-Motion Sanity data to legacy format
export function convertEmotionToLegacyFormat(
  sanityData: EmotionProgram
): LegacyEmotionProgram {
  // Convert Sanity image to URL if available
  let imageUrl: string | undefined = undefined;

  if (sanityData.heroImage?.asset?._ref) {
    const ref = sanityData.heroImage.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId.toString().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\s+/g, "").trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    imageUrl = `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  }

  return {
    id: sanityData._id,
    title: sanityData.title,
    slug: sanityData.slug.current,
    description: sanityData.description,
    whoItsFor: sanityData.whoItsFor || "",
    purpose: sanityData.purpose || "",
    innerFocus: sanityData.innerFocus || "",
    otherFocus: sanityData.otherFocus || "",
    outerFocus: sanityData.outerFocus || "",
    programHighlights: sanityData.programHighlights || {},
    keyBenefits: sanityData.keyBenefits || [],
    category: sanityData.category,
    heroImage: imageUrl,
    displayBoxPhoto: sanityData.displayBoxPhoto,
  };
}

// Utility function to convert Assessment Sanity data to legacy format
export function convertAssessmentToLegacyFormat(
  sanityData: Assessment
): LegacyAssessment {
  return {
    id: sanityData._id,
    title: sanityData.title,
    slug: sanityData.slug.current,
    description: sanityData.description,
    keyFeatures: sanityData.keyFeatures || [],
    targetAudience: sanityData.targetAudience || "",
    assessmentDetails: sanityData.assessmentDetails || {},
    category: sanityData.category,
    externalLink: sanityData.externalLink || "",
    assessmentImage: sanityData.assessmentImage || null,
    displayBoxPhoto: sanityData.displayBoxPhoto,
  };
}
