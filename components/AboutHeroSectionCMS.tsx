"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutMainPage } from "@/types/sanity";

interface AboutHeroSectionCMSProps {
  aboutData: AboutMainPage | null;
}

const AboutHeroSectionCMS: React.FC<AboutHeroSectionCMSProps> = ({
  aboutData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/hero/Banner_About.png"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Clean projectId to remove any whitespace or line breaks
    const normalizedProjectId = projectId
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/\s+/g, "")
      .trim();

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${normalizedProjectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values
  const heroTitle = aboutData?.heroSection?.title || "ABOUT";
  const heroSubtitle = aboutData?.heroSection?.subtitle || "Clarity. Courage.";
  const heroDescription =
    aboutData?.heroSection?.description || "Human Impact.";
  const backgroundImageUrl = getSanityImageUrl(
    aboutData?.heroSection?.backgroundImage
  );
  const overlayOpacity = aboutData?.heroSection?.overlayOpacity || 0.4;
  // Global nav sizing via CSS variables will be applied in RootLayout using site settings

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-20">
        {/* Hero Image with Overlay - Rectangular Form */}
        <div className="relative rounded-[24px] w-full h-[315px] md:h-[400px] overflow-hidden">
          <Image
            src={backgroundImageUrl}
            alt="About Energy in Motion - Team in discussion"
            fill
            className="object-cover"
            priority
          />

          {/* Dynamic Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          ></div>

          {/* Logo - Clickable, matches homepage exactly */}
          <Link
            href="/"
            className="absolute top-6 left-6 z-20 text-white font-semibold leading-tight hover:opacity-80 transition-opacity cursor-pointer"
            style={{
              maxWidth: "var(--logo-max-width)",
              width: "max(80px, var(--logo-width-desktop))",
              transform: "scale(var(--logo-scale-desktop))",
              transformOrigin: "top left",
            }}
          >
            <span
              className="block text-white"
              style={{ transform: "scale(var(--logo-energy-scale-desktop))", transformOrigin: "top left" }}
            >
              ENERGY IN
            </span>
            <span className="block font-cursive text-yellow-400 text-2xl -mt-1">
              motion
            </span>
          </Link>

          {/* Navigation Bar - Top Right */}
          <nav
            className="absolute top-6 right-6 z-30 text-white font-medium hidden md:flex items-center"
            style={{
              fontSize: "var(--nav-font-size)",
              letterSpacing: "var(--nav-letter-spacing)" as any,
            }}
          >
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
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Blog
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Testimonials
            </Link>
            <span className="mx-4 text-white/60">|</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Heading Text - Repositioned and Fixed Alignment */}
          <div className="absolute bottom-8 left-6 right-6">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-3">
              {heroTitle}
            </h1>
            <div className="text-[#FDC13E] text-4xl md:text-5xl font-bold leading-tight">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <span>{heroSubtitle}</span>
              </div>
              <div className="mt-2">{heroDescription}</div>
            </div>
          </div>
        </div>

        {/* Body Text - Two Column Layout */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-700">
            {/* Left Column */}
            <div className="lg:pl-12">
              <p className="text-lg leading-tight">
                {aboutData?.introSection?.content ||
                  "At Energy in Motion, we believe that true transformation begins with one simple yet powerful shift—from within. We are a coaching and training practice dedicated to human development across all life stages. From children and youth to adults and professionals, we empower individuals with the tools to reconnect with themselves, evolve through purposeful learning, and energize their lives with emotional strength, clarity, and confidence. Whether in schools, companies, healthcare facilities or individual journeys, we help people shift—from stress to strength, from confusion to clarity, from functioning to flourishing."}
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-lg leading-tight">
                We don't just teach skills. We spark growth.
                <br />
                We don't just talk about leadership. We build
                <br />
                it—through empathy, resilience, and human
                <br />
                connection.
                <br />
                We don't just guide youth. We equip them to rise
                <br />
                above pressure and thrive in a complex world.
                <br />
                Through every workshop, session, and program, we
                <br />
                live our purpose:
                <br />
                <span className="font-bold">Empower. Evolve. Energize.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSectionCMS;
