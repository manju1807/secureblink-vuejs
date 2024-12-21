# DashboardMetrics.vue
<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { currencies, countryStats, financialOverview } from '@/constants/dashboard-data'
import { generateChartData } from '@/utils/generateChartData'
import { formatCurrency } from '@/utils/formatCurrency'
import { getBaseChartOptions } from '@/configs/chartConfig'
import type { ApexOptions } from 'apexcharts'

// Types
export interface TrendInfo {
  value: string
  isPositive: boolean
}

export interface FinancialMetric {
  label: string
  value: string | number
  trend?: TrendInfo
  hasBorder?: boolean
}

export interface CountryChartData {
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

// Component Name
defineOptions({
  name: 'DashboardMetrics',
})

// Computed Properties
const financialMetrics = computed<FinancialMetric[]>(() => [
  {
    label: 'BALANCE',
    value: formatCurrency(financialOverview.balance),
    hasBorder: true,
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
</script>

<template>
  <main class="w-full">
    <!-- Financial Metrics Section -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      <!-- Financial Metrics Cards -->
      <div
        v-for="(metric, index) in financialMetrics"
        :key="index"
        :class="[
          'space-y-1 px-4 md:px-0 py-3 md:py-0',
          'bg-white shadow-[0px_3px_26px_#00000017] rounded-none md:shadow-none',
          metric.hasBorder && 'md:border-r md:border-[#C5C9D7]',
        ]"
      >
        <!-- Metric Header -->
        <h2 class="text-[#8990AD] text-sm">
          {{ metric.label }}
        </h2>

        <!-- Metric Value and Trend -->
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-2xl md:text-3xl font-semibold">
            {{ metric.value }}
          </span>
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
          'bg-white shadow-[0px_3px_26px_#00000017] rounded-none md:shadow-none',
        ]"
      >
        <h2 class="text-[#8990AD] text-sm">CURRENCIES</h2>
        <div class="flex flex-wrap gap-2 md:gap-4">
          <span
            v-for="(currency, index) in currencies"
            :key="index"
            class="bg-[#c0d3ff4b] text-[#2464fc] px-3 py-1 rounded-full grid place-items-center min-w-10 h-10 text-sm md:text-base transition-opacity hover:opacity-80"
          >
            {{ currency }}
          </span>
        </div>
      </div>
    </section>

    <!-- Country Statistics Grid -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 rounded-sm p-0 md:p-6 mb-6 md:mb-8 bg-transparent md:bg-white md:shadow-[0px_3px_26px_#00000017]"
    >
      <!-- Country Stat Cards -->
      <div
        v-for="(stat, index) in countryCharts"
        :key="index"
        class="flex flex-col items-center space-y-2 bg-white p-3 rounded-lg overflow-hidden shadow-[0px_3px_26px_#00000017] md:shadow-none"
      >
        <!-- Country Name -->
        <h3 class="text-gray-600 text-sm md:text-base">
          {{ stat.country }}
        </h3>

        <!-- Country Value and Trend -->
        <div class="flex items-center gap-2">
          <span class="text-xl md:text-2xl font-bold">
            {{ stat.value }}
          </span>
          <span :class="[stat.trend === 'up' ? 'text-green-500' : 'text-red-500']">
            {{ stat.trend === 'up' ? '▲' : '▼' }}
          </span>
        </div>

        <!-- Chart -->
        <div class="h-12 w-full [&_.apexcharts-canvas]:!bg-transparent">
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
