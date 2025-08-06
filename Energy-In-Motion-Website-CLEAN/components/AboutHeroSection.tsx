"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-20">
        {/* Hero Image with Overlay - Rectangular Form */}
        <div className="relative rounded-[24px] w-full h-[315px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/hero/Banner_About.png"
            alt="About Energy in Motion - Team in discussion"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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

          {/* Heading Text - Repositioned and Fixed Alignment */}
          <div className="absolute bottom-8 left-6 right-6">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-3">
              ABOUT
            </h1>
            <div className="text-[#FDC13E] text-4xl md:text-5xl font-bold leading-tight">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <span>Clarity.</span>
                <span>Courage.</span>
              </div>
              <div className="mt-2">Human Impact.</div>
            </div>
          </div>
        </div>

        {/* Body Text - Two Column Layout */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-700">
            {/* Left Column */}
            <div className="lg:pl-12">
              <p className="text-lg leading-tight">
                At Energy in Motion, we believe that true transformation
                <br />
                begins with one simple yet powerful shift—from within.
                <br />
                We are a coaching and training practice dedicated to
                <br />
                human development across all life stages. From children
                <br />
                and youth to adults and professionals, we empower
                <br />
                individuals with the tools to reconnect with themselves,
                <br />
                evolve through purposeful learning, and energize their
                <br />
                lives with emotional strength, clarity, and confidence.
                <br />
                Whether in schools, companies, healthcare facilities or
                <br />
                individual journeys, we help people shift—from stress to
                <br />
                strength, from confusion to clarity, from functioning to
                <br />
                flourishing.
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

export default AboutHeroSection;
