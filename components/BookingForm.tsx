"use client";

import React, { useState } from "react";

interface BookingFormProps {
  sourcePage?: string;
  headingSize?: string;
  bodySize?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  sourcePage = "unknown",
  headingSize,
  bodySize,
  buttonLabel,
  buttonHref,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePage,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your booking request has been submitted successfully. We'll contact you soon to confirm your appointment.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          location: "",
          date: "",
        });
      } else {
        let errorMessage =
          result.error || "Failed to submit booking. Please try again.";

        // Provide more helpful error messages
        if (result.error?.includes("not fully configured")) {
          errorMessage =
            "Booking system is being set up. Please try again later or contact support.";
        } else if (result.error?.includes("Network error")) {
          errorMessage =
            "Connection issue. Please check your internet and try again.";
        }

        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-12">
          {/* Left Side - Title and Description */}
          <div className="space-y-5 flex-shrink-0 text-left md:pr-6">
            <div className="space-y-1">
              <h2
                className="font-light text-[#E36B6B]"
                style={{ fontSize: headingSize || 'clamp(1.5rem, 2vw, 2rem)' }}
              >
                Book an
              </h2>
              <h2
                className="font-semibold text-[#E36B6B]"
                style={{ fontSize: headingSize || 'clamp(1.5rem, 2vw, 2rem)' }}
              >
                Appointment
              </h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              <span style={{ fontSize: bodySize || 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                Take the first step toward your personal and professional growth! Schedule a session today to explore
              </span>
            </p>
          </div>

          {/* Right Side - Booking Form */}
          <div className="w-full max-w-xl flex-shrink-0">
            <div className="bg-[#EFE7E2] p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Fill out the form below to request your business coach
                appointment. We'll confirm your time and send you a reminder
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Name and Email Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-white focus:border-[#E36B6B] outline-none transition-all placeholder-gray-700 font-medium text-gray-800 text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-white focus:border-[#E36B6B] outline-none transition-all placeholder-gray-700 font-medium text-gray-800 text-sm disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Location and Date Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-white focus:border-[#E36B6B] outline-none transition-all placeholder-gray-700 font-medium text-gray-800 text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder="dd/mm/yyyy"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-white focus:border-[#E36B6B] outline-none transition-all placeholder-gray-700 font-medium text-gray-800 text-sm disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                {buttonHref ? (
                  <a
                    href={buttonHref}
                    className="mt-6 w-full inline-flex justify-center py-3 bg-[#FEC122] hover:bg-[#e6ad1e] rounded-full font-semibold text-gray-900 transition-colors duration-200"
                  >
                    {buttonLabel || 'Book an Appointment'}
                  </a>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full py-3 bg-[#FEC122] hover:bg-[#e6ad1e] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full font-semibold text-gray-900 transition-colors duration-200 focus:ring-2 focus:ring-[#FEC122] focus:ring-offset-2 outline-none"
                    aria-label="Book an appointment"
                  >
                    {isSubmitting ? "Submitting..." : (buttonLabel || "Book an Appointment")}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
