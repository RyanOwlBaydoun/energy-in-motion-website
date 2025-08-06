import AssessmentHeroSectionCMS from "@/components/AssessmentHeroSectionCMS";
import AssessmentDetailsSectionCMS from "@/components/AssessmentDetailsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { assessments } from "@/utils/assessments";
import { sanityClient } from "@/utils/sanity-client";
import { getAssessmentMainPage } from "@/utils/sanity-queries";
import { Assessment, convertAssessmentToLegacyFormat } from "@/types/sanity";
import { notFound } from "next/navigation";

export const revalidate = 0; // Always fetch fresh data in development

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function AssessmentPage({ params }: PageProps) {
  // Fetch CMS data
  const assessmentMainData = await getAssessmentMainPage();

  // Fetch all assessments from CMS
  let allAssessments = [];
  let assessment = null;

  try {
    const sanityAssessments = await sanityClient.fetch(`
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
    `);

    if (sanityAssessments && sanityAssessments.length > 0) {
      allAssessments = sanityAssessments.map((sanityAssessment: Assessment) =>
        convertAssessmentToLegacyFormat(sanityAssessment)
      );
      assessment = allAssessments.find((a: any) => a.slug === params.slug);
    }
  } catch (error) {
    console.error("Error fetching assessments:", error);
  }

  // Fallback to static data if no CMS data
  if (!assessment) {
    assessment = assessments.find((a) => a.slug === params.slug);
    allAssessments = assessments;
  }

  if (!assessment) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <AssessmentHeroSectionCMS assessmentMainData={assessmentMainData} />
      <AssessmentDetailsSectionCMS
        currentAssessment={assessment}
        allAssessments={allAssessments}
        assessmentMainData={assessmentMainData}
      />
      <BookingForm sourcePage="assessment-detail" />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  // Try to fetch from CMS first
  try {
    const sanityAssessments = await sanityClient.fetch(`
      *[_type == "assessment"] {
        slug
      }
    `);

    if (sanityAssessments && sanityAssessments.length > 0) {
      return sanityAssessments.map((assessment: any) => ({
        slug: assessment.slug.current,
      }));
    }
  } catch (error) {
    console.error("Error generating static params for assessments:", error);
  }

  // Fallback to static data
  return assessments.map((assessment) => ({
    slug: assessment.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const assessment = assessments.find((a) => a.slug === params.slug);

  if (!assessment) {
    return {
      title: "Assessment Not Found - Energy In Motion",
      description: "The requested assessment could not be found.",
    };
  }

  return {
    title: `${assessment.title} Assessment - Energy In Motion`,
    description: assessment.description,
  };
}
