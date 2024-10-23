import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ServicesPage from "../pages/ServicePage.vue";
import TechnologyPage from "../pages/TechnologyPage.vue";
// import CRUD from "../pages/CRUD.vue";
import MachineCRUD from "../pages/MachineCRUD.vue";
import PartnerCRUD from "../pages/PartnerCRUD.vue";
import ServiceCRUD from "../pages/ServiceCRUD.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Services", component: ServicesPage },
  { path: "/technology", name: "Technology", component: TechnologyPage },
  // { path: "/crud", name: "CRUD", component: CRUD },
  { path: "/machines-crud", name: "MachineCRUD", component: MachineCRUD },
  { path: "/partners-crud", name: "PartnerCRUD", component: PartnerCRUD },
  { path: "/services-crud", name: "ServiceCRUD", component: ServiceCRUD },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
