<template>
  <div class="container">
    <v-btn
      class="hamburger-button"
      @click="toggleSidebar"
      v-show="isMobile"
    >
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>

    <aside :class="['sidebar', { 'sidebar-hidden': isMobile && !sidebarVisible }]">
      <v-btn
        class="botones"
        @mouseover="activarColorGris('perfil')"
        @mouseleave="restaurarColorboton('perfil')"
        :color="coloresBotones1.perfil"
      >Mi Perfil</v-btn>
      
      <v-btn
        class="botones"
        @mouseover="activarColorGris('rutinas')"
        @mouseleave="restaurarColorboton('rutinas')"
        :color="coloresBotones1.rutinas"
        @click="toggleRutinas"
      >Rutinas</v-btn>

      <div v-if="showRutinas" class="rutinas">
            <v-btn router-link to="/bicep"
              class="botonesR"
              @mouseover="activarColorR('bicep')"
              @mouseleave="restaurarColorR('bicep')"
              :color="coloresBotonesR.bicep"
            >Bicep</v-btn>
            <v-btn
              router-link to="/tricep"
              class="botonesR"
              @mouseover="activarColorR('tricep')"
              @mouseleave="restaurarColorR('tricep')"
              :color="coloresBotonesR.tricep"
            >Tricep</v-btn>
            <v-btn
              router-link to="/espalda"
              class="botonesR"
              @mouseover="activarColorR('espalda')"
              @mouseleave="restaurarColorR('espalda')"
              :color="coloresBotonesR.espalda"
            >Espalda</v-btn>
            <v-btn
              router-link to="/hombro"
              class="botonesR"
              @mouseover="activarColorR('hombro')"
              @mouseleave="restaurarColorR('hombro')"
              :color="coloresBotonesR.hombro"
            >Hombro</v-btn>
            <v-btn
              router-link to="/pecho"
              class="botonesR"
              @mouseover="activarColorR('pecho')"
              @mouseleave="restaurarColorR('pecho')"
              :color="coloresBotonesR.pecho"
            >Pecho</v-btn>
            <v-btn
              router-link to="/pierna"
              class="botonesR"
              @mouseover="activarColorR('pierna')"
              @mouseleave="restaurarColorR('pierna')"
              :color="coloresBotonesR.pierna"
            >Pierna</v-btn>
      </div>

      <v-btn
        class="botones"
        @mouseover="activarColorGris('novedades')"
        @mouseleave="restaurarColorboton('novedades')"
        :color="coloresBotones1.novedades"
      >Novedades</v-btn>

      <v-btn
        class="botones"
        @mouseover="activarColorGris('membresia')"
        @mouseleave="restaurarColorboton('membresia')"
        :color="coloresBotones1.membresia"
      >Membresia</v-btn>

      <v-btn
        class="botones"
        @mouseover="activarColorGris('clases')"
        @mouseleave="restaurarColorboton('clases')"
        :color="coloresBotones1.clases"
      >Clases</v-btn>

      <v-btn
        class="botones"
        @mouseover="activarColorGris('historial')"
        @mouseleave="restaurarColorboton('historial')"
        :color="coloresBotones1.historial"
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

const sidebarVisible = ref(false);
const showRutinas = ref(false);

const coloresBotones1 = ref({
  perfil: 'white',
  rutinas: 'white',
  novedades: 'white',
  membresia: 'white',
  clases: 'white',
  historial: 'white'
});

const coloresBotonesR = ref({
  bicep: 'white',
  tricep: 'white',
  espalda: 'white',
  hombro: 'white',
  pecho: 'white',
  pierna: 'white'
});

const colorSalir = ref('white');

const isMobile = ref(true);

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

function toggleRutinas() {
  showRutinas.value = !showRutinas.value;
}

function activarColorGris(boton) {
  coloresBotones1.value[boton] = 'grey';
}

function restaurarColorboton(boton) {
  coloresBotones1.value[boton] = 'white';
}

function activarColorR(boton) {
  coloresBotonesR.value[boton] = 'grey';
}

function restaurarColorR(boton) {
  coloresBotonesR.value[boton] = 'white';
}

function activarRojo() {
  colorSalir.value = 'red';
}

function restaurarRojo() {
  colorSalir.value = 'white';
}

function cerrarSesion() {
  const userStore = useUserStore();
  userStore.clearUsuario();
  router.push('/login');
}
</script>


<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.hamburger-button {
  position: fixed;
  margin-top: 15px;
  margin-left: 15px;
  z-index: 1000;
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
  transition: transform 0.3s ease;
  z-index: 2000; 
}

.sidebar-hidden {
  transform: translateX(-220px);
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 22px;
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

.botones:hover {
  --color-boton: grey;
  color: white;
}

.rutinas {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.botonesR {
  height: 100px;
  width: 145px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: white;
  border-color: white;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.botonesR:hover {
  --color-botonR: grey;
  color: white;
}

@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-220px);
  }
  .sidebar-hidden {
    transform: translateX(0);
  }
}
</style>