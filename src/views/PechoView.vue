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
  { title: 'Press de banca con barra', video: 'https://www.youtube.com/embed/GeLq8cMODLc', description: 'Ejercicio para trabajar el pectoral mayor.' },
  { title: 'Press de banca inclinado con mancuerna', video: 'https://www.youtube.com/embed/sNXrm1GjfH8', description: 'Ejercicio para el pectoral superior.' },
  { title: 'Cruces en polea baja', video: 'https://www.youtube.com/embed/qpsUUqAkb1I', description: 'Esta variante de ejercicios para pecho gym es una de las más eficientes si de hacer bombear el músculo pectoral se trata.' },
  { title: 'Aperturas en contractor de pecho', video: 'https://www.youtube.com/embed/U5lV7oPW3CA', description: 'En la máquina contractora de pecho, siéntate y coloca tus manos en el agarre vertical. Empuja tus brazos hasta la posición frente a tus músculos pectorales y luego regresa a su posición inicial.' }
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
