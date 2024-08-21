<template>
  
    <v-app>
      <barraNav></barraNav>
      
      <BarraLatSocio></BarraLatSocio>
      
          

    
    </v-app>
  </template>
  
  <script setup>
  
  import barraNav from '@/components/barraNav.vue';
  import BarraLatSocio from '@/components/BarraLatSocio.vue';
  
  const cerrarSesion = () => {
    alert('Cerrar sesión');
  };
  
  const regresar = () => {
    alert('Regresar');
  };
  </script>
  
  <style scoped>
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffffff; 
    color: white; 
  }
  
  .back-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #0931b4;
    color: white;
  }
  
  .fill-height {
    height: 100vh; 
  }
  
  .v-container {
    padding: 0; 
  }
  </style>
  
