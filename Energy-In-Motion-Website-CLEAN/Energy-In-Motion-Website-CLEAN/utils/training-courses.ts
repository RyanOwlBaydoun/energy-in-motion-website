export interface TrainingCourse {
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

export const trainingCourses: TrainingCourse[] = [
  {
    id: "mastering-eq-levels-1-2",
    title: "Mastering EQ (Levels 1 & 2)",
    slug: "mastering-eq-levels-1-2",
    description:
      "This flagship program delivers an accelerated pathway to mastering Emotional\nCapital—the key driver for productivity, team cohesion, and business success.",
    whoItsFor:
      "Leaders, managers, and professionals aiming to excel in today's dynamic\nenvironments.",
    purpose:
      "Equip participants with the 10 core EQ competencies categorized into:",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies. Participants complete the ECR Self Assessment for benchmarking and receive personalized feedback.",
      },
      level2: {
        title: "Advanced Mastery",
        description:
          "Builds on Level 1 with advanced tools, including the ECR 360 for comprehensive feedback from peers and colleagues. Incorporates one-to-one or group debriefing to enhance self-awareness and actionable strategies.",
      },
    },
    keyBenefits: [
      "Enhanced decision-making",
      "Improved leadership flexibility",
      "Strengthened interpersonal conflict resolution, resilience, relationships and team dynamics.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "self-confidence-leadership",
    title: "Self-Confidence & Leadership",
    slug: "self-confidence-leadership",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection.",
    whoItsFor:
      "Leaders, managers, and professionals aiming to excel in today's dynamic environments.",
    purpose:
      "Build confidence and leadership capabilities through emotional intelligence.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced decision-making",
      "Improved leadership flexibility",
      "Strengthened interpersonal conflict resolution.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "empathy-leadership",
    title: "Empathy & Leadership",
    slug: "empathy-leadership",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection.",
    whoItsFor:
      "Leaders, managers, and professionals aiming to excel in today's dynamic environments.",
    purpose: "Develop empathy skills for effective leadership.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced decision-making",
      "Improved leadership flexibility",
      "Strengthened interpersonal conflict resolution.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "smart-heart-healthcare-eq",
    title: "Smart Heart (Healthcare EQ)",
    slug: "smart-heart-healthcare-eq",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection tailored for healthcare professionals.",
    whoItsFor: "Healthcare professionals, medical staff, and administrators.",
    purpose: "Apply emotional intelligence in healthcare settings.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced patient care",
      "Improved team communication",
      "Reduced healthcare burnout.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "speak-up-public-speaking",
    title: "Speak Up: Public Speaking",
    slug: "speak-up-public-speaking",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection for public speaking confidence.",
    whoItsFor:
      "Professionals who need to present, speak publicly, or lead meetings.",
    purpose: "Build confidence and skills in public speaking and presentation.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced presentation skills",
      "Improved public speaking confidence",
      "Strengthened communication abilities.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "beauty-beyond-women-empowerment",
    title: "Beauty & Beyond (Women Empowerment)",
    slug: "beauty-beyond-women-empowerment",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection designed for women's empowerment.",
    whoItsFor: "Women professionals, leaders, and entrepreneurs.",
    purpose:
      "Empower women through emotional intelligence and leadership development.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced leadership presence",
      "Improved self-confidence",
      "Strengthened professional networks.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "confidence-catalyst",
    title: "Confidence Catalyst",
    slug: "confidence-catalyst",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection to build personal confidence.",
    whoItsFor:
      "Individuals looking to build personal and professional confidence.",
    purpose: "Develop confidence through emotional intelligence techniques.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced self-confidence",
      "Improved decision-making",
      "Strengthened personal resilience.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "power-of-we-team-building",
    title: "The Power of We (Team Building)",
    slug: "power-of-we-team-building",
    description:
      "A foundational workshop on self-awareness, regulation, and social connection for effective team building.",
    whoItsFor:
      "Team leaders, managers, and organizations focused on team development.",
    purpose:
      "Build stronger, more cohesive teams through emotional intelligence.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Foundational Mastery",
        description:
          "Full-day workshop introducing the Emotional Capital competencies.",
      },
    },
    keyBenefits: [
      "Enhanced team collaboration",
      "Improved communication",
      "Strengthened team dynamics.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "teamwork-leadership",
    title: "Teamwork & Leadership",
    slug: "teamwork-leadership",
    description:
      "A comprehensive training program focused on building effective teamwork\\nand collaborative leadership skills in diverse work environments.",
    whoItsFor:
      "Team leaders, project managers, and professionals working in\\ncollaborative environments.",
    purpose:
      "Develop collaborative leadership and teamwork skills for high-performing teams.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Collaborative Leadership Foundation",
        description:
          "Comprehensive program focusing on building effective teamwork, collaborative decision-making, and leadership skills that foster team cohesion and high performance.",
      },
    },
    keyBenefits: [
      "Enhanced collaborative leadership abilities",
      "Improved team communication and coordination",
      "Strengthened conflict resolution and team building skills.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "problem-solving-decision-making",
    title: "Problem Solving & Decision Making",
    slug: "problem-solving-decision-making",
    description:
      "A strategic training program designed to enhance critical thinking,\\nproblem-solving, and effective decision-making capabilities.",
    whoItsFor:
      "Managers, executives, and professionals who need to make complex\\ndecisions and solve challenging problems.",
    purpose:
      "Build advanced problem-solving and decision-making skills using emotional intelligence.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Strategic Problem-Solving",
        description:
          "Advanced program focusing on systematic problem-solving methodologies, emotional decision-making frameworks, and critical thinking skills for complex business challenges.",
      },
    },
    keyBenefits: [
      "Enhanced critical thinking and analytical abilities",
      "Improved decision-making under pressure",
      "Strengthened problem-solving methodologies and frameworks.",
    ],
    category: "Training - Leadership",
  },
  {
    id: "communication-skills",
    title: "Communication Skills",
    slug: "communication-skills",
    description:
      "A fundamental training program focused on developing effective\\ncommunication skills for professional and personal success.",
    whoItsFor:
      "All professionals seeking to improve their verbal, non-verbal, and\\nwritten communication effectiveness.",
    purpose:
      "Master essential communication skills through emotional intelligence and interpersonal awareness.",
    innerFocus:
      "Self-knowing, self-control, self-confidence, and self-reliance.",
    otherFocus: "Empathy, relationship skills, and straightforwardness.",
    outerFocus: "Optimism, self-actualization, and adaptability.",
    programHighlights: {
      level1: {
        title: "Essential Communication Mastery",
        description:
          "Comprehensive program covering verbal and non-verbal communication, active listening, persuasive communication, and emotional intelligence in professional interactions.",
      },
    },
    keyBenefits: [
      "Enhanced verbal and non-verbal communication skills",
      "Improved active listening and empathy",
      "Strengthened persuasive and interpersonal communication abilities.",
    ],
    category: "Training - Leadership",
  },
];
