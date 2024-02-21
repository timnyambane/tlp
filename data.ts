export interface JobCategories {
  [key: string]: string[];
}

export type ValidationContext = {
  parent: Record<string, unknown>;
  addError: (field: string, message: string) => void;
};

export type RegisterDetails = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  businessLocation: string;
  workCategory: string;
  services: string[];
};

export const locations = [
  "Edinburgh",
  "Manchester",
  "Cardiff",
  "York",
  "Canterbury",
  "Newcastle upon Tyne",
  "Bath",
  "Nottingham",
  "Brighton & Hove",
  "Bristol",
];

export const jobCategories: JobCategories = {
  Marketing: [
    "Social Media Manager",
    "Content Marketing Specialist",
    "SEO Analyst",
  ],
  Engineering: [
    "Software Engineer",
    "Data Scientist",
    "DevOps Engineer",
    "QA Engineer",
  ],
  Design: ["Graphic Designer", "UI/UX Designer", "Product Designer"],
  Sales: [
    "Account Executive",
    "Sales Development Representative",
    "Sales Manager",
  ],
  Finance: ["Financial Analyst", "Accountant", "Investment Banker", "Actuary"],
};
