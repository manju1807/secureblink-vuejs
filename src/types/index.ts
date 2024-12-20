// src/types/index.ts

export interface User {
  email: string
  name?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading: boolean;
  error: string | null;
}
