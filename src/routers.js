import LogIn from "./components/LogIn.vue";
import main from "./components/main.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "LogIn",
    component: LogIn,
    path: "/",
  },
  {
    name: "main",
    component: main,
    path: "/main",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
