<template>
  <v-app>
    <barraNav></barraNav>
    <v-main>
      <v-container class="mt-4">

        <v-toolbar flat>
          <v-toolbar-title>Clases Disponibles</v-toolbar-title>
        </v-toolbar>

        <!-- Estructura de clases con v-cards para visualizar la información -->
        <v-row class="mt-4">
          <v-col
            v-for="clase in clasesStore.clases"
            :key="clase.ID_CLASE"
            cols="12" md="6" lg="4"
          >
            <v-card
              :color="clase.INSCRITOS >= 10 ? 'red' : 'green'"
              dark
            >
              <v-card-title>{{ clase.NOMBRE }}</v-card-title>
              <v-card-subtitle>{{ clase.HORA_CLASE }}</v-card-subtitle>
              <v-card-text>
                <p>Inscritos: {{ clase.INSCRITOS }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Modal para inscribir al socio -->
      <v-dialog v-model="mostrarModal" max-width="500px">
        <v-card>
          <v-card-title class="headline">Inscribir en Clase</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="idSocio"
              label="Ingrese el ID del socio"
              required
              outlined
              dense
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey lighten-2" @click="cerrarModal">Cancelar</v-btn>
            <v-btn color="primary" @click="confirmarInscripcion">Inscribir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
    <BarraLatSocio @cerrarSesion="handleCerrarSesion"></BarraLatSocio>
  </v-app>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { useClasesStore } from '@/stores/clases';
import BarraLatSocio from '@/components/BarraLatSocio.vue';
import barraNav from '@/components/barraNav.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const clasesStore = useClasesStore();
const router = useRouter();
const mostrarModal = ref(false);
const idSocio = ref('');

const handleCerrarSesion = () => {
  localStorage.removeItem('token');
  userStore.setUsuario(null);
  router.push('/login');
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

clasesStore.fetchClases();
</script>

<style scoped>
.v-main {
  margin-left: 240px; 
  padding-top: 64px; 
}

.v-container {
  padding-top: 20px;
}

.v-dialog .v-card {
  margin: 0 auto;
  max-width: 500px;
}

.v-btn {
  margin: 5px;
}
</style>
