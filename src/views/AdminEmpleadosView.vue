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
        ></v-data-table>
        <div class="acciones">
          <v-btn color="primary" class="agregar-btn small-btn">
            <router-link to="/registrarempleados" class="router-link">
              Registrar Empleado
            </router-link>
          </v-btn>
          <v-btn color="red" @click="openDeleteModal" class="small-btn">Eliminar Empleado</v-btn>
        </div>
      </div>
    </div>

    <!-- Modal para eliminar empleado -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Eliminar Empleado</v-card-title>
        <v-card-subtitle>Introduce el ID del Empleado para eliminar</v-card-subtitle>
        <v-card-text>
          <v-text-field v-model="deleteId" label="ID del Producto" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">Cancelar</v-btn>
          <v-btn color="red" @click="deleteEmpleado">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

const mostrarempleados = () => {
  fetch('http://mipagina.com/empleados')
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        empleados.value = json.data;
      }
    });
};

const openDeleteModal = () => {
deleteDialog.value = true;
};

const deleteEmpleado = () => {
  if (!deleteId.value) {
    alert('Por favor, ingresa un ID del empleado.');
    return;
  }

  // Verificar si el ID existe en la lista de empleados
  const empleadoExiste = empleados.value.some(empleado => empleado.id === deleteId.value);
  if (!empleadoExiste) {
    alert('El ID del empleado ingresado no existe.');
    return;
  }

  fetch(`http://mipagina.com/empleado/eliminar?id=${deleteId.value}`, {
    method: 'DELETE',
  })
    .then(response => {
      return response.json(); // Asegúrate de que la respuesta sea JSON
    })
    .then(json => {
      if (json.success) {
        alert('Empleado eliminado con éxito');
        deleteDialog.value = false;
        mostrarempleados(); // Refrescar la lista de empleados
      } else {
        alert('Error al eliminar el empleado: ' + json.message);
      }
    })
    .catch(error => {
      alert('Error al eliminar el empleado: ' + error.message);
    });
};


onMounted(() => {
  mostrarempleados();
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

.acciones {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.small-btn {
  font-size: 14px;
  padding: 0.5rem 1rem;
  min-width: auto;
  width: auto;
}

.agregar-btn {
  margin-right: 0.5rem;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
   