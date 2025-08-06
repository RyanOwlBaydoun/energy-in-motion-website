import TestSanityCMSSection from "@/components/TestSanityCMSSection";
import Footer from "@/components/Footer";

export default function TestCMSPage() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <TestSanityCMSSection useCMS={true} />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "CMS Integration Test - Energy In Motion",
  description: "Testing Sanity CMS integration for Energy In Motion website",
};
