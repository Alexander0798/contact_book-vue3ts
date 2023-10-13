import { createApp, Directive } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import "./style.css";
import App from "./App.vue";
import components from "./components/UI";
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(VueCookieNext);
app.use(PrimeVue);

components.forEach((component) => app.component(component.name, component));

app.mount("#app");
VueCookieNext.config({ expire: "7d" });

app.directive('phone', <Directive>{
    bind(el: any) {  
      el.oninput = function(e: any) {
        if (!e.isTrusted) {
          return
        }
  
        const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

        if (!x[2] && x[1] !== '') {
          this.value = x[1] === '8' ? x[1] : '8' + x[1]
        } else {
            this.value = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
        }
      }
    },
})