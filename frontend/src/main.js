import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueAxios, axios) //追記

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
