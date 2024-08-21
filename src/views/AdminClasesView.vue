<template>
  <div id="admin-clases">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <v-container>
          <v-row>
            <v-col
              v-for="clase in clasesStore.clases"
              :key="clase.ID_CLASE"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-card-title>{{ clase.NOMBRE }}</v-card-title>
                <v-card-subtitle>{{ clase.HORA_CLASE }}</v-card-subtitle>
                <v-card-text>
                  <p>Inscritos: {{ clase.INSCRITOS }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-alert
            v-if="clasesStore.error"
            type="error"
            dismissible
          >
            {{ clasesStore.error }}
          </v-alert>
          <v-progress-circular
            v-if="clasesStore.loading"
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-container>
        <!-- Botón pequeño en la esquina inferior izquierda con ícono -->
        <v-btn
          fab
          fixed
          bottom
          left
          color="primary"
          :to="'/asistencia'"
          class="asistencia-btn"
        >
Tomar asistencia
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useClasesStore } from '@/stores/clases';
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';

const clasesStore = useClasesStore();

onMounted(() => {
  clasesStore.fetchClases();
});
</script>

<style>
#admin-clases {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.contenedor {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  position: relative;
}

.asistencia-btn {
  position: absolute;
  bottom: 5px; /* Espaciado desde el borde inferior */
  left: 15px;   /* Espaciado desde el borde izquierdo */
  width: 300px;  /* Ancho fijo del botón */
  height: 56px; /* Altura fija del botón */
  font-size: 24px; /* Tamaño del ícono */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Sombra opcional */
}
</style>