import SarahHeroSectionCMS from "@/components/SarahHeroSectionCMS";
import AboutSarahSectionCMS from "@/components/AboutSarahSectionCMS";
import InstagramReelsSectionCMS from "@/components/InstagramReelsSectionCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { getSarahMainPage } from "@/utils/sanity-queries";
import { Metadata } from "next";

// Enable revalidation for development
export const revalidate = 60; // Revalidate every 60 seconds in development

export default async function SarahPage() {
  // Fetch CMS data
  const sarahMainData = await getSarahMainPage();

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <SarahHeroSectionCMS sarahData={sarahMainData} />
      <AboutSarahSectionCMS sarahData={sarahMainData} />
      <InstagramReelsSectionCMS sarahData={sarahMainData} />
      <BookingForm sourcePage="sarah" />
      <Footer />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const sarahMainData = await getSarahMainPage();

  return {
    title: sarahMainData?.metaTitle || "Meet Sarah Dao - Energy In Motion",
    description:
      sarahMainData?.metaDescription ||
      "Learn about Sarah Dao, a certified coach and emotional intelligence practitioner dedicated to transforming individuals and organizations through purposeful leadership development and authentic growth.",
  };
}
