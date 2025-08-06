import CoachingHeroSectionCMS from "@/components/CoachingHeroSectionCMS";
import CoachingDetailsSection from "@/components/CoachingDetailsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { coachingPrograms } from "@/utils/coaching-programs";
import { sanityClient } from "@/utils/sanity-client";
import {
  COACHING_PROGRAMS_QUERY,
  getCoachingMainPage,
} from "@/utils/sanity-queries";
import {
  convertCoachingToLegacyFormat,
  CoachingProgram,
  CoachingMainPage,
} from "@/types/sanity";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getAllCoachingPrograms() {
  try {
    const sanityData: CoachingProgram[] = await sanityClient.fetch(
      COACHING_PROGRAMS_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertCoachingToLegacyFormat);
    }
  } catch (error) {
    console.error("Error fetching coaching programs from CMS:", error);
  }

  // Fallback to static data if CMS fails
  return coachingPrograms;
}

export default async function CoachingProgramPage({ params }: PageProps) {
  const [allPrograms, coachingMainData] = await Promise.all([
    getAllCoachingPrograms(),
    getCoachingMainPage(),
  ]);

  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <CoachingHeroSectionCMS coachingMainData={coachingMainData} />
      <CoachingDetailsSection
        currentProgram={program}
        allPrograms={allPrograms}
        coachingMainData={coachingMainData}
      />
      <BookingForm sourcePage="coaching-detail" />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const allPrograms = await getAllCoachingPrograms();
  return allPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const allPrograms = await getAllCoachingPrograms();
  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: "Program Not Found - Energy In Motion",
      description: "The requested coaching program could not be found.",
    };
  }

  return {
    title: `${program.title} - Energy In Motion`,
    description: program.description,
  };
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;
