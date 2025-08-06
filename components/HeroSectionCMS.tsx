"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Target, Users, BarChart, Lightbulb } from "lucide-react";
import { HomeMainPage } from "@/types/sanity-home";

interface HeroSectionCMSProps {
  homeData: HomeMainPage | null;
}

const HeroSectionCMS: React.FC<HeroSectionCMSProps> = ({ homeData }) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/hero/hero-coach.jpg"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId.toString().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\s+/g, "").trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values from CMS or fallback
  const backgroundImageUrl = homeData?.heroSection?.backgroundImage
    ? getSanityImageUrl(homeData.heroSection.backgroundImage)
    : "/images/hero/hero-coach.jpg";
  const overlayOpacity = homeData?.heroSection?.overlayOpacity || 0.4;
  const mainTitle1 = homeData?.heroSection?.mainTitle1 || "Empower.";
  const mainTitle2 = homeData?.heroSection?.mainTitle2 || "Evolve.";
  const mainTitle3 = homeData?.heroSection?.mainTitle3 || "Energize.";
  const subtitle =
    homeData?.heroSection?.subtitle ||
    "Through Leadership, Emotional Intelligence & Purpose";
  const ctaButtonText =
    homeData?.heroSection?.ctaButtonText || "Start Your Journey";
  const ctaButtonLink = homeData?.heroSection?.ctaButtonLink || "#contact";

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-10 lg:px-16">
        <section
          className="
                relative
                w-full
                max-w-[2000px]
                min-h-[140vh]
                bg-black
                rounded-[32px]
                shadow-lg
                overflow-hidden
            "
        >
          {/* Background Image - Fixed within non-fixed container */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundAttachment: "fixed",
                backgroundPositionY: "0%",
              }}
              role="img"
              aria-label="Smiling life coach in background"
            />
          </div>

          {/* Dynamic Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-0"
            style={{ opacity: overlayOpacity }}
          />

          {/* Logo - Absolute Top Left */}
          <Link
            href="/"
            className="absolute top-8 left-10 z-20 text-white text-sm font-semibold leading-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="block text-white">ENERGY IN</span>
            <span className="block font-cursive text-yellow-400 text-2xl -mt-1">
              motion
            </span>
          </Link>

          {/* Navigation Bar - Absolute Top Right */}
          <nav className="absolute top-8 right-10 z-30 text-white text-sm font-medium hidden md:flex items-center">
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link
              href="/coaching"
              className="hover:text-yellow-400 transition-colors"
            >
              Coaching
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link
              href="/training"
              className="hover:text-yellow-400 transition-colors"
            >
              Training
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link
              href="/assessments"
              className="hover:text-yellow-400 transition-colors"
            >
              Assessments
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link
              href="/e-motion"
              className="hover:text-yellow-400 transition-colors"
            >
              E-Motion
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <a
              href="#testimonials"
              className="hover:text-yellow-400 transition-colors"
            >
              Testimonials
            </a>
            <span className="mx-4 text-white/60">|</span>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Main Content Area */}
          <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 lg:px-10 pt-48 lg:pt-64 pb-10">
            {/* Content Container - Left Aligned & Expanded */}
            <div className="max-w-3xl lg:max-w-4xl lg:pl-0 lg:-ml-8 text-left text-white space-y-6 pl-6 sm:pl-8 lg:pl-12">
              {/* Dynamic Headline */}
              <div className="flex flex-col space-y-2">
                <span className="text-4xl lg:text-6xl font-extrabold text-white">
                  {mainTitle1}
                </span>
                <span className="text-4xl lg:text-6xl font-extrabold text-[#FF6B57]">
                  {mainTitle2}
                </span>
                <span className="text-4xl lg:text-6xl font-extrabold text-[#FF6B57]">
                  {mainTitle3}
                </span>
              </div>

              {/* Dynamic Subtitle */}
              <p className="text-white/80 lg:text-lg font-light tracking-wide">
                {subtitle}
              </p>

              {/* Dynamic CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={ctaButtonLink}
                  className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition flex items-center justify-center space-x-2 w-fit"
                >
                  <span>{ctaButtonText}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section - Line + Icons - Absolutely Positioned */}
          <div className="absolute bottom-0 left-0 w-full z-10">
            {/* Full Width Line - No Padding */}
            <div className="relative w-full h-[3px] bg-white/20 overflow-visible flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="relative w-1/5 h-full">
                  <div
                    className="absolute h-full w-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-[1000ms] ease-in-out"
                    id={`line-fill-${i}`}
                  />
                </div>
              ))}
            </div>

            {/* Light Overlay for Bottom Section */}
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]" />

            {/* Features - Stretched Edge to Edge */}
            <div className="relative z-10 flex justify-between items-center px-8 sm:px-12 lg:px-16 py-12 pb-16 text-white">
              <div
                className="flex flex-col items-center text-center space-y-2"
                onMouseEnter={() => {
                  const element = document.getElementById("line-fill-0");
                  if (element) element.style.width = "100%";
                }}
                onMouseLeave={() => {
                  const element = document.getElementById("line-fill-0");
                  if (element) element.style.width = "0%";
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm leading-6">Assessments</p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-2"
                onMouseEnter={() => {
                  const element = document.getElementById("line-fill-1");
                  if (element) element.style.width = "100%";
                }}
                onMouseLeave={() => {
                  const element = document.getElementById("line-fill-1");
                  if (element) element.style.width = "0%";
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm leading-6">Coaching</p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-2"
                onMouseEnter={() => {
                  const element = document.getElementById("line-fill-2");
                  if (element) element.style.width = "100%";
                }}
                onMouseLeave={() => {
                  const element = document.getElementById("line-fill-2");
                  if (element) element.style.width = "0%";
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm leading-6">Training</p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-2"
                onMouseEnter={() => {
                  const element = document.getElementById("line-fill-3");
                  if (element) element.style.width = "100%";
                }}
                onMouseLeave={() => {
                  const element = document.getElementById("line-fill-3");
                  if (element) element.style.width = "0%";
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm leading-6">E-Motions</p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-2"
                onMouseEnter={() => {
                  const element = document.getElementById("line-fill-4");
                  if (element) element.style.width = "100%";
                }}
                onMouseLeave={() => {
                  const element = document.getElementById("line-fill-4");
                  if (element) element.style.width = "0%";
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm leading-6">Industry Insights</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSectionCMS;
