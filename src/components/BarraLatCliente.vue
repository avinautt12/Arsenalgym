<template>
  <div>
    <div class="container">
      <aside class="sidebar">
        <v-btn
          class="botones"
          @mouseover="activarColorGris('info')"
          @mouseleave="restaurarColorboton('info')"
          :color="coloresBotones.info"
        >Mi información</v-btn>
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
          class="botonSalir"
          @mouseover="activarRojo"
          @mouseleave="restaurarRojo"
          :color="colorSalir"
          @click="cerrarSesion"
        >Cerrar Sesión</v-btn>
      </aside>     
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const coloresBotones = ref({
  info: 'white',
  compras: 'white',
  historial: 'white'
});

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
  flex-direction: row;
  height: calc(100vh - 64px); 
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
  top: 64px;
  left: 0;
}

.botones {
  height: 40px;
  width: 200%;
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
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  letter-spacing: 1px;
  bottom: 80px; 
  left: 10px;   
  background-color: var(--color-boton, white); 
  border-color: var(--color-boton, white); 
  color: grey;
}

.botones:hover {
  --color-boton: grey;
  color: white;
}

.botonSalir:hover {
  --color-boton: grey;
  color: white;
}

main {
  flex: 1;
  margin-left: 200px;
  padding: 20px;
  height: calc(100vh - 64px); 
  overflow-y: auto;
}
</style>
