import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import "./style.css";
import App from "./App.vue";
import components from "./components/UI";

const app = createApp(App);

app.use(VueCookieNext);

components.forEach((component) => app.component(component.name, component));

app.mount("#app");
VueCookieNext.config({ expire: "7d" });
