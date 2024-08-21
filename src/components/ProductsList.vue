<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch'; // Asume que tienes un composable para la API

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch('http://mipagina.com/productos');
    const data = await response.json();
    products.value = data.filter(product => product.CATEGORIA === 'PRE-ENTRENOS');
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

onMounted(fetchProducts);
</script>

<template>
  <v-row>
    <v-col v-for="product in products" :key="product.ID_PRODUCTO" cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>{{ product.NOMBRE }}</v-card-title>
        <v-card-subtitle>{{ product.DESCRIPCION }}</v-card-subtitle>
        <v-card-text>{{ product.PRECIO }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>