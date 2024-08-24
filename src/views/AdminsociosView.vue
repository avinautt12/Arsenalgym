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
          <v-btn @click="exportToPDF" color="primary">Exportar a PDF</v-btn>
        </div>
        <v-data-table
          ref="dataTable"
          :headers="headers"
          :items="socios"
          :search="search"
          class="no-footer"
        ></v-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const search = ref('');
const socios = ref([]);

const mostrarsocios = () => {
  fetch('http://mipagina.com/socios')
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        socios.value = json.data;
      }
    });
};

const exportToPDF = () => {
  const dataTable = document.querySelector('.v-data-table');
  html2canvas(dataTable).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text('Reporte de Socios', 10, 20);
    pdf.addImage(imgData, 'PNG', 10, 30, 190, 0); // Ajusta el tamaño y posición según necesites
<<<<<<< HEAD
    pdf.save('Socios_Activos.pdf');
=======
    pdf.save('data-table.pdf');
>>>>>>> 0807cd8fc2d7e9a7fcfd3dec184c98a7832baf66
  });
};

onMounted(() => {
  mostrarsocios();
});
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
  display: flex;
  align-items: center;
  gap: 1rem;
}

.v-data-table {
  flex: 1;
}

/* Estilos para ocultar la parte inferior del v-data-table */
.no-footer .v-data-table-footer {
  display: none;
}
</style>