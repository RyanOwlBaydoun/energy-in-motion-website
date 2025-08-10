import HeroSectionCMS from "@/components/HeroSectionCMS";
import EnergyInMotionSectionCMS from "@/components/EnergyInMotionSectionCMS";
import AboutSectionCMS from "@/components/AboutSectionCMS";
import ServicesSectionCMS from "@/components/ServicesSectionCMS";
import AssessmentsSectionCMS from "@/components/AssessmentsSectionCMS";
import LatestProgramsSectionCMS from "@/components/LatestProgramsSectionCMS";
import InstagramSectionCMS from "@/components/InstagramSectionCMS";
import TestimonialsSectionCMS from "@/components/TestimonialsSectionCMS";
import IndustryInsightsSectionCMS from "@/components/IndustryInsightsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { getHomeMainPage } from "@/utils/sanity-queries";
import { Metadata } from "next";

export const revalidate = 0; // Always fetch fresh data in development

export default async function Home() {
  // Fetch CMS data
  const homeMainData = await getHomeMainPage();

  return (
    <main className="flex flex-col bg-[#f5f5f5] min-h-screen">
      <HeroSectionCMS homeData={homeMainData} />
      <EnergyInMotionSectionCMS homeData={homeMainData} />
      <ServicesSectionCMS homeData={homeMainData} />
      <AssessmentsSectionCMS homeData={homeMainData} />
      <LatestProgramsSectionCMS homeData={homeMainData} />
      <AboutSectionCMS homeData={homeMainData} />
      <InstagramSectionCMS homeData={homeMainData} />
      <TestimonialsSectionCMS homeData={homeMainData} />
      <IndustryInsightsSectionCMS homeData={homeMainData} />
      <BookingForm
        sourcePage="home"
        headingSize={homeMainData?.bookingSection?.headingSize}
        bodySize={homeMainData?.bookingSection?.bodySize}
        buttonLabel={homeMainData?.bookingSection?.buttonLabel}
        buttonHref={homeMainData?.bookingSection?.buttonHref}
      />
      <Footer />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const homeMainData = await getHomeMainPage();

  return {
    title:
      homeMainData?.metaTitle ||
      "Energy In Motion - Transforming Leadership Through Emotional Intelligence",
    description:
      homeMainData?.metaDescription ||
      "Empower, evolve, and energize your leadership potential through our comprehensive coaching, training, and assessment programs. Expert guidance for personal and professional growth.",
  };
}
