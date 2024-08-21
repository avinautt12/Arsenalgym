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
          :items="empleados"
          :search="search"
          @click:row="selectEmpleado"
        ></v-data-table>
        <div class="acciones">
          <v-btn color="primary" class="agregar-btn">
            <router-link to="/registrarempleados" class="router-link">
              Agregar Empleado
            </router-link>
          </v-btn>
          <v-btn color="red" @click="openDeleteModal">Eliminar Empleado</v-btn>
        </div>
      </div>
    </div>

    <!-- Modal para eliminar empleado -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Eliminar Empleado</v-card-title>
        <v-card-subtitle>Introduce el ID del empleado para eliminar</v-card-subtitle>
        <v-card-text>
          <v-text-field v-model="deleteId" label="ID del Empleado" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">Cancelar</v-btn>
          <v-btn color="red" @click="deleteEmpleado">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar para mensajes de éxito -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="3000"
      :color="snackbar.color"
      top
      multi-line
    >
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';

const search = ref('');
const empleados = ref([]);
const deleteDialog = ref(false);
const deleteId = ref('');
const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});

const mostrarEmpleados = () => {
  fetch('http://mipagina.com/empleados')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        empleados.value = json.data;
      } else {
        snackbar.value = {
          show: true,
          message: 'Error al cargar empleados: ' + json.message,
          color: 'error'
        };
      }
    });
};

const openDeleteModal = () => {
  deleteDialog.value = true;
};

const deleteEmpleado = () => {
  if (!deleteId.value) {
    snackbar.value = {
      show: true,
      message: 'Por favor, ingresa un ID del empleado.',
      color: 'error'
    };
    return;
  }

  fetch('http://mipagina.com/empleado/eliminar?id=${deleteId.value}',{
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(json => {
      if (json.status === 200 || json.success) {
        snackbar.value = {
          show: true,
          message: 'Empleado eliminado con éxito',
          color: 'success'
        };
        deleteDialog.value = false;

        setTimeout(() => {
          mostrarEmpleados();
        }, 2000);
      } else {
        snackbar.value = {
          show: true,
          message: 'Error al eliminar el empleado: ' + (json.message || 'Respuesta inesperada del servidor'),
          color: 'error'
        };
      }
    })
    .catch(error => {
      snackbar.value = {
        show: true,
        message: 'Error al eliminar el empleado: ' + error.message,
        color: 'error'
      };
    });
};

const selectEmpleado = (item) => {
  deleteId.value = item.id;
};

onMounted(() => {
  mostrarEmpleados();
});
</script>

<style>
#admin-inicio {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #333;
  padding: 1rem;
}

.logo {
  max-height: 50px;
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

.acciones {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.agregar-btn {
  margin-right: 1rem;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>