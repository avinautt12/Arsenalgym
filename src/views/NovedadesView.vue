<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-typography variant="h3" class="text-center mb-5">
          Novedades
        </v-typography>
      </v-col>
      <v-col
        v-for="novedad in novedades"
        :key="novedad.id"
        cols="12"
        md="6"
        lg="4"
        class="d-flex"
      >
        <v-card class="novedad-card">
          <v-card-title class="headline">{{ novedad.title }}</v-card-title>
          <v-card-subtitle>{{ novedad.date }}</v-card-subtitle>
          <v-card-text>
            {{ novedad.description }}
          </v-card-text>
          <v-img :src="novedad.image" class="image"></v-img>
        </v-card>
      </v-col>
      <v-container class="datos">
          <v-col cols="12" md="6" lg="4">
            <a href="https://www.instagram.com/arsenaltrc/" target="_blank" rel="noopener noreferrer">
            <v-img src="/insta.png" class="insta"></v-img>
            </a>
          </v-col>
          <v-row class="texto">
            <v-col cols="12">
              Puedes encontrar más novedades en nuestro Instagram...
            </v-col>
          </v-row>
      </v-container>
      <v-btn router-link to="/miinfo" color="red darken-4" class="btn">REGRESAR</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      novedades: [
        {
          id: 1,
          title: "Nueva Maquina de Pecho",
          date: "2024-08-01",
          description: "Visitanos y prueba nuestra nueva maquina de pecho.",
          image: "/pecho.jpg"
        },
        {
          id: 2,
          title: "Nuevo Suplemento Proteico",
          date: "2024-08-02",
          description: "Descubre nuestro nuevo suplemento proteico para aumentar tu masa muscular.",
          image: "/preentreno.jpg"
        },
        {
          id: 3,
          title: "Evento de Levantamiento de Pesas",
          date: "2024-08-03",
          description: "Participa en nuestro próximo evento de levantamiento de pesas y demuestra tu fuerza.",
          image: "/evento.jpg"
        }
      ]
    };
  }
};

</script>

<style scoped>
.texto{
  display: flex;
  justify-content: start;
}

.datos{
  display: flex;
  flex-direction: column;
}

.btn{
  margin-top: 200px;
  margin-left: -950px
}

.insta{
  height: 100px;
  margin-top: 20px;
}

.texto{
  justify-content: start;
  align-items: center;
}

.mb-5 {
  margin-bottom: 3rem;
}
.novedad-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: white;
  transition: transform 0.3s;
}
.novedad-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.image {
  margin-top: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 200px;
}
.v-card-title {
  font-weight: bold;
}
</style>
