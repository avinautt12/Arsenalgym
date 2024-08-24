<template>
  <div class="container">
    <!-- Botón de hamburguesa -->
    <v-btn
      class="hamburger-button"
      @click="toggleSidebar"
      v-show="isMobile"
    >
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>

    <!-- Barra lateral -->
    <aside :class="['sidebar', { 'sidebar-hidden': isMobile && !sidebarVisible }]">
      <v-btn
        class="botones"
        @mouseover="activarColorGris('info')"
        @mouseleave="restaurarColorboton('info')"
        :color="coloresBotones.info"
      >Mi Perfil</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris('compras')"
        @mouseleave="restaurarColorboton('compras')"
        :color="coloresBotones.compras"
        @click="compras"
      >Mis Compras</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris('historial')"
        @mouseleave="restaurarColorboton('historial')"
        :color="coloresBotones.historial"
      >Historial</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarRojo"
        @mouseleave="restaurarRojo"
        :color="colorSalir"
        @click="cerrarSesion"
      >Cerrar Sesión</v-btn>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import router from '@/router';

const userStore = useUserStore();
const sidebarVisible = ref(false);

function cerrarSesion() {
  userStore.clearUsuario();
  router.push('/login');
}

const coloresBotones = ref({
  info: 'white',
  compras: 'white',
  historial: 'white'
});

const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 900;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

function activarColorGris(boton) {
  coloresBotones.value[boton] = 'grey';
}

function restaurarColorboton(boton) {
  coloresBotones.value[boton] = 'white';
}

const colorSalir = ref('white');

function activarRojo() {
  colorSalir.value = 'red';
}

function restaurarRojo() {
  colorSalir.value = 'white';
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.hamburger-button {
  position: fixed;
  margin-top: 10px;
  margin-right: 95px;
  z-index: 3000;
  background-color: white;
  color: black;
}

.sidebar {
  width: 200px;
  height: 100%;
  padding: 20px;
  background: linear-gradient(to bottom, black, red);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  transition: transform 0.3s ease, visibility 0.3s ease;
  z-index: 2000;
  transform: translateX(0);
}

.sidebar-hidden {
  transform: translateX(-220px);
  visibility: hidden;
}

.botones {
  height: 40px;
  width: 100%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: white;
  border-color: white;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 3px;
}

.botonSalir {
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  letter-spacing: 1px;
  bottom: 80px;
  left: 10px;
  background-color: white;
  border-color: white;
  color: grey;
}

.botones:hover {
  --color-boton: grey;
  color: white;
}

@media (max-width: 900px) {
  .sidebar-hidden {
    transform: translateX(-220px);
    visibility: hidden;
  }

  .sidebar {
  background: transparent;
  }
}
</style>
