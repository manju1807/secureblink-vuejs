<script setup lang="ts"></script>

<template>
  <main class="min-h-screen bg-blue-500 text-white">
    <!-- Navbar -->
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Logo</div>
      <ul class="flex space-x-6">
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Services</a></li>
        <li><a href="#" class="hover:underline">Case Studies</a></li>
        <li><a href="#" class="hover:underline">Testimonials</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
      <router-link
        to="/login"
        class="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
      >
        Login
      </router-link>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20 text-center">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </h1>
      <p class="mt-6 text-lg text-blue-200">
        Our products are fully custom-made, built with the latest technologies and cloud
        architectures.
      </p>
      <button
        class="mt-8 bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </section>

    <!-- About Section -->
    <section class="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://via.placeholder.com/400x300"
          alt="About Illustration"
          class="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="text-blue-200">
          Our products are fully custom-made, built with the latest technologies and cloud
          architectures. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique.
        </p>
        <button
          class="mt-6 bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Get Started
        </button>
      </div>
    </section>
  </main>
</template>
