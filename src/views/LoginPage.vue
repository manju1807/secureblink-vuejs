// src/views/LoginPage.vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { DEMO_CREDENTIALS } from '@/constants/demo-creds'
import LoginScreenGraphics from '@/components/graphics/LoginScreenGraphics.vue'
import Button from '@/components/ui/button/Button.vue'
import {
  validateEmail,
  validatePassword,
  validateForm,
  isFormValid,
} from '@/validators/form-validators'
import type { FormErrors, FormTouched } from '@/validators/form-validators'

// Component Name
defineOptions({
  name: 'LoginPage',
})

// Composables
const router = useRouter()
const authStore = useAuthStore()

// Form State
const formData = ref({
  email: DEMO_CREDENTIALS.email,
  password: DEMO_CREDENTIALS.password,
})

const errors = ref<FormErrors>({
  email: [],
  password: [],
})

const touched = ref<FormTouched>({
  email: false,
  password: false,
})

const isSubmitting = ref(false)

// Computed Properties
const isEmailInvalid = computed(() => touched.value.email && errors.value.email.length > 0)
const isPasswordInvalid = computed(() => touched.value.password && errors.value.password.length > 0)

// Methods
const handleBlur = (field: keyof FormTouched) => {
  touched.value[field] = true
  validateField(field)
}

const validateField = (field: keyof typeof formData.value) => {
  if (field === 'email') {
    errors.value.email = validateEmail(formData.value.email)
  } else if (field === 'password') {
    errors.value.password = validatePassword(formData.value.password)
  }
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  // Mark all fields as touched
  Object.keys(touched.value).forEach((key) => {
    touched.value[key as keyof FormTouched] = true
  })

  // Validate all fields
  const formErrors = validateForm(formData.value)
  errors.value = formErrors

  if (!isFormValid(formErrors)) return

  isSubmitting.value = true
  try {
    const success = await authStore.login(formData.value.email, formData.value.password)
    if (success) {
      await router.push('/dashboard')
    }
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen max-h-screen overflow-clip flex">
    <!-- Left side with responsive graphic -->
    <div
      class="hidden md:block w-1/2 bg-gradient-to-r from-blue-50 to-transparent relative overflow-visible"
    >
      <div
        class="absolute w-[180%] h-[180%] -translate-x-[36%] -translate-y-[22%] transform-gpu drop-shadow-md"
      >
        <LoginScreenGraphics />
      </div>
    </div>

    <!-- Right side with login form -->
    <div class="w-full md:w-1/2 flex items-center justify-center px-4 md:px-0">
      <div class="w-full max-w-sm">
        <!-- Header -->
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
          Login to Access Dashboard
        </h1>

        <!-- Login Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6 md:space-y-8" novalidate>
          <!-- Email Field -->
          <div class="font-poppins text-base md:text-lg">
            <label class="block font-semibold text-gray-700 mb-2">
              Email<span class="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="email"
              v-model="formData.email"
              @blur="handleBlur('email')"
              class="w-full px-4 py-3 border-2 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
              :class="{
                'border-red-500': isEmailInvalid,
                'border-[#707070]': !isEmailInvalid,
              }"
              required
              :disabled="isSubmitting"
            />
          </div>

          <!-- Password Field -->
          <div class="font-poppins text-base md:text-lg">
            <div class="flex justify-between items-center mb-2">
              <label class="block font-semibold text-gray-700">
                Password<span class="text-red-500 ml-0.5">*</span>
              </label>
              <a href="#" class="text-red-500 hover:text-red-600 transition-colors">
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              v-model="formData.password"
              @blur="handleBlur('password')"
              class="w-full px-4 py-3 border-2 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
              :class="{
                'border-red-500': isPasswordInvalid,
                'border-[#707070]': !isPasswordInvalid,
              }"
              required
              :disabled="isSubmitting"
            />
          </div>

          <!-- Submit Button -->
          <Button
            type="submit"
            class="w-full max-w-md px-6 md:px-10 mt-4 bg-white font-poppins text-base md:text-lg text-blue-500 border-2 border-blue-500 py-4 md:py-6 rounded-full hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto transition-colors"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Login</span>
            <span v-if="!isSubmitting" class="text-2xl py-0 my-0 -mt-[1.5px] ml-2"> » </span>
            <span v-if="isSubmitting">Processing...</span>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
