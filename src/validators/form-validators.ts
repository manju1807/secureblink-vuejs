// @/validators/form-validators.ts

export interface FormErrors {
  email: string[]
  password: string[]
}

export interface FormTouched {
  email: boolean
  password: boolean
}

export interface FormData {
  email: string
  password: string
}

// Email validation
export const validateEmail = (email: string): string[] => {
  const errors: string[] = []
  if (!email) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address')
  }
  return errors
}

// Password validation
export const validatePassword = (password: string): string[] => {
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

// Validate all fields
export const validateForm = (formData: FormData): FormErrors => {
  return {
    email: validateEmail(formData.email),
    password: validatePassword(formData.password),
  }
}

// Check if form is valid
export const isFormValid = (errors: FormErrors): boolean => {
  return Object.values(errors).every((fieldErrors) => fieldErrors.length === 0)
}
