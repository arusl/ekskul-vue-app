import Vue from "vue";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";

Vue.config.productionTip = false;
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Buefy);

const routes = [{ path: "/", component: HomePage }];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
