import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EmotionMainPage } from "@/types/sanity";

interface EMotionHeroSectionProps {
  emotionMainData?: EmotionMainPage | null;
}

const EMotionHeroSectionCMS: React.FC<EMotionHeroSectionProps> = ({
  emotionMainData,
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
  const title = emotionMainData?.title || "E-MOTION";
  const subtitle = emotionMainData?.subtitle || "Emotional Intelligence.";
  const description = emotionMainData?.description || "Real Change.";
  const heroImageUrl = emotionMainData?.heroImage
    ? getImageUrl(emotionMainData.heroImage)
    : "/images/hero/E-Motion_Hero.jpeg";
  const overlayOpacity = emotionMainData?.heroOverlayOpacity || 0.4;

  // Ensure heroImageUrl is always a string
  const finalHeroImageUrl = heroImageUrl || "/images/hero/E-Motion_Hero.jpeg";

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-20">
        {/* Hero Image with Overlay - Rectangular Form - Matches About/Training/Coaching Pages */}
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

          {/* Main Content - E-Motion */}
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

export default EMotionHeroSectionCMS;
