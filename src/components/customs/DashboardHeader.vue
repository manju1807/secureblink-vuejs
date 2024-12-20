<!-- DashboardHeader.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { userData } from '@/constants/dashboard-data'
import Button from '../ui/button/Button.vue'
import AddIcon from '../icons/IconAdd.vue'
import { getFirstName } from '@/utils/GetFirstName'

// Style constants
const styles = {
  header: {
    container: 'flex items-center justify-between px-4 md:px-0',
  },
  title: {
    wrapper: 'space-y-1 md:space-y-2',
    heading: 'text-2xl md:text-4xl font-semibold text-navy-900',
    subtext: 'text-sm md:text-lg text-nowrap text-[#8990AD] tracking-tight',
  },
  actions: {
    container: 'flex items-center space-x-2 md:space-x-6',
    button:
      'bg-[#0F77FA] text-xs md:text-lg text-white px-2.5 md:px-4 py-2 md:py-4 rounded-full md:rounded-sm flex items-center gap-2',
    icon: 'h-2 w-2 md:h-6 md:w-6',
  },
  profile: {
    container: 'flex items-center gap-3',
    avatar: 'h-8 w-8 md:h-12 md:w-12 rounded-full overflow-hidden',
    name: 'text-[#8990AD] hidden md:flex text-sm md:text-lg',
  },
} as const

defineOptions({
  name: 'DashboardHeader',
})

// Computed
const welcomeMessage = computed(() => `Welcome back, ${getFirstName(userData.name)}`)
</script>

<template>
  <main>
    <div :class="styles.header.container">
      <!-- Title Section -->
      <div :class="styles.title.wrapper">
        <h1 :class="styles.title.heading">Dashboard</h1>
        <p :class="styles.title.subtext">
          {{ welcomeMessage }}
        </p>
      </div>

      <!-- Actions Section -->
      <div :class="styles.actions.container">
        <Button :class="styles.actions.button">
          <AddIcon color="#ffffff" :class="styles.actions.icon" :opacity="1" />
          <span class="hidden md:flex">Add Unit</span>
        </Button>

        <!-- Profile Section -->
        <div :class="styles.profile.container">
          <div :class="styles.profile.avatar">
            <img
              :src="userData.avatar"
              :alt="`${userData.name}'s avatar`"
              class="h-full w-full object-cover"
            />
          </div>
          <p :class="styles.profile.name">{{ userData.name }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
