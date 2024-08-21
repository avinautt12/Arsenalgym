<template>
    <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
      <barraNav></barraNav>
        <v-container fluid>

        <div class="container">
          <header>
            <h1>PRODUCTOS</h1>
            <nav>
              <ul>
                <li><a href="#">INICIAR SESIÓN</a></li>
              </ul>
            </nav>
          </header>
          <v-container class=" d-flex flex-column justify-center align-center">
    
            <h1>¡GRACIAS POR SU COMPRA!</h1>
            <img class="producto-img" src="/public/regalopng.png" alt="Imagen de regalo">
            <p>Ha comprado un suplemento “EVP-3D Non-Stim Pre-Workout”. Gracias por su preferencia.</p>
  
          
          </v-container>
          <section class="acciones">
            <v-btn @click="seguirComprando">SEGUIR COMPRANDO</v-btn>
            <v-btn @click="imprimirRecibo">IMPRIMIR RECIBO</v-btn>
          </section>
        </div>
      </v-container>
    </v-layout>
  </template>
  
  <script>
  export default {
    methods: {
      seguirComprando() {
        console.log('Continuar comprando');
      },
      imprimirRecibo() {
        console.log('Imprimir recibo');
      }
    }
  };
  </script>

  <script setup>
    import barraNav from '@/components/barraNav.vue';
</script>
  
  <style scoped>
  .container {
    max-width: 100vw;
    margin: 0 auto;
    max-height: 100vh;
    background-color: #f0f0f0;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  header h1 {
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-left: 20px;
  }
  
  .mensaje {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  .producto-img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .acciones {
    text-align: center;
    display: flex;
    justify-content: space-between;
    max-width: 100vw;
  }
  
  .acciones v-btn {
    margin: 0 10px;
  }
  </style>
  