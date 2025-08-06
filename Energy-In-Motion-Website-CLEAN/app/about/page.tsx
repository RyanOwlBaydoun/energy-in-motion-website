import AboutHeroSectionCMS from "@/components/AboutHeroSectionCMS";
import MissionVisionValuesCMS from "@/components/MissionVisionValuesCMS";
import AboutSectionCMS from "@/components/AboutSectionCMS";
import MeetTheTeamCMS from "@/components/MeetTheTeamCMS";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { getAboutMainPage } from "@/utils/sanity-queries";
import { Metadata } from "next";

export const revalidate = 0; // Always fetch fresh data in development

export default async function AboutPage() {
  // Fetch CMS data
  const aboutMainData = await getAboutMainPage();

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <AboutHeroSectionCMS aboutData={aboutMainData} />
      <MissionVisionValuesCMS aboutData={aboutMainData} />
      <AboutSectionCMS aboutData={aboutMainData} />
      <MeetTheTeamCMS aboutData={aboutMainData} />
      <BookingForm sourcePage="about" />
      <Footer />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const aboutMainData = await getAboutMainPage();

  return {
    title: aboutMainData?.metaTitle || "About Us - Energy In Motion",
    description:
      aboutMainData?.metaDescription ||
      "Learn about Energy In Motion's coaching and training practice dedicated to human development across all life stages. We empower individuals with tools to reconnect, evolve, and energize their lives.",
  };
}
