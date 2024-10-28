import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ServicesPage from "../pages/ServicePage.vue";
import TechnologyPage from "../pages/TechnologyPage.vue";
import ContactPage from "../pages/ContactPage.vue";
// import CRUD from "../pages/CRUD.vue";
import MachineCRUD from "../pages/MachineCRUD.vue";
import PartnerCRUD from "../pages/PartnerCRUD.vue";
import ServiceCRUD from "../pages/ServiceCRUD.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Services", component: ServicesPage },
  { path: "/technology", name: "Technology", component: TechnologyPage },
  { path: "/contact", name: "Contact", component: ContactPage },
  // { path: "/crud", name: "CRUD", component: CRUD },
  { path: "/machines-crud", name: "MachineCRUD", component: MachineCRUD },
  { path: "/partners-crud", name: "PartnerCRUD", component: PartnerCRUD },
  { path: "/services-crud", name: "ServiceCRUD", component: ServiceCRUD },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Scroll to the top
  next();
});
export default router;
