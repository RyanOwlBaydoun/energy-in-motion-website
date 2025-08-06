import React from "react";

const CoachingOffers: React.FC = () => {
  const offers = [
    {
      title: "One-on-One Coaching",
      description:
        "Dive deep into a personalized journey of self-awareness and growth. Work one-on-one with a certified coach to develop emotional intelligence, unlock your leadership potential, and create a life of purpose.",
    },
    {
      title: "Team Coaching",
      description:
        "Develop stronger communication, alignment, and trust across your team. Through group coaching sessions, teams explore shared values, strengthen collaboration, and elevate their collective performance.",
    },
    {
      title: "Coaching for Organizations",
      description:
        "Create a culture of purpose and emotional intelligence in your workplace. Our customized coaching solutions support leadership development, employee engagement, and organizational transformation.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coaching Offers
          </h2>
        </div>

        {/* Coaching Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-100"
            >
              {/* Card Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  className="text-[#E36B6B] font-medium hover:text-[#d55555] transition-colors duration-200 flex items-center group"
                  aria-label={`Learn more about ${offer.title}`}
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingOffers;
