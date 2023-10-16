import { createApp, Directive } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(VueCookieNext);

app.mount("#app");
VueCookieNext.config({ expire: "7d" });

app.directive('phone', <Directive>{
  mounted(el: any,) {
    console.log(el.value)
    function replaceNumberForInput(value: any) {
      let val = ''
      const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      if(x[6]){
        console.log(x[6])
        return
      }
      if (x[1] === '7' || x[1] === '8') {
        x[1] = '+7'
      } else {
        x[2] = x[1]
        x[1] = '+7'
      }
      val = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')

      return val
    }

    function replaceNumberForPaste(value: any) {
      const r = value.replace(/\D/g, '')
      let val = r
      if (val.charAt(0) === '7' || val.charAt(0) === '8') {
        val = '' + val.slice(1)
      }
      return replaceNumberForInput(val)
    }

    el.oninput = function (e: any) {
      if (!e.isTrusted) {
        return
      }
      this.value = replaceNumberForInput(this.value)
    }

    el.onpaste = function () {
      setTimeout(() => {
        const pasteVal = el.value
        this.value = replaceNumberForPaste(pasteVal)
      })
    }
  }
})
