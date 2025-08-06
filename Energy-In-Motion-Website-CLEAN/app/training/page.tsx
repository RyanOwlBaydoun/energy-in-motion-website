import TrainingHeroSection from "@/components/TrainingHeroSection";
import TrainingProgramsSection from "@/components/TrainingProgramsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { sanityClient } from "@/utils/sanity-client";
import {
  TRAINING_COURSES_QUERY,
  getTrainingMainPage,
} from "@/utils/sanity-queries";
import {
  convertToLegacyFormat,
  TrainingCourse,
  TrainingMainPage,
} from "@/types/sanity";
import { trainingCourses as fallbackCourses } from "@/utils/training-courses";

async function getTrainingCourses() {
  try {
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertToLegacyFormat);
    }
    return fallbackCourses; // Fallback to static data
  } catch (error) {
    console.error("Error fetching training courses from CMS:", error);
    return fallbackCourses; // Fallback to static data
  }
}

export default async function TrainingPage() {
  const [courses, trainingMainData] = await Promise.all([
    getTrainingCourses(),
    getTrainingMainPage(),
  ]);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <TrainingHeroSection trainingMainData={trainingMainData} />
      <TrainingProgramsSection
        courses={courses}
        trainingMainData={trainingMainData}
      />
      <BookingForm sourcePage="training" />
      <Footer />
    </main>
  );
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;

export async function generateMetadata() {
  const trainingMainData = await getTrainingMainPage();

  return {
    title: trainingMainData?.metaTitle || "Training - Energy In Motion",
    description:
      trainingMainData?.metaDescription ||
      "Empower teams and elevate performance through our comprehensive training programs. Leadership, emotional intelligence, communication skills, and more.",
  };
}
