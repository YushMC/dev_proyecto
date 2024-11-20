import { createRouter, createWebHistory } from 'vue-router';
import ZoomInicio from '../views/ZoomInicio.vue';


// Define las rutas
const routes = [
  {
    path: '/', // Ruta principal
    name: 'Home',
    component: ZoomInicio
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: ZoomInicio
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(), // Modo historia (recomendado para la mayoría de los proyectos)
  routes, // Asigna las rutas
});

// Exporta el router para usarlo en tu app
export default router;