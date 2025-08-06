"use client";

import { HomeMainPage } from "@/types/sanity-home";

interface TestimonialsSectionCMSProps {
  homeData: HomeMainPage | null;
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
}) => {
  return (
    <div className="bg-[#e6dfdb] rounded-2xl p-6 text-center flex flex-col justify-center h-full shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-[20px] text-[#0B2B2E] leading-snug">
        {quote.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSectionCMS: React.FC<TestimonialsSectionCMSProps> = ({
  homeData,
}) => {
  // Get data from CMS or use fallback
  const sectionTitle =
    homeData?.testimonialsSection?.sectionTitle || "Real Success Stories";
  const sectionSubtitle =
    homeData?.testimonialsSection?.sectionSubtitle || "from Our Clients";

  // Testimonials from CMS or fallback
  const testimonials = homeData?.testimonialsSection?.testimonials?.sort(
    (a, b) => a.order - b.order
  ) || [
    {
      quote:
        "Our Backyard has been \ncompeletly transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
      name: "NATALIE BROOKS",
      company: "Emaar Properties",
      order: 1,
    },
    {
      quote:
        "Our Backyard has been \ncompeletly transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
      name: "NATALIE BROOKS",
      company: "Emaar Properties",
      order: 2,
    },
    {
      quote:
        "Our Backyard has been \ncompeletly transformed! The \nteam was professional, attentive. \nand delivered beyond our \nexpectations",
      name: "NATALIE BROOKS",
      company: "Emaar Properties",
      order: 3,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom CSS for header positioning and red line styling */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .testimonials-header-container {
                margin-left: 9%;
                margin-bottom: 3rem;
              }
              
              .testimonials-red-line {
                width: 44vw !important;
                height: 2px !important;
                background-color: #FF6B57 !important;
                transform: translateY(-8px) !important;
                margin-left: -9% !important;
              }
              
              /* Make testimonial boxes slightly smaller with rounded edges */
              .testimonial-card-enlarged {
                transform: scale(1.08);
                margin: 0.25rem;
                border-radius: 8px;
                overflow: hidden;
              }
              
              /* Add rounded edges to the actual testimonial cards */
              .testimonial-card-enlarged > div {
                border-radius: 20px !important;
              }
              
              /* Responsive adjustments */
              @media (max-width: 1024px) {
                .testimonials-header-container {
                  margin-left: 7%;
                }
                
                .testimonials-red-line {
                  width: 44vw !important;
                  transform: translateY(-5px) !important;
                }
                
                .testimonial-card-enlarged {
                  transform: scale(1.06);
                  margin: 0.2rem;
                }
              }
              
              @media (max-width: 768px) {
                .testimonials-header-container {
                  margin-left: 4%;
                }
                
                .testimonials-red-line {
                  width: 48vw !important;
                  transform: translateY(-3px) !important;
                }
                
                .testimonial-card-enlarged {
                  transform: scale(1.04);
                  margin: 0.15rem;
                }
              }
              
              @media (max-width: 480px) {
                .testimonials-header-container {
                  margin-left: 2%;
                }
                
                .testimonials-red-line {
                  width: 52vw !important;
                  transform: translateY(0px) !important;
                }
                
                .testimonial-card-enlarged {
                  transform: scale(1.02);
                  margin: 0.1rem;
                }
              }
            `,
          }}
        />

        <div className="testimonials-header-container">
          <div className="flex items-end gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="font-semibold text-black">{sectionTitle}</span>
              <br />
              <span className="font-normal text-black">{sectionSubtitle}</span>
            </h2>
            <div className="testimonials-red-line h-[2px] bg-[#FF6B57]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={`testimonial-${index}`} className="flex flex-col">
              <div className="testimonial-card-enlarged">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[23px] font-bold text-[#000] mb-0 leading-tight">
                  {testimonial.name}
                </p>
                <p className="text-[#FF6B57] text-[16px] leading-tight">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionCMS;
