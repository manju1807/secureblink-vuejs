// src/types/index.ts

import type { Component } from "vue"
import type { ApexOptions } from 'apexcharts'

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

// Types
export interface NavigationItem {
  name: string
  icon: Component
  path: string
  isDisabled: boolean
}

export interface FinancialMetric {
  amount: number
  percentage: string
}

export interface FinancialOverview {
  balance: number
  profits: FinancialMetric
  losses: FinancialMetric
}

// Base country statistics without chart data
export interface BaseCountryStatistic {
  country: string
  value: number
  trend: 'up' | 'down'
}

// Raw data statistics
export interface CountryStatistic extends BaseCountryStatistic {
  rawData: number[] // Renamed from chartData to rawData to avoid confusion
}

// Chart specific data structure
export interface ChartData {
  options: ApexOptions
  series: {
    name: string
    data: number[]
  }[]
}

// Final structure with ApexCharts data
export interface CountryChartData extends BaseCountryStatistic {
  chartData: ChartData
}
