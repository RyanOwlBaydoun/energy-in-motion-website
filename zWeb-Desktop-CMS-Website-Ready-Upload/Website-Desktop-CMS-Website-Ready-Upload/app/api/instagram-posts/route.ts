import { NextRequest, NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    // Instagram Basic Display API requires an access token
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("Instagram access token not found");
      // Return mock data when no access token is available
      return NextResponse.json({
        data: [
          {
            id: "mock_1",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Professional development and coaching insights",
            timestamp: new Date().toISOString(),
          },
          {
            id: "mock_2",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "VIDEO",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Leadership coaching session highlights",
            timestamp: new Date().toISOString(),
          },
          {
            id: "mock_3",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Transform your mindset with these key strategies",
            timestamp: new Date().toISOString(),
          },
          {
            id: "mock_4",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "VIDEO",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Behind the scenes of our coaching programs",
            timestamp: new Date().toISOString(),
          },
          {
            id: "mock_5",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Success stories from our community",
            timestamp: new Date().toISOString(),
          },
        ],
      });
    }

    // Fetch recent media from Instagram Basic Display API
    const instagramApiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=5&access_token=${accessToken}`;

    const response = await fetch(instagramApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache for 1 hour to avoid rate limiting
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(
        `Instagram API error: ${response.status} ${response.statusText}`
      );
    }

    const data: InstagramApiResponse = await response.json();

    // Filter and format the posts
    const formattedPosts = data.data
      .filter(
        (post) =>
          post.media_type === "IMAGE" ||
          post.media_type === "VIDEO" ||
          post.media_type === "CAROUSEL_ALBUM"
      )
      .slice(0, 5) // Ensure we only get 5 posts
      .map((post) => ({
        id: post.id,
        media_url: post.media_url,
        thumbnail_url: post.thumbnail_url || post.media_url,
        media_type: post.media_type,
        permalink: post.permalink,
        caption: post.caption || "",
        timestamp: post.timestamp,
      }));

    return NextResponse.json({
      data: formattedPosts,
      success: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);

    // Return error with mock data as fallback
    return NextResponse.json(
      {
        error: "Failed to fetch Instagram posts",
        data: [
          {
            id: "fallback_1",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Professional coaching insights - Follow @coachsarahdaou",
            timestamp: new Date().toISOString(),
          },
          {
            id: "fallback_2",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Leadership development content - Follow @coachsarahdaou",
            timestamp: new Date().toISOString(),
          },
          {
            id: "fallback_3",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Personal growth strategies - Follow @coachsarahdaou",
            timestamp: new Date().toISOString(),
          },
          {
            id: "fallback_4",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Transformational coaching - Follow @coachsarahdaou",
            timestamp: new Date().toISOString(),
          },
          {
            id: "fallback_5",
            media_url: "/images/about/sarah-dao.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/coachsarahdaou/",
            caption: "Success mindset tips - Follow @coachsarahdaou",
            timestamp: new Date().toISOString(),
          },
        ],
        success: false,
      },
      { status: 500 }
    );
  }
}
