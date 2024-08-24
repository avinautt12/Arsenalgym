<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div id="admin-inicio">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <div class="barra-busqueda">
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <v-data-table
          :headers="headers"
          :items="socios"
          :search="search"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn
              v-if="!item.asistenciaRegistrada"
              @click="confirmAsistencia(item.ID_SOCIO_CLASE, true)"
              icon
              class="action-button"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn
              v-if="!item.asistenciaRegistrada"
              @click="confirmAsistencia(item.ID_SOCIO_CLASE, false)"
              icon
              class="action-button"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <span v-if="item.asistenciaRegistrada" class="asistencia-registrada">
              Asistencia registrada
            </span>
          </template>
        </v-data-table>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              Confirmación
            </v-card-title>
            <v-card-subtitle>
              ¿Está seguro de que desea registrar la asistencia?
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="dialog = false">Cancelar</v-btn>
              <v-btn text @click="registrarAsistencia">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.success ? 'green' : 'red'"
          :timeout="3000"
          top
        >
          {{ snackbar.message }}
          <v-btn color="white" text @click="snackbar.show = false">Cerrar</v-btn>
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted, computed } from 'vue';

const search = ref('');
const socios = ref([]);
const dialog = ref(false);
const idSocioClase = ref('');
const checkAsistencia = ref(true);

const snackbar = ref({
  show: false,
  message: '',
  success: false
});

const headers = [
  { text: 'Clase', value: 'CLASE' },
  { text: 'Nombre del Alumno', value: 'NOMBRE DEL ALUMNO' },
  { text: 'Acciones', value: 'actions', sortable: false }
];

// Calcula el tiempo restante hasta la medianoche
const timeUntilMidnight = computed(() => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24,0, 0, 0);
  return midnight - now;
});

const mostrarsocios = () => {
  fetch('http://mipagina.com/alumnos')
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        socios.value = json.data;

        // Recupera el estado de asistencia desde localStorage
        socios.value.forEach(item => {
          const asistenciaData = JSON.parse(localStorage.getItem(`asistencia-${item.ID_SOCIO_CLASE}`));
          if (asistenciaData && asistenciaData.registrada) {
            item.asistenciaRegistrada = true;
          }
        });
      }
    });
};

const confirmAsistencia = (socioClaseId, asistencia) => {
  idSocioClase.value = socioClaseId;
  checkAsistencia.value = asistencia;
  dialog.value = true;
};

const registrarAsistencia = () => {
  fetch('http://mipagina.com/asistencia/registrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_socio_clase: idSocioClase.value,
      check_asistencia: checkAsistencia.value
    })
  })
  .then(response => response.json())
  .then(json => {
    dialog.value = false;
    if (json.success) {
      // Marca la asistencia registrada
      const currentItem = socios.value.find(item => item.ID_SOCIO_CLASE === idSocioClase.value);
      currentItem.asistenciaRegistrada = true;

      // Guarda en localStorage con una clave única basada en el ID del socio
      localStorage.setItem(`asistencia-${idSocioClase.value}`, JSON.stringify({
        registrada: true,
        timestamp: new Date().getTime()
      }));

      // Configura un temporizador para restablecer a medianoche
      setTimeout(() => {
        currentItem.asistenciaRegistrada = false;
        localStorage.removeItem(`asistencia-${idSocioClase.value}`);
      }, timeUntilMidnight.value);

      snackbar.value = {
        show: true,
        message: 'Asistencia registrada exitosamente',
        success: true
      };
    } else {
      // Marca la asistencia registrada
      const currentItem = socios.value.find(item => item.ID_SOCIO_CLASE === idSocioClase.value);
      currentItem.asistenciaRegistrada = true;

      // Guarda en localStorage con una clave única basada en el ID del socio
      localStorage.setItem(`asistencia-${idSocioClase.value}`, JSON.stringify({
        registrada: true,
        timestamp: new Date().getTime()
      }));

      // Configura un temporizador para restablecer a medianoche
      setTimeout(() => {
        currentItem.asistenciaRegistrada = false;
        localStorage.removeItem(`asistencia-${idSocioClase.value}`);
      }, timeUntilMidnight.value);

      snackbar.value = {
        show: true,
        message: 'Asistencia registrada exitosamente',
        success: true
      };
    }
  });
};

// Configura un temporizador global para limpiar todo a medianoche
onMounted(() => {
  mostrarsocios();
  setTimeout(() => {
    socios.value.forEach(item => {
      item.asistenciaRegistrada = false;
      localStorage.removeItem(`asistencia-${item.ID_SOCIO_CLASE}`);
    });
  }, timeUntilMidnight.value);
});
</script>

<style>
#admin-inicio {
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
}

.barra-busqueda {
  margin-bottom: 1rem;
}

.v-data-table {
  flex: 1;
}

.action-button {
  margin-right: 8px; /* Space between buttons */
}

.action-button .v-icon {
  font-size: 20px; /* Smaller icon size */
  color: #007bff; /* Color for the icons */
}

.action-button:first-of-type .v-icon {
  color: #28a745; /* Color for check icon */
}

.action-button:last-of-type .v-icon {
  color: #dc3545; /* Color for close icon */
}

.asistencia-registrada {
  color: #28a745; /* Color for "Asistencia registrada" text */
  font-weight: bold;
}
</style>
