<template>
  <div>
    <barraNav></barraNav>
  </div>
  <br>
  <br>
    <div id="admin-inicio">
      <div class="content">
        <BarraLatCliente></BarraLatCliente>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioClienteView'
  }
  </script>
  
  <script setup>
  import BarraLatCliente from '@/components/BarraLatCliente.vue';
  import barraNav from '@/components/barraNav.vue';
  
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  .mensaje1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 520px;
    font-size: 25px;
    font-weight: bold;
  }
  
  .botones {
    height: 40px;
    width: 180px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
    text-align: center;
    padding-left: 10px;
  }
  
  .botonSalir {
    height: 40px;
    width: 180px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
    text-align: center;
    padding-left: 10px;
    background-color: red;
    border-color: red;
    color: white;
    text-decoration: none;
  }

  .content {
  display: flex;
  flex: 1;
  margin-top: 20px; /* Ajusta el valor según sea necesario */
  }
  
  .mensaje {
    margin-bottom: 15px;
  }
  
  .navbar {
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    
  }
  
  .logo {
    height: 100%;
    width: 100px;
    margin-left: 100px;
  }
  
  .content {
    display: flex;
    flex: 1;
  }
  
  .sidebar {
  background-color: #555;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px; /* Ajusta el valor según sea necesario */
}
  
  
  .sidebar-btn-logout {
    background-color: #e74c3c;
  }
  
  .main-content {
    background-color: white;
    padding: 2rem;
    flex: 1;
  }
  
  .welcome-message {
    text-align: center;
  }
  
  .user-photo {
    width: 565px;
    height: 300px;
    max-width: 100%;
    max-height: 100%;
    margin-top: 30px;
    padding-right: 60px;
  }
  </style>