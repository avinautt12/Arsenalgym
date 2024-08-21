<template>
  <v-layout class="rounded rounded-md main-app">
    <v-main class="main-container">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="producto in productos" :key="producto.id">
            <v-card>
              <v-img
                :src="producto.imagen"
                :alt="producto.nombre" 
                contain
                height="200px"
                class="imagen-producto"
              ></v-img>

              <v-card-title class="text-center">{{ producto.nombre }}</v-card-title>
              <v-card-subtitle class="text-center">{{ producto.precio }}</v-card-subtitle>
              <v-card-text class="text-center">{{ producto.descripcion }}</v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn @click="decrementarCantidad(producto)">-</v-btn>
                <span>{{ producto.cantidad }}</span>
                <v-btn @click="incrementarCantidad(producto)">+</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      productos: [
      { id: 1, nombre: 'C4', precio: '$849.00',  imagen: '/pre-entrenos/c4.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,WATERMELON.' },
        { id: 2, nombre: 'PSYCHOTIC.', precio: '$500.99', imagen: '/pre-entrenos/psychotic.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,BLUEBERRY.' },
        { id: 3, nombre: 'RYSE', precio: '$690.49', imagen: '/pre-entrenos/ryse.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,ORANGE.' },
        { id: 4, nombre: 'RYSE-RING-POOP', precio: '$739.49', imagen: '/pre-entrenos/Ryse2.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,CHERRY-RING-POP.' },
        { id: 5, nombre: 'VENOM', precio: '$849.99', imagen: '/pre-entrenos/venom.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,EXTREME-POTENCY.' },
      ]
    };
  },
  computed: {
    gruposDeProductos() {
      const grupos = [];
      for (let i = 0; i < this.productos.length; i += 3) {
        grupos.push(this.productos.slice(i, i + 3));
      }
      return grupos;
    }
  },
  methods: {
    incrementarCantidad(producto) {
      producto.cantidad++;
    },
    decrementarCantidad(producto) {
      if (producto.cantidad > 0) {
        producto.cantidad--;
      }
    }
  }
};
</script>

<style scoped>
.imagen-producto {
  width: 100%;
} 

.main-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  color:white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
 
}

.v-card-title,
.v-card-subtitle,
.v-card-text {
  text-align: center;
  margin: 8px 0;
  word-wrap: break-word;
}

.v-card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card * {
  white-space: normal;
}
</style>
