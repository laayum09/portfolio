import { inject } from '@vercel/analytics'

// existing imports
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount("#app")

// Initialize Vercel Analytics
inject()
