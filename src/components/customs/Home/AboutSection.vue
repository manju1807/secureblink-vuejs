<script setup lang="ts">
import AboutGraphic from '@/components/graphics/AboutScreenGraphics.vue'
import RightTriangle from '@/components/graphics/RightTriangle.vue'
import AboutSectionDotted from '@/components/graphics/AboutSectionDotted.vue'
import AboutSectionTriangle from '@/components/graphics/AboutSectionTriangle.vue'

defineOptions({ name: 'AboutSection' })
</script>

<template>
  <section class="relative min-h-[100dvh] overflow-hidden">
    <!-- Left side with responsive graphic -->
    <div class="absolute left-0 top-0 h-full w-1/2">
      <div
        class="absolute h-[154%] w-[154%] -translate-x-[40%] -translate-y-[10%] transform-gpu drop-shadow-lg"
      >
        <AboutGraphic class="h-full w-full" />
      </div>
    </div>

    <!-- Right side content -->
    <div class="relative ml-auto w-1/2 px-8 h-[100dvh] flex items-center justify-start">
      <div class="absolute -top-5 -right-16 h-96 w-96 transform">
        <AboutSectionTriangle width="100%" height="100%" />
      </div>
      <div class="max-w-xl">
        <div class="mb-4">
          <span class="flex items-center gap-2 font-semibold text-blue-500">
            <RightTriangle class="h-8 w-8" />
            ABOUT US
          </span>
        </div>

        <h2 class="mb-6 text-4xl font-bold text-gray-900">Great Digital Agency</h2>

        <p class="mb-6 text-gray-700">
          Our products are fully custom-made, built with the latest technologies and
          cloud-architectures.
        </p>

        <p class="mb-8 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan
          congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
        </p>

        <button
          class="group flex items-center rounded-full border border-blue-500 bg-white px-8 py-3 text-blue-500 transition-colors hover:bg-blue-50"
        >
          Get Started
          <span class="ml-2 transition-transform group-hover:translate-x-1">»</span>
        </button>
      </div>
      <!-- Dotted pattern -->
      <div class="absolute bottom-0 right-0">
        <div class="relative h-64 w-64 transform">
          <AboutSectionDotted
            width="100%"
            height="100%"
            class="h-full w-full text-blue-500 opacity-20"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>
