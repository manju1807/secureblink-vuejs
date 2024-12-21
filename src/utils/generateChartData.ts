import { SPARKLINE_POINTS } from '@/constants/dashboard-data'

export const generateChartData = (trend: 'up' | 'down'): number[] => {
  return Array.from({ length: SPARKLINE_POINTS }, (_, i) =>
    trend === 'up' ? 40 + Math.random() * 20 + i * 2 : 60 - Math.random() * 20 - i * 2,
  )
}
