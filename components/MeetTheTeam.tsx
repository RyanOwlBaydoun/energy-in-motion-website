"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const MeetTheTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Mitchell",
      role: "Co Founder",
      image: "/images/about/team/The_Team_1.JPG",
    },
    {
      name: "Emily Carter",
      role: "Project Coordinator",
      image: "/images/about/team/The_Team_2.JPG",
    },
    {
      name: "Olivia Martinez",
      role: "Software Engineer",
      image: "/images/about/team/The_Team_3.JPG",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="w-[98%] max-w-[1200px] mx-auto bg-[#e6dfdb] px-6 py-16 rounded-3xl">
        {/* Section Heading - Moved Right */}
        <div className="mb-12 text-left ml-32">
          <h2 className="text-[32px] md:text-[42px] font-normal text-gray-900 leading-snug">
            Experienced Coaches{" "}
            <span style={{ color: "#ed7566", fontWeight: "600" }}>
              Dedicated
            </span>
          </h2>
          <h2
            className="text-[32px] md:text-[42px] font-semibold leading-snug -mt-0.5"
            style={{ color: "#ed7566" }}
          >
            to you
          </h2>
        </div>

        {/* Team Grid - Side by side with minimal spacing, moved right */}
        <div className="mt-12 ml-32">
          <div className="grid gap-0 md:grid-cols-3 justify-items-start">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`text-center w-full max-w-[265px] ${
                  index === 1 ? "-ml-10" : index === 2 ? "-ml-20" : ""
                }`}
              >
                {/* Team Member Image */}
                <div className="relative w-full h-[336px] rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Team Member Info */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
