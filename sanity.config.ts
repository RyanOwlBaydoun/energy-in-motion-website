import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Import all schemas from the complete schema collection
import { schemaTypes } from "./energy-in-motion/schemaTypes";

export default defineConfig({
  name: "energy-in-motion",
  title: "Energy In Motion CMS",

  projectId: "hy425cry",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
