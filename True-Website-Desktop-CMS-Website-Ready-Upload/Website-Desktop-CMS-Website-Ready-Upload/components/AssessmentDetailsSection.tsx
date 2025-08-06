import React from "react";
import Link from "next/link";
import { Assessment, assessments } from "@/utils/assessments";

interface AssessmentDetailsSectionProps {
  currentAssessment: Assessment;
}

const AssessmentDetailsSection: React.FC<AssessmentDetailsSectionProps> = ({
  currentAssessment,
}) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start min-h-[800px]">
          {/* Left Sidebar - Assessments */}
          <div className="w-1/4 flex-shrink-0">
            <div className="bg-[#E8DDD4] rounded-2xl p-5 h-fit max-h-[385px] overflow-y-auto scrollbar-hide">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Assessments
              </h3>

              {/* Full-width white separator line under title */}
              <div className="w-[calc(100%+2.5rem)] h-px bg-white mb-4 -ml-5"></div>

              <div className="space-y-1">
                {assessments.map((assessment, index) => (
                  <div key={assessment.id}>
                    <Link
                      href={`/assessments/${assessment.slug}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 group hover:bg-white/50 ${
                        currentAssessment.id === assessment.id ? "" : ""
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          currentAssessment.id === assessment.id
                            ? "font-bold text-gray-700"
                            : "font-medium text-gray-700"
                        }`}
                      >
                        {assessment.title}
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
                    {index < assessments.length - 1 && (
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
            {/* Assessment Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#E36B6B] mb-4">
                {currentAssessment.title.toUpperCase()}
                <br />
                Assessment
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {currentAssessment.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentDetailsSection;
