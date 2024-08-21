<template>
    <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center; position: fixed;">
        <v-img
        src="/arsenal.png"
        alt="Logo"
        contain
        class="imagen-izquierda"
        @click="toggleSidebar"
      ></v-img>

      <v-spacer></v-spacer>
      <div class="nav-buttons"> 
        <router-link to="/">
          <v-btn class="boton-bar">INICIO</v-btn>
        </router-link>
        <router-link to="/Producto">
          <v-btn class="boton-bar">PRODUCTOS</v-btn>
        </router-link>
        <router-link to="/Inbody">
          <v-btn class="boton-bar">INBODY</v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/Login">
        <v-btn icon class="boton-bar boton-iniciar-sesion">
          <v-icon>mdi-account</v-icon>
        </v-btn> 
      </router-link>
      <router-link to="/Compras">
        <v-btn icon class="boton-bar boton-compras">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
      <BarraLatSocio v-show="isSidebarVisible" @close="toggleSidebar" />    </v-app-bar>
  </template> 
  
  <script setup>
  import { ref } from 'vue';
  import BarraLatSocio from './BarraLatSocio.vue'; // Asegúrate de que esta ruta sea correcta
  
  // Estado para controlar la visibilidad del sidebar
  const isSidebarVisible = ref(false);
  </script>

  <style scoped>
  .imagen-izquierda {
    width: 150px; /* Ajusta el ancho según sea necesario */
    height: auto; /* Cambia el cursor al pasar sobre la imagen si es clickeable */
    margin-left: 100px; /* Espaciado a la izquierda */
    position: fixed;
  }
   
  .nav-buttons {
    display: flex;
    gap: 16px; 
    justify-content: center;
    align-items: center;
    margin-left: 360px;
  }
  
  .boton-bar {
    color: white;
    font-size: 20px;
    min-width: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    text-align: center;
  }
  
  
  .boton-iniciar-sesion, .boton-compras {
    margin-right: 40px;
    color: white;
  }
  </style>
  
