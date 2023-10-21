import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";
import "./style.scss";
import { store, key } from "./store/store";
const VueMask: any = VueTheMask;
const app = createApp(App);

app.use(VueCookieNext).use(store, key).use(VueMask);

app.mount("#app");
VueCookieNext.config({ expire: "7d" });
