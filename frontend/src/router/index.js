import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ServicesPage from "../pages/ServicePage.vue";
import TechnologyPage from "../pages/TechnologyPage.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Services", component: ServicesPage },
  { path: "/technology", name: "Technology", component: TechnologyPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
