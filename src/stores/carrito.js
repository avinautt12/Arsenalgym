import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    productos: JSON.parse(localStorage.getItem('carrito')) || [],
  }),
  actions: {
    saveToLocalStorage() {
      localStorage.setItem('carrito', JSON.stringify(this.productos));
    },
    addProducto(producto) {
      const existingProduct = this.productos.find(p => p.ID_PRODUCTO === producto.ID_PRODUCTO);
      if (existingProduct) {
        if (existingProduct.cantidad < producto.STOCK) {
          existingProduct.cantidad += 1;
        }
      } else {
        this.productos.push({ ...producto, cantidad: 1 });
      }
      this.saveToLocalStorage();
    },
    removeProducto(ID_PRODUCTO) {
      const productIndex = this.productos.findIndex(p => p.ID_PRODUCTO === ID_PRODUCTO);
      if (productIndex !== -1) {
        this.productos.splice(productIndex, 1);
        this.saveToLocalStorage();
      }
    },
    addCantidad(ID_PRODUCTO) {
      const product = this.productos.find(p => p.ID_PRODUCTO === ID_PRODUCTO);
      if (product && product.cantidad < product.STOCK) {
        product.cantidad += 1;
        this.saveToLocalStorage();
      }
    },
    removeCantidad(ID_PRODUCTO) {
      const product = this.productos.find(p => p.ID_PRODUCTO === ID_PRODUCTO);
      if (product && product.cantidad > 1) {
        product.cantidad -= 1;
        this.saveToLocalStorage();
      }
    },
    updateCantidad(ID_PRODUCTO, cantidad) {
      const product = this.productos.find(p => p.ID_PRODUCTO === ID_PRODUCTO);
      if (product) {
        if (cantidad >= 1 && cantidad <= product.STOCK) {
          product.cantidad = cantidad;
          this.saveToLocalStorage();
        }
      }
    },
    clearCarrito() {
      this.productos = [];
      this.saveToLocalStorage();
    },
  },
  getters: {
    totalCarrito: (state) => {
      return state.productos.reduce((total, producto) => total + (producto.PRECIO * producto.cantidad), 0).toFixed(2);
    }
  }
});
