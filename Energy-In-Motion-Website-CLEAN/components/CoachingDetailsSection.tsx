import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CoachingProgram, coachingPrograms } from "@/utils/coaching-programs";
import { CoachingMainPage } from "@/types/sanity";

interface CoachingDetailsSectionProps {
  currentProgram: CoachingProgram;
  allPrograms?: CoachingProgram[]; // Optional prop for CMS programs
  coachingMainData?: CoachingMainPage | null; // CMS data for main page
}

const CoachingDetailsSection: React.FC<CoachingDetailsSectionProps> = ({
  currentProgram,
  allPrograms = coachingPrograms, // Fallback to static data
  coachingMainData,
}) => {
  // Check if box photo should be displayed (defaults to true if not specified)
  const showBoxPhoto = currentProgram.displayBoxPhoto !== false;
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start min-h-[800px]">
          {/* Left Sidebar - Coaching Programs */}
          <div className="w-1/4 flex-shrink-0">
            <div className="bg-[#E8DDD4] rounded-2xl p-5 h-fit max-h-[385px] overflow-y-auto scrollbar-hide">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Coaching Programs
              </h3>

              {/* Full-width white separator line under title */}
              <div className="w-[calc(100%+2.5rem)] h-px bg-white mb-4 -ml-5"></div>

              <div className="space-y-1">
                {allPrograms.map((program, index) => (
                  <div key={program.id}>
                    <Link
                      href={`/coaching/${program.slug}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 group hover:bg-white/50 ${
                        currentProgram.id === program.id ? "" : ""
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          currentProgram.id === program.id
                            ? "font-bold text-gray-700"
                            : "font-medium text-gray-700"
                        }`}
                      >
                        {program.title}
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
                    {index < allPrograms.length - 1 && (
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
            {/* Program Header */}
            <div className="mb-8">
              <h2 className="text-3xl text-gray-800 mb-2">
                Certified Coaching
              </h2>
              <h1 className="text-4xl font-bold text-[#E36B6B] mb-4">
                {currentProgram.title}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6 font-bold">
                {currentProgram.description.split("\\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      currentProgram.description.split("\\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
            </div>

            {/* Who It's For - Only show if content exists */}
            {currentProgram.whoItsFor && currentProgram.whoItsFor.trim() && (
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-bold">Who It's For:</span>{" "}
                  {currentProgram.whoItsFor.split("\\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index <
                        currentProgram.whoItsFor.split("\\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* Purpose - Only show if content exists */}
            {currentProgram.purpose && currentProgram.purpose.trim() && (
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed mb-3">
                  <span className="font-bold">Purpose:</span>{" "}
                  {currentProgram.purpose}
                </p>
              </div>
            )}

            {/* Focus Areas - Only show individual ones that have content */}
            {((currentProgram.innerFocus && currentProgram.innerFocus.trim()) ||
              (currentProgram.otherFocus && currentProgram.otherFocus.trim()) ||
              (currentProgram.outerFocus &&
                currentProgram.outerFocus.trim())) && (
              <div className="mb-6">
                <div className="space-y-2 text-gray-600">
                  {currentProgram.innerFocus &&
                    currentProgram.innerFocus.trim() && (
                      <p>
                        <span className="font-bold">Inner Focus:</span>{" "}
                        {currentProgram.innerFocus}
                      </p>
                    )}
                  {currentProgram.otherFocus &&
                    currentProgram.otherFocus.trim() && (
                      <p>
                        <span className="font-bold">Other Focus:</span>{" "}
                        {currentProgram.otherFocus}
                      </p>
                    )}
                  {currentProgram.outerFocus &&
                    currentProgram.outerFocus.trim() && (
                      <p>
                        <span className="font-bold">Outer Focus:</span>{" "}
                        {currentProgram.outerFocus}
                      </p>
                    )}
                </div>
              </div>
            )}

            {/* Program Image - Only show if Display Box Photo is enabled */}
            {showBoxPhoto && (
              <div className="mb-8">
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about/Empowering_growth_through.JPG"
                    alt={`${currentProgram.title} coaching session`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Program Highlights */}
            {(currentProgram.programHighlights.level1 ||
              currentProgram.programHighlights.level2) && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#E36B6B] mb-4">
                  Program Highlights:
                </h3>

                <div className="space-y-4">
                  {currentProgram.programHighlights.level1 && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {currentProgram.programHighlights.level1.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {currentProgram.programHighlights.level1.description}
                      </p>
                    </div>
                  )}

                  {currentProgram.programHighlights.level2 && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {currentProgram.programHighlights.level2.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {currentProgram.programHighlights.level2.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Key Benefits - Only show if benefits exist */}
            {currentProgram.keyBenefits &&
              currentProgram.keyBenefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#E36B6B] mb-4">
                    Key Benefits:
                  </h3>

                  <div className="space-y-2">
                    {currentProgram.keyBenefits.map(
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

export default CoachingDetailsSection;
