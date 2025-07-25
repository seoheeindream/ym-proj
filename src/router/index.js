// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../screens/main.vue";
import Result from "../screens/Result.vue";
import Test00 from "../screens/test00.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/test00", name: "Test00", component: Test00 },
  { path: "/Result", name: "Result", component: Result },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
