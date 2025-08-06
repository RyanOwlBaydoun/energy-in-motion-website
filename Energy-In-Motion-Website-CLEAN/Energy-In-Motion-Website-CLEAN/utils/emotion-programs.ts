export interface EMotionProgram {
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

export const emotionPrograms: EMotionProgram[] = [
  {
    id: "empathy-leadership-1",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-1",
    description:
      "A foundational E-Motion program on developing empathetic leadership skills\\nthrough emotional intelligence and human connection.",
    whoItsFor:
      "Leaders, managers, and professionals who want to lead with empathy\\nand emotional intelligence.",
    purpose:
      "Develop empathetic leadership skills that create positive team dynamics and results.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Empathetic Leadership Foundation",
        description:
          "Interactive workshops and practical exercises designed to develop authentic empathy and emotional leadership capabilities.",
      },
    },
    keyBenefits: [
      "Enhanced empathetic leadership skills",
      "Improved team communication and trust",
      "Strengthened emotional intelligence in leadership contexts.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-2",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-2",
    description:
      "An advanced E-Motion program focusing on emotional resilience\\nand sustainable leadership practices.",
    whoItsFor:
      "Experienced leaders seeking to deepen their emotional intelligence\\nand leadership impact.",
    purpose:
      "Build emotional resilience and sustainable leadership practices for long-term success.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Advanced Emotional Leadership",
        description:
          "Deep-dive workshops on emotional resilience, sustainable leadership practices, and creating emotionally intelligent organizational cultures.",
      },
    },
    keyBenefits: [
      "Enhanced emotional resilience",
      "Improved sustainable leadership practices",
      "Strengthened organizational emotional intelligence.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-3",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-3",
    description:
      "A specialized E-Motion program for building emotionally intelligent teams\\nand fostering collaborative leadership environments.",
    whoItsFor:
      "Team leaders, department heads, and organizational leaders focused\\non building emotionally intelligent teams.",
    purpose:
      "Create emotionally intelligent teams and foster collaborative leadership environments.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Team Emotional Intelligence",
        description:
          "Comprehensive program focusing on building emotionally intelligent teams, collaborative leadership, and creating psychologically safe work environments.",
      },
    },
    keyBenefits: [
      "Enhanced team emotional intelligence",
      "Improved collaborative leadership skills",
      "Strengthened team psychological safety and performance.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-4",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-4",
    description:
      "A transformational E-Motion program for developing authentic leadership\\nthrough emotional mastery and purposeful action.",
    whoItsFor:
      "Senior leaders, executives, and change agents seeking to develop\\nauthentic, purpose-driven leadership.",
    purpose:
      "Develop authentic leadership through emotional mastery and purposeful action.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Authentic Leadership Mastery",
        description:
          "Executive-level program combining emotional mastery, authentic leadership development, and purposeful action for transformational leadership impact.",
      },
    },
    keyBenefits: [
      "Enhanced authentic leadership presence",
      "Improved emotional mastery and self-regulation",
      "Strengthened purposeful leadership impact.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-5",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-5",
    description:
      "An innovative E-Motion program focusing on leading through change\\nwith emotional intelligence and adaptive leadership skills.",
    whoItsFor:
      "Change leaders, transformation managers, and executives navigating\\norganizational change and uncertainty.",
    purpose:
      "Lead through change with emotional intelligence and adaptive leadership skills.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Change Leadership Excellence",
        description:
          "Specialized program for leaders navigating change, focusing on emotional intelligence during transitions, adaptive leadership, and building resilient teams through uncertainty.",
      },
    },
    keyBenefits: [
      "Enhanced change leadership capabilities",
      "Improved adaptive leadership skills",
      "Strengthened team resilience during transitions.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-6",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-6",
    description:
      "A comprehensive E-Motion program for developing global leadership skills\\nthrough cultural emotional intelligence and inclusive leadership practices.",
    whoItsFor:
      "Global leaders, multicultural team managers, and executives working\\nin diverse, international environments.",
    purpose:
      "Develop global leadership skills through cultural emotional intelligence and inclusive practices.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Global Leadership Excellence",
        description:
          "Advanced program for global leaders focusing on cultural emotional intelligence, inclusive leadership practices, and building high-performing multicultural teams.",
      },
    },
    keyBenefits: [
      "Enhanced cultural emotional intelligence",
      "Improved inclusive leadership practices",
      "Strengthened global team performance and collaboration.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-7",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-7",
    description:
      "A strategic E-Motion program designed for senior executives focusing on\\nempathetic decision-making and ethical leadership in complex environments.",
    whoItsFor:
      "Senior executives, C-level leaders, and board members who need to make\\ncomplex decisions with empathy and ethical consideration.",
    purpose:
      "Develop strategic empathetic leadership capabilities for complex decision-making environments.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Strategic Empathetic Leadership",
        description:
          "Executive-level program focusing on integrating empathy into strategic decision-making, ethical leadership practices, and stakeholder management in complex organizational environments.",
      },
    },
    keyBenefits: [
      "Enhanced strategic empathetic decision-making",
      "Improved ethical leadership practices",
      "Strengthened stakeholder relationship management.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-8",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-8",
    description:
      "A specialized E-Motion program for healthcare leaders focusing on\\ncompassionate leadership and emotional resilience in healthcare settings.",
    whoItsFor:
      "Healthcare administrators, medical directors, and healthcare team\\nleaders working in high-stress medical environments.",
    purpose:
      "Build compassionate healthcare leadership with emotional resilience for patient-centered care.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Compassionate Healthcare Leadership",
        description:
          "Specialized program for healthcare leaders focusing on patient-centered leadership, managing healthcare teams with empathy, and building emotional resilience in high-stress medical environments.",
      },
    },
    keyBenefits: [
      "Enhanced compassionate patient-centered leadership",
      "Improved healthcare team emotional support",
      "Strengthened emotional resilience in medical settings.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-9",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-9",
    description:
      "An innovative E-Motion program for educational leaders focusing on\\nstudent-centered empathetic leadership and emotional learning environments.",
    whoItsFor:
      "School principals, educational administrators, and academic leaders\\nworking in educational institutions at all levels.",
    purpose:
      "Create student-centered empathetic leadership and emotionally supportive learning environments.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Educational Empathetic Leadership",
        description:
          "Comprehensive program for educational leaders focusing on student-centered leadership, creating emotionally supportive learning environments, and leading educational teams with empathy and understanding.",
      },
    },
    keyBenefits: [
      "Enhanced student-centered empathetic leadership",
      "Improved emotionally supportive learning environments",
      "Strengthened educational team collaboration and support.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-10",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-10",
    description:
      "A transformational E-Motion program for non-profit leaders focusing on\\nmission-driven empathetic leadership and community impact.",
    whoItsFor:
      "Non-profit executives, community leaders, and social impact\\norganization directors working for social change.",
    purpose:
      "Develop mission-driven empathetic leadership for maximum community and social impact.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Mission-Driven Empathetic Leadership",
        description:
          "Specialized program for non-profit and social impact leaders focusing on mission-driven leadership, community engagement through empathy, and maximizing social impact through emotionally intelligent leadership.",
      },
    },
    keyBenefits: [
      "Enhanced mission-driven empathetic leadership",
      "Improved community engagement and impact",
      "Strengthened social change leadership capabilities.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-11",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-11",
    description:
      "A comprehensive E-Motion program for technology leaders focusing on\\nhuman-centered leadership in digital transformation environments.",
    whoItsFor:
      "Technology executives, IT directors, and digital transformation\\nleaders in tech-driven organizations.",
    purpose:
      "Build human-centered leadership capabilities in technology and digital transformation contexts.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Human-Centered Tech Leadership",
        description:
          "Advanced program for technology leaders focusing on balancing technical innovation with human empathy, leading digital transformation with emotional intelligence, and creating human-centered tech cultures.",
      },
    },
    keyBenefits: [
      "Enhanced human-centered technology leadership",
      "Improved digital transformation with empathy",
      "Strengthened tech team emotional intelligence and collaboration.",
    ],
    category: "E-Motions",
  },
  {
    id: "empathy-leadership-12",
    title: "Empathy & Leadership",
    slug: "empathy-leadership-12",
    description:
      "An advanced E-Motion program for entrepreneurial leaders focusing on\\nempathetic startup leadership and sustainable business growth.",
    whoItsFor:
      "Startup founders, entrepreneurial leaders, and small business\\nowners building and scaling their organizations.",
    purpose:
      "Develop empathetic entrepreneurial leadership for sustainable business growth and team development.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Empathetic Entrepreneurial Leadership",
        description:
          "Comprehensive program for entrepreneurs and startup leaders focusing on building empathetic company cultures, leading with emotional intelligence during growth phases, and sustainable business development through human-centered leadership.",
      },
    },
    keyBenefits: [
      "Enhanced empathetic entrepreneurial leadership",
      "Improved sustainable business growth through empathy",
      "Strengthened startup team culture and emotional intelligence.",
    ],
    category: "E-Motions",
  },
];
