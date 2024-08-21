<template>
  <div id="admin-registro-empleados">
    <BarraAdminNew />
    <div class="contenedor">
      <BarralateralAdmin />
      <div class="main-content">
        <h1>Registrar Empleado</h1>
        <v-form v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            v-model="nombre"
            label="Nombre"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="apellidos"
            label="Apellidos"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="fechaNacimiento"
            label="Fecha de Nacimiento"
            type="date"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-select
            v-model="sexo"
            :items="sexos"
            label="Sexo"
            :rules="[rules.required]"
            required
          ></v-select>

          <v-text-field
            v-model="correo"
            label="Correo Electrónico"
            type="email"
            :rules="[rules.required, rules.email]"
            required
          ></v-text-field>

          <v-text-field
            v-model="telefono"
            label="Teléfono"
            :rules="[rules.required, rules.telefono]"
            required
          ></v-text-field>

          <v-text-field
            v-model="contrasena"
            label="Contraseña"
            type="password"
            :rules="[rules.required, rules.password]"
            required
          ></v-text-field>

          <v-textarea
            v-model="direccion"
            label="Dirección"
            :rules="[rules.required]"
            required
          ></v-textarea>

          <v-text-field
            v-model="curp"
            label="CURP"
            :rules="[rules.required, rules.curp]"
            required
          ></v-text-field>

          <v-text-field
            v-model="rfc"
            label="RFC"
            :rules="[rules.required, rules.rfc]"
            required
          ></v-text-field>

          <v-text-field
            v-model="numeroSeguro"
            label="Número de Seguro Social"
            :rules="[rules.required, rules.numeroSeguro]"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" :disabled="!valid">Registrar Empleado</v-btn>
        </v-form>
      </div>
    </div>

    <!-- Snackbar para mensajes de éxito o error -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="3000"
      :color="snackbar.color"
      top
      multi-line
    >
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nombre = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const sexo = ref('');
const correo = ref('');
const telefono = ref('');
const contrasena = ref('');
const direccion = ref('');
const curp = ref('');
const rfc = ref('');
const numeroSeguro = ref('');
const valid = ref(false);

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});

// Lista de opciones para el campo "Sexo"
const sexos = ref(['Masculino', 'Femenino']);

const rules = {
  required: value => !!value || 'Campo requerido',
  email: value => /.+@.+\..+/.test(value) || 'Correo no válido',
  telefono: value => /^\d{10}$/.test(value) || 'Teléfono no válido',
  password: value => value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres',
  curp: value => value.length === 18 || 'CURP debe tener 18 caracteres',
  rfc: value => value.length === 13 || 'RFC debe tener 13 caracteres',
  numeroSeguro: value => value.length === 11 || 'Número de Seguro Social debe tener 11 caracteres',
};

const limpiarFormulario = () => {
  nombre.value = '';
  apellidos.value = '';
  fechaNacimiento.value = '';
  sexo.value = '';
  correo.value = '';
  telefono.value = '';
  contrasena.value = '';
  direccion.value = '';
  curp.value = '';
  rfc.value = '';
  numeroSeguro.value = '';
};

const submitForm = async () => {
  const data = {
    nombre: nombre.value,
    apellidos: apellidos.value,
    fechaNacimiento: fechaNacimiento.value,
    sexo: sexo.value === 'Masculino' ? 'M' : 'F',
    correo: correo.value,
    telefono: telefono.value,
    contrasena: contrasena.value,
    direccion: direccion.value,
    curp: curp.value,
    rfc: rfc.value,
    numeroSeguro: numeroSeguro.value
  };

  try {
    const response = await fetch('http://mipagina.com/registroEmpleados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // eslint-disable-next-line no-unused-vars
    const json = await response.json();

    snackbar.value = {
      show: true,
      message: 'Empleado registrado exitosamente',
      color: 'success'
    };

    setTimeout(() => {
      router.push('empleados');
    }, 1500); // Redirige después de 1.5 segundos

    limpiarFormulario();
  } catch (error) {
    console.error('Error durante el registro del empleado:', error);
    snackbar.value = {
      show: true,
      message: 'Error al registrar el empleado',
      color: 'error'
    };
  }
};
</script>

<style>
#admin-registro-empleados {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.contenedor {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
}

h1 {
  margin-bottom: 1rem;
}

.v-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>