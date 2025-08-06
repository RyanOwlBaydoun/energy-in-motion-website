"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SarahMainPage } from "@/types/sanity";

interface SarahHeroSectionCMSProps {
  sarahData: SarahMainPage | null;
}

const SarahHeroSectionCMS: React.FC<SarahHeroSectionCMSProps> = ({
  sarahData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/about/Sarah_Daou_EQ_Coach.png"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values
  const heroTitle = sarahData?.heroSection?.title || "SARAH DAOU";
  const heroSubtitle = sarahData?.heroSection?.subtitle || "EQ Coach";
  const backgroundImageUrl = getSanityImageUrl(
    sarahData?.heroSection?.backgroundImage
  );
  const overlayOpacity = sarahData?.heroSection?.overlayOpacity || 0.4;

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-20">
        {/* Hero Image with Overlay - Rectangular Form */}
        <div className="relative rounded-[24px] w-full h-[315px] md:h-[400px] overflow-hidden">
          <Image
            src={backgroundImageUrl}
            alt={`${heroTitle} - ${heroSubtitle}`}
            fill
            className="object-cover"
            priority
          />

          {/* Dynamic overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          ></div>

          {/* Logo - Clickable, matches homepage exactly */}
          <Link
            href="/"
            className="absolute top-6 left-6 z-20 text-white text-sm font-semibold leading-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="block text-white">ENERGY IN</span>
            <span className="block font-cursive text-yellow-400 text-2xl -mt-1">
              motion
            </span>
          </Link>

          {/* Navigation Bar - Top Right */}
          <nav className="absolute top-6 right-6 z-30 text-white text-sm font-medium hidden md:flex items-center">
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

          {/* Hero Text - Positioned at 2/3 down, left side */}
          <div className="absolute top-2/3 left-6 transform -translate-y-1/2">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-3">
              {heroTitle}
            </h1>
            <div className="text-[#FDC13E] text-2xl md:text-3xl font-bold leading-tight">
              {heroSubtitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SarahHeroSectionCMS;
