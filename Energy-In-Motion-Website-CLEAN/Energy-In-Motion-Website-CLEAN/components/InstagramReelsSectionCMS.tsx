"use client";

import React from "react";
import Image from "next/image";
import { SarahMainPage } from "@/types/sanity";

interface InstagramReelsSectionCMSProps {
  sarahData: SarahMainPage | null;
}

const InstagramReelsSectionCMS: React.FC<InstagramReelsSectionCMSProps> = ({
  sarahData,
}) => {
  // Helper function to get Sanity image URL
  const getSanityImageUrl = (image: any): string => {
    if (!image?.asset?._ref) return "/images/instagram/Instagram_Box_1.JPG"; // Fallback image

    const ref = image.asset._ref;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hy425cry";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

    // Extract image ID and extension from ref
    const parts = ref.replace("image-", "").split("-");
    const extension = parts.pop();
    const imageId = parts.join("-");

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${extension}`;
  };

  // Default values
  const sectionTitle =
    sarahData?.instagramSection?.sectionTitle || "Sarah on Instagram";
  const instagramPosts = sarahData?.instagramSection?.posts || [
    {
      image: null,
      title: "إنتزال أم إحترام؟",
      link: "https://www.instagram.com/reel/DE-KoTxhKM7/",
      order: 1,
    },
    {
      image: null,
      title: "الإمتنان والتقدير",
      link: "https://www.instagram.com/reel/DEz_gyGSmRu/",
      order: 2,
    },
    {
      image: null,
      title: "حتى التعاطف، هو فن",
      link: "https://www.instagram.com/reel/DEVUHe8sCun/",
      order: 3,
    },
    {
      image: null,
      title: "النجاح يحتاج إلى دقة",
      link: "https://www.instagram.com/reel/DENdRPwM1Tv/",
      order: 4,
    },
    {
      image: null,
      title: "كيف يمكن للفشل أن يؤسس للنجاح؟",
      link: "https://www.instagram.com/reel/DD4h4NMMJvS/",
      order: 5,
    },
  ];

  // Default fallback images
  const defaultImages = [
    "/images/instagram/Instagram_Box_1.JPG",
    "/images/instagram/Instagram_Box_2.JPG",
    "/images/instagram/Instagram_Box_3.JPG",
    "/images/instagram/Instagram_Box_4.JPG",
    "/images/instagram/Instagram_Box_5.JPG",
  ];

  // Sort posts by order and map with fallback images
  const sortedPosts = instagramPosts
    .sort((a, b) => a.order - b.order)
    .map((post, index) => ({
      ...post,
      imageUrl: post.image
        ? getSanityImageUrl(post.image)
        : defaultImages[index] || defaultImages[0],
    }));

  return (
    <section className="instagram-section">
      {/* Custom CSS for Instagram cards - ORIGINAL STYLING RESTORED */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
            
            .instagram-section {
              max-width: 100%;
              width: 100%;
              margin: 0;
              padding: 4rem 0;
              background: white;
            }
            
            .instagram-header {
              display: flex;
              align-items: end;
              gap: 20px;
              margin-left: 8%;
              margin-bottom: 40px;
            }
            
            .instagram-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 46px;
              color: #333;
              margin: 0;
              font-weight: 400;
              white-space: nowrap;
            }
            
            .instagram-title strong {
              font-weight: 700;
            }
            
            .title-redline {
              width: 44vw;
              height: 2px;
              background-color: #E75145;
              margin-bottom: 0;
              transform: translateY(-20px);
            }
            
            .reels-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
              gap: 8px;
              max-width: 100%;
              margin: 0;
              padding: 0 2rem;
              justify-content: center;
            }
            
            .reel-card {
              position: relative;
              border-radius: 0;
              overflow: hidden;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              width: 100%;
              height: 336px;
              cursor: pointer;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .reel-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            }
            
            /* Responsive Design */
            @media (max-width: 1200px) {
              .reels-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 6px;
              }
              
              .instagram-header {
                margin-left: 6%;
              }
              
              .instagram-title {
                font-size: 39px;
              }
              
              .title-redline {
                width: 44vw;
                height: 2px;
                margin-bottom: 0;
                transform: translateY(-15px);
              }
            }
            
            @media (max-width: 768px) {
              .instagram-section {
                padding: 3rem 0;
              }
              
              .reels-grid {
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 4px;
                padding: 0 1rem;
              }
              
              .reel-card {
                height: 295px;
              }
              
              .instagram-title {
                font-size: 34px;
              }
              
              .instagram-header {
                margin-left: 4%;
                gap: 15px;
              }
              
              .title-redline {
                width: 48vw;
                height: 2px;
                margin-bottom: 0;
                transform: translateY(-10px);
              }
            }
            
            @media (max-width: 480px) {
              .reels-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 4px;
              }
              
              .reel-card {
                height: 263px;
              }
              
              .instagram-title {
                font-size: 29px;
              }
              
              .instagram-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                margin-left: 2%;
              }
              
              .title-redline {
                width: 52vw;
                height: 2px;
                margin-bottom: 0;
                transform: translateY(-7px);
              }
            }
          `,
        }}
      />

      {/* Section Header - ORIGINAL LAYOUT: Flex with red line next to title */}
      <div className="instagram-header">
        <h2 className="instagram-title">
          {sectionTitle.includes("Instagram") ? (
            <>
              {sectionTitle.split(" ")[0]} on{" "}
              <strong>{sectionTitle.split(" ")[2] || "Instagram"}</strong>
            </>
          ) : (
            sectionTitle
          )}
        </h2>
        <div className="title-redline"></div>
      </div>

      {/* Instagram Posts Grid - ORIGINAL STYLING */}
      <div className="reels-grid">
        {sortedPosts.map((post, index) => (
          <a
            key={`post-${index}`}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="reel-card"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramReelsSectionCMS;
