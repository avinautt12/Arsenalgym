<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="6">
        <v-card>
          <v-img src="arsepago.png" alt="Arsenal Image" class="arsepago"></v-img>
          <v-divider class="my-3"></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-title>Información de la Tarjeta</v-title>
                <v-text-field
                  v-model="cardNumber"
                  label="Número de Tarjeta"
                  placeholder="1234 1234 1234 1234"
                  outlined
                  dense
                  required
                  :rules="[
                    v => v.length === 16 || 'El número de tarjeta debe tener 16 dígitos',
                    v => /^[0-9]+$/.test(v) || 'El número de tarjeta debe contener solo números'
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="mt-n5 mb-0">
                <v-text-field
                  v-model="expiry"
                  placeholder="MM/AA"
                  outlined
                  dense
                  required
                  append-inner-icon="mdi-credit-card"
                  :rules="[
                    v => /^[0-9]{2}\/[0-9]{2}$/.test(v) || 'Formato inválido, debe ser MM/AA',
                  ]"
                  maxlength="5"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="mt-n5 mb-0">
                <v-text-field
                  v-model="cvc"
                  placeholder="CVC"
                  outlined
                  dense
                  required
                  :rules="[
                    v => v.length === 3 || 'El CVC debe tener 3 dígitos',
                    v => /^[0-9]+$/.test(v) || 'El CVC debe contener solo números'
                  ]"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Cardholder Name -->
            <v-row>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="cardHolder"
                  label="Nombre del Titular de Tarjeta"
                  placeholder="Nombre completo"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Postal Code -->
            <v-row>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="postalCode"
                  label="Código Postal"
                  outlined
                  dense
                  required
                  :rules="[
                    v => !v || v.length === 5 || 'El código postal debe tener 5 dígitos',
                    v => !v || /^[0-9]+$/.test(v) || 'El código postal debe contener solo números'
                  ]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <v-card-subtitle class="text-h6 font-weight-bold">Total: {{ totalCarrito }} MX</v-card-subtitle>
              </v-col>
            </v-row>

            <!-- Submit Button -->
            <v-row>
              <v-col cols="12">
                <v-btn color="primary" block @click="confirmarPago" :disabled="!isFormValid">
                  Realizar Pago
                </v-btn>
                <v-btn router-link to="/carrito" class="regresar" color="red" block="">
                  Regresar
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <p class="text-caption mt-3">
                  Tu pago es seguro con Arsenal.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Confirmación de Pago -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Confirmar Pago</span>
        </v-card-title>
        <v-card-text>
          <p class="text-subtitle-1">
            ¿Estás seguro de proceder? No habrá devoluciones.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="procesarPago">Sí, Proceder</v-btn>
          <v-btn color="red" @click="dialog = false">No, Regresar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useUserStore } from '@/stores/userStore';
import router from '@/router';

const carritoStore = useCarritoStore();
const userStore = useUserStore();

const totalCarrito = computed(() => carritoStore.totalCarrito);

// Campos del formulario
const cardNumber = ref('');
const expiry = ref('');
const cvc = ref('');
const cardHolder = ref('');
const postalCode = ref('');

// Diálogo de confirmación
const dialog = ref(false);

// Computada para validar el formulario
const isFormValid = computed(() => {
  const cardNumberValid = cardNumber.value.length === 16 && /^[0-9]+$/.test(cardNumber.value);
  const expiryValid = /^[0-9]{2}\/[0-9]{2}$/.test(expiry.value);
  const cvcValid = cvc.value.length === 3 && /^[0-9]+$/.test(cvc.value);
  const cardHolderValid = cardHolder.value.trim() !== '';
  const postalCodeValid = postalCode.value.length === 5 && /^[0-9]+$/.test(postalCode.value);

  return cardNumberValid && expiryValid && cvcValid && cardHolderValid && postalCodeValid;
});

// Mostrar diálogo de confirmación
const confirmarPago = () => {
  if (isFormValid.value) {
    dialog.value = true;
  }
};

// Procesar pago
const procesarPago = async () => {
  const idCliente = userStore.usuario?.ID_CLIENTES;
  
  if (!idCliente) {
    alert('No se ha encontrado el ID del cliente.');
    return;
  }

  try {
    const response = await fetch('http://mipagina.com/carrito', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idCliente: idCliente,
        carrito: carritoStore.productos.map(producto => ({
          idProducto: producto.ID,
          Cantidad: producto.cantidad,
          Precio: producto.PRECIO
        }))
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la respuesta del servidor:', errorData);
      alert(`Hubo un error en el servidor: ${errorData.message || 'Error desconocido'}`);
      return;
    }

    const result = await response.json();

    if (result.success) {
      alert('Pago realizado con éxito');
      carritoStore.clearCarrito();
      router.push({ path: '/carrito' });
    } else {
      console.error('Error en el procesamiento del pago:', result);
      alert(`Hubo un problema con el pago: ${result.message || 'Error desconocido'}`);
    }
  } catch (error) {
    console.error('Error en la solicitud de pago', error);
    alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.');
  } finally {
    dialog.value = false;
  }
};
</script>

<style scoped>
.regresar {
  top: 10px;
}

.apple-pay-btn {
  background-color: #000;
  color: #fff;
  font-weight: bold;
}
.text-caption {
  font-size: 12px;
  color: #6c757d;
}
.arsepago {
  height: 190px;
}
.fill-height {
  min-height: 100vh;
}
</style>