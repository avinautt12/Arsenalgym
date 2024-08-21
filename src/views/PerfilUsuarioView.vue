<template>
  <v-app>
    <barraNav></barraNav>
    <div class="main-container">
      <BarraLatCliente class="sidebar"></BarraLatCliente>
      <div class="content-container">
        <v-card class="profile-card">
          <v-card-title class="title">Perfil de Usuario</v-card-title>
          <v-card-text class="info">
            <p><strong>Nombre:</strong> {{ usuario?.nombre }}</p>
            <p><strong>Correo:</strong> {{ usuario?.correo }}</p>
            <p><strong>Fecha de Registro:</strong> {{ usuario?.FECHA_REGISTRO }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';
import BarraLatCliente from '@/components/BarraLatCliente.vue';

const userStore = useUserStore();
const usuario = computed(() => userStore.usuario);
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  background-color:gray; 
}

.content-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-card {
  width: 450px;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(to bottom, black, red);;
  position: relative;
  transition: transform 0.3s ease-in; /* Animación al pasar el mouse */
}

.profile-card:hover {
  transform: scale(1.15); /* Efecto de zoom al pasar el mouse */
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0;
  color: white;
  text-align: center;
  position: center;
}

.info {
  font-size: 18px;
  color: white;
}

.info p {
  margin: 10px;
}

</style>
