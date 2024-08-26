import { defineStore } from 'pinia';
import { useCarritoStore } from './carrito';

export const useUserStore = defineStore('user', {
  state: () => ({
    usuario: JSON.parse(localStorage.getItem('usuario')) || null,
    mensajeRutaProtegida: '' // Nueva propiedad para el mensaje
  }),
  actions: {
    setUsuario(usuario) {
      this.usuario = usuario;
      localStorage.setItem('usuario', JSON.stringify(usuario));
      const carritoStore = useCarritoStore();
      carritoStore.cargarCarrito();
    },
    clearUsuario() {
      this.usuario = null;
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      const carritoStore = useCarritoStore();
      carritoStore.clearCarrito(); 
    },
    setMensajeRutaProtegida(mensaje) {
      this.mensajeRutaProtegida = mensaje;
    },
    mostrarMensajeRutaProtegida() {
      if (this.mensajeRutaProtegida) {
        alert(this.mensajeRutaProtegida); // Mostrar el mensaje en una alerta
        this.mensajeRutaProtegida = ''; // Limpiar el mensaje después de mostrarlo
      }
    },
    loadUsuario() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        this.setUsuario(usuario);
      }
    },
    isSocio() {
      return this.usuario && this.usuario.tipoUsuario === 'socio';
    },
    isAuthenticated() {
      if (this.usuario === null) {
        console.error("Esta ruta está protegida. Por favor, inicie sesión para continuar.");
        alert("Esta ruta está protegida. Por favor, inicie sesión para continuar.");
        return false;
      }
      return true;
    },
    getToken() {
      return localStorage.getItem('token') || null;
    },
    renovarToken() {
      const nuevoToken = 'nuevoToken'; // Aquí iría la lógica real de renovación
      localStorage.setItem('token', nuevoToken);
    },
    handleLoadUsuarioError() {
      this.clearUsuario();
      console.error("Error al cargar el usuario. Por favor, inicie sesión de nuevo.");
      alert("Error al cargar el usuario. Por favor, inicie sesión de nuevo.");
    }
  },
});