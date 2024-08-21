<template>
  <div id="admin-inicio">
      <BarraAdminNew></BarraAdminNew> 
    <div class="content">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <div class="welcome-message">
          <div><img src="/public/peniche.png" class="user-photo" /></div>
          <h1 class="mensaje">¡Bienvenido Peniche!</h1>
          <p>Fecha y hora actual: {{ fechaHoraActual }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminInicioView',
  mounted() {
    // Recuperar la fecha y hora del inicio de sesión desde localStorage al cargar la página
    const storedDateTime = localStorage.getItem('inicioSesionDateTime');
    if (storedDateTime) {
      this.fechaHoraActual = storedDateTime;
    }
  }
}
</script>

<script setup>
import { ref } from 'vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import BarraAdminNew from '@/components/BarraAdminNew.vue';

// Variable reactiva para almacenar la fecha y hora actual
const fechaHoraActual = ref(new Date().toLocaleString());
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.mensaje1{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 565px;
  font-size: 25px;
  font-weight: bold;
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
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
}

#admin-inicio {
  display: flex;
  flex-direction: column;
  height: 100vh;
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

.logo1{
  height: 100px;
  margin-left: 50px;
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
