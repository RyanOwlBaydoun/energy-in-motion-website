import { NextRequest, NextResponse } from "next/server";
import { sanityWriteClient } from "@/utils/sanity-client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, location, date, sourcePage } = body;

    // Validate required fields
    if (!name || !email || !location || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if we have the required token for writing
    if (!process.env.SANITY_API_TOKEN) {
      console.error("SANITY_API_TOKEN is not configured");
      return NextResponse.json(
        {
          error:
            "Booking system is not fully configured yet. Please contact the administrator.",
          details: "Missing API token for Sanity CMS",
        },
        { status: 503 }
      );
    }

    // Create booking document in Sanity
    const booking = await sanityWriteClient.create({
      _type: "booking",
      name,
      email,
      location,
      date,
      sourcePage: sourcePage || "unknown",
      status: "new",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully!",
        bookingId: booking._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking submission error:", error);

    // Provide more specific error messages
    if (
      error.message?.includes("token") ||
      error.message?.includes("unauthorized")
    ) {
      return NextResponse.json(
        {
          error:
            "Booking system is not fully configured yet. Please contact the administrator.",
          details: "Authentication issue with CMS",
        },
        { status: 503 }
      );
    }

    if (
      error.message?.includes("network") ||
      error.message?.includes("fetch")
    ) {
      return NextResponse.json(
        { error: "Network error. Please check your connection and try again." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit booking. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Optional: Get all bookings (for admin purposes)
    const bookings = await sanityWriteClient.fetch(`
      *[_type == "booking"] | order(submittedAt desc) {
        _id,
        name,
        email,
        location,
        date,
        sourcePage,
        status,
        submittedAt
      }
    `);

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
