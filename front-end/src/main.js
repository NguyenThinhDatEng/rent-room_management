import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
// components
import VToast from "@/components/base/toast/VToast.vue";

const app = createApp(App);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faUserSecret,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faUserSecret, faChevronUp, faChevronDown);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("v-toast", VToast);
app.use(ElementPlus);

app.config.productionTip = false;

// Use vue-router
app.use(router);

app.mount("#app");
