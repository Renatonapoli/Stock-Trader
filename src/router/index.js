import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/portfolio/Portfolio.vue"
      ),
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: () =>
      import(/* webpachunckName: "about" */ "../components/stocks/Stocks.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
