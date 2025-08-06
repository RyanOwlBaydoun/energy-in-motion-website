// GROQ queries for fetching data from Sanity
import { sanityClient } from "./sanity-client";
import {
  TrainingMainPage,
  CoachingMainPage,
  EmotionMainPage,
  AssessmentMainPage,
  AboutMainPage,
  SarahMainPage,
} from "@/types/sanity";
import { HomeMainPage } from "@/types/sanity-home";

export const TRAINING_COURSES_QUERY = `
  *[_type == "trainingCourse"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const TRAINING_COURSE_BY_SLUG_QUERY = `
  *[_type == "trainingCourse" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const TRAINING_MAIN_PAGE_QUERY = `
  *[_type == "trainingMainPage"][0] {
    _id,
    title,
    subtitle,
    description,
    heroImage,
    heroOverlayOpacity,
    trainingProgramsSection,
    displayBoxPhoto,
    metaTitle,
    metaDescription
  }
`;

export const FEATURED_TRAINING_COURSES_QUERY = `
  *[_type == "trainingCourse" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    heroImage
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    company,
    position,
    quote,
    photo,
    featured,
    order
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    company,
    position,
    quote,
    photo,
    order
  }
`;

export const COACHING_PROGRAMS_QUERY = `
  *[_type == "coachingProgram"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const COACHING_PROGRAM_BY_SLUG_QUERY = `
  *[_type == "coachingProgram" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const COACHING_MAIN_PAGE_QUERY = `
  *[_type == "coachingMainPage"][0] {
    _id,
    title,
    subtitle,
    description,
    heroImage,
    heroOverlayOpacity,
    coachingProgramsSection,
    displayBoxPhoto,
    metaTitle,
    metaDescription
  }
`;

export const FEATURED_COACHING_PROGRAMS_QUERY = `
  *[_type == "coachingProgram" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    heroImage
  }
`;

export const EMOTION_PROGRAMS_QUERY = `
  *[_type == "emotionProgram"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const EMOTION_PROGRAM_BY_SLUG_QUERY = `
  *[_type == "emotionProgram" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    whoItsFor,
    purpose,
    innerFocus,
    otherFocus,
    outerFocus,
    programHighlights,
    keyBenefits,
    category,
    featured,
    publishedAt,
    heroImage,
    displayBoxPhoto
  }
`;

export const EMOTION_MAIN_PAGE_QUERY = `
  *[_type == "emotionMainPage"][0] {
    _id,
    title,
    subtitle,
    description,
    heroImage,
    heroOverlayOpacity,
    emotionProgramsSection,
    displayBoxPhoto,
    metaTitle,
    metaDescription
  }
`;

export const FEATURED_EMOTION_PROGRAMS_QUERY = `
  *[_type == "emotionProgram" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    heroImage
  }
`;

export const ASSESSMENTS_QUERY = `
  *[_type == "assessment"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    keyFeatures,
    targetAudience,
    assessmentDetails,
    category,
    featured,
    publishedAt,
    assessmentImage,
    externalLink,
    displayBoxPhoto
  }
`;

export const ASSESSMENT_BY_SLUG_QUERY = `
  *[_type == "assessment" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    keyFeatures,
    targetAudience,
    assessmentDetails,
    category,
    featured,
    publishedAt,
    assessmentImage,
    externalLink,
    displayBoxPhoto
  }
`;

export const ASSESSMENT_MAIN_PAGE_QUERY = `
  *[_type == "assessmentMainPage"][0] {
    _id,
    title,
    subtitle,
    description,
    heroImage,
    heroOverlayOpacity,
    assessmentProgramsSection,
    displayBoxPhoto,
    metaTitle,
    metaDescription
  }
`;

export const FEATURED_ASSESSMENTS_QUERY = `
  *[_type == "assessment" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    assessmentImage
  }
`;

export const ABOUT_MAIN_PAGE_QUERY = `
  *[_type == "aboutMainPage"][0] {
    _id,
    heroSection {
      title,
      subtitle,
      description,
      backgroundImage,
      overlayOpacity
    },
    introSection {
      content
    },
    missionSection {
      title,
      subtitle,
      sectionImage,
      mission {
        title,
        content
      },
      vision {
        title,
        content,
        points
      }
    },
    coreValues {
      title,
      values[] {
        number,
        title,
        description
      }
    },
    sarahSection {
      sectionLabel,
      title,
      subtitle,
      description,
      photo,
      credentials,
      buttonText,
      buttonLink
    },
    teamSection {
      title,
      subtitle,
      teamMembers[] {
        name,
        photo,
        role,
        bio
      }
    },
    metaTitle,
    metaDescription
  }
`;

// Function to fetch training main page data
export async function getTrainingMainPage(): Promise<TrainingMainPage | null> {
  try {
    const data = await sanityClient.fetch(TRAINING_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching training main page:", error);
    return null;
  }
}

// Function to fetch coaching main page data
export async function getCoachingMainPage(): Promise<CoachingMainPage | null> {
  try {
    const data = await sanityClient.fetch(COACHING_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching coaching main page:", error);
    return null;
  }
}

// Function to fetch E-Motion main page data
export async function getEmotionMainPage(): Promise<EmotionMainPage | null> {
  try {
    const data = await sanityClient.fetch(EMOTION_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching E-Motion main page:", error);
    return null;
  }
}

// Function to fetch Assessment main page data
export async function getAssessmentMainPage(): Promise<AssessmentMainPage | null> {
  try {
    const data = await sanityClient.fetch(ASSESSMENT_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Assessment main page:", error);
    return null;
  }
}

export async function getAboutMainPage(): Promise<AboutMainPage | null> {
  try {
    const data = await sanityClient.fetch(ABOUT_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching About main page:", error);
    return null;
  }
}

export const SARAH_MAIN_PAGE_QUERY = `
  *[_type == "sarahMainPage"][0] {
    _id,
    heroSection {
      title,
      subtitle,
      backgroundImage,
      overlayOpacity
    },
    aboutSection {
      sectionTitle,
      photo,
      introParagraph,
      journeyParagraph
    },
    philosophySection {
      sectionTitle,
      approachText,
      philosophyPoints[] {
        point
      },
      closingText
    },
    energyInMotionSection {
      sectionTitle,
      content
    },
    professionalHostingSection {
      sectionTitle,
      content
    },
    instagramSection {
      sectionTitle,
      posts[] {
        image,
        title,
        link,
        order
      }
    },
    metaTitle,
    metaDescription
  }
`;

export async function getSarahMainPage(): Promise<SarahMainPage | null> {
  try {
    const data = await sanityClient.fetch(SARAH_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Sarah main page:", error);
    return null;
  }
}

export const HOME_MAIN_PAGE_QUERY = `
  *[_type == "homeMainPage"][0] {
    _id,
    heroSection {
      backgroundImage,
      overlayOpacity,
      mainTitle1,
      mainTitle2,
      mainTitle3,
      subtitle,
      ctaButtonText,
      ctaButtonLink
    },
    energyInMotionSection {
      content
    },
    servicesSection {
      sectionTitle,
      sectionSubtitle,
      ctaButtonText,
      tabs[] {
        tabName,
        services[] {
          serviceName,
          serviceSubname
        }
      }
    },
    assessmentsSection {
      sectionTitle,
      sectionSubtitle,
      sectionDescription,
      ctaButtonText,
      leftAssessments[] {
        title,
        description
      },
      rightAssessments[] {
        title,
        description
      }
    },
    latestProgramsSection {
      sectionTitle,
      sectionSubtitle,
      tabs[] {
        tabName,
        programs[] {
          title,
          description,
          category,
          image
        }
      }
    },
    aboutSarahSection {
      sectionLabel,
      title,
      subtitle,
      description,
      photo,
      credentials,
      buttonText,
      buttonLink
    },
    instagramSection {
      sectionTitle,
      posts[] {
        image,
        title,
        link,
        order
      }
    },
    testimonialsSection {
      sectionTitle,
      sectionSubtitle,
      testimonials[] {
        quote,
        name,
        company,
        order
      }
    },
    industryInsightsSection {
      sectionLabel,
      sectionTitle,
      sectionSubtitle,
      sectionHighlight,
      blogPosts[] {
        title,
        description,
        image,
        link,
        order
      }
    },
    metaTitle,
    metaDescription
  }
`;

export async function getHomeMainPage(): Promise<HomeMainPage | null> {
  try {
    const data = await sanityClient.fetch(HOME_MAIN_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Home main page:", error);
    return null;
  }
}
