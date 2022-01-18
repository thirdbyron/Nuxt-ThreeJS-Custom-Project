import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import router from "./router";
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");