<template>
    <v-app>
<barraNav></barraNav>
      <BarraLatSocio @cerrarSesion="handleCerrarSesion"></BarraLatSocio>
      <v-container class="d-flex flex-column justify-space-between fill-height mem">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8">
            <v-card class="pa-5 mem-car" >
              <v-card-title>Membresía del Socio</v-card-title>
              <v-card-subtitle>
                <div v-if="membresia">
                  <p><strong>Membresía:</strong> {{ membresia.MEMBRESIA }}</p>
                  <p><strong>Fecha de Inicio:</strong> {{ membresia.FECHA_INICIO }}</p>
                  <p><strong>Fecha de Fin:</strong> {{ membresia.FECHA_FIN }}</p>
                  <p><strong>Estado:</strong> {{ membresia.ESTADO }}</p>
                </div>
                <div v-else>
                  <p>No se encontró información de la membresía.</p>
                </div>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '@/stores/userStore';
  import BarraLatSocio from '@/components/BarraLatSocio.vue';
import barraNav from '@/components/barraNav.vue';
  import { useRouter } from 'vue-router';
  
  const userStore = useUserStore();
  const router = useRouter();
  const membresia = ref(null);
  
  const obtenerMembresia = async () => {
    try {
      // Llama a un API o método en el store para obtener los datos de la membresía
      // Aquí podrías usar axios u otra librería para hacer la solicitud
      const response = await fetch(`http://mipagina.com/mimembresia${userStore.usuario.id}`);
      const data = await response.json();
      membresia.value = data;
    } catch (error) {
      console.error('Error al obtener la membresía:', error);
    }
  };
  
  onMounted(() => {
    obtenerMembresia();
  });
  
  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('token');
    userStore.setUsuario(null);
    router.push('/login'); // Redirige a la página de login
  };
  </script>
  
  <style scoped>
  
  .mem-car{
    width: 550px;
    margin-top: -600px
  }

  </style>
  