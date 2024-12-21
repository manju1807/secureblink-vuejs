<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <DashboardTeams />
    <DashboardComparison />
  </div>
</template>

<script setup>
import DashboardComparison from './DashboardComparison.vue'
import DashboardTeams from './DashboardTeams.vue'

defineOptions({
  name: 'DashboardFooter',
})
</script>
