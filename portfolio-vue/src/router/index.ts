import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import RobloxProjects from "../pages/RobloxProjects.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/roblox", name: "RobloxProjects", component: RobloxProjects }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
