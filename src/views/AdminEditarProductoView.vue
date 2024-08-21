<template>
  <div id="admin-inicio">
    <nav class="navbar">
      <img src="/public/arsenal.png" class="logo" />
    </nav>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <!-- Botón para regresar -->
        <v-btn icon @click="regresar" class="mb-4">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2 class="mb-4">Buscar Producto</h2>
        <v-form @submit.prevent="buscarProducto" class="mb-4">
          <v-text-field v-model="form.id_producto" label="ID Producto" required></v-text-field>
          <v-btn class="search-button" ype="submit" color="primary">Buscar Producto</v-btn>
        </v-form>
        <div v-if="producto">
          <h2 class="mb-4">Editar Producto</h2>
          <v-form @submit.prevent="actualizarProducto">
            <v-text-field v-model="form.nombre" label="Nombre" required></v-text-field>
            <v-text-field v-model="form.descripcion" label="Descripción" required></v-text-field>
            <v-text-field v-model="form.precio" label="Precio" required></v-text-field>
            <v-text-field v-model="form.stock" label="Stock"></v-text-field>
            <div class="button-group mb-4">
              <span>Seleccione la categoría:</span>
              <v-btn
                v-for="categoria in categorias"
                :key="categoria.ID_CATEGORIA"
                :color="form.id_categoria === categoria.ID_CATEGORIA ? 'primary' : ''"
                @click="form.id_categoria = categoria.ID_CATEGORIA"
                outlined
              >
                {{ categoria.NOMBRE }}
              </v-btn>
            </div>
            <div class="action-buttons">
              <v-btn type="submit" color="secondary" class="mt-4">Actualizar Producto</v-btn>
              <v-btn @click="eliminarProducto" color="red" class="mt-4">Eliminar Producto</v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';

const form = ref({
  id_producto: '',
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '',
  id_categoria: ''
});

const producto = ref(null);
const categorias = ref([]);

// Fetch categories
const fetchCategorias = () => {
  fetch('http://mipagina.com/categorias')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        categorias.value = json.data;
      } else {
        alert(json.message);
      }
    });
};

// Search for product
const buscarProducto = () => {
  fetch(`http://mipagina.com/producto/buscar?id_producto=${form.value.id_producto}`)
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        producto.value = json.data;
        Object.assign(form.value, {
          id_producto: json.data.ID_PRODUCTO,
          nombre: json.data.NOMBRE,
          descripcion: json.data.DESCRIPCION,
          precio: json.data.PRECIO,
          stock: json.data.STOCK,
          id_categoria: json.data.ID_CATEGORIA
        });
      } else {
        alert(json.message);
        producto.value = null;
      }
    });
};

// Update product
const actualizarProducto = () => {
  fetch('http://mipagina.com/producto/actualizar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_producto: form.value.id_producto,
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      precio: form.value.precio,
      stock: form.value.stock,
      id_categoria: form.value.id_categoria
    })
  })
    .then(response => response.json())
    .then(json => {
      alert(json.message);
      if (json.status === 200) {
        producto.value = null;
      }
    });
};

// Delete product
const eliminarProducto = () => {
  fetch('http://mipagina.com/producto/eliminar', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id_producto: form.value.id_producto })
  })
    .then(response => response.json())
    .then(json => {
      alert(json.message);
      if (json.status === 200) {
        producto.value = null;
      }
    });
};

// Go back
const regresar = () => {
  window.history.back();
};

// Fetch categories on mount
onMounted(() => {
  fetchCategorias();
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
