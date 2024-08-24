<template>
  <v-app>
    <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
      <barraNav></barraNav>
      <v-main style="background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">
        <v-card class="pa-5 card-form" max-width="1000">
          <v-img src="/public/arsenalblanco.png" alt="Arsenal Logo" class="imagen-arsenal"></v-img>
          <v-card-title class="titulo-formulario">
            Registro
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="nombre"
                    label="Nombre"
                    :rules="[v => !!v || 'Nombre es requerido']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="apellidos"
                    label="Apellidos"
                    :rules="[v => !!v || 'Apellidos son requeridos']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="fechaNacimiento"
                    label="Fecha de Nacimiento"
                    type="date"
                    :rules="[v => !!v || 'Fecha de nacimiento es requerida']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="sexo"
                    :items="['Masculino', 'Femenino']"
                    label="Sexo"
                    :rules="[v => !!v || 'Sexo es requerido']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="correo"
                    label="Correo"
                    type="email"
                    :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Correo debe ser válido']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="telefono"
                    label="Teléfono"
                    type="tel"
                    :rules="[v => !!v || 'Teléfono es requerido', v => /^[0-9]{10}$/.test(v) || 'Teléfono debe ser válido']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" v-if="datosBasicosCompletos">
                  <v-text-field
                    v-model="contrasena"
                    label="Contraseña"
                    type="password"
                    :rules="[v => !!v || 'Contraseña es requerida']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" v-if="datosBasicosCompletos">
                  <v-text-field 
                    v-model="confirmarContrasena"
                    label="Confirmar Contraseña"
                    type="password"
                    :rules="[v => !!v || 'Confirmar contraseña es requerida', v => v === contrasena || 'Las contraseñas deben coincidir']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$router.go(-1)">
              Volver
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="blue" :disabled="!formCompleto" @click="registrar">
              Registrarse
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-main>
     
      <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="4000"
      >
        {{ snackbarMessage }}
      </v-snackbar>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';

const nombre = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const sexo = ref('');
const correo = ref('');
const telefono = ref('');
const contrasena = ref('');
const confirmarContrasena = ref('');
const valid = ref(false);
const router = useRouter();

const userStore = useUserStore();


// Snackbar variables
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success'); 

const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }
  return edad;
};


const datosBasicosCompletos = computed(() => {
  return (
    nombre.value &&
    apellidos.value &&
    fechaNacimiento.value &&
    sexo.value &&
    correo.value &&
    /.+@.+/.test(correo.value) &&
    telefono.value &&
    /^[0-9]{10}$/.test(telefono.value)
  );
});

const formCompleto = computed(() => {
  return (
    datosBasicosCompletos.value &&
    contrasena.value &&
    confirmarContrasena.value &&
    contrasena.value === confirmarContrasena.value
  );
});

const registrar = async () => {
  if (valid.value) {
    const requestData = {
      nombre: nombre.value,
      apellidos: apellidos.value,
      fechaNacimiento: fechaNacimiento.value,
      sexo: sexo.value === 'Masculino' ? 'M' : 'F',
      correo: correo.value,
      telefono: telefono.value,
      contrasena: contrasena.value
    };

    try {
      const response = await fetch('http://mipagina.com/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      console.log('Resultado del servidor:', result);

      if (response.ok && result.success) {
        userStore.setUsuario({
          nombre: result.data.nombre,
          correo: result.data.correo,
          fecha_registro: result.data.fecha_registro
        });

        snackbarMessage.value = 'Registro exitoso';
        snackbarColor.value = 'success';
        snackbar.value = true;

        setTimeout(() => {
          router.push({ name: 'login' });
        }, 4000);
      } else {
        snackbarMessage.value = `Error al registrar`;
        snackbarColor.value = 'error';
        snackbar.value = true;
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      snackbarMessage.value = `Error en la solicitud`;
      snackbarColor.value = 'error';
      snackbar.value = true;
    }
  } else {
    snackbarMessage.value = 'Por favor, complete todos los campos correctamente.';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>

<style scoped>
.v-main {
  background: linear-gradient(black, red);
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  background-color: white; 
  color: black; 
  border-radius: 50px;
  padding: 20px;
}

.imagen-arsenal {
  width: 100%;
  max-width: 150px;
  margin: auto;
  display: block;
}

.titulo-formulario {
  text-align: center;
  color: black; 
  font-size: 24px;
  margin-bottom: 20px;
}

.card-form {
  border-radius: 15px; 
}
</style>




