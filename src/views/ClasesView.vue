<template>
    <v-app>
      <barraNav></barraNav>
      <BarraLatSocio @cerrarSesion="handleCerrarSesion"></BarraLatSocio>
      <v-container class="main-container pa-0">
        <v-row class="d-flex justify-center align-start pa-0 ma-0 mt-n10">
          <v-col cols="12" md="8" class="ma-0">
            <v-card class="pa-5 profile-card">
              <v-card-title class="title">
                Clases de Crossfit
                <v-icon class="ml-2">mdi-dumbbell</v-icon>
              </v-card-title>
              <v-card-subtitle class="info">
                Es un programa de acondicionamiento físico general, una actividad de alta intensidad que pone a prueba <br> ejercicios de fuerza y cardio.
              </v-card-subtitle>
            </v-card>
            <v-img src="/campeones.jpeg" class="camp"></v-img>
            <router-link to="/clasesinscripcion"> <v-btn class="pago">Inscribirme a una clase</v-btn> </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  
  <script setup>
  import { useUserStore } from '@/stores/userStore';
  import BarraLatSocio from '@/components/BarraLatSocio.vue';
  import barraNav from '@/components/barraNav.vue';
  import { useRouter } from 'vue-router';
  
  const userStore = useUserStore();
  const router = useRouter();
  
  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('token');
    userStore.setUsuario(null);
    router.push('/login'); // Redirige a la página de login
  };
  </script>
  
  <style scoped>
    .pago{
        margin: 20px;
        margin-left: 800px;
        background-color: grey;
        color: white;
    }

   .camp{
    height: 550px;
    margin-top: -550px;
    margin-left: 150px;
   }

  .main-container {
    display: flex;
    flex-direction: column;
    height: 50px;
  }
  
  
  .profile-card {
    width: 900px;
    padding: 20px;
    border-radius: 15px;
    background: grey;
    transition: transform 0.3s ease-in;
    position: relative;
    top: -580px; /* Ajusta este valor para subir la tarjeta */
    margin-left: 40px;
    margin: 10px;
  }

  .profile-card:hover {
    transform: scale(1.15); /* Efecto de zoom al pasar el mouse */
  }
  
  .title {
    font-size: 26px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  
  .info {
    font-size: 16px;
    color: white;
    text-align: center;
  }
  
  .info p {
    margin: 10px;
  }
  
  .v-row {
    flex: 1; /* Permite que la fila ocupe el espacio restante */
  }
  
  .v-col {
    display: flex;
    justify-content: center; /* Centra el contenido horizontalmente */
    align-items: flex-start; /* Alinea el contenido en la parte superior */
  }
  </style>