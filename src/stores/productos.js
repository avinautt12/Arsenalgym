import { defineStore } from 'pinia';

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: [],
  }),
  actions: {
    async fetchProductos() {
      try {
        const response = await fetch('http://mipagina.com/productos');
        if (!response.ok) {
          throw new Error('Error fetching productos');
        }
        const data = await response.json();
        console.log('Datos de productos:', data); // Verifica la estructura de los datos
        this.productos = data.data.map(producto => ({
          ...producto,
          IMAGEN:producto.IMAGEN, // Asegúrate de que el formato sea correcto
        }));
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    },
    getProductoById(id) {
      return this.productos.find(producto => producto.ID_PRODUCTO === id);
    }
  },
});