import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trainingCourses } from "@/utils/training-courses";
import { TrainingMainPage } from "@/types/sanity";

interface TrainingProgramsSectionProps {
  courses?: any[]; // Use courses from props if provided
  trainingMainData?: TrainingMainPage | null; // CMS data for main page
}

const TrainingProgramsSection: React.FC<TrainingProgramsSectionProps> = ({
  courses = trainingCourses,
  trainingMainData,
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
    { name: "Leadership", link: "#leadership", order: 1 },
    {
      name: "Business Communication",
      link: "#business-communication",
      order: 2,
    },
    { name: "Wellbeing", link: "#wellbeing", order: 3 },
    {
      name: "Professional Development",
      link: "#professional-development",
      order: 4,
    },
    {
      name: "Emotional Intelligence",
      link: "#emotional-intelligence",
      order: 5,
    },
    { name: "Youth Development", link: "#youth-development", order: 6 },
    { name: "Sales", link: "#sales", order: 7 },
    {
      name: "EQ for Healthcare Professionals",
      link: "#eq-healthcare",
      order: 8,
    },
    { name: "Women Empowerment", link: "#women-empowerment", order: 9 },
  ];

  const trainingCategories = trainingMainData?.trainingProgramsSection
    ?.categories
    ? trainingMainData.trainingProgramsSection.categories.sort(
        (a, b) => a.order - b.order
      )
    : defaultCategories;

  const programsSectionTitle =
    trainingMainData?.trainingProgramsSection?.title || "Training Programs";
  const programsSectionBgColor =
    trainingMainData?.trainingProgramsSection?.backgroundColor || "#E8DDD4";

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Training Programs Grid Section */}
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
              {trainingCategories.map((category, index) => {
                // Dynamic logic: Show separator lines for all rows except the last row
                const totalItems = trainingCategories.length;
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

        {/* Detailed Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((program, index) => (
            <Link
              key={program.id}
              href={`/training/${program.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Card Image with rounded bottom - Better image display */}
              <div className="relative h-64 overflow-hidden">
                <div className="relative h-full w-full rounded-b-[2rem] overflow-hidden bg-gray-100">
                  <Image
                    src={getCacheBustedImageUrl(
                      program.heroImage ||
                        "/images/about/Empowering_growth_through.JPG"
                    )}
                    alt={`${program.title} training program`}
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

export default TrainingProgramsSection;
