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
        { id: 1, nombre: 'HYDROTEIN', precio: '$1250.00', imagen: '/proteina/proteina1.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR DONA HOMERO.' },
        { id: 2, nombre: 'EVOGEN', precio: '$1100.99', imagen: '/proteina/proteina2.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CHOCOLATE' },
        { id: 3, nombre: 'EVOGEN-EDICION ESPECIAL', precio: '$890.49', imagen: '/proteina/proteina3.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CEREAL.' },
        { id: 4, nombre: 'ISO100', precio: '$1420.49', imagen: '/proteina/proteina4.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR COCOA' },
        { id: 5, nombre: 'ISO100', precio: '$549.99', imagen: '/proteina/proteina5.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR VAINILLA' },
        { id: 6, nombre: 'ELITE', precio: '$799.99', imagen: '/proteina/proteina6.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CHOCOLATE' },
        { id: 7, nombre: 'ISOFIT', precio: '$999.99', imagen: '/proteina/proteina7.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR VAINILLA' },
        { id: 8, nombre: 'EVOLUTION-WP100', precio: '$850.99', imagen: '/proteina/proteina8.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR SUERO LECHE' },
        { id: 9, nombre: 'PRO WHEY90', precio: '$1200.99', imagen: '/proteina/proteina9.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR GALLETA DE CHOCOLATE' },
        { id: 10, nombre: 'CARNIVOR', precio: '$999.99', imagen: '/proteina/proteina10.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CHOCOLATE' },
        { id: 11, nombre: 'MUTANT-WHEY', precio: '$1500.99', imagen: '/proteina/proteina11.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR HELADO' },
        { id: 12, nombre: 'GOLD STANDARD', precio: '$1100.99', imagen: '/proteina/proteina12.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR FRESA' },
        { id: 13, nombre: 'GOLD STANDARD', precio: '$999.99', imagen: '/proteina/proteina13.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR HELADO DE VAINILLA' },
        { id: 14, nombre: 'MUSCLETECH', precio: '$1350.99', imagen: '/proteina/proteina14.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR VAINILLA' },
        { id: 15, nombre: 'BUM', precio: '$1800.99', imagen: '/proteina/proteina15.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CHOCOLATE' },
        { id: 16, nombre: 'BUM', precio: '$1800.99', imagen: '/proteina/proteina16.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CEREAL' },
        { id: 17, nombre: 'BUM', precio: '$1400.99', imagen: '/proteina/proteina17.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR PASTEL ' },
        { id: 18, nombre: 'RYSE', precio: '$800.99', imagen: '/proteina/proteina18.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR CHOCOLATE' },
        { id: 19, nombre: 'GHOST', precio: '$650.99', imagen: '/proteina/proteina19.jpg', cantidad: 0, descripcion: 'PROTEINA-SABOR VAINILLA' },
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
