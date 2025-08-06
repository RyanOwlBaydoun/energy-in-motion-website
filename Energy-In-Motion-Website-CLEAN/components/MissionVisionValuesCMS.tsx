"use client";

import React from "react";
import Image from "next/image";
import { Target, Eye, Lightbulb } from "lucide-react";
import { AboutMainPage } from "@/types/sanity";

interface MissionVisionValuesCMSProps {
  aboutData: AboutMainPage | null;
}

const MissionVisionValuesCMS: React.FC<MissionVisionValuesCMSProps> = ({
  aboutData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref)
      return "/images/about/Empowering_growth_through.JPG"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values
  const sectionTitle =
    aboutData?.missionSection?.title || "Empowering growth through";
  const sectionSubtitle =
    aboutData?.missionSection?.subtitle || "Personalized Guidance";
  const sectionImageUrl = getSanityImageUrl(
    aboutData?.missionSection?.sectionImage
  );

  const missionTitle =
    aboutData?.missionSection?.mission?.title || "Our Mission";
  const missionContent =
    aboutData?.missionSection?.mission?.content ||
    "To cultivate a world where every person—child, youth, or adult—can access their emotional, mental, and human potential, confidently navigate life's challenges, and lead with resilience, empathy, and purpose.";

  const visionTitle = aboutData?.missionSection?.vision?.title || "Our Vision";
  const visionContent =
    aboutData?.missionSection?.vision?.content ||
    "To design and deliver evidence-based, emotionally intelligent coaching and training programs that:";
  const visionPoints = aboutData?.missionSection?.vision?.points || [
    "Empower individuals to develop life skills and self-awareness.",
    "Support youth in navigating social, emotional, and academic pressures.",
    "Equip professionals and healthcare workers with tools to lead, communicate, and care with empathy and effectiveness.",
    "Promote purposeful leadership and a culture of growth, responsibility, and connection.",
  ];

  const coreValuesTitle = aboutData?.coreValues?.title || "Our Core Value";
  const coreValues = aboutData?.coreValues?.values || [
    {
      number: "1.",
      title: "Human-Centered Growth",
      description: "We believe people come before strategies.",
    },
    {
      number: "2.",
      title: "Emotional Intelligence",
      description:
        "Self-awareness and empathy are at the heart of every program.",
    },
    {
      number: "3.",
      title: "Purpose & Authenticity",
      description: "Helping individuals find their 'why.'",
    },
    {
      number: "4.",
      title: "Compassion & Empathy",
      description: "We listen deeply, grow gently, and guide intentionally.",
    },
    {
      number: "5.",
      title: "Youth Empowerment",
      description:
        "Preparing youth not just to succeed—but to understand and love who they are.",
    },
    {
      number: "6.",
      title: "Resilience Through Vulnerability",
      description: "We honor the power of being real and rising again.",
    },
    {
      number: "7.",
      title: "Innovation with Heart",
      description:
        "We blend science and emotion to make learning personal and impactful.",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="w-[98%] max-w-[1200px] mx-auto bg-[#e6dfdb] px-4 sm:px-6 lg:px-8 py-16 rounded-3xl">
        {/* Section Title - Moved Right */}
        <div className="text-left mb-10 ml-24 mt-2">
          <h2 className="text-[40px] md:text-[46px] font-normal text-gray-900 leading-none">
            {sectionTitle}
          </h2>
          <h2 className="text-[40px] md:text-[46px] font-semibold text-[#ed7566] leading-none -mt-1">
            {sectionSubtitle}
          </h2>
        </div>

        {/* Mission/Vision + Image Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8 mt-3">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-4 ml-24">
            {/* Our Mission */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {missionTitle}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-tight">
                {missionContent}
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {visionTitle}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-tight mb-3">
                {visionContent}
              </p>
              <ul className="text-sm text-gray-700 leading-tight space-y-1">
                {visionPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="mt-4">
            <div className="rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src={sectionImageUrl}
                alt="Mission and Vision"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 ml-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {coreValuesTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 leading-tight">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="font-semibold text-gray-900 min-w-[20px]">
                  {value.number}
                </span>
                <div>
                  <span className="font-semibold text-gray-900">
                    {value.title}
                  </span>
                  <span className="text-gray-700"> – {value.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesCMS;
