// chartConfig.ts
import type { ApexOptions } from 'apexcharts'
import { CHART_COLORS } from '@/constants/dashboard-data'

export const getBaseChartOptions = (trend: 'up' | 'down'): ApexOptions => ({
  chart: {
    type: 'line',
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: true,
      animateGradually: {
        enabled: true,
      },
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
    background: 'transparent',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
    active: {
      filter: {
        type: 'none',
      },
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
    colors: [trend === 'up' ? CHART_COLORS.up : CHART_COLORS.down],
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    min: undefined,
    max: undefined,
  },
  markers: {
    size: 0,
    strokeWidth: 0,
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: '100%',
        },
      },
    },
  ],
})
