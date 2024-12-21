<script setup lang="ts">
// Import your SVGs here
import RightTriangle from '@/components/graphics/RightTriangle.vue'
// Component Name
defineOptions({ name: 'ServiceSection' })
</script>

<template>
  <section class="min-h-screen bg-white relative overflow-hidden py-16">
    <div class="container mx-auto px-4">
      <!-- Left side content -->
      <div class="max-w-xl">
        <div class="mb-4">
          <span class="flex items-center gap-2 font-semibold text-blue-500">
            <RightTriangle class="h-8 w-8" />
            OUR SERVICES
          </span>
        </div>

        <h2 class="text-4xl font-bold mb-12 text-gray-900">
          Transforming your ideas<br />into Reality
        </h2>

        <div class="grid grid-cols-2 gap-4 mb-8">
          <!-- Service buttons -->
          <button
            class="px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
          >
            Web Development
          </button>
          <button
            class="px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
          >
            Mobile Development
          </button>
          <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-sm">
            UI/UX Designing
          </button>
          <button
            class="px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
          >
            Branding
          </button>
          <button
            class="px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors col-span-2"
          >
            Cloud Technology
          </button>
        </div>
      </div>

      <!-- Right side service detail card -->
      <div class="absolute top-1/2 right-32 -translate-y-1/2">
        <div class="bg-white rounded-2xl shadow-lg p-8 w-80">
          <div class="flex items-center gap-4 mb-6">
            <!-- Placeholder for your icon SVG -->
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <div class="w-6 h-6 text-blue-500">
                <!-- Replace with your SVG icon -->
              </div>
            </div>
            <h3 class="text-xl font-semibold">UI/UX Designing</h3>
          </div>

          <p class="text-gray-500 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is turpis
            accumsan congue. Quisque blandit dui Pellentesque habitant morbi.
          </p>

          <ul class="space-y-4">
            <li v-for="(item, index) in 4" :key="index" class="flex items-center gap-3">
              <!-- Placeholder for checkmark SVG -->
              <div class="w-5 h-5 text-emerald-400">
                <!-- Replace with your checkmark SVG -->
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-sm text-gray-500"
                >Lorem ipsum dolor sit amet, conse ctur egstas.</span
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Blue background rectangle -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500"></div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>
