export const getProgressChartOptions = (percentage: number) => ({
  chart: {
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 4,
      barHeight: '100%',
      colors: {
        ranges: [
          {
            from: 0,
            to: 100,
            color: '#0F77FA', // Tailwind blue-500
          },
        ],
      },
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    max: 100,
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
  },
  tooltip: {
    enabled: false,
  },
})
