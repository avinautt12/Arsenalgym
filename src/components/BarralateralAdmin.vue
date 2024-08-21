<template>
    <div>
        <aside class="sidebar">
        <router-link to="empleados"><v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Empleados</v-btn> </router-link> 
        <router-link to="socios"><v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Socios</v-btn> </router-link> 
        <router-link to="citas"><v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Citas</v-btn> </router-link>
        <router-link to="adminproductos"><v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Productos</v-btn></router-link>   
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Asistencia</v-btn>  
        <router-link to="/"><v-btn class="botonSalir" @mouseover="activarRojo()" @mouseleave="restaurarRojo()" :color="colorSalir">Salir</v-btn> </router-link> 
      </aside>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const coloresBotones1 = {
  clientes: 'grey',
  socios: 'grey',
  citas: 'grey',
  productos: 'grey',
  avisos: 'grey'
};

const coloresBoton = ref('grey');

function activarColorGris() {
  coloresBoton.value = 'grey';
}

function restaurarColorboton() {
  coloresBoton.value = 'white';
}

const colorSalir = ref('white'); 

function activarRojo() {
  colorSalir.value = 'red';
}

function restaurarRojo() {
  colorSalir.value = 'white';
}
</script>

<style scoped>
.botones {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: white;
  border-color: white;
}

.botonSalir {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
  background-color: red;
  border-color: red;
  color: white;
  text-transform: capitalize;
}

.botones:hover {
  background-color: grey !important;
  color: white !important;
}
</style>