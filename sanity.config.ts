import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Import all schemas from the complete schema collection
import { schemaTypes } from "./schemaTypes";

// Custom desk structure to surface singleton Site Settings at the top
import type { StructureBuilder } from "sanity/structure";

export default defineConfig({
  name: "energy-in-motion",
  title: "Energy In Motion CMS",

  projectId: "hy425cry",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings singleton
            S.listItem()
              .title('Site Settings')
              .child(
                S.editor()
                  .title('Site Settings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Fall back to all other document types
            ...S.documentTypeListItems().filter(
              (li) => li.getId() !== 'siteSettings'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
