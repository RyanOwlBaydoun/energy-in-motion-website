import AssessmentHeroSectionCMS from "@/components/AssessmentHeroSectionCMS";
import AssessmentDetailsSectionCMS from "@/components/AssessmentDetailsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { assessments } from "@/utils/assessments";
import { sanityClient } from "@/utils/sanity-client";
import { getAssessmentMainPage } from "@/utils/sanity-queries";
import { Assessment, convertAssessmentToLegacyFormat } from "@/types/sanity";

export const revalidate = 0; // Always fetch fresh data in development

export default async function AssessmentsPage() {
  // Fetch CMS data
  const assessmentMainData = await getAssessmentMainPage();

  // Fetch all assessments from CMS
  let allAssessments = [];
  let defaultAssessment = null;

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
      allAssessments = sanityAssessments.map((assessment: Assessment) =>
        convertAssessmentToLegacyFormat(assessment)
      );
      defaultAssessment =
        allAssessments.find((a: any) => a.slug === "hogan") ||
        allAssessments[0];
    }
  } catch (error) {
    console.error("Error fetching assessments:", error);
  }

  // Fallback to static data if no CMS data
  if (!defaultAssessment) {
    defaultAssessment =
      assessments.find((a) => a.id === "hogan") || assessments[0];
    allAssessments = assessments;
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <AssessmentHeroSectionCMS assessmentMainData={assessmentMainData} />
      <AssessmentDetailsSectionCMS
        currentAssessment={defaultAssessment}
        allAssessments={allAssessments}
        assessmentMainData={assessmentMainData}
      />
      <BookingForm sourcePage="assessments" />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "Assessments - Energy In Motion",
  description:
    "Discover our comprehensive assessment solutions including Hogan, ECR, Saville, AssessFirst, and Paytech. Gain insight, clarity, and drive growth through professional assessments.",
};
