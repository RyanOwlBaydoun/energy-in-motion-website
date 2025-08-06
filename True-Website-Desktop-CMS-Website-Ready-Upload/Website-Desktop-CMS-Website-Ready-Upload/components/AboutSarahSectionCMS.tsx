"use client";

import React from "react";
import Image from "next/image";
import { SarahMainPage } from "@/types/sanity";

interface AboutSarahSectionCMSProps {
  sarahData: SarahMainPage | null;
}

const AboutSarahSectionCMS: React.FC<AboutSarahSectionCMSProps> = ({
  sarahData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/about/Sarah_Daou_About_Sarah.jpeg"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values for About Section
  const aboutTitle = sarahData?.aboutSection?.sectionTitle || "About Sarah";
  const sarahPhotoUrl = getSanityImageUrl(sarahData?.aboutSection?.photo);
  const introParagraph =
    sarahData?.aboutSection?.introParagraph ||
    "Sarah Daou is a journalist by education, a leader by experience, and a coach by purpose. With 24 years in the corporate world—15 of which were spent in senior leadership roles—Sarah shifted gears to create Energy in Motion, a space for human development, emotional growth, and leadership evolution.";
  const journeyParagraph =
    sarahData?.aboutSection?.journeyParagraph ||
    "Her journey is grounded in one belief: that we are born with strengths and shaped by life—but can always choose to reconnect with who we truly are and become the best version of ourselves.";

  // Default values for Philosophy Section
  const philosophyTitle =
    sarahData?.philosophySection?.sectionTitle || "Philosophy & Beliefs";
  const approachText =
    sarahData?.philosophySection?.approachText ||
    "Sarah's approach to coaching and training is rooted in:";
  const philosophyPoints = sarahData?.philosophySection?.philosophyPoints || [
    { point: "The power of emotional intelligence and neuroscience." },
    {
      point: "The belief that leadership is about people—not just strategies.",
    },
    {
      point:
        "The need for vulnerability, compassion, connection, and resilience in growth.",
    },
    {
      point:
        "A commitment to collective work, shared learning, and building a support system that grows together.",
    },
  ];
  const closingText =
    sarahData?.philosophySection?.closingText ||
    "She blends science with storytelling, structure with soul, and believes deeply in collaboration over competition.";

  // Default values for Energy in Motion Section
  const energyTitle =
    sarahData?.energyInMotionSection?.sectionTitle ||
    "Energy in Motion\nA Collaborative Vision";
  const energyContent =
    sarahData?.energyInMotionSection?.content ||
    "Energy in Motion was never meant to be a solo mission. Sarah built the company as a collaborative platform, working hand-in-hand with certified, like-hearted trainers and coaches who share the same commitment to values, growth, and purpose. Every trainer is selected for their alignment with the company's mission and their excellence in delivery. Together, they deliver coaching and training experiences that are personal, practical, and transformational.";

  // Default values for Professional Hosting Section
  const hostingTitle =
    sarahData?.professionalHostingSection?.sectionTitle ||
    "Professional Hosting & Facilitation";
  const hostingContent =
    sarahData?.professionalHostingSection?.content ||
    "In addition to her coaching and development work, Sarah is a seasoned Master of Ceremony, moderator, and facilitator. Over the past 20 years, she has hosted more than 100 high-level events, conferences, and panel discussions across sectors—from business, healthcare, and education to arts, culture, and social issues. Known for her warmth, clarity, and dynamic presence, she brings structure, soul, and storytelling to every stage she steps on—ensuring flow, engagement, and meaningful connection.";

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start">
          {/* Left Side - Sarah's Photo */}
          <div className="flex-shrink-0">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={sarahPhotoUrl}
                alt={`${aboutTitle} - EQ Coach`}
                width={360}
                height={450}
                className="w-[360px] h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - All Content */}
          <div className="flex-1">
            {/* About Sarah */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-6">
                {aboutTitle}
              </h2>

              {/* First paragraph */}
              <div className="text-gray-600 leading-tight mb-4">
                <p>
                  <strong>{introParagraph.split(".")[0]}.</strong>
                  <br />
                  {introParagraph.split(".").slice(1).join(".").trim()}
                </p>
              </div>

              {/* Second paragraph with medium spacing */}
              <div className="text-gray-600 leading-tight">
                <p>{journeyParagraph}</p>
              </div>
            </div>

            {/* Philosophy & Beliefs - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-6">
                {philosophyTitle}
              </h3>

              {/* Approach text */}
              <div className="text-gray-600 leading-tight mb-4">
                <p>{approachText}</p>
              </div>

              {/* Philosophy points */}
              <div className="text-gray-600 leading-tight mb-4">
                {philosophyPoints.map((item, index) => (
                  <p key={index}>
                    • {item.point}
                    <br />
                  </p>
                ))}
              </div>

              {/* Closing text */}
              <div className="text-gray-600 leading-tight">
                <p>{closingText}</p>
              </div>
            </div>

            {/* Energy in Motion - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                {energyTitle.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < energyTitle.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>{energyContent}</p>
              </div>
            </div>

            {/* Professional Hosting & Facilitation - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                {hostingTitle}
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>{hostingContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSarahSectionCMS;
