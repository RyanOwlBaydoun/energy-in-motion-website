import CoachingHeroSectionCMS from "@/components/CoachingHeroSectionCMS";
import CoachingProgramsSectionCMS from "@/components/CoachingProgramsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
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
import { coachingPrograms as fallbackPrograms } from "@/utils/coaching-programs";

async function getCoachingPrograms() {
  try {
    const sanityData: CoachingProgram[] = await sanityClient.fetch(
      COACHING_PROGRAMS_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertCoachingToLegacyFormat);
    }
    return fallbackPrograms; // Fallback to static data
  } catch (error) {
    console.error("Error fetching coaching programs from CMS:", error);
    return fallbackPrograms; // Fallback to static data
  }
}

export default async function CoachingPage() {
  const [programs, coachingMainData] = await Promise.all([
    getCoachingPrograms(),
    getCoachingMainPage(),
  ]);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <CoachingHeroSectionCMS coachingMainData={coachingMainData} />
      <CoachingProgramsSectionCMS
        programs={programs}
        coachingMainData={coachingMainData}
      />
      <BookingForm sourcePage="coaching" />
      <Footer />
    </main>
  );
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;

export const metadata = {
  title: "Coaching - Energy In Motion",
  description:
    "Transform your leadership through personalized coaching. Self-awareness is the foundation of powerful, meaningful leadership. Discover our coaching programs for individuals, teams, and organizations.",
};
