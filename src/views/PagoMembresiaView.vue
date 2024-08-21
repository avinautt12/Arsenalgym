<template>
    <v-container fluid>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" md="6">
          <v-card>
            <v-img src="arsepago.png" alt="Arsenal Image" class="arsepago"></v-img>
            <v-divider class="my-3"></v-divider>
  
            <!-- Contact Information -->
            <v-card-text>
              <v-row>
                <v-col cols="12" class="mb-1">
                  <v-title>Información de Contacto</v-title>
                  <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    placeholder="correoelectrónico@ejemplo.com"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
  
              <!-- Card Information -->
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
  
              <v-row>
                <v-col cols="12" class="d-flex justify-end">
                  <v-card-subtitle class="text-h6 font-weight-bold">Total: {{ totalCarrito }} MX</v-card-subtitle>
                </v-col>
              </v-row>
  
              <!-- Submit Button -->
              <v-row>
                <v-col cols="12">
                  <v-btn color="primary" block @click="procesarPago">
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
    </v-container>
  </template>
  
  <script setup>
  
  import { useCarritoStore } from '@/stores/carrito';
  import { ref, computed } from 'vue';
  
  const carritoStore = useCarritoStore();
  const totalCarrito = computed(() => carritoStore.totalCarrito);
  
  const email = ref('');
  const phone = ref('');
  const cardNumber = ref('');
  const expiry = ref('');
  const cvc = ref('');
  const cardHolder = ref('');
  const postalCode = ref('');
  
  const procesarPago = async () => {
    try {
      const response = await fetch('/pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.value,
          phone: phone.value,
          cardNumber: cardNumber.value,
          expiry: expiry.value,
          cvc: cvc.value,
          cardHolder: cardHolder.value,
          postalCode: postalCode.value,
          productos: carritoStore.productos,
          totalCarrito: totalCarrito.value
        })
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Pago realizado con éxito');
        carritoStore.clearCarrito(); // Limpiar el carrito
        // Redirigir o realizar otras acciones
      } else {
        alert('Error al procesar el pago: ' + result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de pago', error);
      alert('Hubo un error al procesar el pago');
    }
  }
  
  </script>
  
  <style scoped>
  .regresar{
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
  