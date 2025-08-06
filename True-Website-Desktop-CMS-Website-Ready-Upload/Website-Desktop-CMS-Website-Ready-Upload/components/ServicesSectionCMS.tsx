"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { HomeMainPage } from "@/types/sanity-home";

interface ServicesSectionCMSProps {
  homeData: HomeMainPage | null;
}

// Helper function for clean line breaks
const renderWithBreaks = (lines: string[]) => (
  <>
    {lines.map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < lines.length - 1 && <br />}
      </React.Fragment>
    ))}
  </>
);

interface ServiceCardProps {
  service: {
    content: React.ReactNode;
  };
  iconPath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, iconPath }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Service Icon */}
      <div className="w-12 h-12 bg-[#FF6B57] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
        <TrendingUp className="w-6 h-6 text-white" />
      </div>

      {/* Service Title with JSX Content */}
      <h3 className="text-[16px] font-semibold text-[#0B2B2E] leading-tight">
        {service.content}
      </h3>
    </div>
  );
};

const ServicesSectionCMS: React.FC<ServicesSectionCMSProps> = ({
  homeData,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Coaching");

  // Default values from CMS or fallback to original structure
  const sectionTitle =
    homeData?.servicesSection?.sectionTitle || "Services That";
  const sectionSubtitle =
    homeData?.servicesSection?.sectionSubtitle || "Drive Growth";
  const ctaButtonText =
    homeData?.servicesSection?.ctaButtonText || "Explore Programs";

  // Build services data from CMS or use original fallback
  const servicesData = homeData?.servicesSection?.tabs?.reduce(
    (acc, tab) => {
      acc[tab.tabName] = tab.services.map((service) => ({
        content: service.serviceSubname?.trim()
          ? renderWithBreaks([service.serviceName, service.serviceSubname])
          : service.serviceName,
      }));
      return acc;
    },
    {} as Record<string, any[]>
  ) || {
    Coaching: [
      { content: renderWithBreaks(["Leadership", "Coaching"]) },
      { content: renderWithBreaks(["Executive", "Coaching"]) },
      { content: renderWithBreaks(["Business", "Coaching"]) },
      { content: renderWithBreaks(["Team", "Coaching"]) },
      { content: renderWithBreaks(["Career", "Coaching"]) },
      { content: renderWithBreaks(["EQ", "Coaching"]) },
      { content: renderWithBreaks(["Relationship", "Coaching"]) },
      { content: renderWithBreaks(["Life", "Coaching"]) },
      { content: renderWithBreaks(["Youth &", "Adolescence"]) },
      { content: renderWithBreaks(["Positive", "Psychology"]) },
      { content: renderWithBreaks(["Wellbeing Group", "Coaching"]) },
    ],
    Training: [
      { content: "Leadership" },
      { content: renderWithBreaks(["Professional", "Development"]) },
      { content: "Sales" },
      { content: renderWithBreaks(["Business", "Communication"]) },
      { content: renderWithBreaks(["Emotional", "Intelligence"]) },
      { content: renderWithBreaks(["EQ for Healthcare", "Professionals"]) },
      { content: "Wellbeing" },
      { content: renderWithBreaks(["Youth", "Development"]) },
      { content: renderWithBreaks(["Women", "Empowerment"]) },
    ],
    "E-motions": [
      { content: renderWithBreaks(["Mastering EQ", "Level 1"]) },
      { content: renderWithBreaks(["Mastering EQ", "Level 2"]) },
      {
        content: (
          <>
            EQ Elevate:
            <br />
            <span style={{ color: "#FF6B57" }}>
              Youth Wellbeing
              <br />& Success
            </span>
          </>
        ),
      },
      {
        content: (
          <>
            EQ Evolve:
            <br />
            <span style={{ color: "#FF6B57" }}>
              Life and
              <br />
              Leadership
            </span>
          </>
        ),
      },
      { content: renderWithBreaks(["EQ Daily", "Practices"]) },
      { content: renderWithBreaks(["EQ Training", "Series"]) },
      {
        content: (
          <>
            Smart Heart
            <br />
            <span style={{ color: "#FF6B57" }}>
              EQ for Healthcare
              <br />
              Professionals
            </span>
          </>
        ),
      },
      {
        content: (
          <>
            Building
            <br />
            Leadership
            <br />
            <span style={{ color: "#FF6B57" }}>Success Through EQ</span>
          </>
        ),
      },
    ],
  };

  // Get available tabs
  const availableTabs =
    homeData?.servicesSection?.tabs?.map((tab) => tab.tabName) ||
    Object.keys(servicesData);

  // Set initial active tab
  React.useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.includes(activeTab)) {
      setActiveTab(availableTabs[0]);
    }
  }, [availableTabs, activeTab]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div
        className="max-w-screen-xl mx-auto py-16 px-6 rounded-[32px]"
        style={{ backgroundColor: "#e6dfdb" }}
      >
        {/* Header: Title Left Above Leadership + Tabs at Specific Positions */}
        <div className="relative mb-8">
          {/* Section Title - Moved 5% Left */}
          <div className="absolute" style={{ left: "5%", top: "-5%" }}>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-[#1f1f1f]">
              {sectionTitle}
              <br />
              <span className="font-bold">{sectionSubtitle}</span>
            </h2>
          </div>

          {/* Tabs - Repositioned with Better Spacing */}
          <div className="relative w-full h-16 flex items-center">
            {availableTabs.includes("Coaching") && (
              <button
                onClick={() => setActiveTab("Coaching")}
                className={`absolute text-base font-medium cursor-pointer transition-colors duration-200 ${
                  activeTab === "Coaching"
                    ? "text-[#1f1f1f] font-semibold border-b-2 border-[#e65f3e] pb-1"
                    : "text-[#b2a7a2] hover:text-[#1f1f1f]"
                }`}
                style={{ left: "45%" }}
                aria-label="Switch to Coaching services"
              >
                Coaching
              </button>
            )}

            {availableTabs.includes("Training") && (
              <button
                onClick={() => setActiveTab("Training")}
                className={`absolute text-base font-medium cursor-pointer transition-colors duration-200 ${
                  activeTab === "Training"
                    ? "text-[#1f1f1f] font-semibold border-b-2 border-[#e65f3e] pb-1"
                    : "text-[#b2a7a2] hover:text-[#1f1f1f]"
                }`}
                style={{ left: "65%" }}
                aria-label="Switch to Training services"
              >
                Training
              </button>
            )}

            {availableTabs.includes("E-motions") && (
              <button
                onClick={() => setActiveTab("E-motions")}
                className={`absolute text-base font-medium cursor-pointer transition-colors duration-200 ${
                  activeTab === "E-motions"
                    ? "text-[#1f1f1f] font-semibold border-b-2 border-[#e65f3e] pb-1"
                    : "text-[#b2a7a2] hover:text-[#1f1f1f]"
                }`}
                style={{ left: "85%" }}
                aria-label="Switch to E-motions services"
              >
                E-motions
              </button>
            )}
          </div>
        </div>

        {/* Services Grid - 4 columns aligned with header */}
        <div
          className="grid grid-cols-4 gap-x-8 gap-y-10 mt-12 mb-12"
          style={{ paddingLeft: "5%" }}
        >
          {servicesData[activeTab as keyof typeof servicesData]?.map(
            (service, index) => (
              <ServiceCard
                key={`${activeTab}-${index}`}
                service={service}
                iconPath="/images/services/growth-icon.png"
              />
            )
          )}
        </div>

        {/* CTA Button - Left Aligned with Title */}
        <div className="relative pb-16">
          <div className="absolute" style={{ left: "5%" }}>
            <button className="bg-[#f7c500] hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full shadow">
              {ctaButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionCMS;
