import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import fib from "virtual:fib";
import env from "virtual:env";
import rtyUi from "rty-ui-plus";
import "rty-ui-plus/es/style.css";

console.log(fib(10));
console.log(env);

createApp(App).use(rtyUi).mount("#app");
