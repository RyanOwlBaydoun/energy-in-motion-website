import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Define schemas
import trainingCourse from "./sanity/schemas/training-course";
import assessment from "./sanity/schemas/assessment";
import testimonial from "./sanity/schemas/testimonial";

// Import main page schemas from energy-in-motion
import homeMainPage from "./energy-in-motion/schemaTypes/home-main-page";
import aboutMainPage from "./energy-in-motion/schemaTypes/about-main-page";
import sarahMainPage from "./energy-in-motion/schemaTypes/sarah-main-page";
import emotionMainPage from "./energy-in-motion/schemaTypes/emotion-main-page";
import coachingMainPage from "./energy-in-motion/schemaTypes/coaching-main-page";
import trainingMainPage from "./energy-in-motion/schemaTypes/training-main-page";
import assessmentMainPage from "./energy-in-motion/schemaTypes/assessment-main-page";
import coachingProgram from "./energy-in-motion/schemaTypes/coaching-program";
import emotionProgram from "./energy-in-motion/schemaTypes/emotion-program";
import booking from "./energy-in-motion/schemaTypes/booking";

export default defineConfig({
  name: "energy-in-motion",
  title: "Energy In Motion CMS",

  projectId: "hy425cry",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      // Main page schemas
      homeMainPage,
      aboutMainPage,
      sarahMainPage,
      emotionMainPage,
      coachingMainPage,
      trainingMainPage,
      assessmentMainPage,

      // Individual content schemas
      trainingCourse,
      coachingProgram,
      emotionProgram,
      assessment,
      testimonial,
      booking,
    ],
  },
});
