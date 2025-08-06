"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <div className="flex gap-6 items-start p-2 transition-all duration-300 w-full">
      {/* Blog Image - Much Larger and More Prominent */}
      <div className="flex-shrink-0">
        <Image
          src={imagePath}
          alt={`Thumbnail of blog post about ${title}`}
          width={266}
          height={200}
          className="rounded-xl w-[266px] h-[200px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      {/* Blog Content - Smaller to give image prominence */}
      <div className="flex-1 pt-2">
        <h3 className="text-[18px] font-bold text-[#0B2B2E] mb-3 leading-tight">
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h3>
        <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
        <button className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC300] text-black text-[13px] font-bold px-4 py-2 rounded-full transition-colors duration-200 shadow-sm">
          Read more
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

const IndustryInsightsSection = () => {
  const blogs = [
    {
      title: "Mental wellness and Resilience The\nPower of Coaching",
      description:
        "In the fast-paced world of entrepreneurship, time is\none of...",
      imagePath: "/images/services/Industry_Insight_1.JPG",
    },
    {
      title: "How to Maintain Work-Life Balance in\na Busy world",
      description:
        "In the fast-paced world of entreprenourship, time is\none of...",
      imagePath: "/images/services/Industry_Insight_2.JPG",
    },
    {
      title: "The Power of Mindset Transforming\nYour Life & Business",
      description:
        "In the fast-paced world of entrepreneurship, time is\none of...",
      imagePath: "/images/services/Industry_Insight_3.JPG",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Background Container */}
        <div className="bg-[#e6dfdb] p-10 rounded-[32px]">
          {/* Main Container - Split Layout */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-2">
            {/* Left Side - Heading */}
            <div
              className="lg:w-[35%] flex-shrink-0"
              style={{ marginLeft: "7%" }}
            >
              <div className="lg:sticky lg:top-8">
                <p className="text-sm font-medium mb-2 uppercase tracking-wide">
                  <span className="text-green-500">//</span>
                  <span className="text-black"> NEWS/POST</span>
                </p>
                <h2 className="text-[32px] md:text-[42px] font-normal leading-tight text-left text-[#0B2B2E] mb-0">
                  Latest updates
                  <br />
                  and coaching
                  <br />
                  <span className="font-bold text-[#FF6B57]">
                    Industry Insights
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Side - Blog Cards - Expanded to full width */}
            <div className="flex-1 flex flex-col gap-2.5">
              {blogs.map((blog, index) => (
                <div key={index}>
                  <BlogCard
                    title={blog.title}
                    description={blog.description}
                    imagePath={blog.imagePath}
                  />
                  {/* Grey Divider Line - Don't show after last item */}
                  {index < blogs.length - 1 && (
                    <div className="flex justify-start mt-7 mb-5">
                      <div className="w-[620px] h-0.5 bg-gray-300 ml-[9px]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsightsSection;
