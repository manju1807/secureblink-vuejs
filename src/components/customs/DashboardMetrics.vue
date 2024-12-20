# DashboardMetrics.vue
<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { currencies, countryStats, financialOverview } from '@/constants/dashboard-data'
import { generateChartData } from '@/utils/generateChartData'
import { formatCurrency } from '@/utils/formatCurrency'
import { getBaseChartOptions } from '@/configs/ChartConfig'
import type { ApexOptions } from 'apexcharts'

// Types
interface FinancialMetric {
  label: string
  value: string | number
  trend?: {
    value: string
    isPositive: boolean
  }
  hasBorder?: boolean
}

interface CountryChartData {
  country: string
  value: number
  trend: 'up' | 'down'
  chartData: {
    options: ApexOptions
    series: Array<{
      name: string
      data: number[]
    }>
  }
}

// Computed Properties
const financialMetrics = computed<FinancialMetric[]>(() => [
  {
    label: 'BALANCE',
    value: formatCurrency(financialOverview.balance),
  },
  {
    label: 'PROFITS',
    value: formatCurrency(financialOverview.profits.amount),
    trend: {
      value: financialOverview.profits.percentage,
      isPositive: true,
    },
    hasBorder: true,
  },
  {
    label: 'LOSSES',
    value: formatCurrency(financialOverview.losses.amount),
    trend: {
      value: financialOverview.losses.percentage,
      isPositive: false,
    },
    hasBorder: true,
  },
])

const countryCharts = computed<CountryChartData[]>(() =>
  countryStats.map((stat) => ({
    country: stat.country,
    value: stat.value,
    trend: stat.trend,
    chartData: {
      options: getBaseChartOptions(stat.trend),
      series: [
        {
          name: stat.country,
          data: generateChartData(stat.trend),
        },
      ],
    },
  })),
)

defineOptions({
  name: 'DashboardMetrics',
})
</script>

<template>
  <main class="w-full bg-white">
    <!-- Financial Metrics Section -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 mb-6 md:mb-8">
      <!-- Dynamic Financial Metrics -->
      <div
        v-for="(metric, index) in financialMetrics"
        :key="index"
        :class="[
          'space-y-1 px-4 md:px-6 py-3 md:py-0',
          'bg-white rounded-lg shadow-sm md:shadow-none',
          metric.hasBorder && 'md:border-l md:border-[#C5C9D7]',
        ]"
      >
        <h2 class="text-[#8990AD] text-sm">{{ metric.label }}</h2>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-2xl md:text-3xl font-semibold">{{ metric.value }}</span>
          <span
            v-if="metric.trend"
            :class="[
              'text-sm md:text-base',
              metric.trend.isPositive ? 'text-blue-500' : 'text-red-500',
            ]"
          >
            {{ metric.trend.isPositive ? '▲' : '▼' }}
            {{ metric.trend.value }}
          </span>
        </div>
      </div>

      <!-- Currencies Section -->
      <div
        :class="[
          'space-y-1 px-4 md:px-6 py-3 md:py-0',
          'bg-white rounded-lg shadow-sm md:shadow-none',
          'md:border-l md:border-[#C5C9D7]',
        ]"
      >
        <h2 class="text-[#8990AD] text-sm">CURRENCIES</h2>
        <div class="flex flex-wrap gap-2 md:gap-4">
          <span
            v-for="(currency, index) in currencies"
            :key="index"
            class="currency-symbol text-sm md:text-base"
          >
            {{ currency }}
          </span>
        </div>
      </div>
    </section>

    <!-- Country Statistics Grid -->
    <section
      class="country-stat-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 rounded-sm p-4 md:p-6 mb-6 md:mb-8"
    >
      <div
        v-for="(stat, index) in countryCharts"
        :key="index"
        class="country-stat space-y-2 flex flex-col items-center overflow-clip bg-white p-3 rounded-lg"
      >
        <h3 class="text-gray-600 text-sm md:text-md">{{ stat.country }}</h3>
        <div class="flex items-center gap-2">
          <span class="text-xl md:text-2xl font-bold">{{ stat.value }}</span>
          <span :class="stat.trend === 'up' ? 'text-green-500' : 'text-red-500'">
            {{ stat.trend === 'up' ? '▲' : '▼' }}
          </span>
        </div>
        <div class="h-12 w-full">
          <VueApexCharts
            type="line"
            :options="stat.chartData.options"
            :series="stat.chartData.series"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.country-stat :deep(.apexcharts-canvas) {
  background: transparent !important;
}

.currency-symbol {
  transition: opacity 0.2s ease;
  background-color: #c0d3ff4b;
  color: #2464fc;
  padding: 0.2rem 0.6rem;
  border-radius: 100%;
  display: grid;
  place-items: center;
  min-width: 2.5rem;
  height: 2.5rem;
}

.currency-symbol:hover {
  opacity: 0.8;
}

.country-stat-container {
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  box-shadow: 0px 3px 26px rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .country-stat {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  }

  .country-stat-container {
    box-shadow: none;
    background: transparent;
    padding: 0;
  }
}
</style>
