"use client";

import { useState } from "react";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  category: string;
  imagePath: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  category,
  imagePath,
}) => {
  return (
    <div className="rounded-[28px] overflow-hidden border border-gray-200 shadow-lg transition hover:shadow-xl bg-white max-w-[260px] mx-auto">
      {/* Image with Badge */}
      <div className="relative w-full h-[200px]">
        <Image
          src={imagePath}
          alt="Program image showing a leadership group session"
          fill
          className="object-cover"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white text-[#0B2B2E] text-xs px-2 py-1 rounded-full shadow">
          {category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-[#FF6B57] text-base font-semibold mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
};

const LatestProgramsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("Coaching");

  const programsData = {
    Training: [
      {
        title: "Self-Confidence & Leadership",
        description:
          "A foundational workshop on self-awareness, regulation, and social connection.",
        category: "Training - Leadership",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Self-Confidence & Leadership",
        description:
          "A foundational workshop on self-awareness, regulation, and social connection.",
        category: "Training - Leadership",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Self-Confidence & Leadership",
        description:
          "A foundational workshop on self-awareness, regulation, and social connection.",
        category: "Training - Leadership",
        imagePath: "/images/programs/workshop-group.jpg",
      },
    ],
    Coaching: [
      {
        title: "Executive Leadership Coaching",
        description:
          "Personalized coaching sessions for senior leaders and executives.",
        category: "Coaching - Executive",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Team Performance Coaching",
        description:
          "Comprehensive team coaching for enhanced collaboration and results.",
        category: "Coaching - Team",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Career Development Coaching",
        description:
          "Individual coaching focused on career growth and professional development.",
        category: "Coaching - Career",
        imagePath: "/images/programs/workshop-group.jpg",
      },
    ],
    "E-motions": [
      {
        title: "Emotional Intelligence Assessment",
        description: "Comprehensive EQ evaluation and development program.",
        category: "E-motions - Assessment",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Emotional Regulation Workshop",
        description:
          "Learn effective strategies for managing emotions in professional settings.",
        category: "E-motions - Workshop",
        imagePath: "/images/programs/workshop-group.jpg",
      },
      {
        title: "Mindfulness & Wellbeing",
        description:
          "Mindfulness practices for enhanced emotional wellbeing and performance.",
        category: "E-motions - Mindfulness",
        imagePath: "/images/programs/workshop-group.jpg",
      },
    ],
  };

  const tabs = ["Coaching", "Training", "E-motions"];

  return (
    <section className="w-full bg-white pb-48">
      <div className="max-w-[1200px] mx-auto py-[6rem] pb-[10rem] px-6 bg-[#e6dfdb] rounded-[32px] relative">
        {/* Header: Title Left + Tabs Right - Same Line */}
        <div className="relative mb-12">
          {/* Section Title - Aligned with Image Containers */}
          <div className="absolute" style={{ left: "10%", bottom: "-2%" }}>
            <h2 className="text-[32px] md:text-[42px] text-left text-[#0B2B2E]">
              <span className="font-normal">Latest</span>
              <br />
              <span className="font-bold">Programs</span>
            </h2>
          </div>

          {/* Tabs - Positioned at Specific Width Percentages */}
          <div className="relative w-full h-20 flex items-end">
            <button
              onClick={() => setActiveTab("Coaching")}
              className={`absolute text-lg font-medium cursor-pointer transition-colors duration-200 ${
                activeTab === "Coaching"
                  ? "text-black font-semibold border-b-2 border-[#FF6B57] pb-1"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ left: "45%" }}
              aria-label="Switch to Coaching programs"
            >
              Coaching
            </button>

            <button
              onClick={() => setActiveTab("Training")}
              className={`absolute text-lg font-medium cursor-pointer transition-colors duration-200 ${
                activeTab === "Training"
                  ? "text-black font-semibold border-b-2 border-[#FF6B57] pb-1"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ left: "65%" }}
              aria-label="Switch to Training programs"
            >
              Training
            </button>

            <button
              onClick={() => setActiveTab("E-motions")}
              className={`absolute text-lg font-medium cursor-pointer transition-colors duration-200 ${
                activeTab === "E-motions"
                  ? "text-black font-semibold border-b-2 border-[#FF6B57] pb-1"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ left: "85%" }}
              aria-label="Switch to E-motions programs"
            >
              E-motions
            </button>
          </div>
        </div>

        {/* Programs Grid - Overlapping Container */}
        <div
          className="absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          style={{
            paddingLeft: "8%",
            paddingRight: "8%",
            bottom: "-55%",
            left: "0",
          }}
        >
          {programsData[activeTab as keyof typeof programsData].map(
            (program, index) => (
              <ProgramCard
                key={`${activeTab}-${index}`}
                title={program.title}
                description={program.description}
                category={program.category}
                imagePath={program.imagePath}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProgramsSection;
