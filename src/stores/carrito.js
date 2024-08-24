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
      // Buscar si el producto ya está en el carrito
      const existingProduct = this.productos.find(p => p.ID === producto.ID);
    
      if (existingProduct) {
        // Si el producto existe, verificar si se puede aumentar la cantidad
        if (existingProduct.cantidad < producto.STOCK) {
          existingProduct.cantidad += 1;
        } else {
          // Si la cantidad alcanza el stock, quizás manejar esto de alguna manera
          console.log("No se puede añadir más de lo que hay en stock");
        }
      } else {
        // Si el producto no existe en el carrito, agregarlo con cantidad inicial de 1
        console.log(this.productos)
        this.productos.push({ ...producto, cantidad: 1 });
      }
    
      // Guardar el carrito en el almacenamiento local
      this.saveToLocalStorage();
    },
    
    removeProducto(ID) {
      const productIndex = this.productos.findIndex(p => p.ID === ID);
      if (productIndex !== -1) {
        this.productos.splice(productIndex, 1);
        this.saveToLocalStorage();
      }
    },
    addCantidad(ID) {
      const product = this.productos.find(p => p.ID === ID);
      if (product && product.cantidad < product.STOCK) {
        product.cantidad += 1;
        this.saveToLocalStorage();
      }
    },
    removeCantidad(ID) {
      const product = this.productos.find(p => p.ID === ID);
      if (product && product.cantidad > 1) {
        product.cantidad -= 1;
        this.saveToLocalStorage();
      }
    },
    updateCantidad(ID, cantidad) {
      const product = this.productos.find(p => p.ID === ID);
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
