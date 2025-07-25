import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ← 라우터 import
import "./assets/main.css"; // Tailwind 등 스타일 import

createApp(App).use(router).mount("#app");
