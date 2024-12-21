<script setup lang="ts">
import BackgroundSVG from '@/components/graphics/HeroBackground.vue'
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

// Component Name
defineOptions({
  name: 'HeroSection',
})

// Navigation Items
const navItems = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Case Studies' },
  { href: '#', label: 'Testimonials' },
  { href: '#', label: 'Contact' },
]

// State to control menu visibility
const isMenuOpen = ref(false)
</script>

<template>
  <!-- Hero Section Container -->
  <section class="min-h-screen p-0 overflow-visible">
    <div class="relative min-h-screen overflow-visible">
      <!-- Background SVG -->
      <div class="absolute inset-0 w-full h-full overflow-visible">
        <BackgroundSVG
          width="100%"
          height="100%"
          primaryColor="#0e77ff"
          class="absolute w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        />
      </div>

      <!-- Foreground Content -->
      <div class="relative z-10 h-full">
        <!-- Navigation Bar -->
        <nav class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          <!-- Logo -->
          <div class="text-2xl font-bold text-white">Logo</div>

          <!-- Navigation Links and Menu -->
          <div class="flex items-center space-x-4">
            <!-- Desktop Navigation -->
            <ul class="hidden md:flex space-x-6 px-2">
              <li v-for="item in navItems" :key="item.label">
                <a :href="item.href" class="text-white hover:underline">{{ item.label }}</a>
              </li>
            </ul>

            <!-- Login Button -->
            <router-link
              to="/login"
              class="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Login
            </router-link>

            <!-- Mobile Hamburger Menu -->
            <Sheet>
              <SheetTrigger as="button" class="md:hidden text-white">
                <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
                <XMarkIcon v-else class="h-6 w-6" />
              </SheetTrigger>

              <SheetContent side="top" class="bg-white w-full h-screen">
                <SheetHeader>
                  <SheetTitle class="text-blue-500 text-lg font-bold py-4">Menu</SheetTitle>
                </SheetHeader>

                <!-- Mobile Navigation Links -->
                <ul class="mt-4 px-6 space-y-4">
                  <li v-for="item in navItems" :key="item.label">
                    <a :href="item.href" class="block text-blue-500 font-medium hover:underline">{{
                      item.label
                    }}</a>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        <!-- Hero Content -->
        <div class="container mx-auto px-6 lg:px-8 py-12 text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-blue-200 max-w-2xl">
            Our products are fully custom-made, built with the latest technologies and cloud
            architectures.
          </p>
          <button
            class="mt-8 bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive Adjustments */
@media (max-width: 768px) {
  nav.container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  nav.container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h1 {
    font-size: 4rem;
  }

  button {
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }
}
</style>
