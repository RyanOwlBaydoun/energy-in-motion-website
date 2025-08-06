import React from "react";
import Image from "next/image";
import Link from "next/link";
import { emotionPrograms } from "@/utils/emotion-programs";

const EMotionProgramsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Detailed E-Motion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emotionPrograms.map((program, index) => (
            <Link
              key={program.id}
              href={`/e-motion/${program.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 block"
            >
              {/* Card Image with rounded bottom */}
              <div className="relative h-64 overflow-hidden">
                <div className="relative h-full w-full rounded-b-[2rem] overflow-hidden">
                  <Image
                    src="/images/about/Empowering_growth_through.JPG"
                    alt={`${program.title} E-Motion program`}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  {program.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E36B6B] mb-3 leading-tight">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EMotionProgramsSection;
