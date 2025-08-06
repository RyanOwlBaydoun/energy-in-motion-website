import React from "react";
import Image from "next/image";

const AboutSarahSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 items-start">
          {/* Left Side - Sarah's Photo */}
          <div className="flex-shrink-0">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/about/Sarah_Daou_About_Sarah.jpeg"
                alt="Sarah Daou - EQ Coach"
                width={360}
                height={450}
                className="w-[360px] h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - All Content */}
          <div className="flex-1">
            {/* About Sarah */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-6">
                About Sarah
              </h2>

              {/* First paragraph */}
              <div className="text-gray-600 leading-tight mb-4">
                <p>
                  <strong>
                    Sarah Daou is a journalist by education, a leader by
                    experience, and a coach by purpose.
                  </strong>
                  <br />
                  With 24 years in the corporate world—15 of which were spent in
                  senior leadership
                  <br />
                  roles—Sarah shifted gears to create Energy in Motion, a space
                  for human development,
                  <br />
                  emotional growth, and leadership evolution.
                </p>
              </div>

              {/* Second paragraph with medium spacing */}
              <div className="text-gray-600 leading-tight">
                <p>
                  Her journey is grounded in one belief: that we are born with
                  strengths and shaped by
                  <br />
                  life—but can always choose to reconnect with who we truly are
                  and become the best
                  <br />
                  version of ourselves.
                </p>
              </div>
            </div>

            {/* Philosophy & Beliefs - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                Philosophy & Beliefs
              </h3>

              {/* First paragraph */}
              <div className="text-gray-600 leading-tight mb-4">
                <p>
                  Sarah's approach to coaching and training is rooted in:
                  <br />
                  • The power of emotional intelligence and neuroscience.
                  <br />
                  • The belief that leadership is about people—not just
                  strategies.
                  <br />
                  • The need for vulnerability, compassion, connection, and
                  resilience in growth.
                  <br />
                  • A commitment to collective work, shared learning, and
                  building a support system that
                  <br />
                  grows together.
                </p>
              </div>

              {/* Second paragraph with medium spacing */}
              <div className="text-gray-600 leading-tight">
                <p>
                  She blends science with storytelling, structure with soul, and
                  believes deeply in
                  <br />
                  collaboration over competition.
                </p>
              </div>
            </div>

            {/* Energy in Motion - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                Energy in Motion
                <br />A Collaborative Vision
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>
                  Energy in Motion was never meant to be a solo mission. Sarah
                  built the company as a
                  <br />
                  collaborative platform, working hand-in-hand with certified,
                  like-hearted trainers and
                  <br />
                  coaches who share the same commitment to values, growth, and
                  purpose. Every trainer is
                  <br />
                  selected for their alignment with the company's mission and
                  their excellence in delivery.
                  <br />
                  Together, they deliver coaching and training experiences that
                  are personal, practical, and
                  <br />
                  transformational.
                </p>
              </div>
            </div>

            {/* Professional Hosting & Facilitation - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                Professional Hosting & Facilitation
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>
                  In addition to her coaching and development work, Sarah is a
                  seasoned Master of
                  <br />
                  Ceremony, moderator, and facilitator. Over the past 20 years,
                  she has hosted more than
                  <br />
                  100 high-level events, conferences, and panel discussions
                  across sectors—from business,
                  <br />
                  healthcare, and education to arts, culture, and social issues.
                  <br />
                  Known for her warmth, clarity, and dynamic presence, she
                  brings structure, soul, and
                  <br />
                  storytelling to every stage she steps on—ensuring flow,
                  connection, and a meaningful
                  <br />
                  experience for every audience.
                </p>
              </div>
            </div>

            {/* The Podcast - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                The Podcast
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>
                  Bringing her journalistic background to life, Sarah also hosts
                  a podcast under the Energy in
                  <br />
                  Motion umbrella. The show explores:
                  <br />
                  • Emotional growth and self-awareness
                  <br />
                  • Human connection and communication
                  <br />
                  • Leadership with empathy
                  <br />
                  • Real-life success stories and inspirational interviews
                  <br />
                  Each episode is an invitation to reflect, reconnect, and
                  rise—with wisdom and heart.
                </p>
              </div>
            </div>

            {/* Certifications & Credentials - Larger spacing before section */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ed7566] mb-4">
                Certifications & Credentials
              </h3>

              <div className="text-gray-600 leading-tight">
                <p>
                  Sarah holds multiple international certifications, reflecting
                  her deep expertise and
                  <br />
                  commitment to science-backed personal development:
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diploma in
                  Life & Executive Coaching – Noble Manhattan Ltd. (UK)
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified
                  Emotional Intelligence Assessor & Trainer, RocheMartin
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified
                  Hogan Assessor
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified
                  Corporate Trainer – CPD (UK)
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified EQ
                  Practitioner – Six Seconds
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate
                  in Inspirational Leadership through Emotional Intelligence –
                  <br />
                  Northwestern University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSarahSection;
