export interface JobCategories {
  [key: string]: string[];
}

export type LoginDetails = {
  email: string;
  password: string;
};

export type CustomerRegisterDetails = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type BusinessRegisterDetails = CustomerRegisterDetails & {
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

export const fakeStripePackages = {
  monthly: {
    id: "34343434234554",
    name: "Basic Monthly",
    price: 9.99,
    services: [
      "Access to premium content",
      "Unlimited downloads",
      "24/7 support",
    ],
    duration: "1 month",
  },
  quarterly: {
    id: "34343496834554",
    name: "Pro Quarterly",
    price: 24.99,
    services: [
      "All Basic Monthly features",
      "Exclusive webinars",
      "Priority customer support",
    ],
    duration: "3 months",
  },
  annually: {
    id: "36543434234554",
    name: "Premium Annual",
    price: 89.99,
    services: [
      "All Pro Quarterly features",
      "Personalized coaching sessions",
      "Extended warranty",
    ],
    duration: "12 months",
  },
};
