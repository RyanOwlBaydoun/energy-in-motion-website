"use client";

import { TrendingUp } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Assessment Icon - Consistent sizing */}
      <div
        className="flex-shrink-0 w-12 h-12 bg-[#FF6B57] rounded-full flex items-center justify-center"
        role="img"
        aria-label="Assessment Icon"
      >
        <TrendingUp className="w-6 h-6 text-white" />
      </div>

      {/* Assessment Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        <p
          className="text-base font-normal text-[#FC6D6D] leading-relaxed"
          style={{ whiteSpace: "pre-line" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AssessmentsSection = () => {
  const leftAssessments = [
    {
      title: "Hogan Assessments",
      description: "Personality & leadership profiling",
    },
    {
      title: "Saville",
      description: "Science-based assessments to\nhire and develop talent.",
    },
    {
      title: "Psytech",
      description: "Global psychometric solutions\ntailored for regions.",
    },
  ];

  const rightAssessments = [
    {
      title: "ECR",
      description: "Emotional intelligence &\n360° feedback",
    },
    {
      title: "AssesFirst",
      description: "AI-driven behavioral tools for\npredictive hiring.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Shifted section to the right for better centering */}
      <div className="max-w-6xl mx-auto pl-8 lg:pl-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-end gap-4">
              <h2 className="text-4xl md:text-5xl leading-tight">
                <span className="font-semibold text-gray-900">Assessments</span>{" "}
                <span className="font-semibold text-gray-900">for</span>
                <br />
                <span className="font-normal text-gray-900">
                  Personal & Team Growth
                </span>
              </h2>
              {/* Red line aligned with bottom of Growth */}
              <div className="flex-grow h-[2px] bg-[#FF6B57] mb-1"></div>
            </div>
          </div>
          <p className="text-lg md:text-xl font-medium text-[#FC6D6D] leading-relaxed max-w-2xl">
            Unlock your leadership and emotional
            <br />
            intelligence potential with certified tools.
          </p>
        </div>

        {/* Assessment Cards - Reduced column spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Left Column - 3 Cards */}
          <div className="space-y-10">
            {leftAssessments.map((assessment, index) => (
              <AssessmentCard
                key={`left-${index}`}
                title={assessment.title}
                description={assessment.description}
              />
            ))}
          </div>

          {/* Right Column - 2 Cards + Button */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">
              {rightAssessments.map((assessment, index) => (
                <AssessmentCard
                  key={`right-${index}`}
                  title={assessment.title}
                  description={assessment.description}
                />
              ))}
            </div>

            {/* CTA Button - Raised to align with Psytech */}
            <div className="pt-4 -mt-4">
              <button className="bg-[#FFD600] hover:bg-[#F2C200] text-black px-8 py-3 rounded-full text-base font-semibold transition-colors duration-300 shadow-md">
                Book an EQ Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentsSection;
