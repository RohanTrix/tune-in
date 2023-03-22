import { createRouter, createWebHistory } from "vue-router";
// import MainContentView from "@/views/MainContentView.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/library",
      name: "library",
      component: SearchView,
    },
  ],
});
