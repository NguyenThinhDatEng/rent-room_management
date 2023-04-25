import LoginView from "@/views/auth/LoginView.vue";
import MainView from "@/views/main/MainView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  { path: "/login", component: LoginView },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
