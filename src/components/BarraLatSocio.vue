<template>
  <div class="container">
    <aside class="sidebar">
      <v-btn router-link to="/miinfo"
        class="botones"
        @mouseover="activarColorGris"
        @mouseleave="restaurarColorboton"
        :color="coloresBotones1"
      >Mi Perfil</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris"
        @mouseleave="restaurarColorboton"
        :color="coloresBotones1"
        @click="toggleRutinas"
      >Rutinas</v-btn>

      <!-- botones de rutina -->
      <div v-if="showRutinas" class="rutinas">
        <v-btn router-link to="/bicep"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Bicep')"
        >Bicep</v-btn>
        <v-btn router-link to="/tricep"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Tricep')"
          :color="coloresBotonesR"
        >Tricep</v-btn>
        <v-btn router-link to="/espalda"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Espalda')"
          :color="coloresBotonesR"
        >Espalda</v-btn>
        <v-btn router-link to="/hombro"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Hombro')"
          :color="coloresBotonesR"
        >Hombro</v-btn>
        <v-btn router-link to="/pecho"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Pecho')"
          :color="coloresBotonesR"
        >Pecho</v-btn>
        <v-btn router-link to="/pierna"
          class="botonesR"
          @mouseover="activarColorR"
          @mouseleave="restaurarColorR"
          @click="mostrarContenido('Pierna')"
          :color="coloresBotonesR"
        >Pierna</v-btn>
      </div>
      <v-btn router-link to="/novedades"
        class="botones"
        @mouseover="activarColorGris"
        @mouseleave="restaurarColorboton"
        :color="coloresBotones1"
        @click="mostrarContenido('Novedades')"
      >Novedades</v-btn>

      <v-btn router-link to="/membresia"
      class="botones"
      @mouseover="activarColorGris"
      @mouseleave="restaurarColorboton"
      :color="coloresBotones1"
      @click="mostrarContenido('Membresia')"
      >Membresia</v-btn>
  
      <v-btn router-link to="/clases"
        class="botones"
        @mouseover="activarColorGris"
        @mouseleave="restaurarColorboton"
        :color="coloresBotones1"
      >Clases</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris"
        @mouseleave="restaurarColorboton"
        :color="coloresBotones1"
      >Historial</v-btn>
      <v-btn router-link to="/"
      class="botonSalir"
      @mouseover="activarRojo"
      @mouseleave="restaurarRojo"
      :color="colorSalir"
      @click="cerrarSesion"
    >Cerrar Sesión</v-btn>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Bicep from '@/views/BicepsView.vue';
import Tricep from '@/views/TricepView.vue';
import Espalda from '@/views/EspaldaView.vue';
import Hombro from '@/views/HombroView.vue';
import Pecho from '@/views/PechoView.vue';
import Pierna from '@/views/PiernaView.vue';
import Novedades from '@/views/NovedadesView.vue';
import { useUserStore } from '@/stores/userStore';
import router from '@/router';

const userStore = useUserStore();

function cerrarSesion() {
  userStore.clearUsuario();
  // Redirige al usuario a la página de inicio o login si es necesario
  // Por ejemplo, usando el router:
  // router.push('/login');
  router.push('/login');
}

// Estados
const showRutinas = ref(false);
const currentComponent = ref(null);

// Funciones
function toggleRutinas() {
  showRutinas.value = !showRutinas.value;
}

const coloresBotones1 = {
  perfil: 'white',
  rutinas: 'white',
  membresia: 'white',
  clases: 'white',
  historial: 'white'
};

const coloresBotonesR = {
  bicep: 'white',
  tricep: 'white',
  espalda: 'white',
  hombro: 'white',
  pecho: 'white',
  pierna: 'white'
};

function mostrarContenido(componente) {
  const componentes = {
    Bicep,
    Tricep,
    Espalda,
    Hombro,
    Pecho,
    Pierna,
    Novedades 
  };
  currentComponent.value = componentes[componente] || null;
}

function activarColorGris() {
  coloresBotones1.value = 'grey';
}

function restaurarColorboton() {
  coloresBotones1.value = 'white';
}

function activarColorR() {
  coloresBotonesR.value = 'grey';
}

function restaurarColorR() {
  coloresBotonesR.value = 'white';
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
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: var(--color-boton, white);
  border-color: var(--color-boton, white);
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 3px;
}

.botonSalir {
  height: 40px;
  width: 180px;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  background-color: var(--color-salir, red);
  border-color: var(--color-salir, red);
  color: grey;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: normal;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 540px; /* Ajustar esta propiedad */
  position: fixed;
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
  background-color: var(--color-botonR, white);
  border-color: var(--color-botonR, white);
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.botonesR:hover {
  --color-botonR: grey;
  color: white;
}

main {
  flex: 1;
  margin-left: 200px;
  padding: 20px;
  height: 100vh;
  margin-top: 40px;
  overflow-y: auto;
}
</style>