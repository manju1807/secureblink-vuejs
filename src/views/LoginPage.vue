// src/views/Login.vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { DEMO_CREDENTIALS } from '@/constants/demo-creds'

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
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <!-- Demo Credentials Notice -->
      <div class="mb-4 p-3 bg-blue-50 text-blue-700 rounded-md">
        <p class="text-sm">
          <strong>Demo Credentials:</strong><br />
          Email: {{ DEMO_CREDENTIALS.email }}<br />
          Password: {{ DEMO_CREDENTIALS.password }}
        </p>
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
          <input
            type="email"
            v-model="formData.email"
            @blur="handleBlur('email')"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            :class="{
              'border-red-500 ring-red-200': isEmailInvalid,
              'border-gray-300': !isEmailInvalid,
            }"
            required
            :disabled="isSubmitting"
          />
          <div v-if="isEmailInvalid" class="mt-1">
            <p v-for="error in errors.email" :key="error" class="text-red-500 text-xs">
              {{ error }}
            </p>
          </div>
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2"> Password </label>
          <input
            type="password"
            v-model="formData.password"
            @blur="handleBlur('password')"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            :class="{
              'border-red-500 ring-red-200': isPasswordInvalid,
              'border-gray-300': !isPasswordInvalid,
            }"
            required
            :disabled="isSubmitting"
          />
          <div v-if="isPasswordInvalid" class="mt-1">
            <p v-for="error in errors.password" :key="error" class="text-red-500 text-xs">
              {{ error }}
            </p>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting">Logging in...</span>
          <span v-else>Log In</span>
        </button>
      </form>
    </div>
  </div>
</template>
