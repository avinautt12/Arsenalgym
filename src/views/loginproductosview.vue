<template>
    <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
      <v-app-bar color="black" style="height: 70px; font-size: 24px; display: flex; align-items: center; justify-content: space-between;">
        <v-img
          src="/arsenal.png"
          alt="Logo"
          contain
          class="imagen-barra-izquierda"
        ></v-img>
        <p style="font-size: 50px; color: white; margin: 0; flex-grow: 1; text-align: center;">PRODUCTOS</p>
        <v-img
          src="/pesa2.png"
          alt="Carrito"
          contain
          class="imagen-barra-derecha"
        ></v-img>
      </v-app-bar>
  
      <v-main style="background-color: #263238; display: flex; justify-content: center; align-items: center;">
        <div class="contenedor-izquierda">
          <img src="/arsenal.png" alt="Imagen Cuadro Izquierdo" class="imagen-cuadro-izquierda">
        </div>
        <div class="contenedor-derecha">
          <h2 class="titulo">Regístrate</h2>
          <div class="contenedor-inputs">
            <div class="item-input">
              <label for="usuario">Usuario:</label>
              <input id="usuario" type="text" class="campo-input"> 
            </div>
            <div class="item-input"> 
              <label for="correo">Correo Electrónico:</label>
              <input id="correo" type="email" class="campo-input">
            </div>
            <div class="item-input">
              <label for="contrasena">Contraseña:</label>
              <input id="contrasena" type="password" class="campo-input">
            </div>
            <div class="item-input">
              <label for="confirmarContrasena">Confirmar Contraseña:</label>
              <input id="confirmarContrasena" type="password" class="campo-input">
            </div>
            <v-btn class="boton-registrar">Registrar</v-btn>
            <v-btn class="boton-google">
              <img src="/google.jpg" alt="Google Icono" class="google-icono">
              Iniciar sesión con Google
            </v-btn>
          </div>
        </div>
      </v-main>
    </v-layout>
  </template>
  
  <style scoped>
  .imagen-barra-izquierda {
    height: 50px;
    width: 50px;
  }
  
  .imagen-barra-derecha {
    height: 50px;
    width: 50px;
  }
  
  .imagen-cuadro-izquierda {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
  
  .titulo {
    text-align: center;
    margin-bottom: 20px;
    color: black;
  }
  
  .contenedor-izquierda {
    width: 500px;
    height: 500px;
    background: linear-gradient(to right, black, red);
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .contenedor-derecha {
    width: 500px;
    height: 500px;
    background-color: white;
    border: 3px solid black;
    margin-left: -2px;
    padding: 20px;
  }
  
  .contenedor-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .item-input {
    display: flex;
    flex-direction: column;
  }
  
  .campo-input {
    margin-top: 5px;
    border: 3px solid black;
  }
  
  .boton-registrar {
    background: linear-gradient(to right, black, red);
    color: white;
    margin-top: 1px; 
    padding: 10px 20px;
  }
  
  .boton-google {
    background-color: white;
    color: black;
    border: 2px solid black;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .google-icono {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  </style>
  