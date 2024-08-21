<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-layout class="rounded rounded-md" style="min-height: 100vh; background-color: #f5f5f5;">
      <barraNav></barraNav>

      <v-main>
        <v-container>
          <v-row>
            <!-- Formulario para clientes -->
            <v-col cols="12" md="6">
              <v-card class="pa-5 card-form card-color" max-width="500">
                <v-card-title class="titulo-formulario">
                  Iniciar Sesión
                </v-card-title>
                <v-card-text>
                  <v-form ref="form1">
                    <v-text-field
                      v-model="correo"
                      label="Correo electrónico"
                      type="email"
                      :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Correo debe ser válido']"
                    ></v-text-field>
                    <v-text-field
                      v-model="contrasena1"
                      label="Contraseña"
                      type="password"
                      :rules="[v => !!v || 'Contraseña es requerida']"
                    ></v-text-field>
                    <v-btn class="boton-ingresar" @click="ingresarFormulario1">Ingresar</v-btn>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link to="/Registro" class="link">¿No estás registrado?</router-link>
                </v-card-actions>
              </v-card>
            </v-col>

            <!-- Formulario para socios -->
            <v-col cols="12" md="6">
              <v-card class="pa-5 card-form card-color" max-width="500">
                <v-card-title class="titulo-formulario2">
                  Team Arsenal
                </v-card-title>
                <v-card-text>
                  <v-form ref="form2">
                    <v-text-field
                      v-model="usuario"
                      label="Usuario"
                      :rules="[v => !!v || 'Usuario es requerido']"
                      class="campo-input-derecha"
                    ></v-text-field>
                    <v-text-field
                      v-model="contrasena2"
                      label="Contraseña"
                      type="password"
                      :rules="[v => !!v || 'Contraseña es requerida']"
                      class="campo-input-derecha"
                    ></v-text-field>
                    <v-btn class="boton-ingresar" @click="ingresarFormulario2">Ingresar</v-btn>
                  </v-form>
                </v-card-text>
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

const correo = ref('');
const contrasena1 = ref('');
const usuario = ref('');
const contrasena2 = ref('');
const router = useRouter();
const userStore = useUserStore();

const ingresarFormulario1 = async () => {
  try {
    const response = await fetch('http://mipagina.com/loginClientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: correo.value,
        contrasena: contrasena1.value
      })
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de red');
    }

    const result = await response.json();

    if (result.status === 200 && result.msg === "success") {
      localStorage.setItem('token', result.data._token);
      userStore.setUsuario(result.data.usuario);
      router.push({ name: 'perfilusuario' });
    } else {
      alert(result.data.msg || 'Credenciales inválidas.');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert('Hubo un error al intentar iniciar sesión. Por favor, inténtelo de nuevo.');
  }
};

const ingresarFormulario2 = async () => {
  if (usuario.value === 'Peniche1234' && contrasena2.value === '123456') {
    router.push({ name: 'AdminInicio' });
  } else {
    try {
      const response = await fetch('http://mipagina.com/loginSocios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: usuario.value,
          contrasena: contrasena2.value
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de red');
      }

      const result = await response.json();

      if (result.status === 200 && result.msg === 'success') {
        localStorage.setItem('token', result.data._token);
        userStore.setUsuario(result.data.usuario);
        router.push({ name: 'info' });
      } else {
        alert(result.msg || 'Credenciales inválidas.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Hubo un error al intentar iniciar sesión. Por favor, inténtelo de nuevo.');
    }
  }
};

</script>

<style scoped>
.v-main {
  background:linear-gradient(black,red); /* Color de fondo sólido */
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo-formulario, .titulo-formulario2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.titulo-formulario {
  color: #333;
}

.titulo-formulario2 {
  color: #333;
}

.card-form {
  min-height: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-color {
  background-color: #fff; /* Fondo blanco para ambos formularios */
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