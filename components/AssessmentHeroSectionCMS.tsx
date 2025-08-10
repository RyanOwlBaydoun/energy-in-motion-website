import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AssessmentMainPage } from "@/types/sanity";

interface AssessmentHeroSectionProps {
  assessmentMainData?: AssessmentMainPage | null;
}

const AssessmentHeroSectionCMS: React.FC<AssessmentHeroSectionProps> = ({
  assessmentMainData,
}) => {
  // Cache busting helper for development
  const getCacheBustedImageUrl = (imageUrl: string) => {
    if (process.env.NODE_ENV === "development" && imageUrl) {
      const separator = imageUrl.includes("?") ? "&" : "?";
      return `${imageUrl}${separator}t=${Date.now()}`;
    }
    return imageUrl;
  };

  // Convert Sanity image to URL
  const getImageUrl = (sanityImage: any) => {
    if (!sanityImage?._ref && !sanityImage?.asset?._ref) return null;

    const ref = sanityImage._ref || sanityImage.asset._ref;
    const imageUrlPattern = /image-([a-f0-9]+)-(\d+x\d+)-(\w+)/;
    const match = ref.match(imageUrlPattern);

    if (match) {
      const [, imageId, dimensions, format] = match;
      return `https://cdn.sanity.io/images/hy425cry/production/${imageId}-${dimensions}.${format}`;
    }
    return null;
  };

  // Default values if no CMS data
  const title = assessmentMainData?.title || "ASSESSMENTS";
  const subtitle = assessmentMainData?.subtitle || "Insight. Clarity.";
  const description = assessmentMainData?.description || "Growth.";
  const heroImageUrl = assessmentMainData?.heroImage
    ? getImageUrl(assessmentMainData.heroImage)
    : "/images/hero/hero-coach.jpg"; // Fallback assessment hero image
  const overlayOpacity = assessmentMainData?.heroOverlayOpacity || 0.4;

  // Ensure heroImageUrl is always a string
  const finalHeroImageUrl = heroImageUrl || "/images/hero/hero-coach.jpg";

  // Force new deployment - all TypeScript errors fixed

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-20">
        {/* Shared Hero Image - Used across ALL assessment pages */}
        <div className="relative rounded-[24px] w-full h-[315px] md:h-[400px] overflow-hidden">
          <Image
            src={getCacheBustedImageUrl(finalHeroImageUrl)}
            alt={`${title} - ${subtitle} ${description}`}
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
              maxWidth: 'var(--logo-max-width)',
              width: 'var(--logo-width-desktop)'
            }}
          >
            <span className="block text-white">ENERGY IN</span>
            <span className="block font-cursive text-yellow-400 text-2xl -mt-1">
              motion
            </span>
          </Link>

          {/* Navigation Bar - Top Right */}
          <nav
            className="absolute top-6 right-6 z-30 text-white font-medium hidden md:flex items-center"
            style={{ fontSize: 'var(--nav-font-size)', letterSpacing: 'var(--nav-letter-spacing)' as any }}
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
            <a href="#blog" className="hover:text-yellow-400 transition-colors">
              Blog
            </a>
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

          {/* Main Content - Assessments */}
          <div className="absolute top-2/3 left-6 transform -translate-y-1/2">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-3">
              {title}
            </h1>
            <div className="text-[#FDC13E] text-2xl md:text-3xl font-bold leading-tight">
              {subtitle}
              <br />
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHeroSectionCMS;
