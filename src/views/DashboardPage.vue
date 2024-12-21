// src/views/DashboardView.vue
<script setup lang="ts">
import DashboardHeader from '@/components/customs/DashboardHeader.vue'
import DashboardMetrics from '@/components/customs/DashboardMetrics.vue'
import DashboardFooter from '@/components/customs/DashboardFooter.vue'
import Sidebar from '@/components/customs/Sidebar.vue'

defineOptions({
  name: 'DashboardView',
})
</script>

<template>
  <div
    class="min-h-screen max-h-[100dvh] max-w-[100dvw] bg-[rgba(252, 252, 252, 1)] overflow-clip flex flex-row"
  >
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main Dashboard Content -->
    <div class="flex flex-col w-full px-4 md:px-14 py-12 space-y-8 overflow-y-auto">
      <!-- Header Section -->
      <DashboardHeader />

      <!-- Metrics Section -->
      <DashboardMetrics />

      <!-- Footer Section -->
      <DashboardFooter />
    </div>
  </div>
</template>
