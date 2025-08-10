"use client";

import Image from "next/image";
import Link from "next/link";
import { AboutMainPage } from "@/types/sanity";
import { HomeMainPage } from "@/types/sanity-home";

interface AboutSectionCMSProps {
  aboutData?: AboutMainPage | null;
  homeData?: HomeMainPage | null;
}

const AboutSectionCMS: React.FC<AboutSectionCMSProps> = ({
  aboutData,
  homeData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/about/sarah-dao.jpg"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId.toString().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\s+/g, "").trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values from CMS or fallback - use either aboutData or homeData
  const dataSource = aboutData || homeData;

  // Handle both AboutMainPage (sarahSection) and HomeMainPage (aboutSarahSection)
  const sarahData =
    (dataSource as any)?.sarahSection || (dataSource as any)?.aboutSarahSection;

  const sectionLabel = sarahData?.sectionLabel || "// ABOUT US";
  const title = sarahData?.title || "Meet Sarah Daou";
  const subtitle = sarahData?.subtitle || "Empowering Leaders.";
  const description =
    sarahData?.description || "Elevating Emotional Intelligence.";
  const photoUrl = sarahData?.photo
    ? getSanityImageUrl(sarahData.photo)
    : "/images/about/sarah-dao.jpg";
  const imageAspectRatio = sarahData?.imageAspectRatio || '4/5';
  const containerWidthPercentDesktop = sarahData?.containerWidthPercentDesktop || 45;
  const containerWidthPercentMobile = sarahData?.containerWidthPercentMobile || 90;
  const credentials = sarahData?.credentials || [
    "Certified Hogan, ECR, ECR 360, ECR Youth Assessor",
    "Emotional Intelligence Practitioner – Six Seconds",
    "Advanced Coaching Diploma – Noble Manhattan UK",
    "Inspirational Leadership – Case Western Reserve University",
  ];
  const buttonText = sarahData?.buttonText || "Explore more";
  const buttonLink = sarahData?.buttonLink || "/about/sarah";

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Column - Image with Enhanced Logo Badge */}
        <div
          className="relative"
          style={{
            width: `${containerWidthPercentDesktop}%`,
          }}
        >
          {/* Enhanced Logo Badge - 20% Bigger, Centered on Left Side, Half Outside/Inside, 70% to Top */}
          <div
            className="absolute z-10 w-[144px] h-[144px] bg-[#FF6B57] rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            style={{
              left: "-72px",
              top: "30%",
              transform: "translateY(-50%)",
            }}
          >
            <span className="text-[12px] font-bold uppercase tracking-wide">
              ENERGY IN
            </span>
            <span className="font-cursive text-yellow-400 text-xl -mt-1 font-bold">
              motion
            </span>
          </div>

          {/* Sarah's Image */}
          <div
            className="rounded-[24px] overflow-hidden shadow-lg"
            style={{ aspectRatio: imageAspectRatio as any }}
          >
            <Image
              src={photoUrl}
              alt={`${title} - EQ Coach`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 space-y-6">
          {/* Section Label - Fixed formatting: only "//" in red */}
          <p className="text-sm font-medium tracking-wide">
            <span className="text-[#FF6B57]">//</span>
            <span className="text-black">
              {" "}
              {sectionLabel.startsWith("//")
                ? sectionLabel.substring(2).trim()
                : sectionLabel}
            </span>
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B2E] leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <div className="text-2xl md:text-3xl text-[#FF6B57] font-semibold leading-tight">
            {subtitle}
            <br />
            <span className="text-[#FF6B57]">{description}</span>
          </div>

          {/* Credentials List */}
          <div className="space-y-3">
            {credentials.map((credential: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FF6B57] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#0B2B2E] text-base leading-relaxed">
                  {credential}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href={buttonLink}
              className="inline-block px-8 py-3 bg-[#FFD700] hover:bg-[#FFC300] text-black font-bold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionCMS;
