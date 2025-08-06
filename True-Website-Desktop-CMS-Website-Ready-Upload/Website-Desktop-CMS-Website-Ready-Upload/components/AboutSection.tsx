"use client";

import Image from "next/image";
import Link from "next/link";

// Note: Satoshi font should be imported in your CSS or via font loader
// @font-face {
//   font-family: 'Satoshi';
//   src: url('/fonts/Satoshi-Medium.woff2') format('woff2');
//   font-weight: 500;
//   font-style: normal;
// }

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Column - Image with Enhanced Logo Badge */}
        <div className="relative">
          {/* Enhanced Logo Badge - 20% Bigger, Centered on Left Side, Half Outside/Inside, 70% to Top */}
          <div
            className="absolute z-10 w-[144px] h-[144px] bg-[#FF6B57] rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            style={{
              left: "-72px",
              top: "30%",
              transform: "translateY(-50%)",
            }}
          >
            <span className="text-[12px] font-bold uppercase tracking-wide">
              ENERGY IN
            </span>
            <span className="font-cursive text-yellow-400 text-xl -mt-1 font-bold">
              motion
            </span>
          </div>

          {/* Sarah's Image */}
          <div className="rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/images/about/sarah-dao.jpg"
              alt="Sarah Dao - Energy In Motion Leadership Coach"
              width={360}
              height={480}
              className="rounded-[24px] object-cover w-[360px] h-[480px]"
            />
          </div>
        </div>

        {/* Right Column - Text Content with Precise Typography */}
        <div className="flex-1 max-w-[600px] text-left">
          {/* Section Label - Back to Regular Font */}
          <p
            className="uppercase font-normal tracking-wide mb-3"
            style={{
              paddingTop: "36px",
            }}
          >
            <span style={{ color: "#F26C64" }}>//</span>{" "}
            <span
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#2E2B2B",
              }}
            >
              ABOUT US
            </span>
          </p>

          {/* Main Name Header - System Font (Definitely Not Bold) */}
          <h2
            className="mb-3"
            style={{
              fontSize: "48px",
              fontWeight: 300,
              color: "#2E2B2B",
              lineHeight: "56px",
              letterSpacing: "-0.02em",
            }}
          >
            Meet Sarah Daou
          </h2>

          {/* Highlighted Message - Precise Typography */}
          <h3
            className="mb-6"
            style={{
              fontSize: "38px",
              fontWeight: 750,
              color: "#F26C64",
              lineHeight: "1.1",
            }}
          >
            Empowering Leaders.
            <br />
            Elevating Emotional Intelligence.
          </h3>

          {/* Credentials List - Updated to Grey Color */}
          <ul className="space-y-2 mb-8 mt-4">
            <li
              className="flex items-start"
              style={{
                fontSize: "17px",
                fontWeight: 550,
                color: "#2E2B2B",
                lineHeight: "1.4",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0"
                style={{ backgroundColor: "#2E2B2B" }}
              ></span>
              <span>Certified Hogan, ECR, ECR 360, ECR Youth Assessor</span>
            </li>
            <li
              className="flex items-start"
              style={{
                fontSize: "17px",
                fontWeight: 550,
                color: "#2E2B2B",
                lineHeight: "1.4",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0"
                style={{ backgroundColor: "#2E2B2B" }}
              ></span>
              <span>Emotional Intelligence Practitioner – Six Seconds</span>
            </li>
            <li
              className="flex items-start"
              style={{
                fontSize: "17px",
                fontWeight: 550,
                color: "#2E2B2B",
                lineHeight: "1.4",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0"
                style={{ backgroundColor: "#2E2B2B" }}
              ></span>
              <span>Advanced Coaching Diploma – Noble Manhattan UK</span>
            </li>
            <li
              className="flex items-start"
              style={{
                fontSize: "17px",
                fontWeight: 550,
                color: "#2E2B2B",
                lineHeight: "1.4",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0"
                style={{ backgroundColor: "#2E2B2B" }}
              ></span>
              <span>
                Inspirational Leadership – Case Western Reserve University
              </span>
            </li>
          </ul>

          {/* CTA Button - Precise Typography */}
          <Link
            href="/about/sarah"
            className="inline-block rounded-full shadow-md transition duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#FFC600",
              color: "#000000",
              fontSize: "15px",
              fontWeight: 600,
              paddingLeft: "22px",
              paddingRight: "22px",
              paddingTop: "11px",
              paddingBottom: "11px",
            }}
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
