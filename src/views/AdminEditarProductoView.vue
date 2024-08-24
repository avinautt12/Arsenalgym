<!-- eslint-disable no-unused-vars -->
<template>
  <div id="editar-producto">
    <h2>Editar Producto</h2>
    <v-form @submit.prevent="actualizarProducto">
      <v-text-field
        v-model="producto.nombre"
        label="Nombre del Producto"
        required
      ></v-text-field>
      <v-text-field
        v-model="producto.precio"
        label="Precio"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Guardar Cambios</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const producto = ref({
  id_producto: '',
  nombre: '',
  precio: ''
});

const cargarProducto = () => {
  const id = route.params.id;
  fetch(`http://mipagina.com/api/productos/${id}`)
    .then(response => response.json())
    .then(data => {
      producto.value = data.producto;
    });
};

const actualizarProducto = () => {
  fetch(`http://mipagina.com/api/productos/${producto.value.id_producto}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(producto.value)
  })
    .then(response => response.json())
    .then(() => {
      alert('Producto actualizado con éxito');
    });
};

onMounted(() => {
  cargarProducto();
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
  overflow-y: scroll;
}

.mb-4 {
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 17px;
}

.action-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 75px;
  gap: 1rem;
}

.search-button {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}
</style>
