<template>
  <barraNav></barraNav>
  <v-container>
    <v-row class="py-10" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h5 font-weight-bold">Tu carrito de compras</v-card-title>
          <v-divider></v-divider>
          <v-row v-if="carritoStore.productos.length === 0" class="text-center">
            <v-col cols="12">
              <v-icon size="100" color="grey lighten-1">mdi-cart-outline</v-icon>
              <p class="text-h6">Tu carrito está vacío</p>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col v-for="(producto, index) in carritoStore.productos" :key="producto.ID" cols="12" md="4">
              <v-card class="mb-4 producto" outlined>
                <v-img :src="`http://mipagina.com/${producto.IMAGEN}`" class="producto-img" aspect-ratio="16/9" contain @error="handleImageError"></v-img>
                <v-card-title>{{ producto.NOMBRE }}</v-card-title>
                <v-card-subtitle class="text-subtitle-2">{{ producto.CATEGORIA }}</v-card-subtitle>
                <p>{{ producto.DESCRIPCION }}</p>
                <v-card-text>
                  <p class="text-h6 font-weight-bold">{{ producto.PRECIO }} MX</p>
                  <v-row align="center" justify="space-between">
                    <v-col class="d-flex align-center">
                      <v-btn icon small @click="decrementar(producto.ID)">
                        <v-icon small>mdi-minus-circle-outline</v-icon>
                      </v-btn>
                      <p class="mx-2">{{ producto.cantidad }}</p>
                      <v-btn icon small @click="aumentar(producto.ID)">
                        <v-icon small>mdi-plus-circle-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-chip v-if="producto.STOCK !== null" color="green lighten-4" text-color="green darken-2">
                    Stock: {{ producto.STOCK }}
                  </v-chip>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text color="red darken-2" @click="removeFromCart(producto.ID)">Eliminar</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- Total y Botón de Pago -->
          <v-divider class="my-4"></v-divider>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-card-subtitle class="text-h6 font-weight-bold">Total: {{ totalCarrito }} MX</v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn  color="primary" @click="proceedToPayment">Proceder al pago</v-btn>
              <v-btn router-link to="/Producto" class="regresar" color="red">Regresar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="mt-10">Productos recomendados</h2>
    <v-row>
      <v-col v-for="producto in recommendedProductos" :key="producto.ID" cols="12" md="4">
        <v-card class="mx-auto my-4 producto" max-width="344" elevation="2">
          <v-img :src="`http://mipagina.com/${producto.IMAGEN}`" class="producto-img" aspect-ratio="16/9" contain @error="handleImageError"></v-img>
          <v-card-title>{{ producto.NOMBRE }}</v-card-title>
          <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
          <v-card-text>
            <p>{{ producto.DESCRIPCION }}</p>
            <p class="text-h6 font-weight-bold">{{ producto.PRECIO }} MX</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(producto)">Agregar al carrito</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useProductosStore } from '@/stores/productos';
import barraNav from '@/components/barraNav.vue';
import router from '@/router';
const carritoStore = useCarritoStore();
const productosStore = useProductosStore();

// Función para eliminar producto del carrito
const removeFromCart = (ID) => {
  carritoStore.removeProducto(ID);
};

// Función para añadir producto al carrito
const addToCart = (producto) => {
  carritoStore.addProducto(producto);
};

// Función para disminuir la cantidad de producto
const decrementar = (ID) => {
  carritoStore.removeCantidad(ID);
};

// Función para aumentar la cantidad de producto
const aumentar = (ID) => {
  carritoStore.addCantidad(ID);
};

// Computed property para obtener productos recomendados
const recommendedProductos = computed(() => {
  const allProductos = productosStore.productos;
  const carritoIDs = carritoStore.productos.map(p => p.ID);
  const filteredProductos = allProductos.filter(producto => !carritoIDs.includes(producto.ID));
  return filteredProductos.sort(() => 0.5 - Math.random()).slice(0, 3);
});

// Computed property para calcular el total del carrito
const totalCarrito = computed(() => carritoStore.totalCarrito);

// Función para proceder al pago
const proceedToPayment = () => {
if(carritoStore.productos.length<=0){
  alert('el carrito esta vacio, no puedes proceder');
    router.push({name: 'Producto'});
}
else {
  router.push({name: 'pago'});
}

};


// Manejar errores de carga de imagen
const handleImageError = (event) => {
  event.target.src = 'path/to/default-image.jpg'; // Cambia a la imagen predeterminada
};
</script>

<style scoped>
.regresar {
  margin-left: 5px;
}
.producto-img {
  height: 200px; 
  object-fit: cover; 
}
.v-card.producto {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.v-card.producto .v-card-text {
  flex-grow: 1;
}
.v-card.producto .v-card-title,
.v-card.producto .v-card-subtitle {
  min-height: 50px;
}
.v-card.producto .v-card-actions {
  justify-content: flex-end;
}
</style>
