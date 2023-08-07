import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import PlantsView from "../views/PlantsView.vue";
import PlantInfoView from "../views/PlantInfoView.vue";
import cartView from "../views/cartView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/contact-us",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/plants",
    name: "PlantsView",
    component: PlantsView,
  },
  {
    path: "/Plant-information/:PlantId",
    name: "PlantInfoView",
    component: PlantInfoView,
  },
  {
    path: "/cart",
    name: "cartView",
    component: cartView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
