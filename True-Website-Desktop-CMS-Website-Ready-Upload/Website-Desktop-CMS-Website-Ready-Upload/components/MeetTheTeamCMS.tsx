"use client";

import React from "react";
import Image from "next/image";
import { AboutMainPage } from "@/types/sanity";

interface MeetTheTeamCMSProps {
  aboutData: AboutMainPage | null;
}

const MeetTheTeamCMS: React.FC<MeetTheTeamCMSProps> = ({ aboutData }) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/about/team/The_Team_1.JPG"; // Fallback image

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
  const title = aboutData?.teamSection?.title || "Experienced Coaches";
  const subtitle = aboutData?.teamSection?.subtitle || "Dedicated to you";
  const teamMembers = aboutData?.teamSection?.teamMembers || [
    {
      name: "Sarah Mitchell",
      photo: null,
      role: "Co Founder",
      bio: "Experienced professional dedicated to empowering growth.",
    },
    {
      name: "Emily Carter",
      photo: null,
      role: "Project Coordinator",
      bio: "Specialized in leadership development and emotional intelligence.",
    },
    {
      name: "Olivia Martinez",
      photo: null,
      role: "Software Engineer",
      bio: "Passionate about youth development and empowerment.",
    },
  ];

  // Default fallback images
  const defaultImages = [
    "/images/about/team/The_Team_1.JPG",
    "/images/about/team/The_Team_2.JPG",
    "/images/about/team/The_Team_3.JPG",
  ];

  return (
    <section className="w-full py-20">
      <div className="w-[98%] max-w-[1200px] mx-auto bg-[#e6dfdb] px-6 py-16 rounded-3xl">
        {/* Section Heading - Moved Right */}
        <div className="mb-12 text-left ml-32">
          <h2 className="text-[32px] md:text-[42px] font-normal text-gray-900 leading-snug">
            {title}{" "}
            <span style={{ color: "#ed7566", fontWeight: "600" }}>
              Dedicated
            </span>
          </h2>
          <h2
            className="text-[32px] md:text-[42px] font-semibold leading-snug -mt-0.5"
            style={{ color: "#ed7566" }}
          >
            {subtitle}
          </h2>
        </div>

        {/* Team Grid - Side by side with minimal spacing, moved right */}
        <div className="mt-12 ml-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px]">
            {teamMembers.map((member, index) => {
              const imageUrl = member.photo
                ? getSanityImageUrl(member.photo)
                : defaultImages[index] || defaultImages[0];

              return (
                <div key={index} className="text-center">
                  {/* Team Member Photo */}
                  <div className="relative w-full h-[240px] mb-4 rounded-[20px] overflow-hidden shadow-lg">
                    <Image
                      src={imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="text-lg font-medium mb-3"
                    style={{ color: "#ed7566" }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamCMS;
