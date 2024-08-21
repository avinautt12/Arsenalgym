<template>
  <v-app>
    <barraNav></barraNav>
    <BarraLatSocio @cerrarSesion="handleCerrarSesion"></BarraLatSocio>
    <v-container class="main-container pa-0">
      <v-row class="d-flex justify-center align-start pa-0 ma-0 mt-n10">
        <v-col cols="12" md="8" class="ma-0">
          <v-card class="pa-5 profile-card">
            <v-card-title class="titulo">
              Bienvenido, {{ userStore.usuario.nombre }} {{ userStore.usuario.apellido }}
              <v-icon class="ml-2">mdi-dumbbell</v-icon>
            </v-card-title>
            <v-card-subtitle class="info">
              Correo: {{ userStore.usuario.correo }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="main-container pa-0">
      <v-row class="d-flex justify-center align-start pa-0 ma-0 mt-n10">
        <v-col cols="12" md="8" class="ma-0">
          <v-card class="pa-5 profile-card-r">
            <v-card-title class="titulo-r">
              Te recomendamos llevar un orden en tus <br> entrenamientos:
            </v-card-title>
            <v-card-subtitle class="info-r">
              Lunes: Pecho, hombro y trícep. <br>
              Martes: Espalda y bicep. <br>
              Míercoles: Pierna. <br>
              Jueves: Brazo Completo. <br>
              Viernes: Pecho y Espalda. <br>
              Sábado (opcional): Glúteo y Femoral. <br>
              Domingo: Descanso.
            </v-card-subtitle>
            <v-btn router-link to="/bicep" class="rutinas" block style="justify-content: flex; display: flex;">Ver rutinas</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="main-container pa-0">
      <v-row class="d-flex justify-center align-start pa-0 ma-0 mt-n10">
        <v-col cols="12" md="8" class="ma-0">
          <v-card class="pa-5 profile-card-p">
            <v-card-title class="titulo-p">
              Busca tu máximo rendimiento con <br> nuestros suplementos...
            </v-card-title>
            <v-btn router-link to="/Producto" class="productos" block style="justify-content: flex; display: flex;">Ver productos</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import BarraLatSocio from '@/components/BarraLatSocio.vue';
import barraNav from '@/components/barraNav.vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const handleCerrarSesion = () => {
  localStorage.removeItem('token');
  userStore.setUsuario(null);
  router.push('/login');
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 20px;
}

.rutinas{
  margin-top: 20px; /* Añade un margen superior si es necesario */
}

.productos{
  margin-top: 0; /* Añade un margen superior si es necesario */
}

.profile-card {
  width: 490px;
  padding: 20px;
  border-radius: 15px;
  background: grey;
  transition: transform 0.3s ease-in;
  position: relative;
  top: -560px; /* Ajusta este valor para subir la tarjeta */
  margin-left: -110px;
}

.profile-card-r {
  width: 550px;
  padding: 20px;
  border-radius: 15px;
  background: grey;
  transition: transform 0.3s ease-in;
  position: relative;
  top: -580px; /* Ajusta este valor para subir la tarjeta */
  margin-left: 470px;
}

.profile-card-p {
  width: 450px;
  height: 150px;
  padding: 20px;
  border-radius: 15px;
  background: grey;
  transition: transform 0.3s ease-in;
  position: relative;
  top: -180px; /* Ajusta este valor para subir la tarjeta */
  margin-left: 570px;
}

.titulo {
  font-size: 26px;
  font-weight: bold;
  color: white;
  text-align: left; /* Alinea el texto a la izquierda */
  margin: 0; /* Elimina cualquier margen adicional */
  font-family: sans-serif;
}

.info {
  font-size: 18px;
  color: white;
  text-align: left; /* Alinea el texto a la izquierda */
  margin: 0; /* Elimina cualquier margen adicional */
}

.titulo-r {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: left; /* Alinea el texto a la izquierda */
  margin: 0; /* Elimina cualquier margen adicional */
  font-family: sans-serif;
}

.titulo-p {
  font-size: px;
  font-weight: bold;
  color: black;
  text-align: left; /* Alinea el texto a la izquierda */
  margin: 0; /* Elimina cualquier margen adicional */
  font-family: sans-serif;
}

.info-r {
  font-size: 18px;
  color: white;
  text-align: left; /* Alinea el texto a la izquierda */
  margin: 0; /* Elimina cualquier margen adicional */
  display: flex;
  flex-direction: column;
}

.v-row {
  flex: 1;
}

.v-col {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

@media (max-width: 900px) {

.profile-card {
width: 350px;
height: 115px;
padding: 20px;
border-radius: 15px;
background: grey;
transition: transform 0.3s ease-in;
position: relative;
top: -730px; /* Ajusta este valor para subir la tarjeta */
margin-left: 5px;   
}

.titulo {
font-size: 17px;
font-weight: bold;
color: white;
text-align: left; /* Alinea el texto a la izquierda */
margin: 0; /* Elimina cualquier margen adicional */
font-family: sans-serif;
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.info {
font-size: 16px;
color: white;
text-align: left; /* Alinea el texto a la izquierda */
margin: 0; /* Elimina cualquier margen adicional */
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.profile-card-r {
width: 350px;
padding: 20px;
background: grey;
transition: transform 0.3s ease-in;
position: relative;
top: -610px; /* Ajusta este valor para subir la tarjeta */
margin-left: 5px;
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.titulo-r {
font-size: 17px;
font-weight: bold;
color: white;
text-align: left; /* Alinea el texto a la izquierda */
margin: 0; /* Elimina cualquier margen adicional */
font-family: sans-serif;
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.info-r {
font-size: 15px;
color: white;
text-align: left; /* Alinea el texto a la izquierda */
margin: 0; /* Elimina cualquier margen adicional */
display: flex;
flex-direction: column;
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.profile-card-p {
width: 350px;
height: 130px;
padding: 20px;
border-radius: 15px;
background: grey;
transition: transform 0.3s ease-in;
position: relative;
top: -260px; /* Ajusta este valor para subir la tarjeta */
margin-left: 5px;
}  

.titulo-p {
font-size: 14px;
font-weight: bold;
color: black;
text-align: left; /* Alinea el texto a la izquierda */
margin: 0; /* Elimina cualquier margen adicional */
font-family: sans-serif;
white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

}


</style>