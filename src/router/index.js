import { createRouter, createWebHistory } from "vue-router";
import ZoomInicio from "../views/ZoomInicio.vue";
import Eventos from "../views/eventos.vue";

// Define las rutas
const routes = [
  {
    path: "/", // Ruta principal
    name: "Home",
    component: ZoomInicio,
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: ZoomInicio,
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: Eventos,
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(), // Modo historia (recomendado para la mayoría de los proyectos)
  routes, // Asigna las rutas
});
/*
router.beforeEach((to, from, next) => {
  setTimeout(() => {
    // Lógica para permitir la navegación después del retraso
    next();
  }, 1000); // 2 segundos de retraso
});
*/
// Exporta el router para usarlo en tu app
export default router;
