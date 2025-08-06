export interface CoachingProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  whoItsFor: string;
  purpose: string;
  innerFocus: string;
  otherFocus: string;
  outerFocus: string;
  programHighlights: {
    level1?: {
      title: string;
      description: string;
    };
    level2?: {
      title: string;
      description: string;
    };
  };
  keyBenefits: string[];
  category: string;
}

export const coachingPrograms: CoachingProgram[] = [
  {
    id: "crafting-leaders-persona",
    title: "Crafting the Leader's Persona",
    slug: "crafting-leaders-persona",
    description:
      "A foundational coaching program on self-awareness, regulation, and social connection\\ndesigned to help leaders develop their authentic leadership presence.",
    whoItsFor:
      "Leaders, managers, and professionals seeking to develop their authentic\\nleadership presence.",
    purpose:
      "Build authentic leadership presence through emotional intelligence and self-awareness.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Leadership Foundation",
        description:
          "Individual coaching sessions focused on identifying and developing your unique leadership style through emotional intelligence principles.",
      },
    },
    keyBenefits: [
      "Enhanced leadership authenticity",
      "Improved self-awareness and emotional regulation",
      "Strengthened interpersonal leadership skills.",
    ],
    category: "Coaching - Leadership",
  },
  {
    id: "beauty-beyond",
    title: "Beauty & Beyond",
    slug: "beauty-beyond",
    description:
      "A transformational coaching program for women focusing on inner strength,\\nconfidence, and professional empowerment.",
    whoItsFor:
      "Women professionals, leaders, and entrepreneurs seeking personal and\\nprofessional empowerment.",
    purpose:
      "Empower women to discover their inner strength and build confidence in all areas of life.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Inner Beauty & Strength",
        description:
          "Individual and group coaching sessions designed to help women reconnect with their inner strength and build unshakeable confidence.",
      },
    },
    keyBenefits: [
      "Enhanced self-confidence and inner strength",
      "Improved professional presence and communication",
      "Strengthened personal and professional relationships.",
    ],
    category: "Coaching - Leadership",
  },
];
