import EMotionHeroSectionCMS from "@/components/EMotionHeroSectionCMS";
import EMotionProgramsSectionCMS from "@/components/EMotionProgramsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { sanityClient } from "@/utils/sanity-client";
import {
  EMOTION_PROGRAMS_QUERY,
  getEmotionMainPage,
} from "@/utils/sanity-queries";
import {
  convertEmotionToLegacyFormat,
  EmotionProgram,
  EmotionMainPage,
} from "@/types/sanity";
import { emotionPrograms as fallbackPrograms } from "@/utils/emotion-programs";

async function getEmotionPrograms() {
  try {
    const sanityData: EmotionProgram[] = await sanityClient.fetch(
      EMOTION_PROGRAMS_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertEmotionToLegacyFormat);
    }
    return fallbackPrograms; // Fallback to static data
  } catch (error) {
    console.error("Error fetching E-Motion programs from CMS:", error);
    return fallbackPrograms; // Fallback to static data
  }
}

export default async function EMotionPage() {
  const [programs, emotionMainData] = await Promise.all([
    getEmotionPrograms(),
    getEmotionMainPage(),
  ]);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <EMotionHeroSectionCMS emotionMainData={emotionMainData} />
      <EMotionProgramsSectionCMS
        programs={programs}
        emotionMainData={emotionMainData}
      />
      <BookingForm sourcePage="e-motion" />
      <Footer />
    </main>
  );
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;

export const metadata = {
  title: "E-Motion - Energy In Motion",
  description:
    "Develop emotional intelligence through awareness, connection, and transformation. Explore our E-Motion programs focused on empathy, self-awareness, and emotional regulation.",
};
