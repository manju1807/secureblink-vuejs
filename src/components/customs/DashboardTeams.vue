<template>
  <main class="h-full overflow-visible">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-xl font-semibold text-gray-900">Team Members</h1>
      <a href="#" class="text-blue-500 hover:text-blue-600 text-sm">View All</a>
    </div>
    <!-- Scrollable container with padding and overflow-visible -->
    <div class="relative h-[calc(100%-4rem)] overflow-visible">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="container-item flex items-center justify-between p-4 bg-white rounded-sm transition-shadow duration-200 ease-in-out mb-4"
      >
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 overflow-hidden rounded-full">
            <img :src="member.avatar" :alt="member.name" class="w-full h-full object-cover" />
          </div>
          <span class="font-medium text-gray-900">{{ member.name }}</span>
        </div>
        <div class="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-500">
          {{ member.role }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { teamMembers } from '@/constants/dashboard-data'
defineOptions({
  name: 'DashboardTeams',
})
</script>

<style scoped>
.container-item {
  box-shadow: 0px 3px 26px rgba(0, 0, 0, 0.09);
}

.container-item:hover {
  box-shadow: 0px 3px 26px rgba(0, 0, 0, 0.15);
}

/* Ensure the container does not clip child shadows */
.relative {
  overflow: visible;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

/* Track */
.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

/* Handle */
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

/* Handle on hover */
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
