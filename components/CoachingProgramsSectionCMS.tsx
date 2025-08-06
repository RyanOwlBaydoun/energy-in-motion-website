import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coachingPrograms } from "@/utils/coaching-programs";
import { CoachingMainPage } from "@/types/sanity";

interface CoachingProgramsSectionProps {
  programs?: any[]; // Use programs from props if provided
  coachingMainData?: CoachingMainPage | null; // CMS data for main page
}

const CoachingProgramsSectionCMS: React.FC<CoachingProgramsSectionProps> = ({
  programs = coachingPrograms,
  coachingMainData,
}) => {
  // Cache busting helper for development
  const getCacheBustedImageUrl = (imageUrl: string) => {
    if (process.env.NODE_ENV === "development" && imageUrl) {
      const separator = imageUrl.includes("?") ? "&" : "?";
      return `${imageUrl}${separator}t=${Date.now()}`;
    }
    return imageUrl;
  };

  // Use CMS data for categories or fallback to default
  const defaultCategories = [
    { name: "Leadership Coaching", link: "#leadership-coaching", order: 1 },
    { name: "Career Coaching", link: "#career-coaching", order: 2 },
    { name: "Youth & Adolescence", link: "#youth-adolescence", order: 3 },
    { name: "Executive Coaching", link: "#executive-coaching", order: 4 },
    { name: "EQ Coaching", link: "#eq-coaching", order: 5 },
    { name: "Positive Psychology", link: "#positive-psychology", order: 6 },
    { name: "Business Coaching", link: "#business-coaching", order: 7 },
    { name: "Relationship Coaching", link: "#relationship-coaching", order: 8 },
    {
      name: "Wellbeing Group Coaching",
      link: "#wellbeing-group-coaching",
      order: 9,
    },
    { name: "Team Coaching", link: "#team-coaching", order: 10 },
    { name: "Life Coaching", link: "#life-coaching", order: 11 },
  ];

  const coachingCategories = coachingMainData?.coachingProgramsSection
    ?.categories
    ? coachingMainData.coachingProgramsSection.categories.sort(
        (a, b) => a.order - b.order
      )
    : defaultCategories;

  const programsSectionTitle =
    coachingMainData?.coachingProgramsSection?.title || "Coaching Programs";
  const programsSectionBgColor =
    coachingMainData?.coachingProgramsSection?.backgroundColor || "#E8DDD4";

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Coaching Programs Grid Section */}
        <div className="mb-24">
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: programsSectionBgColor }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {programsSectionTitle}
            </h2>

            {/* White separator line */}
            <div className="w-full h-px bg-white mb-3"></div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coachingCategories.map((category, index) => {
                // Dynamic logic: Show separator lines for all rows except the last row
                const totalItems = coachingCategories.length;
                const itemsPerRow = 3; // md:grid-cols-3
                const lastRowStartIndex =
                  Math.floor((totalItems - 1) / itemsPerRow) * itemsPerRow;
                const shouldShowSeparator = index < lastRowStartIndex;

                return (
                  <div key={index}>
                    <div className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-colors duration-200">
                      <div className="flex items-center justify-between w-3/4">
                        <span className="text-gray-700 font-medium">
                          {category.name}
                        </span>
                        <svg
                          className="w-4 h-4 text-[#E36B6B]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17l9.2-9.2M16.2 7.8H7.8M16.2 7.8V16.2"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Dynamic white separator lines - show for all rows except the last row */}
                    {shouldShowSeparator && (
                      <div className="w-3/4 h-px bg-white mt-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Coaching Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              href={`/coaching/${program.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Card Image with rounded bottom - Better image display */}
              <div className="relative h-64 overflow-hidden">
                <div className="relative h-full w-full rounded-b-[2rem] overflow-hidden bg-gray-100">
                  <Image
                    src={getCacheBustedImageUrl(
                      program.heroImage || "/images/hero/Coaching_Hero.png"
                    )}
                    alt={`${program.title} coaching program`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  {program.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E36B6B] mb-3 leading-tight group-hover:text-[#c54545] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description.length > 100
                    ? `${program.description.substring(0, 100)}...`
                    : program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingProgramsSectionCMS;
