<script setup>
import barraNav from '@/components/barraNav.vue';
import { ref } from 'vue';

const items = ref([
  { src: '/p1.jpg', alt: 'Image 1' },
  { src: '/p2.jpg', alt: 'Image 2' },
  { src: '/p3.jpg', alt: 'Image 3' },
  { src: '/p4.jpg', alt: 'Image 4' },
  { src: '/p5.jpg', alt: 'Image 5' },
]);

const productos = ref([
  { src: '/public/creatinas/creatina1.jpg', alt: 'Creatina 1' },
  { src: '/public/multivitaminicos/m3.jpg', alt: 'Multi 2' },
  { src: '/public/proteina/proteina7.jpg', alt: 'Prote 3' },
  { src: '/public/creatinas/creatina2.jpg', alt: 'Creatina 1' },
  { src: '/public/multivitaminicos/m7.jpg', alt: 'Multi 2' },
  { src: '/public/proteina/proteina17.jpg', alt: 'Prote 3' },
])
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f4f4f4; min-height: 100vh;">
    <barraNav></barraNav>

    <!-- Carrusel -->
    <v-main style="background: linear-gradient(to right, black, red); padding: 20px;">

      
       <!-- Nuevo v-card encima del carrusel -->
       <v-container class="bienvenida">
        <!-- v-card con z-index y margen superior -->
        <v-card class="welcome-card mb-6 bienve1">
          <v-container class="col">
            <v-card-title class="end1">
              <h1>Bienvenido a Arsenal</h1>
            </v-card-title>
            <v-card-subtitle class="end">
              En Arsenal, nos dedicamos a ayudarte a alcanzar tus objetivos de fitness con un ambiente motivador y recursos de primera clase. Prepárate para transformar tu bienestar y superar tus límites...
            </v-card-subtitle>
            <v-btn router-link to="/conocenos" class="conocer">Conocer más</v-btn>
          </v-container>
        </v-card>
      </v-container>

      <v-carousel class="mb-5" cycle interval="5000" hide-delimiter-background height="500px" style="width: 100%;">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" :alt="item.alt" class="carousel-image"></v-img>
        </v-carousel-item>
      </v-carousel>
    
      <!-- GYM -->
      <v-container class="bienvenida" style="margin-bottom: 50px;">
        <v-row align="center" justify="start">
          <v-col cols="12" md="10">
            <v-card class="welcome-card mb-6 bienve1">
              <v-container class="col">
                <v-card-title class="end1">
                  <h1>Nuestro Objetivo...</h1>
                </v-card-title>
                <v-card-subtitle class="end">
                  En Arsenal, ofrecemos una amplia gama de equipos y servicios, incluyendo clases especializadas de Crossfit, para atender todas tus necesidades de fitness. Nuestro gimnasio está diseñado para adaptarse a diferentes niveles de intensidad y objetivos, desde principiantes hasta atletas avanzados. Nos comprometemos a ayudarte a lograr tus metas de acondicionamiento físico, mejorar tu confianza y promover un estilo de vida saludable y en constante crecimiento.                </v-card-subtitle>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Productos -->
      <v-container fluid class="section-container">
        <v-row class="mb-5" align="center">
          <!-- Productos -->
          <v-col cols="12" md="6" class="d-flex">
            <v-card class="w-100 pros">
              <v-row no-gutters>
                <v-col cols="12" md="6">
                  <v-carousel cycle interval="5000" hide-delimiter-background height="300px">
                    <v-carousel-item v-for="(product, index) in productos" :key="index">
                      <v-img :src="product.src" :alt="product.alt" class="imagen-creatina"></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                  <v-card-title class="titulo-productos">
                    PRODUCTOS
                  </v-card-title>
                  <v-card-subtitle class="produc">
                    En Arsenal, tenemos todo para que continúes con tu rutina. Contamos con Creatinas, Proteínas, Multi-vitamínicos y muchos más, no te quedes sin los tuyos.
                  </v-card-subtitle>
                  <router-link to="Producto">
                    <v-btn class="boton-comprar mt-4">COMPRAR</v-btn>
                  </router-link>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
      
          <!-- Membresías -->
          <v-col cols="12" md="6" class="d-flex">
            <v-container fluid>
              <v-card class="card-membresia-large">
                <v-card-title class="card-title-large">Membresías</v-card-title>
                <v-simple-table class="membresias-table-large">
                  <thead>
                    <tr>
                      <th class="header-cell-large"></th>
                      <th class="header-cell-large">MENSUAL</th>
                      <th class="header-cell-large">SEMESTRAL</th>
                      <th class="header-cell-large">ANUAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="body-cell-large">GYM</td>
                      <td class="body-cell-large">$700</td>
                      <td class="body-cell-large">$1,800</td>
                      <td class="body-cell-large">$7,460</td>
                    </tr>
                    <tr>
                      <td class="body-cell-large">CROSSFIT</td>
                      <td class="body-cell-large">$720</td>
                      <td class="body-cell-large">$1,920</td>
                      <td class="body-cell-large">$7,550</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>
            </v-container>
          </v-col>  
        </v-row>
      </v-container>
      

      <!-- Visitanos -->
    <v-card class="visitanoscard">
      <v-container class="visitanos">
        <h1>Visítanos...</h1>
        <v-row class="mb-5" align="center">
          <v-col cols="12" md="6">
            <div class="mapdiv">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" 
                class="mapa-arsenal-gym"
              ></iframe>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
      
    </v-main>
  </v-layout>

  <v-card class="info" color="grey">
    <v-col cols="12">
      <v-row justify="space-between" align="center" no-gutters>
        <v-col cols="12" sm="auto">
          <v-row justify="center" align="center">
            <v-btn 
              icon 
              href="https://www.facebook.com/Arsenalclubbosque/?locale=es_LA" 
              target="_blank"
              class="mr-4 v-icon-social face"
              size="24px"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn 
              icon 
              href="https://www.instagram.com/arsenaltrc/?hl=es-la" 
              target="_blank"
              class="v-icon-social face"
              size="24px"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-row>
        </v-col>

        <v-col cols="12" sm="auto" class="text-center texto">
          <div >
            Calle C. Juan Pablos 330, Tercero de Cobián Centro, 27000 Torreón, Coah.
          </div>
        </v-col>
        <v-col cols="12" sm="auto" class="text-center texto1">
          <div style="font-weight: 500;">
            © 2024 Arsenal Gym - Todos los derechos reservados
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-card>

</template>

<style scoped>
.texto{
    color: black;
  }

  .texto1{
    color: black;
  }

.pros{
  height: 285px;
}

.produc{
  white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
  word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.card-membresia{
  height: 300px;
}

.somos{
  display: flex;
  justify-content: flex-start;
}

.iniarse{
  display: flex;
  flex-direction: column;
  
}

.iniarse-titulo{
  display: flex;
  justify-content: flex-start;
}

.conocer{
  width: 150px;
  margin: 25px;
  }

.col{
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
  word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.polea{
  width: 300px;
}

.end{
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(251, 248, 248);
  white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
  word-wrap: break-word; /* Evitar desbordamientos de contenido */
  text-align: left;
  font-weight: bold;
}

.end1{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
  word-wrap: break-word; /* Evitar desbordamientos de contenido */
}

.bienvenida{
  margin-top: 50px;
  margin-left: 110px;
  text-align: start;
}

.bienve1{
    height: 450px;
    width: 1200px;
    display: flex;
    flex-direction: row; 
    background-color: transparent;
}

.div{
  height: 300px;
}

.gym{
  width: 1200px;
}
.cardtext{
  padding: 20px;
  width: -1200px;
}

.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.imagen-creatina {
  width: 100%; 
  object-fit: cover;
  height: 220px;
  margin-top: 30px;
}

.visitanoscard{
  background-color: transparent;
}

.boton-comprar {
  margin-top: 10px;
  background-color: #c51c1c;
  color: white;
}

.visitanos-section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.card-title {
  background-color: #ffffff; /* Color de fondo del título del card */
  color: white;
  font-weight: bold;
  padding: 16px;
  text-align: center;
}

.visitanos-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.visitanos{
  color: white;
}

.mapa-arsenal-gym, .imagen-arsenal-gym {
  width: 100%;
  height: auto;
}

.card-membresia-large {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
}

.card-title-large {
  font-size: 2rem;
  background-color: #120e0e;
  color: white;
  padding: 16px;
  text-align: center;
}

.membresias-table-large {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  height: 500px;
  overflow-y: auto;
}

.header-cell-large {
  background-color: #120e0e;
  color: white;
  font-size: 1.2rem;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #a12b2b;
  width: 300px;
}

.body-cell-large {
  font-size: 1.1rem;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  color: #333;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

tbody tr:last-child td {
  border-bottom: none;
}

@media (max-width: 900px) {
  .imagen-creatina{
    width: 80%; /* Ajusta el tamaño de las imágenes a un 80% del contenedor */
    height: 180px; /* Mantiene la proporción de la imagen */
    margin: -1px;
  }

  }

  .mapdiv {
    height: 346px; 
    width: 100%;
  }
  
  .mapa-arsenal-gym {
    width: 100%;
    height: 100%;
    border: 0; /* Remueve bordes si hay */
  }
  
  .imagen-arsenal-gym {
    width: 100%;
    height: auto;
  }

  .footer-content {
    background: linear-gradient(to right, #111, #333);
    color: #fff;
    padding: 20px;
    border-top: 1px solid #444;
    margin: 0;
    width: 100%;
  }

  .table-responsive {
    overflow-x: auto;
  }
  
  .membresias-table th, .membresias-table td {
    padding: 10px;
    text-align: center;
    white-space: nowrap; /* Evita que el texto se divida en varias líneas */
  }

  .titulo-productos{
    font-size: 30px;
    text-align: start;
  }

  .boton-comprar{
    margin-left: 15px
  }

  .ultimo{
    height: 150px;
  }
  
  @media (max-width: 900px) {
    .mapdiv {
      height: 300px; /* Ajusta la altura para pantallas más pequeñas */
    }
    
    .membresias-table {
      width: 100%;
      min-width: 600px;
    }
  
    .bienve{
    height: 450px;
    width: 420px;
    display: flex;
    flex-direction: row; 
    background-color: transparent;
    }

    .bienve1{
    height: 590px;
    width: 420px;
    display: flex;
    flex-direction: row; 
    background-color: transparent;
  }

  .bienvenida{
  margin-top: 70px;
  margin-left: -45px;
  text-align: start;
  }

  .end1{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  white-space: pre-wrap; /* Permitir saltos de línea y manejar el contenido */
  word-wrap: break-word; /* Evitar desbordamientos de contenido */
  margin-top: 40px;
  }

  .pros{
  height: 515px;
  }

  .titulo-productos{
    font-size: 30px;
    text-align: center;
  }

  .produc{
    font-size: 15px;
    text-align: center;
  }

  .boton-comprar{
    margin-left: 95px
  }

  .imagen-creatina{
    margin-top: 60px;
    margin-left: 35px;
  }

  .card-membresia-large {
    height: 170px;
  }

  .card-title-large {
    font-size: 20px;
  }

  .header-cell-large {
    font-size: 10px;
    padding: 4px;
  }

  .body-cell-large {
    font-size: 14px;
    padding: 10px;
  }

  .bienve{
    height: 450px;
    width: 1200px;
    display: flex;
    flex-direction: row; 
    background-color: transparent;
  }

  .face{
    margin-top: 6px;

  }

  .info{
  height: 140px;
  }

  .texto{
    margin-top: 20px;
    color: black;
  }

  .texto1{
    color: black;
  }

}
 
</style>