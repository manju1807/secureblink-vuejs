<template>
  <main>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-gray-900">Comparison</h2>
      <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">View All</a>
    </div>

    <div class="container-item bg-white rounded-sm transition-shadow duration-200 ease-in-out p-4">
      <div class="space-y-6">
        <div v-for="(item, index) in countryComparison" :key="item.country" class="space-y-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="text-xl">{{ item.flag }}</span>
              <span class="text-gray-700">{{ item.country }}</span>
            </div>
          </div>

          <div class="flex items-center gap-4 w-full">
            <div class="flex-grow">
              <apexchart
                type="bar"
                height="10"
                width="100%"
                :options="getProgressChartOptions(item.percentage)"
                :series="[{ data: [item.percentage] }]"
              />
            </div>
            <span class="text-gray-700 whitespace-nowrap">{{ item.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { countryComparison } from '@/constants/dashboard-data'
import { getProgressChartOptions } from '@/configs/progressChartConfig'

defineOptions({
  name: 'DashboardComparison',
})
</script>

<style scoped>
.container-item {
  box-shadow: 0px 3px 26px rgba(0, 0, 0, 0.09);
}

.container-item:hover {
  box-shadow: 0px 3px 26px rgba(0, 0, 0, 0.15);
}
</style>
