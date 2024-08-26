<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav :carrito-count="carritoCount" :is-cart-updated="isCartUpdated"></barraNav>
    <v-main>
      <v-container>
        <v-tabs v-model="selectedCategory" background-color="primary" dark>
          <v-tab v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </v-tab>
          <v-tab value="">Todas</v-tab>
        </v-tabs>

        <v-row>
          <v-col v-for="producto in filteredProductos" :key="producto.ID" cols="12" md="6" lg="4">
            <v-card class="producto-card mx-auto my-4">
              <v-img :src="`http://mipagina.com/${producto.IMAGEN}`" class="producto-img" aspect-ratio="16/9" contain @error="handleImageError"></v-img>
              <v-card-title>{{ producto.NOMBRE }}</v-card-title>
              <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
              <v-card-text>
                <p>{{ producto.DESCRIPCION }}</p>
                <p>{{ producto.PRECIO }} MX</p>
                <p v-if="producto.STOCK !== null">Stock: {{ producto.STOCK }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="addToCart(producto)">Agregar al carrito</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';
import { useProductosStore } from '@/stores/productos';
import { useCarritoStore } from '@/stores/carrito';
const store = useProductosStore();
const carritoStore = useCarritoStore();
const selectedCategory = ref('');
const isCartUpdated = ref(false);
onMounted(() => {
  store.fetchProductos();
});
const categories = computed(() => {
  const allCategories = store.productos.map(producto => producto.CATEGORIA);
  return [...new Set(allCategories)];
});
const filteredProductos = computed(() => {
  return store.productos.filter(producto => producto.CATEGORIA === selectedCategory.value || selectedCategory.value === '');
});

const addToCart = (producto) => {
  console.log('Añadiendo al carrito:', producto);
  carritoStore.addProducto(producto);
};

const handleImageError = (event) => {
  event.target.src = '/public/arsenal.png';
};
</script>

<style scoped>
.producto-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.producto-img {
  height: 200px;
  object-fit: contain;
}
.producto-card .v-card-title,
.producto-card .v-card-subtitle {
  text-align: center;
}
.producto-card .v-card-text {
  flex-grow: 1;
}
.producto-card .v-card-actions {
  justify-content: center;
}
.v-tabs {
  margin-bottom: 20px;
}
.v-container {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}
</style>