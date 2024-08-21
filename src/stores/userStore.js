import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    usuario: JSON.parse(localStorage.getItem('usuario')) || null,
  }),
  actions: {
    setUsuario(usuario) {
      this.usuario = usuario;
      localStorage.setItem('usuario', JSON.stringify(usuario));
    },
    clearUsuario() {
      this.usuario = null;
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
    },
    loadUsuario() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        this.setUsuario(usuario);
      }
    },
    isSocio() {
      return this.usuario && this.usuario.tipoUsuario === 'socio';
    }
  }
});