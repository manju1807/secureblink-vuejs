// src/views/LoginPage.vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { DEMO_CREDENTIALS } from '@/constants/demo-creds'
import LoginScreenGraphics from '@/components/graphics/LoginScreenGraphics.vue'
import Button from '@/components/ui/button/Button.vue'

const router = useRouter()
const authStore = useAuthStore()

interface FormErrors {
  email: string[]
  password: string[]
}

const formData = ref({
  email: DEMO_CREDENTIALS.email,
  password: DEMO_CREDENTIALS.password,
})

const errors = ref<FormErrors>({
  email: [],
  password: [],
})

const touched = ref<{ email: boolean; password: boolean }>({
  email: false,
  password: false,
})

const isSubmitting = ref(false)

// Validation rules
const validateEmail = (email: string): string[] => {
  const errors: string[] = []
  if (!email) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address')
  }
  return errors
}

const validatePassword = (password: string): string[] => {
  const errors: string[] = []
  if (!password) {
    errors.push('Password is required')
  } else if (password.length < 6) {
    errors.push('Password must be at least 6 characters')
  } else if (password.length > 50) {
    errors.push('Password cannot exceed 50 characters')
  }
  return errors
}

// Handle input blur events
const handleBlur = (field: keyof typeof touched.value) => {
  touched.value[field] = true
  validateField(field)
}

// Validate individual field
const validateField = (field: keyof typeof formData.value) => {
  if (field === 'email') {
    errors.value.email = validateEmail(formData.value.email)
  } else if (field === 'password') {
    errors.value.password = validatePassword(formData.value.password)
  }
}

// Validate all fields
const validateForm = (): boolean => {
  errors.value.email = validateEmail(formData.value.email)
  errors.value.password = validatePassword(formData.value.password)

  return Object.values(errors.value).every((fieldErrors) => fieldErrors.length === 0)
}

// Computed properties for field states
const isEmailInvalid = computed(() => touched.value.email && errors.value.email.length > 0)

const isPasswordInvalid = computed(() => touched.value.password && errors.value.password.length > 0)

const handleSubmit = async () => {
  if (isSubmitting.value) return

  // Mark all fields as touched
  Object.keys(touched.value).forEach((key) => {
    touched.value[key as keyof typeof touched.value] = true
  })

  // Validate all fields
  if (!validateForm()) {
    return
  }

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
    <!-- Left side with graphic -->
    <div class="w-1/2 bg-gradient-to-r from-blue-50 to-transparent relative">
      <div class="absolute w-[180%] h-[180%] -left-[30rem] -top-[22rem] drop-shadow-md">
        <LoginScreenGraphics />
      </div>
    </div>
    <!-- Right side with form -->
    <div class="w-1/2 flex items-center justify-center">
      <div class="w-full max-w-sm">
        <h1 class="text-3xl font-bold tracking-tight text-center mb-12">
          Login to Access Dashboard
        </h1>
        <form @submit.prevent="handleSubmit" class="space-y-8" novalidate>
          <div class="font-poppins text-lg">
            <label class="block font-semibold text-gray-700 mb-2">
              Email<span class="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="email"
              v-model="formData.email"
              @blur="handleBlur('email')"
              class="w-full px-4 py-3 border-[2px] rounded-sm focus:outline-none focus:border-blue-500"
              :class="{
                'border-red-500': isEmailInvalid,
                'border-[#707070]': !isEmailInvalid,
              }"
              required
              :disabled="isSubmitting"
            />
          </div>
          <div class="font-poppins text-lg">
            <div class="flex justify-between items-center mb-2">
              <label class="block font-semibold text-gray-700">
                Password<span class="text-red-500 ml-0.5">*</span>
              </label>
              <a href="#" class="text-red-500 hover:text-red-600">Forget Password?</a>
            </div>
            <input
              type="password"
              v-model="formData.password"
              @blur="handleBlur('password')"
              class="w-full px-4 py-3 border-[2px] rounded-sm focus:outline-none focus:border-blue-500"
              :class="{
                'border-red-500': isPasswordInvalid,
                'border-[#707070]': !isPasswordInvalid,
              }"
              required
              :disabled="isSubmitting"
            />
          </div>
          <Button
            type="submit"
            class="max-w-md px-10 mt-4 bg-white font-poppins text-lg text-blue-500 border-2 border-blue-500 py-6 rounded-full hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Login</span>
            <span v-if="!isSubmitting" class="text-2xl py-0 my-0 -mt-[1.5px]">»</span>
            <span v-if="isSubmitting">Processing...</span>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
