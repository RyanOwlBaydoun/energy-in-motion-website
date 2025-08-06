import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrainingCourse, trainingCourses } from "@/utils/training-courses";
import { LegacyTrainingCourse, TrainingMainPage } from "@/types/sanity";

interface CertifiedTrainingDetailsSectionProps {
  currentCourse: LegacyTrainingCourse;
  allCourses?: LegacyTrainingCourse[]; // Optional prop for CMS courses
  trainingMainData?: TrainingMainPage | null; // CMS data for main page
}

const CertifiedTrainingDetailsSection: React.FC<
  CertifiedTrainingDetailsSectionProps
> = ({ currentCourse, allCourses = trainingCourses, trainingMainData }) => {
  // Cache busting helper for development
  const getCacheBustedImageUrl = (imageUrl: string) => {
    if (process.env.NODE_ENV === "development" && imageUrl) {
      const separator = imageUrl.includes("?") ? "&" : "?";
      return `${imageUrl}${separator}t=${Date.now()}`;
    }
    return imageUrl;
  };

  // Check if box photo should be displayed (defaults to true if not specified)
  const showBoxPhoto = currentCourse.displayBoxPhoto !== false;
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start min-h-[800px]">
          {/* Left Sidebar - Leadership Programs */}
          <div className="w-1/4 flex-shrink-0">
            <div className="bg-[#E8DDD4] rounded-2xl p-5 h-fit max-h-[385px] overflow-y-auto scrollbar-hide">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Leadership Programs
              </h3>

              {/* Full-width white separator line under title */}
              <div className="w-[calc(100%+2.5rem)] h-px bg-white mb-4 -ml-5"></div>

              <div className="space-y-1">
                {allCourses.map((course, index) => (
                  <div key={course.id}>
                    <Link
                      href={`/training/${course.slug}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 group hover:bg-white/50 ${
                        currentCourse.id === course.id ? "" : ""
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          currentCourse.id === course.id
                            ? "font-bold text-gray-700"
                            : "font-medium text-gray-700"
                        }`}
                      >
                        {course.title}
                      </span>
                      <svg
                        className="w-4 h-4 text-[#E36B6B] opacity-60 group-hover:opacity-100"
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
                    </Link>
                    {/* 95% width white separator lines with 2.5% margins on each side */}
                    {index < allCourses.length - 1 && (
                      <div className="flex justify-center mt-2">
                        <div className="w-[95%] h-px bg-white"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="flex-1">
            {/* Course Header */}
            <div className="mb-8">
              <h2 className="text-3xl text-gray-800 mb-2">
                Certified Training
              </h2>
              <h1 className="text-4xl font-bold text-[#E36B6B] mb-4">
                {currentCourse.title === "Mastering EQ (Levels 1 & 2)" ? (
                  <>
                    Mastering EQ
                    <br />
                    (Levels 1&2)
                  </>
                ) : (
                  currentCourse.title
                )}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6 font-bold">
                {currentCourse.description.split("\\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      currentCourse.description.split("\\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
            </div>

            {/* Who It's For - Only show if content exists */}
            {currentCourse.whoItsFor && currentCourse.whoItsFor.trim() && (
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-bold">Who It's For:</span>{" "}
                  {currentCourse.whoItsFor.split("\\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index <
                        currentCourse.whoItsFor.split("\\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* Purpose - Only show if content exists */}
            {currentCourse.purpose && currentCourse.purpose.trim() && (
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed mb-3">
                  <span className="font-bold">Purpose:</span>{" "}
                  {currentCourse.purpose}
                </p>
              </div>
            )}

            {/* Focus Areas - Only show if at least one focus area has content */}
            {((currentCourse.innerFocus && currentCourse.innerFocus.trim()) ||
              (currentCourse.otherFocus && currentCourse.otherFocus.trim()) ||
              (currentCourse.outerFocus &&
                currentCourse.outerFocus.trim())) && (
              <div className="mb-6">
                <div className="space-y-2 text-gray-600">
                  {currentCourse.innerFocus &&
                    currentCourse.innerFocus.trim() && (
                      <p>
                        <span className="font-bold">Inner Focus:</span>{" "}
                        {currentCourse.innerFocus}
                      </p>
                    )}
                  {currentCourse.otherFocus &&
                    currentCourse.otherFocus.trim() && (
                      <p>
                        <span className="font-bold">Other Focus:</span>{" "}
                        {currentCourse.otherFocus}
                      </p>
                    )}
                  {currentCourse.outerFocus &&
                    currentCourse.outerFocus.trim() && (
                      <p>
                        <span className="font-bold">Outer Focus:</span>{" "}
                        {currentCourse.outerFocus}
                      </p>
                    )}
                </div>
              </div>
            )}

            {/* Course Image - Only show if Display Box Photo is enabled */}
            {showBoxPhoto && (
              <div className="mb-8">
                <Image
                  src={getCacheBustedImageUrl(
                    currentCourse.heroImage ||
                      "/images/about/Empowering_growth_through.JPG"
                  )}
                  alt={`${currentCourse.title} training session`}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-contain"
                  style={{
                    maxHeight: "450px",
                    width: "auto",
                    display: "block",
                  }}
                />
              </div>
            )}

            {/* Program Highlights */}
            {(currentCourse.programHighlights.level1 ||
              currentCourse.programHighlights.level2) && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#E36B6B] mb-4">
                  Program Highlights:
                </h3>

                <div className="space-y-4">
                  {currentCourse.programHighlights.level1 && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Level 1: {currentCourse.programHighlights.level1.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {currentCourse.programHighlights.level1.description}
                      </p>
                    </div>
                  )}

                  {currentCourse.programHighlights.level2 && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Level 2: {currentCourse.programHighlights.level2.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {currentCourse.programHighlights.level2.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Key Benefits - Only show if benefits exist */}
            {currentCourse.keyBenefits &&
              currentCourse.keyBenefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#E36B6B] mb-4">
                    Key Benefits:
                  </h3>

                  <div className="space-y-2">
                    {currentCourse.keyBenefits.map(
                      (benefit, index) =>
                        benefit &&
                        benefit.trim() && (
                          <div key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#E36B6B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingDetailsSection;
