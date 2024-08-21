<template>
  <v-app>
    <barraNav></barraNav>
    <BarraLatSocio @cerrarSesion="handleCerrarSesion"></BarraLatSocio>
    <v-container class="d-flex flex-column justify-space-between fill-height">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title>
              Bienvenido, {{ userStore.usuario.nombre }} {{ userStore.usuario.apellido }}
            </v-card-title>
            <v-card-subtitle>
              Correo: {{ userStore.usuario.correo }}
            </v-card-subtitle>
          </v-card>
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