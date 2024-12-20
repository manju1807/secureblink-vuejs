import type { App as VueApp } from 'vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/assets/index.css'
import VueApexCharts from 'vue3-apexcharts'

const app: VueApp = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
