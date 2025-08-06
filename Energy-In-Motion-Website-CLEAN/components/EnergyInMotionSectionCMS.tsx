"use client";

import React from "react";
import { HomeMainPage } from "@/types/sanity-home";

interface EnergyInMotionSectionCMSProps {
  homeData: HomeMainPage | null;
}

const EnergyInMotionSectionCMS: React.FC<EnergyInMotionSectionCMSProps> = ({
  homeData,
}) => {
  // Default content from CMS or fallback
  const content =
    homeData?.energyInMotionSection?.content ||
    `At Energy in Motion, we believe that true transformation begins with one simple yet
powerful shift—from within. We are a coaching and training practice dedicated to
human development across all life stages. From children and youth to adults and
professionals, we empower individuals with the tools to reconnect with themselves,
evolve through purposeful learning, and energize their lives with emotional strength,
clarity, and confidence.`;

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: "900px", padding: "4rem 2rem" }}
      >
        <div className="text-center">
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: "0.3px",
              color: "#0C3E40",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergyInMotionSectionCMS;
