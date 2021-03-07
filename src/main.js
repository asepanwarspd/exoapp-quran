import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";
import router from "./router";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ mirror: true, once: false });

import VueClickAway from "vue3-click-away";
// https://laracasts.s3.amazonaws.com/series/thumbnails/svg/static-site-generators.svg
createApp(App)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .mount("#app");
