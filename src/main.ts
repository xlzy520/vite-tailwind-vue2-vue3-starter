import App from "@/App.vue";
import { createApp } from "vue";

import "windi.css";
import router from "@/router";

const app = createApp(App);

app.use(router)

app.mount("#app");
