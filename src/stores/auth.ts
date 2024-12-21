// src/stores/auth.ts

import { DEMO_CREDENTIALS } from '@/constants/demo-creds'
import type { AuthState, User } from '@/types'
import { defineStore } from 'pinia'
import { toast } from 'vue-sonner'

/**
 * Authentication store to manage user login state and credentials in the login page!
 * Uses pinia-plugin-persistedstate for persistence of auth state
 */

export const useAuthStore = defineStore('auth', {
  /**
   * Initial auth state
   * Checks localStorage for existing session
   */
  state: (): AuthState => ({
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  }),

  /**
   * Computed properties
   */
  getters: {
    // Returns current authentication status
    authStatus: (state) => state.isAuthenticated,

    // Returns current user information
    currentUser: (state) => state.user,

    // Returns authentication token
    getToken: (state) => state.token,

    // Returns authentication loading status
    isLoading: (state) => state.loading,

    // Returns authentication error message
    getError: (state) => state.error,
  },

  /**
   * Store actions for entire authentication flow in the login page
   */
  actions: {
    /**
     * Handles user login
     * For demo purposes, validates against static DEMO_CREDENTIALS
     * @param email - User email
     * @param password - User password
     * @returns Promise<boolean>
     */

    async login(email: string, password: string) {
      this.loading = true
      this.error = null

      try {
        // Validate email and password
        if (!email || !password) {
          throw new Error('Email and password are required')
        }

        // Simulating some network delay for demo purposes in this assignment!
        await new Promise((resolve) => setTimeout(resolve, 200))

        // Validate demo credentials
        if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
          const demoToken = 'demo-token-2024'

          // Set authentication data
          this.setToken(demoToken)
          this.setUser({
            email: DEMO_CREDENTIALS.email,
            name: 'Demo User',
          })
          this.isAuthenticated = true

          toast.success('Login successful! Welcome back, Demo User.', {
            description: 'Redirecting to dashboard...',
            duration: 3000,
          })

          return true
        }

        throw new Error('Invalid credentials')
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
        this.error = errorMessage

        toast.error('Login failed', {
          description: errorMessage,
          duration: 4000,
        })

        return false
      } finally {
        this.loading = false
      }
    },

    /**
     * Handles user logout
     * Clears all authentication data from store and localStorage
     */
    logout() {
      try {
        this.isAuthenticated = false
        this.user = null
        this.token = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        toast.success('Logged out successfully', {
          description: 'See you next time!',
          duration: 3000,
        })
      } catch (error: unknown) {
        toast.error('Logout failed', {
          description: `Please try again! because an unexpected error occurred ${(error as Error).message}`,
          duration: 3000,
        })
      }
    },

    /**
     * Updates user data in store and localStorage
     * @param user - User object containing email and optional name
     */
    setUser(user: User) {
      try {
        this.user = user
        localStorage.setItem('user', JSON.stringify(user))
      } catch (error: unknown) {
        toast.error('Failed to save user data', {
          description: `Some features may be unavailable ${(error as Error).message}`,
          duration: 3000,
        })
      }
    },
    /**
     * Updates authentication token in store and localStorage
     * @param token - Authentication token string
     */
    setToken(token: string) {
      try {
        this.token = token
        localStorage.setItem('token', token)
      } catch (error: unknown) {
        toast.error('Failed to save authentication token', {
          description: `Please try logging in again  ${(error as Error).message}`,
          duration: 3000,
        })
      }
    },

    /**
     * Initializes auth store from localStorage
     * Used to restore authentication state on page reload
     */
    initializeAuth() {
      try {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (token) {
          this.token = token
          this.isAuthenticated = true
        }

        if (user) {
          this.user = JSON.parse(user)
        }
      } catch (error: unknown) {
        toast.error('Failed to restore session', {
          description: `Please log in again  ${(error as Error).message}`,
          duration: 3000,
        })
        this.logout()
      }
    },
  },

  // Enable state persistence with pinia-plugin-persistedstate
  persist: true,
})
