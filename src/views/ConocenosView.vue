<template>
    <v-app>
      <barraNav></barraNav>
      <v-main class="main-content">
        <v-container class="conocenos">
            <v-row justify="center">
                <v-col cols="12" md="8">
                <v-card class="conoce">
                    <v-row no-gutters>
                    <!-- Cambiado: Imagen ahora a la izquierda -->
                    <v-col cols="12" md="6">
                        <v-img src="/fondo.jpg" alt="Imagen descriptiva" class="imagen-derecha"></v-img>
                    </v-col>
                    <!-- Cambiado: Texto ahora a la derecha -->
                    <v-col cols="12" md="6">
                        <v-card-title class="gym1">
                        Acerca de Arsenal...
                        </v-card-title>
                        <v-card-text class="gym">
                        Arsenal es un gimnasio donde lo que buscamos es que logres tus metas. Nos gustaría que formaras parte de este gran equipo. Únete a nosotros; ven y supérate cada día en lo que te propongas. Buscamos que te conviertas en lo que siempre has querido, además de tu bienestar y que mejores cada día. El gimnasio cuenta con muchas máquinas para tu disposición, también con entrenadores para las clases de Crossfit.
                        </v-card-text>
                    </v-col>
                    </v-row>
                </v-card>
                </v-col>
            </v-row>
        </v-container>

  
        <v-container class="crossfit">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="conoce2">
                <v-row no-gutters>
                  <v-col cols="12" md="12">
                    <v-card-title class="gym1">
                      Clases de CrossFit
                    </v-card-title>
                    <v-card-text class="gym">
                        Únete a nuestras emocionantes clases de CrossFit y lleva tu entrenamiento al siguiente nivel. <br> Ofrecemos sesiones de lunes a viernes.
                        <v-card-title class="gym2">
                            Horarios:
                        </v-card-title>
                        Mañanas: 7:00, 8:00, 9:00 y 10:00 <br>
                        Tardes: 17:00, 18:00, 19:00, 20:00 
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-img src="/cross.jpg" class="cross"></v-img>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import barraNav from '@/components/barraNav.vue';
  </script>
  
  <style scoped>
.crossfit {
    display: flex;
    flex-direction: row;
}

.cross {
    height: 480px;
    width: 500px;
    margin-left: -263px;
}

.gym {
  margin-top: 5px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.gym1 {
    margin-top: 90px;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-weight: bold;
}

.gym2 {
  margin-top: 20px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-weight: bold;
}

.conoce {
    width: 1280px;
    height: 480px;
    margin-left: -250px;
    background-color: transparent;
}

.conoce2 {
    width: 1280px;
    height: 480px;
    margin-left: -250px;        
    background-color: black;
}

.main-content {
    background: linear-gradient(to right, black, red);
    padding: 30px;
}

.conocenos {
    margin-top: 64px;
    margin-bottom: 0px;
}

.imagen-derecha {
  width: 100%; /* Cambiado a 100% para ajustar al contenedor */
  max-width: 520px; /* Tamaño máximo */
  height: auto; /* Cambiado a auto para ajuste automático */
  margin: 0; /* Elimina margen negativo */
}

.informacion-lugar {
  margin-top: 32px;
}

.v-footer {
  width: 100%;
  padding: 0px;
}

.footer-content {
  background: linear-gradient(to right, #111, #333);
  color: #fff;
  padding: 20px;
  border-top: 1px solid #444;
  margin: 0;
  width: 100%;
}

.v-footer .v-icon-social {
  color: #4e4949;
  cursor: pointer;
  transition: color 0.3s ease;
}

.v-footer .v-icon-social:hover {
  color: #ff0000;
}

@media (max-width: 900px) {

  .conoce {
    width: 370px;
    height: 700px;
    margin-left: -40px;
    background-color: transparent;
  }

  .imagen-derecha {
  width: 100%; /* Cambiado a 100% para ajustar al contenedor */
  max-width: 520px; /* Tamaño máximo */
  height: auto; /* Cambiado a auto para ajuste automático */
  margin-left: 8px; /* Elimina margen negativo */
  }

  .gym1 {
    margin-top: 20px;
  }

  .conoce2 {
    width: 340px;
    height: 800px;
    margin-left: -20px;        
    background-color: black;
  }

  .cross {
    height: 480px;
    width: 500px;
    margin-left: -390px;
    margin-top: 345px;
}

}

</style>
