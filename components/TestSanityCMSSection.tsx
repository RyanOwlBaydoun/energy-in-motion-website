"use client";

import React, { useState, useEffect } from "react";
import { sanityClient } from "@/utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "@/utils/sanity-queries";
import { TrainingCourse, convertToLegacyFormat } from "@/types/sanity";
import { trainingCourses as legacyTrainingCourses } from "@/utils/training-courses";

interface TestSanityCMSSectionProps {
  useCMS?: boolean;
}

const TestSanityCMSSection: React.FC<TestSanityCMSSectionProps> = ({
  useCMS = false,
}) => {
  const [sanityData, setSanityData] = useState<TrainingCourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSanityData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch from our API route instead of directly from Sanity
      const response = await fetch("/api/training-courses");
      const result = await response.json();

      if (result.success) {
        setSanityData(result.data);
        console.log("✅ CMS data fetched successfully:", result.data);
      } else {
        throw new Error(result.error || "Failed to fetch data");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
      console.error("❌ CMS fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (useCMS) {
      fetchSanityData();
    }
  }, [useCMS]);

  const displayData = useCMS
    ? sanityData.map((course) => ({
        id: course._id,
        title: course.title,
        slug: course.slug?.current || course.slug,
        description: course.description,
        category: course.category,
        whoItsFor: "",
        purpose: "",
        innerFocus: "",
        otherFocus: "",
        outerFocus: "",
        programHighlights: {},
        keyBenefits: [],
      }))
    : legacyTrainingCourses;

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Test Controls */}
        <div className="bg-white rounded-lg p-6 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            🧪 CMS Integration Test
          </h2>

          <div className="flex gap-4 items-center mb-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Legacy Data ({legacyTrainingCourses.length} courses)
            </button>

            <button
              onClick={fetchSanityData}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading
                ? "Loading..."
                : `Fetch Sanity Data (${sanityData.length} courses)`}
            </button>
          </div>

          {/* Status Indicators */}
          <div className="flex gap-4 text-sm">
            <div
              className={`px-2 py-1 rounded ${useCMS ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
            >
              Mode: {useCMS ? "CMS" : "Legacy"}
            </div>

            {loading && (
              <div className="px-2 py-1 rounded bg-blue-100 text-blue-800">
                Loading...
              </div>
            )}

            {error && (
              <div className="px-2 py-1 rounded bg-red-100 text-red-800">
                Error: {error}
              </div>
            )}

            {sanityData.length > 0 && (
              <div className="px-2 py-1 rounded bg-green-100 text-green-800">
                ✅ CMS Connected
              </div>
            )}
          </div>
        </div>

        {/* Data Display */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Training Courses ({displayData.length} total)
          </h3>

          {displayData.slice(0, 3).map((course, index) => (
            <div
              key={course.id || index}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h4 className="font-semibold text-lg text-blue-700">
                {course.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
              <div className="mt-2 text-xs text-gray-500">
                Category: {course.category} | Slug: {typeof course.slug === 'string' ? course.slug : course.slug?.current || 'N/A'}
              </div>
            </div>
          ))}

          {displayData.length > 3 && (
            <div className="text-center text-gray-500 text-sm">
              ... and {displayData.length - 3} more courses
            </div>
          )}
        </div>

        {/* Instructions */}
        {sanityData.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-yellow-800 mb-2">
              📝 Next Steps to Test CMS:
            </h4>
            <ol className="list-decimal list-inside text-sm text-yellow-700 space-y-1">
              <li>
                Open Sanity Studio at <code>http://localhost:3333</code>
              </li>
              <li>Add some training courses using our schema</li>
              <li>Click "Fetch Sanity Data" to test the integration</li>
              <li>Compare results with legacy data</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestSanityCMSSection;
