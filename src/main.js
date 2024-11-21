import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el archivo de rutas
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const app = createApp(App);

// Inicializar AOS
AOS.init({
  duration: 1200,   // Duración de la animación en milisegundos
  once: true,       // La animación se ejecuta solo una vez
  offset: 100,      // Distancia antes de que el elemento sea visible
});

// Usar el router en tu app
app.use(router);

// Montar la aplicación
app.mount('#app');