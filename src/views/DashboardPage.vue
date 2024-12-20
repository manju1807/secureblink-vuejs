<!-- src/views/DashboardView.vue -->
<script setup lang="ts">
import DashboardHeader from '@/components/customs/DashboardHeader.vue'
import DashboardMetrics from '@/components/customs/DashboardMetrics.vue'
import Sidebar from '@/components/customs/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-row">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Main Content -->
    <div class="flex flex-col w-full px-4 md:px-14 py-12 space-y-8">
      <!-- DashboardHeader Content -->
      <DashboardHeader />
      <!-- Dashboard Content -->
      <DashboardMetrics />
    </div>
  </div>
</template>
