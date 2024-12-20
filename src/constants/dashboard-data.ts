import type { CountryStatistic } from "@/types";

// User Data
export const userData = {
  name: "Andrew Johnstons",
  role: "Top Trader",
  avatar: "../../public/profile-pic.jpg"
};


export const SPARKLINE_POINTS = 10

export const CHART_COLORS = {
  up: '#3b82f6',    // Blue
  down: '#ef4444',  // Red
  text: '#4b5563'   // Gray
} as const


// Financial Overview
export const financialOverview = {
  balance: 5900.00,
  profits: {
    amount: 950.00,
    percentage: "+56%"
  },
  losses: {
    amount: 450.00,
    percentage: "+56%"
  }
}

// Supported Currencies
export const currencies = ["₿", "$", "€", "¥"];

// Country Statistics
export const countryStats: CountryStatistic[] = [
  {
    country: "Italy",
    value: 475,
    trend: "up" as const,
    rawData: [] // Will be populated with generateChartData
  },
  {
    country: "United States",
    value: 431,
    trend: "up" as const,
    rawData: []
  },
  {
    country: "Canada",
    value: 174,
    trend: "down" as const,
    rawData: []
  },
  {
    country: "Spain",
    value: 475,
    trend: "up" as const,
    rawData: []
  },
  {
    country: "Japan",
    value: 134,
    trend: "up" as const,
    rawData: []
  },
  {
    country: "South Africa",
    value: 471,
    trend: "down" as const,
    rawData: []
  }
]

// Team Members
export const teamMembers = [
  {
    name: "Andrew Johnston",
    role: "Top Trader",
    avatar: "/path/to/andrew.jpg"
  },
  {
    name: "Anna Atkinsons",
    role: "Manager",
    avatar: "/path/to/anna.jpg"
  },
  {
    name: "Mark Atkinsons",
    role: "Top Trader",
    avatar: "/path/to/mark.jpg"
  },
  {
    name: "Johanna Tairons",
    role: "Manager",
    avatar: "/path/to/johanna.jpg"
  }
];

// Country Comparison
export const countryComparison = [
  {
    country: "United States",
    percentage: 93,
    flag: "🇺🇸"
  },
  {
    country: "Italy",
    percentage: 73,
    flag: "🇮🇹"
  },
  {
    country: "Spain",
    percentage: 13,
    flag: "🇪🇸"
  }
];
