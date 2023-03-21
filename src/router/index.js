import { createRouter, createWebHistory } from "vue-router";
// import MainContentView from "@/views/MainContentView.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});
