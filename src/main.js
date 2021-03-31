import Vue from "vue"
import App from "@/App.vue"
import { createApp, h } from "vue-demi"

Vue.config.productionTip = false
Vue.config.devtools = true

import "windi.css"
import router from "@/router"

const app = createApp({
  router,
  render: () => h(App),
})


app.mount('#app')
