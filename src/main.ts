import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import App from "./App.vue";
import VueTheMask from 'vue-the-mask';
import "./style.css";
import { store, key } from './store/store'

const app = createApp(App);

app.use(VueCookieNext)
app.use(store, key)
app.use(VueTheMask)


app.mount("#app");
VueCookieNext.config({ expire: "7d" });


