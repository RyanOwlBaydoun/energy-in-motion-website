import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Define schemas that actually exist
import assessment from "./sanity/schemas/assessment";
import testimonial from "./sanity/schemas/testimonial";

export default defineConfig({
  name: "energy-in-motion",
  title: "Energy In Motion CMS",

  projectId: "hy425cry",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      // Individual content schemas
      assessment,
      testimonial,
    ],
  },
});
