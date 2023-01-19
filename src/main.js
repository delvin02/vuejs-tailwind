import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import store from "./store/noteStore";

const emitter = mitt();

// Import tailwindcss
import "./assets/tailwindcss.css";

// Main css
import "./assets/main.css";

const app = createApp(App);

// assign it to global variable
app.config.globalProperties.emitter = emitter;

// router & store
app.use(router);
app.use(store);
app.mount("#app");
