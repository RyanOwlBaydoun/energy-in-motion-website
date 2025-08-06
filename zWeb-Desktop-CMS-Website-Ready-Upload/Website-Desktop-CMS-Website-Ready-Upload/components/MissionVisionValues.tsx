"use client";

import Image from "next/image";
import { Target, Eye, Lightbulb } from "lucide-react";

const MissionVisionValues = () => {
  const coreValues = [
    "1. Human-Centered Growth – We believe people come before strategies.",
    "2. Emotional Intelligence – Self-awareness and empathy are at the heart of every program.",
    "3. Purpose & Authenticity – Helping individuals find their 'why.'",
    "4. Compassion & Empathy – We listen deeply, grow gently, and guide intentionally.",
    "5. Youth Empowerment – Preparing youth not just to succeed—but to understand and love who they are.",
    "6. Resilience Through Vulnerability – We honor the power of being real and rising again.",
    "7. Innovation with Heart – We blend science and emotion to make learning personal and impactful.",
  ];

  return (
    <section className="w-full py-12">
      <div className="w-[98%] max-w-[1200px] mx-auto bg-[#e6dfdb] px-4 sm:px-6 lg:px-8 py-16 rounded-3xl">
        {/* Section Title - Moved Right */}
        <div className="text-left mb-10 ml-24 mt-2">
          <h2 className="text-[40px] md:text-[46px] font-normal text-gray-900 leading-none">
            Empowering growth through
          </h2>
          <h2 className="text-[40px] md:text-[46px] font-semibold text-[#ed7566] leading-none -mt-1">
            Personalized Guidance
          </h2>
        </div>

        {/* Mission/Vision + Image Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8 mt-3">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-4 ml-24">
            {/* Our Mission */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-tight">
                To cultivate a world where every person—child, youth, or
                adult—can
                <br />
                access their emotional, mental, and human potential, confidently
                <br />
                navigate life's challenges, and lead with resilience, empathy,
                and
                <br />
                purpose.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <div>
                <p className="text-sm text-gray-700 leading-tight">
                  To design and deliver evidence-based, emotionally intelligent
                  <br />
                  coaching and training programs that:
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empower
                  individuals to develop life skills and self-awareness.
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support youth
                  in navigating social, emotional, and academic
                  <br />
                  pressures.
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Equip
                  professionals and healthcare workers with tools to lead,
                  <br />
                  communicate, and care with empathy and effectiveness.
                  <br />
                  •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Promote
                  purposeful leadership and a culture of growth,
                  <br />
                  responsibility, and connection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center mt-3">
            <div className="w-[80%]">
              <Image
                src="/images/about/Empowering_growth_through.JPG"
                alt="Mission and Vision - Team collaboration"
                width={500}
                height={400}
                className="rounded-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* White Separator Line */}
        <div className="w-[90%] mx-auto h-[2px] bg-white mb-8"></div>

        {/* Our Core Values - Split Layout */}
        <div className="space-y-2 ml-24">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-[#ed7566] rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Core Value
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Values 1-4 */}
            <div className="space-y-1.5">
              <div className="text-sm text-gray-700 leading-none">
                1. <span className="font-bold">Human-Centered Growth</span> – We
                believe people come before
                <br />
                strategies.
              </div>
              <div className="text-sm text-gray-700 leading-none">
                2. <span className="font-bold">Emotional Intelligence</span> –
                Self-awareness and empathy are at the
                <br />
                heart of every program.
              </div>
              <div className="text-sm text-gray-700 leading-none">
                3. <span className="font-bold">Purpose & Authenticity</span> –
                Helping individuals find their "why."
              </div>
              <div className="text-sm text-gray-700 leading-none">
                4. <span className="font-bold">Compassion & Empathy</span> – We
                listen deeply, grow gently, and guide
                <br />
                intentionally.
              </div>
            </div>

            {/* Right Column - Values 5-7 */}
            <div className="space-y-1.5">
              <div className="text-sm text-gray-700 leading-none">
                5. <span className="font-bold">Youth Empowerment</span> –
                Preparing youth not just to
                <br />
                succeed—but to understand and love who they are.
              </div>
              <div className="text-sm text-gray-700 leading-none">
                6.{" "}
                <span className="font-bold">
                  Resilience Through Vulnerability
                </span>{" "}
                – We honor the power of
                <br />
                being real and rising again.
              </div>
              <div className="text-sm text-gray-700 leading-none">
                7. <span className="font-bold">Innovation with Heart</span> – We
                blend science and emotion to
                <br />
                make learning personal and impactful.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
