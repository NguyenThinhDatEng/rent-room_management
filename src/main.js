import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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

const vuetify = createVuetify({
  components,
  directives,
});

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(vuetify);

app.config.productionTip = false;

app.mount("#app");
