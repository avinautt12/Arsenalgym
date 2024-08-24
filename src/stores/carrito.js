import { defineStore } from 'pinia';
import { useUserStore } from './userStore';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    productos: [],
  }),
  actions: {
    cargarCarrito() {
      const userStore = useUserStore();
      if (userStore.usuario) {
        const carrito = JSON.parse(localStorage.getItem(`carrito_${userStore.usuario.id}`));
        if (carrito) {
          this.productos = carrito;
        } else {
          this.productos = [];
        }
      }
    },
    guardarCarrito() {
      const userStore = useUserStore();
      if (userStore.usuario) {
        localStorage.setItem(`carrito_${userStore.usuario.id}`, JSON.stringify(this.productos));
      }
    },
    addProducto(producto) {
      const existingProduct = this.productos.find(p => p.ID === producto.ID);
      if (existingProduct) {
        existingProduct.cantidad++;
      } else {
        // Asegúrate de que cantidad se inicialice en 1 si es un nuevo producto
        this.productos.push({ ...producto, cantidad: 1 });
      }
      this.guardarCarrito();
    },
    removeProducto(ID) {
      this.productos = this.productos.filter(p => p.ID !== ID);
      this.guardarCarrito();
    },
    addCantidad(ID) {
      const producto = this.productos.find(p => p.ID === ID);
      if (producto) {
        producto.cantidad = (producto.cantidad || 0) + 1;
        this.guardarCarrito();
      }
    },
    removeCantidad(ID) {
      const producto = this.productos.find(p => p.ID === ID);
      if (producto && producto.cantidad > 1) {
        producto.cantidad = producto.cantidad - 1;
        this.guardarCarrito();
      } else {
        this.removeProducto(ID);
      }
    },
    clearCarrito() {
      this.productos = [];
      this.guardarCarrito();
    }
  },
  getters: {
    totalCarrito: (state) => {
      return state.productos.reduce((total, producto) => {
        return total + (parseFloat(producto.PRECIO) || 0) * (producto.cantidad || 0);
      }, 0);
    }
  }
});
