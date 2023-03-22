import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import "./assets/main.css";
import "primevue/resources/themes/vela-green/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css"

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(PrimeVue);
app.use(pinia);
app.use(router);
app.mount("#app");
