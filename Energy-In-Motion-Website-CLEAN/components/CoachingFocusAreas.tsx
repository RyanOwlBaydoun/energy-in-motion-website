import React from "react";

const CoachingFocusAreas: React.FC = () => {
  const focusAreas = [
    {
      title: "Emotional Intelligence",
      description:
        "Unlock the power of emotions to enhance decision-making and leadership.",
    },
    {
      title: "Authentic Leadership",
      description: "Lead with integrity, vulnerability, and purpose.",
    },
    {
      title: "Change & Transition",
      description:
        "Navigate life and career transitions with clarity and confidence.",
    },
    {
      title: "Burnout & Boundaries",
      description:
        "Reclaim your energy, build resilience, and set healthy boundaries.",
    },
    {
      title: "Career Clarity",
      description:
        "Identify your strengths, passions, and career path with confidence.",
    },
    {
      title: "Self-Awareness & Mindset",
      description: "Expand your mindset and reconnect with your values.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Coaching Focus Areas
          </h2>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100 hover:border-[#E36B6B] transition-all duration-300 hover:shadow-md"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E36B6B] to-[#F5A623] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#E36B6B] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-[#E36B6B] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to begin your coaching journey?
          </p>
          <button className="bg-[#E36B6B] hover:bg-[#d55555] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
            Schedule Your Discovery Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoachingFocusAreas;
