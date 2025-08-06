import React from "react";

const EnergyInMotionSection = () => {
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
            {`At Energy in Motion, we believe that true transformation begins with one simple yet
powerful shift—from within. We are a coaching and training practice dedicated to
human development across all life stages. From children and youth to adults and
professionals, we empower individuals with the tools to reconnect with themselves,
evolve through purposeful learning, and energize their lives with emotional strength,
clarity, and confidence.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergyInMotionSection;
