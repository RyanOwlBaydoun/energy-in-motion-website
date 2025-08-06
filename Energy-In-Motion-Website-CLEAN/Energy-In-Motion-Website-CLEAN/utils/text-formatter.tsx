import React from "react";

/**
 * 🎨 TEXT FORMATTER UTILITY FOR CMS CONTENT
 *
 * This utility provides special text formatting capabilities for all CMS content:
 *
 * 📝 FEATURES:
 * ============
 * 1. 🔸 LINE BREAKS: Press Enter in CMS text fields to create new lines
 * 2. 🔸 BOLD TEXT: Wrap text with *asterisks* to make it bold
 *
 * 🛠️ USAGE EXAMPLES:
 * ==================
 * formatText() - For paragraphs and descriptions
 * formatTextAsSpan() - For titles and headings
 *
 * 📋 CMS INPUT EXAMPLES:
 * ======================
 * Input:  "Assessments for\nPersonal & Team Growth"
 * Output: Two lines with line break
 *
 * Input:  "Unlock your *leadership* and emotional\nintelligence potential"
 * Output: Bold "leadership" text with line break
 *
 * Input:  "*Important Notice*\nThis is regular text"
 * Output: Bold first line, regular second line
 *
 * 🎯 SUPPORTED IN:
 * ================
 * ✅ Assessments Section (Title & Description)
 * ✅ All multi-line text fields in Home Main Page CMS
 * ✅ Future sections (easily expandable)
 */

export function formatText(text: string | null | undefined): React.ReactNode {
  if (!text) return null;

  // Split text by line breaks first
  const lines = text.split("\n");

  return lines.map((line, lineIndex) => {
    // Process each line for bold formatting
    const parts = line.split(/(\*[^*]+\*)/g);

    const processedLine = parts.map((part, partIndex) => {
      // Check if this part is wrapped in asterisks
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        // Remove asterisks and make bold
        const boldText = part.slice(1, -1);
        return (
          <strong key={`${lineIndex}-${partIndex}`} className="font-bold">
            {boldText}
          </strong>
        );
      }

      // Return regular text
      return part;
    });

    // Add line break after each line except the last one
    return (
      <React.Fragment key={lineIndex}>
        {processedLine}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

/**
 * Alternative version for plain text contexts (like titles)
 * Returns processed text with proper line breaks but bold as spans
 */
export function formatTextAsSpan(
  text: string | null | undefined
): React.ReactNode {
  if (!text) return null;

  // Split text by line breaks first
  const lines = text.split("\n");

  return lines.map((line, lineIndex) => {
    // Process each line for bold formatting
    const parts = line.split(/(\*[^*]+\*)/g);

    const processedLine = parts.map((part, partIndex) => {
      // Check if this part is wrapped in asterisks
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        // Remove asterisks and make bold
        const boldText = part.slice(1, -1);
        return (
          <span key={`${lineIndex}-${partIndex}`} className="font-bold">
            {boldText}
          </span>
        );
      }

      // Return regular text
      return part;
    });

    // Add line break after each line except the last one, with nowrap for each line
    return (
      <React.Fragment key={lineIndex}>
        <span className="whitespace-nowrap">{processedLine}</span>
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

/**
 * Simple version that just handles line breaks (for compatibility)
 */
export function formatLineBreaks(text: string | null | undefined): string {
  if (!text) return "";
  return text;
}
