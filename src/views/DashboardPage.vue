<!-- src/views/DashboardView.vue -->
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  try {
    // Calling the logout method from auth store
    authStore.logout()

    // Using router.replace instead of push to prevent back navigation
    await router.replace('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top Navbar -->
    <nav class="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-lg font-bold">Dashboard</h1>
        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>

    <!-- Dashboard Content -->
    <main class="flex-grow bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
        <p class="text-gray-700">
          This is where your dashboard content will go. Add widgets, tables, or other components
          here.
        </p>
        <!-- Example Content -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Widget 1</h3>
            <p class="text-gray-600">Details about widget 1.</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Widget 2</h3>
            <p class="text-gray-600">Details about widget 2.</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Widget 3</h3>
            <p class="text-gray-600">Details about widget 3.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
