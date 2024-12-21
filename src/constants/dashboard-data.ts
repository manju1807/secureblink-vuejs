import IconDashboard from '@/components/icons/IconDashboard.vue'
import type { CountryStatistic } from '@/types'

// User Data
export const userData = {
  name: 'Andrew Johnstons',
  role: 'Top Trader',
  avatar: '/Andrew-Johnston.jpg',
}

export const SPARKLINE_POINTS = 10

export const CHART_COLORS = {
  up: '#3b82f6', // Blue
  down: '#ef4444', // Red
  text: '#4b5563', // Gray
} as const

// Financial Overview
export const financialOverview = {
  balance: 5900.0,
  profits: {
    amount: 950.0,
    percentage: '+56%',
  },
  losses: {
    amount: 450.0,
    percentage: '+56%',
  },
}

// Supported Currencies
export const currencies = ['₿', '$', '€', '¥']

// Country Statistics
export const countryStats: CountryStatistic[] = [
  {
    country: 'Italy',
    value: 475,
    trend: 'up' as const,
    rawData: [], // Will be populated with generateChartData
  },
  {
    country: 'United States',
    value: 431,
    trend: 'up' as const,
    rawData: [],
  },
  {
    country: 'Canada',
    value: 174,
    trend: 'down' as const,
    rawData: [],
  },
  {
    country: 'Spain',
    value: 475,
    trend: 'up' as const,
    rawData: [],
  },
  {
    country: 'Japan',
    value: 134,
    trend: 'up' as const,
    rawData: [],
  },
  {
    country: 'South Africa',
    value: 471,
    trend: 'down' as const,
    rawData: [],
  },
]

// Team Members
export const teamMembers = [
  {
    name: 'Andrew Johnston',
    role: 'Top Trader',
    avatar: '/Andrew-Johnston.jpg',
  },
  {
    name: 'Anna Atkinsons',
    role: 'Manager',
    avatar: '/Anna-Atkinsons.jpg',
  },
  {
    name: 'Mark Atkinsons',
    role: 'Top Trader',
    avatar: '/Mark-Atkinsons.jpg',
  },
  {
    name: 'Johanna Tairons',
    role: 'Manager',
    avatar: '/Johanna-Tairons.jpg',
  },
]

// Country Comparison
export const countryComparison = [
  {
    country: 'United States',
    icon: IconDashboard,
    percentage: 93,
    flag: '🇺🇸',
  },
  {
    country: 'Italy',
    icon: IconDashboard,
    percentage: 73,
    flag: '🇮🇹',
  },
  {
    country: 'Spain',
    icon: IconDashboard,
    percentage: 13,
    flag: '🇪🇸',
  },
]
