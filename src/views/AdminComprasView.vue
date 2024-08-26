<template>
    <div id="admin-historial">
      <BarraAdminNew></BarraAdminNew>
      <div class="contenedor">
        <BarralateralAdmin></BarralateralAdmin>
        <div class="main-content">
          <v-container>
            <!-- Sección de órdenes pendientes -->
            <v-row>
              <v-col cols="12">
                <v-subheader class="section-title">Órdenes Pendientes</v-subheader>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-for="(orden, index) in ordenes"
                :key="index"
                cols="12"
                md="4"
              >
                <v-card class="order-card">
                  <v-card-title>{{ orden.CLIENTE }}</v-card-title>
                  <v-card-subtitle>Clave Orden: {{ orden.CLAVE_ORDEN }}</v-card-subtitle>
                  <v-card-text>
                    <p><strong>Productos Comprados:</strong> {{ orden['PRODUCTOS COMPRADOS'] }}</p>
                    <p><strong>Monto Total:</strong> {{ orden.MONTO_TOTAL }}</p>
                    <p><strong>Estado de Entrega:</strong> {{ orden['ESTADO DE ENTREGA'] }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="openConfirmationDialog(orden.CLAVE_ORDEN)" color="primary">
                      Marcar como Entregada
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
  
            <!-- Sección de órdenes entregadas -->
            <v-row>
              <v-col cols="12">
                <v-subheader class="section-title">Órdenes Entregadas</v-subheader>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-for="(entrega, index) in entregas"
                :key="index"
                cols="12"
                md="4"
              >
                <v-card class="order-card">
                  <v-card-title>{{ entrega.CLIENTE }}</v-card-title>
                  <v-card-subtitle>Clave Orden: {{ entrega.CLAVE_ORDEN }}</v-card-subtitle>
                  <v-card-text>
                    <p><strong>Productos Comprados:</strong> {{ entrega['PRODUCTOS COMPRADOS'] }}</p>
                    <p><strong>Monto Total:</strong> {{ entrega.MONTO_TOTAL }}</p>
                    <p><strong>Estado de Entrega:</strong> {{ entrega['ESTADO DE ENTREGA'] }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
  
          <!-- Modal de Confirmación -->
          <v-dialog v-model="showConfirmationDialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">Confirmación</v-card-title>
              <v-card-text>
                ¿Estás seguro de que quieres marcar esta orden como entregada?
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="confirmarMarcarComoEntregada" color="primary">Sí</v-btn>
                <v-btn @click="showConfirmationDialog = false" color="secondary">No</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import BarraAdminNew from '@/components/BarraAdminNew.vue';
  import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
  
  const ordenes = ref([]);
  const entregas = ref([]);
  const showConfirmationDialog = ref(false);
  const ordenToMarkAsDelivered = ref('');
  
  const fetchOrdenes = async () => {
    try {
      const response = await fetch('http://mipagina.com/mostrarordenes');
      const data = await response.json();
      ordenes.value = data.data; // Ajusta esto según el formato de tu respuesta
    } catch (error) {
      console.error('Error fetching ordenes:', error);
    }
  };
  
  const fetchEntregas = async () => {
    try {
      const response = await fetch('http://mipagina.com/mostrarentregas');
      const data = await response.json();
      entregas.value = data.data; // Ajusta esto según el formato de tu respuesta
    } catch (error) {
      console.error('Error fetching entregas:', error);
    }
  };
  
  const openConfirmationDialog = (claveOrden) => {
    ordenToMarkAsDelivered.value = claveOrden;
    showConfirmationDialog.value = true;
  };
  
  const confirmarMarcarComoEntregada = async () => {
    try {
      const response = await fetch('http://mipagina.com/marcarcomoentregada', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idPago: ordenToMarkAsDelivered.value }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        console.log('Orden marcada como entregada con éxito.');
        location.reload();
      } else {
        console.error('Error al marcar la orden como entregada:', result.message);
        location.reload(); 
  
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  onMounted(() => {
    fetchOrdenes();
    fetchEntregas();
  });
  </script>
  
  <style scoped>
  #admin-historial {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la ventana */
  }
  
  .contenedor {
    display: flex;
    flex: 1; /* Permite que el contenedor principal use el espacio restante */
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto; /* Permite el desplazamiento si el contenido excede la altura */
  }
  
  .order-card {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .order-card .v-card-title {
    background-color: #f5f5f5;
    color: #333;
    font-weight: bold;
  }
  
  .order-card .v-card-actions {
    border-top: 1px solid #ddd;
  }
  
  .section-title {
    font-size: 24px; /* Tamaño de fuente más grande */
    color: #000; /* Color de texto negro */
    font-weight: bold; /* Texto en negrita */
    margin-bottom: 16px; /* Espacio debajo del título */
  }
  </style>