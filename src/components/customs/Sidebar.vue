// Sidebar.vue
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { mainNavigationItems, logoutItem } from '@/constants/sidebar-data'

// Component Name
defineOptions({
  name: 'Sidebar',
})

// Composables
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

// Computed
const isActivePath = computed(() => (path: string) => route.path === path)

// Methods
const handleLogout = async () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <nav
    class="min-h-screen flex flex-col min-w-[60px] w-full max-w-[80px] md:max-w-[200px] py-3 bg-white shadow-[0px_3px_26px_#00000017]"
  >
    <!-- Main Navigation Items -->
    <div
      class="flex flex-col justify-center items-center w-full py-4 space-y-4 mb-auto px-2 md:px-0"
    >
      <div
        v-for="item in mainNavigationItems"
        :key="item.name"
        class="w-full md:w-[160px] flex flex-col items-center justify-center"
      >
        <!-- Active Navigation Link -->
        <router-link
          v-if="!item.isDisabled"
          :to="item.path"
          class="flex flex-col items-center justify-center py-3 md:py-6 px-2 w-full rounded-sm transition-colors duration-200 hover:text-blue-500"
          :class="{
            'text-blue-500 shadow-[0px_3px_26px_#00000026]': isActivePath(item.path),
          }"
        >
          <component
            :is="item.icon"
            class="h-6 w-6 md:h-8 md:w-8 mb-1"
            :stroke-color="isActivePath(item.path) ? '#1f64ff' : '#8990AD'"
          />
          <span
            class="text-sm font-medium whitespace-nowrap hidden md:block"
            :class="isActivePath(item.path) ? 'text-[#495172]' : 'text-[#8990AD]'"
          >
            {{ item.name }}
          </span>
        </router-link>

        <!-- Disabled Navigation Item -->
        <div
          v-else
          class="flex flex-col items-center justify-center py-4 md:py-6 px-2 w-full rounded-sm opacity-50 cursor-not-allowed"
          :title="`${item.name} is currently disabled`"
        >
          <component :is="item.icon" class="h-6 w-6 md:h-8 md:w-8 mb-1" stroke-color="#8990AD" />
          <span class="text-sm font-medium text-[#8990AD] whitespace-nowrap hidden md:block">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Logout Button -->
    <router-link
      :to="logoutItem.path"
      class="flex flex-col items-center justify-center py-4 md:py-6 px-2 w-full rounded-sm transition-colors duration-200 group text-[#8990AD] hover:text-blue-500"
      :class="{
        'text-blue-500 shadow-[0_2px_8px_0px_rgba(31,100,255,0.15)]': isActivePath(logoutItem.path),
      }"
      @click="handleLogout"
    >
      <component
        :is="logoutItem.icon"
        class="h-6 w-6 md:h-8 md:w-8 mb-1"
        :stroke-color="isActivePath(logoutItem.path) ? '#1f64ff' : 'currentColor'"
      />
      <span
        class="text-sm font-medium whitespace-nowrap hidden md:block"
        :class="{
          'text-[#495172]': isActivePath(logoutItem.path),
        }"
      >
        {{ logoutItem.name }}
      </span>
    </router-link>
  </nav>
</template>
