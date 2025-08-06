import { sanityClient } from "@/utils/sanity-client";
import { TRAINING_COURSES_QUERY } from "@/utils/sanity-queries";

async function getTestData() {
  try {
    const data = await sanityClient.fetch(TRAINING_COURSES_QUERY);
    return { success: true, data, error: null };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export default async function SimpleTestPage() {
  const result = await getTestData();

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Simple CMS Test</h1>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sanity Connection Test</h2>

          {result.success ? (
            <div className="space-y-4">
              <div className="p-3 bg-green-100 text-green-800 rounded">
                ✅ Successfully connected to Sanity CMS!
              </div>

              <div>
                <h3 className="font-semibold">
                  Found {result.data?.length || 0} training courses:
                </h3>
                <ul className="mt-2 space-y-2">
                  {result.data?.map((course: any, index: number) => (
                    <li key={index} className="p-2 bg-gray-50 rounded">
                      <strong>{course.title}</strong> - {course.category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-red-100 text-red-800 rounded">
                ❌ Failed to connect to Sanity CMS
              </div>

              <div>
                <h3 className="font-semibold">Error Details:</h3>
                <pre className="mt-2 p-3 bg-gray-100 rounded text-sm overflow-auto">
                  {result.error}
                </pre>
              </div>
            </div>
          )}

          <div className="mt-6 p-3 bg-blue-50 rounded">
            <h3 className="font-semibold">Configuration:</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>Project ID: hy425cry</li>
              <li>Dataset: production</li>
              <li>Environment: {process.env.NODE_ENV}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Simple CMS Test - Energy In Motion",
  description: "Basic test of Sanity CMS connection",
};
