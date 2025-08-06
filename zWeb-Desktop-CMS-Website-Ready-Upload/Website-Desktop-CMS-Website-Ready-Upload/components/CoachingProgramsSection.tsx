import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coachingPrograms } from "@/utils/coaching-programs";

const CoachingProgramsSection: React.FC = () => {
  const coachingCategories = [
    { name: "Leadership Coaching", link: "#leadership-coaching" },
    { name: "Career Coaching", link: "#career-coaching" },
    { name: "Youth & Adolescence", link: "#youth-adolescence" },
    { name: "Executive Coaching", link: "#executive-coaching" },
    { name: "EQ Coaching", link: "#eq-coaching" },
    { name: "Positive Psychology", link: "#positive-psychology" },
    { name: "Business Coaching", link: "#business-coaching" },
    { name: "Relationship Coaching", link: "#relationship-coaching" },
    { name: "Wellbeing Group Coaching", link: "#wellbeing-group-coaching" },
    { name: "Team Coaching", link: "#team-coaching" },
    { name: "Life Coaching", link: "#life-coaching" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Coaching Programs Grid Section */}
        <div className="mb-24">
          <div className="bg-[#E8DDD4] rounded-2xl p-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Coaching Programs
            </h2>

            {/* White separator line */}
            <div className="w-full h-px bg-white mb-3"></div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coachingCategories.map((category, index) => (
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
                  {/* White separator lines after first and second rows only */}
                  {(index === 0 ||
                    index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4 ||
                    index === 5 ||
                    index === 6 ||
                    index === 7) && (
                    <div className="w-3/4 h-px bg-white mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Coaching Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachingPrograms.map((program, index) => (
            <Link
              key={program.id}
              href={`/coaching/${program.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 block"
            >
              {/* Card Image with rounded bottom */}
              <div className="relative h-64 overflow-hidden">
                <div className="relative h-full w-full rounded-b-[2rem] overflow-hidden">
                  <Image
                    src="/images/about/Empowering_growth_through.JPG"
                    alt={`${program.title} coaching program`}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  {program.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E36B6B] mb-3 leading-tight">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingProgramsSection;
