import React from "react";

const PodcastAndCredentialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* The Podcast Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E36B6B] mb-6">
            The Podcast
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Bringing her journalistic background to life, Sarah also hosts a
              podcast under the Energy in Motion umbrella. The show explores:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Emotional growth and self-awareness</li>
              <li>Human connection and communication</li>
              <li>Leadership with empathy</li>
              <li>Real-life success stories and inspirational interviews</li>
            </ul>
            <p>
              Each episode is an invitation to reflect, reconnect, and rise—with
              wisdom and heart.
            </p>
          </div>
        </div>

        {/* Certifications & Credentials Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E36B6B] mb-6">
            Certifications & Credentials
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Sarah holds multiple international certifications, reflecting her
              deep expertise and commitment to science-backed personal
              development:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Diploma in Life & Executive Coaching – Noble Manhattan Ltd. (UK)
              </li>
              <li>
                Certified Emotional Intelligence Assessor & Trainer, RocheMartin
              </li>
              <li>Certified Hogan Assessor</li>
              <li>Certified Corporate Trainer – CPD (UK)</li>
              <li>Certified EQ Practitioner – Six Seconds</li>
              <li>
                Certificate in Inspirational Leadership through Emotional
                Intelligence – Northwestern University
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastAndCredentialsSection;
