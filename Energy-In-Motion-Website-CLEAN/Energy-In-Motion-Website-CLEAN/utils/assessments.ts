export interface Assessment {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
}

export const assessments: Assessment[] = [
  {
    id: "hogan",
    title: "Hogan",
    slug: "hogan",
    description:
      "Hogan Assessment Systems is one of the world leaders in personality assessment and leadership development with products and services in 56 countries and 47 languages. Hogan has over 30 years of experience helping businesses dramatically reduce turnover and improve performance by identifying people, developing key talent, and improving leadership potential. Phoenix Consulting is Hogan's certified partner throughout the MENA region with a track record of being Hogan's most efficient solutions and great value of all clients' investment in their Talent Management.",
    category: "Assessment",
  },
  {
    id: "ecr",
    title: "ECR",
    slug: "ecr",
    description:
      "The Emotional Capital Report (ECR) is a comprehensive assessment tool that measures emotional intelligence competencies and provides insights into leadership potential and interpersonal effectiveness.",
    category: "Assessment",
  },
  {
    id: "saville",
    title: "Saville",
    slug: "saville",
    description:
      "Saville Assessment offers cutting-edge psychometric assessments that help organizations make better people decisions through scientifically robust and innovative assessment solutions.",
    category: "Assessment",
  },
  {
    id: "assessfirst",
    title: "AssessFirst",
    slug: "assessfirst",
    description:
      "AssessFirst provides predictive HR analytics and assessment solutions that help companies identify, develop, and retain top talent through data-driven insights.",
    category: "Assessment",
  },
  {
    id: "paytech",
    title: "Paytech",
    slug: "paytech",
    description:
      "Paytech offers comprehensive assessment and evaluation tools designed to measure various aspects of professional competency and organizational fit.",
    category: "Assessment",
  },
];
