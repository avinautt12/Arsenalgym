<template>
  <v-layout class="main-app rounded rounded-md">
    <!-- Eliminar el v-app-bar -->

    <v-main class="main-container">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="membresia in membresias" :key="membresia.id">
            <v-card>
              <v-img :src="membresia.image" class="white--text" height="200px"></v-img>
              <v-card-title class="text-center">{{ membresia.title }}</v-card-title>
              <v-card-subtitle class="text-center">{{ membresia.price }}</v-card-subtitle>
              <v-card-actions class="d-flex justify-center">
                <v-btn block color="primary">Añadir al carrito</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      membresias: [
        { id: 1, title: 'Membresía Mensual (Gimnasio)', price: '$700.00', image: '/arsenalblanco.png' },
        { id: 2, title: 'Membresía Semestral (Gimnasio)', price: '$1,800.00', image: '/arsenalblanco.png' },
        { id: 3, title: 'Membresía Anual (Gimnasio)', price: '$7,470.00', image: '/arsenalblanco.png' },
        { id: 4, title: 'Membresía Mensual (CrossFit)', price: '$720.00', image: '/arsenalblanco.png' },
        { id: 5, title: 'Membresía Semestral (CrossFit)', price: '$1,920.00', image: '/arsenalblanco.png' },
        { id: 6, title: 'Membresía Anual (CrossFit)', price: '$7,550.00', image: '/arsenalblanco.png' }
      ]
    }  
  }
}
</script>

<style>
.main-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  color:white; 
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.v-card {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.v-card-title,
.v-card-subtitle {
  text-align: center;
  margin: 8px 0;
  word-wrap: break-word;
}

.v-card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card * {
  white-space: normal;
}

.v-img {
  object-fit: contain;
  width: 100%;
}
</style>
