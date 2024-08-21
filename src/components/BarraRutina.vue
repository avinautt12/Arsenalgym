<template>
    <div>
      <aside class="sidebar">
        <BarraAdmin></BarraAdmin>
        <v-btn 
          class="botones" 
          @mouseover="activarColorGris('pecho')" 
          @mouseleave="restaurarColorboton('pecho')" 
          :color="coloresBotones1.pecho"
          @click="navegar('pecho')"
        >Pecho</v-btn>
        <v-btn 
          class="botones" 
          @mouseover="activarColorGris('hombro')" 
          @mouseleave="restaurarColorboton('hombro')" 
          :color="coloresBotones1.hombro"
          @click="navegar('hombro')"
        >Hombro</v-btn>
        <v-btn 
          class="botones" 
          @mouseover="activarColorGris('triceps')" 
          @mouseleave="restaurarColorboton('triceps')" 
          :color="coloresBotones1.triceps"
          @click="navegar('triceps')"
        >Triceps</v-btn>
        <v-btn 
          class="botones" 
          @mouseover="activarColorGris('biceps')" 
          @mouseleave="restaurarColorboton('biceps')" 
          :color="coloresBotones1.biceps"
          @click="navegar('biceps')"
        >Biceps</v-btn>
        <v-btn 
          class="botones" 
          @mouseover="activarColorGris('espalda')" 
          @mouseleave="restaurarColorboton('espalda')" 
          :color="coloresBotones1.espalda"
          @click="navegar('espalda')"
        >Espalda</v-btn>
      </aside>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import BarraAdmin from './components/BarraAdmin.vue';
  
  const router = useRouter();
  
  const coloresBotones1 = ref({
    clientes: 'white',
    inbody: 'white',
    rutinas: 'white',
    novedades: 'white',
    membresia: 'white',
    clases: 'white',
    historial: 'white',
  });
  
  function activarColorGris(boton) {
    coloresBotones1.value[boton] = 'grey';
  }
  
  function restaurarColorboton(boton) {
    coloresBotones1.value[boton] = 'white';
  }
  
  function navegar(ruta) {
    router.push(`/${ruta}`);
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    padding: 20px;
    background: linear-gradient(to right, black, red);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .botones {
    height: 40px;
    width: 180px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 10px;
    text-transform: capitalize;
    background-color: white;
    border-color: white;
    color: black;
  }
  
  .botones:hover {
    background-color: grey !important;
    color: white !important;
  }
  </style>
  