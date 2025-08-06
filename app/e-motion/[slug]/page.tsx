import EMotionHeroSectionCMS from "@/components/EMotionHeroSectionCMS";
import EMotionDetailsSection from "@/components/EMotionDetailsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { emotionPrograms } from "@/utils/emotion-programs";
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
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getAllEmotionPrograms() {
  try {
    const sanityData: EmotionProgram[] = await sanityClient.fetch(
      EMOTION_PROGRAMS_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertEmotionToLegacyFormat);
    }
  } catch (error) {
    console.error("Error fetching E-Motion programs from CMS:", error);
  }

  // Fallback to static data if CMS fails
  return emotionPrograms;
}

export default async function EMotionProgramPage({ params }: PageProps) {
  const [allPrograms, emotionMainData] = await Promise.all([
    getAllEmotionPrograms(),
    getEmotionMainPage(),
  ]);

  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <EMotionHeroSectionCMS emotionMainData={emotionMainData} />
      <EMotionDetailsSection
        currentProgram={program}
        allPrograms={allPrograms}
        emotionMainData={emotionMainData}
      />
      <BookingForm sourcePage="e-motion-detail" />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const allPrograms = await getAllEmotionPrograms();
  return allPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const allPrograms = await getAllEmotionPrograms();
  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: "Program Not Found - Energy In Motion",
      description: "The requested E-Motion program could not be found.",
    };
  }

  return {
    title: `${program.title} - Energy In Motion`,
    description: program.description,
  };
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;
