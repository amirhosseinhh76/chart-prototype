import LogIn from "./components/LogIn.vue";
import test from "./components/test.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "LogIn",
    component: LogIn,
    path: "/",
  },
  {
    name: "test",
    component: test,
    path: "/test",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
