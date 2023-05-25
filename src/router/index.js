import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
      ],
    },
    {
      path: "/raves",
      name: "raves",
      component: () => import("../views/Raves.vue"),
    },
    {
      path: "/event-details",
      name: "event details",
      component: () => import("../views/EventDetails.vue"),
    },
  ],
});

export default router;
