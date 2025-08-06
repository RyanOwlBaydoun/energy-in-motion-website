import { NextResponse } from "next/server";
import { sanityClient } from "@/utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "@/utils/sanity-queries";

export async function GET() {
  try {
    const data = await sanityClient.fetch(TRAINING_COURSES_QUERY);
    return NextResponse.json({
      success: true,
      data: data || [],
      count: data?.length || 0,
    });
  } catch (error) {
    console.error("API Error fetching training courses:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        data: [],
        count: 0,
      },
      { status: 500 }
    );
  }
}
