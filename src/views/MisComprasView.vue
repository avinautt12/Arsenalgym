<template>
    <v-app>
      <barraNav></barraNav>
      <v-main class="pt-4 pb-8" style="background-color: #f0f0f0;">
        <v-container>
          <v-card class="pa-5">
            <v-card-title class="titulo-historial">Historial de Compras</v-card-title>
            <v-card-text>
              <v-list v-if="historialCompras.length">
                <v-list-item-group>
                  <v-list-item 
                    v-for="(producto, index) in historialCompras" 
                    :key="index" 
                    class="mb-4"
                  >
                    <v-card class="pa-4 v-card-bordered" outlined>
                      <v-chip
                        class="estado-chip"
                        :color="getChipColor(producto.ESTADO)"
                        text-color="white"
                      >
                        {{ producto.ESTADO }}
                      </v-chip>
                      <v-row align="center">
                        <v-col cols="12" md="4" class="d-flex justify-center">
                          <v-img 
                            :src="`http://mipagina.com/${producto.IMAGEN}`" 
                            class="producto-img"
                            aspect-ratio="1/1"
                            contain
                            @error="handleImageError"
                          ></v-img>
                        </v-col>
                        <v-col cols="12" md="8">
                          <div><strong>Producto:</strong> {{ producto.PRODUCTO }}</div>
                          <div><strong>Precio:</strong> ${{ producto.PRECIO }}</div>
                          <div><strong>Cantidad:</strong> {{ producto.CANTIDAD }}</div>
                          <div><strong>Fecha de compra:</strong> {{ producto.FECHA }}</div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-alert v-else type="info">No tienes compras registradas.</v-alert>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  
  <script setup>
import { ref, onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const historialCompras = ref([]);

async function obtenerHistorialCompras() {
  try {
    const response = await fetch('http://mipagina.com/miscompras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idCliente: userStore.usuario.ID_CLIENTES, 
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    historialCompras.value = data.data; 
    console.log('Historial de compras:', data);
  } catch (error) {
    console.error('Error al obtener el historial de compras:', error.message || error);
  }
}

function handleImageError(event) {
  event.target.src = 'path/to/default-image.jpg'; 
}

function getChipColor(estado) {
  return estado === 'PENDIENTE' ? 'red' : 'green';
}

onMounted(() => {
  obtenerHistorialCompras();
});
</script>

  
<style scoped>
.titulo-historial {
  text-align: center;
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
  margin-top: 45px;
}

.v-card {
  background-color: white;
  color: black;
  border-radius: 15px;
}

.v-list-item {
  transition: transform 0.2s ease;
}

.v-list-item:hover {
  transform: scale(1.02);
}

.producto-img {
  max-width: 100%;
  max-height: 150px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card-bordered {
  border: 1px solid transparent; 
  border-image-slice: 1; 
  border-radius: 15px; 
}

.estado-chip {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}
</style>