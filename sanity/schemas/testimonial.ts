export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "photo",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
