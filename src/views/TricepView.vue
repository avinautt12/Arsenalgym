<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid class="background-color">
        <v-row justify="center" class="text-center">
          <v-col cols="12" sm="6" md="4" v-for="(exercise, index) in exercises" :key="index" class="d-flex justify-center">
            <v-card class="exercise-card">
              <v-responsive aspect-ratio="16/9" class="video-container">
                <iframe
                  v-if="exercise.video"
                  :src="exercise.video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <v-img v-else :src="exercise.image" :alt="exercise.title" height="200px"></v-img>
              </v-responsive>
              <v-card-title>{{ exercise.title }}</v-card-title>
              <v-card-subtitle>{{ exercise.description }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="text-center mt-4">
          <v-col cols="12">
            <p>
              Para más dudas puedes consultar el
              <a href="https://www.instagram.com/arsenaltrc?igshid=MWhmamJyM2p2eXl4OQ==" target="_blank">Instagram </a>
              de Arsenal. <v-icon>mdi-instagram</v-icon>
            </p>
            <v-btn router-link to="/miinfo" color="red darken-4" class="regre">REGRESAR</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const exercises = ref([
{ title: 'Extensiones de Tríceps en Polea', video: 'https://www.youtube.com/embed/N7CewfnQPl0', description: 'Ejercicio para trabajar los tríceps con polea.' },
  { title: 'Fondos en Paralelas', video: 'https://www.youtube.com/embed/2z8JmcrW-As', description: 'Ejercicio que involucra el tríceps y el pecho.' },
  { title: 'Extensiones de Tríceps con Mancuerna', video: 'https://www.youtube.com/embed/-paLAzl68WU', description: 'Ejercicio con mancuerna para los tríceps.' },
  { title: 'Patada de Tríceps', video: 'https://www.youtube.com/embed/iyZtvgyc_sQ', description: 'Ejercicio para trabajar la cabeza larga del tríceps.' }
])
</script>

<style scoped>
.regre{
  margin: 3px;
}

.background-color {
  background-color:white ;
  min-height: 100vh;
  padding-top: 20px;
}

.text-center {
  text-align: center;
}

.video-container iframe {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.v-card {
  background-color: white;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  text-align: center;
  font-weight: bold;
}

.v-card-subtitle {
  text-align: center;
}

.v-img {
  width: 100%;
  height: auto; 
}

.exercise-card {
  border: 1px solid black;
  max-width: 400px;
  margin-bottom: 20px; 
}
</style>
