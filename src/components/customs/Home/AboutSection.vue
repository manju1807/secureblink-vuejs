<script setup lang="ts">
// You can import your SVG components here
// Component Name
defineOptions({ name: 'AboutSection' })
</script>

<template>
  <section class="min-h-screen bg-white relative overflow-hidden">
    <!-- Left side decorative elements -->
    <div class="absolute left-0 top-1/4 w-1/2 h-1/2">
      <!-- Placeholder for your geometric SVG elements -->
      <div class="absolute left-10 top-10 w-32 h-32 bg-blue-500"></div>
      <div class="absolute left-48 top-20 w-24 h-24 bg-blue-500"></div>
      <div class="absolute left-24 top-48 w-16 h-4 bg-blue-500"></div>
      <!-- Add more placeholder elements as needed -->
    </div>

    <!-- Right side content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-2xl ml-auto">
        <div class="mb-6">
          <span class="text-blue-500 font-medium flex items-center gap-2">
            <span class="text-lg">▶</span>
            ABOUT US
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Great Digital Agency</h1>

        <p class="text-gray-600 mb-8">
          Our products are fully custom-made, built with the latest technologies and
          cloud-architectures.
        </p>

        <p class="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan
          congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
        </p>

        <button
          class="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors"
        >
          Get Started
          <span class="ml-2">»</span>
        </button>
      </div>
    </div>

    <!-- Right side decorative dots -->
    <div class="absolute right-0 bottom-0 w-48 h-48">
      <!-- Placeholder for your dots pattern SVG -->
      <div class="grid grid-cols-8 gap-2">
        {/* You can replace this with your actual SVG */}
        <template v-for="n in 64" :key="n">
          <div class="w-1 h-1 rounded-full bg-blue-500 opacity-60"></div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>
