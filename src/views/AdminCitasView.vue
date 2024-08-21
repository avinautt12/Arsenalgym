<template>
    <div id="admin-inicio">
        <BarraAdminNew></BarraAdminNew>
      <div class="contenedor">
        <BarralateralAdmin></BarralateralAdmin>
        <div class="main-content">
          <div class="barra-busqueda">
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
            ></v-text-field>
          </div>
          <v-data-table
            :headers="headers"
            :items="citas"
            :search="search"
          ></v-data-table>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  
  import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
  import {ref,onMounted} from 'vue';
  const search = ref('')
  
  const citas= ref([]);
  
    const mostrarcitas = () =>{
        fetch('http://mipagina.com/citas')
        .then(response=> response.json())
        .then(json => {
          if(json.status==200){
            citas.value=json.data
          }
        })
    }
  
    onMounted(()=>{
      mostrarcitas();
    })
  
  </script>
  
  <style>
  #admin-inicio {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .navbar {
    background-color: #333;
    padding: 1rem;
  }
  
  .logo {
    max-height: 50px;
  }
  
  .contenedor {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
  }
  
  .barra-busqueda {
    margin-bottom: 1rem;
  }
  
  .v-data-table {
    flex: 1;
  }
  </style>
  