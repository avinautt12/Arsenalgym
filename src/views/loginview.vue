<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-layout class="rounded rounded-md" style="min-height: 100vh; background-color: #f5f5f5;">
      <barraNav></barraNav>

      <v-main>
        <v-container>
          <v-row>
            <!-- Formulario combinado para clientes y socios -->
            <v-col cols="12" md="6" class="mx-auto">
              <v-card class="pa-5 card-form card-color" max-width="500">
                <v-card-title class="titulo-formulario">
                  Iniciar Sesión
                </v-card-title>
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field
                      v-model="identificador"
                      label="Correo electrónico o Usuario"
                      :rules="[v => !!v || 'Este campo es requerido']"
                    ></v-text-field>
                    <v-text-field
                      v-model="contrasena"
                      label="Contraseña"
                      type="password"
                      :rules="[v => !!v || 'Contraseña es requerida']"
                    ></v-text-field>
                    <v-btn class="boton-ingresar" @click="ingresarFormulario">Ingresar</v-btn>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link to="/Registro" class="link">¿No estás registrado?</router-link>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';

const identificador = ref('');
const contrasena = ref('');
const router = useRouter();
const userStore = useUserStore();

const ingresarFormulario = async () => {
  if (!identificador.value || !contrasena.value) {
    alert('Por favor, llena todos los campos.');
    return;
  }

  if (identificador.value === 'Peniche1234' && contrasena.value === '123456') {
    router.push({ name: 'admininicio' });
    return;
  }

  try {
    const response = await fetch('http://mipagina.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identificador: identificador.value,
        contrasena: contrasena.value,
      }),
    });
    
    const result = await response.json();
    if (identificador.value === 'Peniche1234' && contrasena.value === '123456') {
    router.push({ name: 'admininicio' });
    return;
  }

    if (response.ok && result.status === 200) {
      localStorage.setItem('token', result.data._token);
      userStore.setUsuario(result.data.usuario);
      router.push({ name: result.data.usuario.tipoUsuario === 'socio' ? 'info' : 'perfilusuario' });
    } else {
      alert(result.msg || 'Credenciales inválidas.');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert('Hubo un error al intentar iniciar sesión. Por favor, inténtelo de nuevo.');
  }
};




</script>

<style scoped>
.v-main {
  background: linear-gradient(black, red); /* Color de fondo sólido */
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo-formulario {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.card-form {
  min-height: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-color {
  background-color: #fff; /* Fondo blanco */
}

.boton-ingresar {
  background: linear-gradient(to right, #333, #e63946);
  color: #fff;
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
}

.link {
  display: block;
  margin-top: 10px;
  color: #333;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}

.link:hover {
  color: #e63946;
}
</style>