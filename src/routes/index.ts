import { createRouter, createWebHistory } from 'vue-router';


import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Komponen Home akan tampil ketika path adalah '/'
  }
];

// Membuat router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Gunakan mode history (tanpa hash)
  routes, // Daftar rute yang telah disusun
});

export default router; // Mengekspor router
