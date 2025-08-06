import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LegacyAssessment } from "@/types/sanity";
import { AssessmentMainPage } from "@/types/sanity";

interface AssessmentDetailsSectionProps {
  currentAssessment: LegacyAssessment;
  allAssessments?: LegacyAssessment[]; // Optional prop for CMS assessments
  assessmentMainData?: AssessmentMainPage | null; // CMS data for main page
}

const AssessmentDetailsSectionCMS: React.FC<AssessmentDetailsSectionProps> = ({
  currentAssessment,
  allAssessments = [],
  assessmentMainData,
}) => {
  // Use CMS data for sidebar title and background color
  const sidebarTitle =
    assessmentMainData?.assessmentProgramsSection?.title || "Assessments";
  const sidebarBgColor =
    assessmentMainData?.assessmentProgramsSection?.backgroundColor || "#E8DDD4";
  const showBoxPhoto = currentAssessment.displayBoxPhoto !== false; // Default to true, check individual assessment toggle

  // Cache busting helper for development
  const getCacheBustedImageUrl = (imageUrl: string) => {
    if (process.env.NODE_ENV === "development" && imageUrl) {
      const separator = imageUrl.includes("?") ? "&" : "?";
      return `${imageUrl}${separator}t=${Date.now()}`;
    }
    return imageUrl;
  };

  // Get the assessment-specific image URL
  const getAssessmentImageUrl = () => {
    // Check if current assessment has an assessmentImage (from CMS)
    if (currentAssessment.assessmentImage) {
      const imageRef = currentAssessment.assessmentImage;
      if (imageRef._ref || imageRef.asset?._ref) {
        const ref = imageRef._ref || imageRef.asset._ref;
        const imageUrlPattern = /image-([a-f0-9]+)-(\d+x\d+)-(\w+)/;
        const match = ref.match(imageUrlPattern);

        if (match) {
          const [, imageId, dimensions, format] = match;
          const imageUrl = `https://cdn.sanity.io/images/hy425cry/production/${imageId}-${dimensions}.${format}`;
          return getCacheBustedImageUrl(imageUrl);
        }
      }
    }
    return null;
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start min-h-[800px]">
          {/* Left Sidebar - Assessment Programs */}
          <div className="w-1/4 flex-shrink-0">
            <div
              className="rounded-2xl p-5 h-fit max-h-[385px] overflow-y-auto scrollbar-hide"
              style={{ backgroundColor: sidebarBgColor }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {sidebarTitle}
              </h3>

              {/* Full-width white separator line under title */}
              <div className="w-[calc(100%+2.5rem)] h-px bg-white mb-4 -ml-5"></div>

              <div className="space-y-1">
                {allAssessments.map((assessment, index) => (
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
                            ? "font-bold text-[#ed7566]"
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
                    {index < allAssessments.length - 1 && (
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
              <h2 className="text-3xl text-gray-800 mb-2">
                {currentAssessment.title}
              </h2>
              <h1 className="text-4xl font-bold text-[#E36B6B] mb-4">
                Assessment
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6 font-bold">
                {currentAssessment.description}
              </p>
            </div>

            {/* Target Audience - Only show if content exists */}
            {currentAssessment.targetAudience &&
              currentAssessment.targetAudience.trim() && (
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold">Target Audience:</span>{" "}
                    {currentAssessment.targetAudience}
                  </p>
                </div>
              )}

            {/* Assessment Details - Only show if content exists */}
            {currentAssessment.assessmentDetails && (
              <div className="mb-6">
                <div className="space-y-2 text-gray-600">
                  {currentAssessment.assessmentDetails.duration && (
                    <p>
                      <span className="font-bold">Duration:</span>{" "}
                      {currentAssessment.assessmentDetails.duration}
                    </p>
                  )}
                  {currentAssessment.assessmentDetails.format && (
                    <p>
                      <span className="font-bold">Format:</span>{" "}
                      {currentAssessment.assessmentDetails.format}
                    </p>
                  )}
                  {currentAssessment.assessmentDetails.reportType && (
                    <p>
                      <span className="font-bold">Report Type:</span>{" "}
                      {currentAssessment.assessmentDetails.reportType}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Assessment Image - Only show if Display Box Photo is enabled */}
            {showBoxPhoto && (
              <div className="mb-8">
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src={
                      getAssessmentImageUrl() ||
                      "/images/about/Empowering_growth_through.JPG"
                    }
                    alt={`${currentAssessment.title} assessment`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Key Features - Only show if features exist */}
            {currentAssessment.keyFeatures &&
              currentAssessment.keyFeatures.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#E36B6B] mb-4">
                    Key Features:
                  </h3>

                  <div className="space-y-2">
                    {currentAssessment.keyFeatures.map(
                      (feature, index) =>
                        feature &&
                        feature.trim() && (
                          <div key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#E36B6B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

            {/* External Link - Only show if link exists */}
            {currentAssessment.externalLink &&
              currentAssessment.externalLink.trim() && (
                <div className="mb-8">
                  <a
                    href={currentAssessment.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#E36B6B] text-white font-medium rounded-lg hover:bg-[#c54545] transition-colors duration-200"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentDetailsSectionCMS;
