import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import SearchView from "../views/SearchView.vue";
// import NotFoundView from "../views/NotFoundView.vue";
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
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/library",
      name: "library",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
