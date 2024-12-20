// Icons
import IconAnalytics from '@/components/icons/IconAnalytics.vue'
import IconDashboard from '@/components/icons/IconDashboard.vue'
import IconTrading from '@/components/icons/IconTrading.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import type { NavigationItem } from '@/types'

// Navigation items
export const mainNavigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: IconDashboard,
    path: '/dashboard',
    isDisabled: false,
  },
  {
    name: 'Analytics',
    icon: IconAnalytics,
    path: '/analytics',
    isDisabled: true,
  },
  {
    name: 'Trading',
    icon: IconTrading,
    path: '/trading',
    isDisabled: true,
  },
  {
    name: 'Notifications',
    icon: IconNotification,
    path: '/notifications',
    isDisabled: true,
  },
]

export const logoutItem: NavigationItem = {
  name: 'Logout',
  icon: IconLogout,
  path: '/login',
  isDisabled: false,
}
