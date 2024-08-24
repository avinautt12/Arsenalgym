<template>
  <div id="admin-registro">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <h1>Registrar Producto</h1>
        <v-form v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            v-model="nombre"
            label="Nombre"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-textarea
            v-model="descripcion"
            label="Descripción"
            :rules="[rules.required]"
            required
          ></v-textarea>

          <v-text-field
            v-model="precio"
            label="Precio"
            type="number"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="stock"
            label="Stock"
            type="number"
            :rules="[rules.required]"
            v-if="categoria !== 'CAT05'"  
            required
          ></v-text-field>

          <v-file-input
            v-model="imagen"
            label="Imagen"
            accept="image/*"
            required
          ></v-file-input>

          <div class="categoria-container">
            <label>Categoría</label>
            <div class="categoria-buttons">
              <v-btn
                v-for="cat in categorias"
                :key="cat.value"
                :color="categoria === cat.value ? 'primary' : 'default'"
                @click="categoria = cat.value"
              >
                {{ cat.text }}
              </v-btn>
            </div>
          </div>

          <v-btn type="submit" color="primary" :disabled="!valid">Agregar Producto</v-btn>
        </v-form>
      </div>
    </div>

    <!-- Snackbar para mensajes de éxito o error -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="3000"
      :color="snackbar.color"
      top
      multi-line
    >
      {{ snackbar.message }}
      
    </v-snackbar>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nombre = ref('');
const descripcion = ref('');
const precio = ref('');
const stock = ref('');
const categoria = ref('');
const imagen = ref(null);
const valid = ref(false);

const categorias = [
  { text: 'Proteína', value: 'CAT01' },
  { text: 'Creatinas', value: 'CAT02' },
  { text: 'Multi-vitaminicos', value: 'CAT03' },
  { text: 'Pre-entrenos', value: 'CAT04' },
  { text: 'Membresias', value: 'CAT05' },
];

const rules = {
  required: value => !!value || 'Campo requerido',
};

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});

watch(categoria, (newValue) => {
  if (newValue === 'CAT05') {
    stock.value = '1';
  }
});

// eslint-disable-next-line no-unused-vars
const resetForm = () => {
  nombre.value = '';
  descripcion.value = '';
  precio.value = '';
  stock.value = '';
  categoria.value = '';
  imagen.value = null;
};

const submitForm = async () => {
  if (!nombre.value || !descripcion.value || !precio.value || !categoria.value || !imagen.value) {
    snackbar.value = {
      show: true,
      message: 'Por favor, complete todos los campos.',
      color: 'error'
    };
    return;
  }

  const formData = new FormData();
  formData.append('nombre', nombre.value);
  formData.append('descripcion', descripcion.value);
  formData.append('precio', parseFloat(precio.value));
  formData.append('stock', categoria.value === 'CAT05' ? '1' : stock.value);
  formData.append('categoria', categoria.value);
  formData.append('imagen', imagen.value);

  try {
    const response = await fetch('http://mipagina.com/insertarproducto', {
      method: 'POST',
      body: formData,
    });

    const json = await response.json();
    console.log('Respuesta del servidor:', json);

    snackbar.value = {
      show: true,
      message: 'Producto registrado exitosamente',
      color: 'success'
    };

    setTimeout(() => {
      router.push('adminproductos');
    }, 1500); 
  } catch (error) {
    console.error('Error durante el registro del producto:', error);
    snackbar.value = {
      show: false,
      message: 'Error al registrar el producto',
      color: 'error'
    };
  }
};
</script>

<style>
#admin-registro {
  display: flex;
  flex-direction: column;
  height: 100vh;
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

h1 {
  margin-bottom: 1rem;
}

.v-form {
  max-width: 600px;
  margin: 0 auto;
}

.categoria-container {
  margin-top: 1rem;
}

.categoria-buttons {
  display: flex;
  gap: 20px;
}
</style>