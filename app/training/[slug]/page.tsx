import CertifiedTrainingHeroSection from "@/components/CertifiedTrainingHeroSection";
import CertifiedTrainingDetailsSection from "@/components/CertifiedTrainingDetailsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { trainingCourses } from "@/utils/training-courses";
import { sanityClient } from "@/utils/sanity-client";
import {
  TRAINING_COURSES_QUERY,
  TRAINING_COURSE_BY_SLUG_QUERY,
  getTrainingMainPage,
} from "@/utils/sanity-queries";
import {
  convertToLegacyFormat,
  TrainingCourse,
  TrainingMainPage,
} from "@/types/sanity";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getAllCourses() {
  try {
    const sanityData: TrainingCourse[] = await sanityClient.fetch(
      TRAINING_COURSES_QUERY
    );
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(convertToLegacyFormat);
    }
  } catch (error) {
    console.error("Error fetching courses from CMS:", error);
  }

  // Fallback to static data if CMS fails
  return trainingCourses;
}

export default async function CertifiedTrainingPage({ params }: PageProps) {
  const [allCourses, trainingMainData] = await Promise.all([
    getAllCourses(),
    getTrainingMainPage(),
  ]);

  const course = allCourses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <CertifiedTrainingHeroSection trainingMainData={trainingMainData} />
      <CertifiedTrainingDetailsSection
        currentCourse={course}
        allCourses={allCourses}
        trainingMainData={trainingMainData}
      />
      <BookingForm sourcePage="training-detail" />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const allCourses = await getAllCourses();
  return allCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const allCourses = await getAllCourses();
  const course = allCourses.find((c) => c.slug === params.slug);

  if (!course) {
    return {
      title: "Course Not Found - Energy In Motion",
      description: "The requested training course could not be found.",
    };
  }

  return {
    title: `${course.title} - Energy In Motion`,
    description: course.description,
  };
}

// Force revalidation every 10 seconds in development
export const revalidate = process.env.NODE_ENV === "development" ? 10 : 3600;
