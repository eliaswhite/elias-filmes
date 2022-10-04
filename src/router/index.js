import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LancamentosView from "@/views/LancamentosView.vue";
import ComediaView from "@/views/ComediaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lancamentos",
      name: "lancamentos",
      component: LancamentosView,
    },
    {
      path: "/comedia",
      name: "comedia",
      component: ComediaView,
    },
  ],
});

export default router;
