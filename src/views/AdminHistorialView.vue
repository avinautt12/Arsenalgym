<template>
  <div id="admin-historial">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">

        <h1>Historiales</h1>
        
        <!-- Reporte de productos -->
        <div class="report-group">
          <h2>Reporte de Productos</h2>
          <div class="report-buttons">
            <button @click="generarVistaPrevia('ventasproductos', 'semana')" class="generate-btn">Ventas de la Última Semana</button>
            <button @click="generarVistaPrevia('ventasproductos', 'mes')" class="generate-btn">Ventas del Mes Actual</button>
            <button @click="generarVistaPrevia('ventasproductos', 'anio')" class="generate-btn">Ventas del Año Actual</button>
            <button @click="generarVistaPrevia('ventasproductos', 'historico')" class="generate-btn">Ventas Históricas</button>
          </div>
        </div>
        
        <!-- Reporte de órdenes -->
        <div class="report-group">
          <h2>Reporte de Órdenes</h2>
          <div class="report-buttons">
            <button @click="generarVistaPrevia('ordenes', 'semana')" class="generate-btn">Órdenes de la Última Semana</button>
            <button @click="generarVistaPrevia('ordenes', 'mes')" class="generate-btn">Órdenes del Mes Actual</button>
            <button @click="generarVistaPrevia('ordenes', 'anio')" class="generate-btn">Órdenes del Año Actual</button>
            <button @click="generarVistaPrevia('ordenes', 'historico')" class="generate-btn">Órdenes Históricas</button>
          </div>
        </div>
        
        <!-- Reporte de membresías -->
        <div class="report-group">
          <h2>Reporte de Membresías</h2>
          <div class="report-buttons">
            <button @click="generarVistaPrevia('membresias', 'semana')" class="generate-btn">Membresías de la Última Semana</button>
            <button @click="generarVistaPrevia('membresias', 'mes')" class="generate-btn">Membresías del Mes Actual</button>
            <button @click="generarVistaPrevia('membresias', 'anio')" class="generate-btn">Membresías del Año Actual</button>
            <button @click="generarVistaPrevia('membresias', 'historico')" class="generate-btn">Membresías Históricas</button>
          </div>
        </div>

        <!-- Modal para vista previa del reporte -->
        <div v-if="previewVisible" class="preview-modal">
          <div class="modal-content">
            <span class="close" @click="closePreview">&times;</span>
            <h2>Vista Previa del Reporte</h2>
            <div class="preview-container">
              <img :src="previewImage" alt="Vista previa del reporte" />
            </div>
            <!-- Botón para descargar el PDF -->
            <button @click="downloadPDF" class="download-btn">Descargar PDF</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ref } from 'vue';

// Variables de estado para la vista previa
const previewVisible = ref(false);
const previewImage = ref('');

// Función para generar la vista previa del reporte
const generarVistaPrevia = async (reporte, filtroTiempo) => {
  // Obtener los datos de la API
  const data = await fetch(`http://mipagina.com/${reporte}?filtro=${filtroTiempo}`)
    .then(response => response.json())
    .then(json => json.data);

  // Crear una tabla HTML temporal para mostrar datos
  let tableHtml = '<table style="width:100%; border-collapse: collapse; text-align: left;">';

  if (reporte === 'ventasproductos') {
    tableHtml += '<thead><tr><th style="border: 1px solid black; padding: 5px;">Producto</th><th style="border: 1px solid black; padding: 5px;">Stock</th><th style="border: 1px solid black; padding: 5px;">Categoría</th><th style="border: 1px solid black; padding: 5px;">Cantidad Vendida</th><th style="border: 1px solid black; padding: 5px;">Monto Recaudado</th></tr></thead>';
    tableHtml += '<tbody>';
    data.forEach(item => {
      tableHtml += `<tr>
        <td style="border: 1px solid black; padding: 5px;">${item.PRODUCTO}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.STOCK}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.CATEGORIA}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.CANTIDAD_VENDIDA}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.MONTO_RECAUDADO}</td>
      </tr>`;
    });
  } else if (reporte === 'ordenes') {
    tableHtml += '<thead><tr><th style="border: 1px solid black; padding: 5px;">Clave Orden</th><th style="border: 1px solid black; padding: 5px;">Cliente</th><th style="border: 1px solid black; padding: 5px;">Productos Comprados</th><th style="border: 1px solid black; padding: 5px;">Monto Total</th></tr></thead>';
    tableHtml += '<tbody>';
    data.forEach(item => {
      tableHtml += `<tr>
        <td style="border: 1px solid black; padding: 5px;">${item.CLAVE_ORDEN}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.CLIENTE}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.PRODUCTOS_COMPRADOS}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.MONTO_TOTAL}</td>
      </tr>`;
    });
  } else if (reporte === 'membresias') {
    tableHtml += '<thead><tr><th style="border: 1px solid black; padding: 5px;">Clave Orden</th><th style="border: 1px solid black; padding: 5px;">Cliente</th><th style="border: 1px solid black; padding: 5px;">Membresía</th></tr></thead>';
    tableHtml += '<tbody>';
    data.forEach(item => {
      tableHtml += `<tr>
        <td style="border: 1px solid black; padding: 5px;">${item.CLAVE_ORDEN}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.CLIENTE}</td>
        <td style="border: 1px solid black; padding: 5px;">${item.MEMBRESIA}</td>
      </tr>`;
    });
  }

  tableHtml += '</tbody></table>';

  // Crear un elemento DOM temporal para convertir a imagen
  const tempElement = document.createElement('div');
  tempElement.innerHTML = tableHtml;
  document.body.appendChild(tempElement);

  // Generar imagen usando html2canvas
  const canvas = await html2canvas(tempElement);
  const imgData = canvas.toDataURL('image/png');
  previewImage.value = imgData;

  // Eliminar elemento DOM temporal
  document.body.removeChild(tempElement);

  // Mostrar modal
  previewVisible.value = true;
};

// Función para cerrar el modal de vista previa
const closePreview = () => {
  previewVisible.value = false;
};

// Función para descargar el PDF
const downloadPDF = () => {
  const doc = new jsPDF('p', 'pt', 'a4');
  doc.addImage(previewImage.value, 'PNG', 10, 10, 580, 0);
  doc.save('reporte.pdf');
};

</script>

<style scoped>
.contenedor {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.report-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.generate-btn {
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.generate-btn:hover {
  background-color: #0056a3;
}

.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Evita el scroll en el modal */
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 80%; /* Ajusta el ancho del modal según lo necesites */
  max-height: 80%; /* Limita la altura máxima del modal */
  overflow: hidden; /* Evita el scroll en el modal */
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.preview-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%; /* Asegura que la vista previa ocupe todo el espacio disponible */
}

.preview-container img {
  max-width: 100%; /* Ajusta la imagen al ancho del contenedor */
  max-height: 100%; /* Ajusta la imagen a la altura del contenedor */
  object-fit: contain; /* Mantiene la relación de aspecto de la imagen */
}

.download-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.download-btn:hover {
  background-color: #388e3c;
}

.report-group {
  margin-bottom: 30px; /* Espacio entre grupos de botones */
}

.report-group h2 {
  margin-bottom: 10px; /* Espacio debajo del título */
  font-size: 1.5rem; /* Tamaño de fuente del título */
  color: black; /* Color del título */
}

.report-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.generate-btn {
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.generate-btn:hover {
  background-color: #0056a3;
}


</style>