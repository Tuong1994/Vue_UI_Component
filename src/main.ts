import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import './style/main.scss'

import { iconList } from './libs/icon'

iconList()

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(createPinia());

app.use(router);

app.mount("#app");
