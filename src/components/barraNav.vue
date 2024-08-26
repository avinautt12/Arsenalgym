<template>
  <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center; position: fixed; width: 100%; z-index: 1000;">
    <v-container fluid>
      <v-row class="but">
        <v-col cols="auto" class="d-flex align-center">
          <v-img 
            src="/arsenal.png"
            alt="Logo"
            contain
            class="imagen-izquierda"
            @click="scrollToTop"
          ></v-img>
        </v-col>

        <v-col class="d-none d-md-flex" cols="auto">
          <v-row no-gutters>
            <v-col cols="auto">
              <router-link to="/">
                <v-btn class="boton-bar">INICIO</v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <router-link to="/Producto">
                <v-btn class="boton-bar">PRODUCTOS</v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <router-link to="/conocenos">
                <v-btn class="boton-bar">CONOCENOS</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="auto" class="d-flex justify-end align-center">
          <v-row no-gutters>
            <v-col cols="auto">
              <router-link v-if="userStore.usuario" :to="userStore.isSocio() ? '/miinfo' : '/perfilusuario'">
                <v-btn icon class="boton-bar">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </router-link>
              <router-link v-else :to="{ path: '/login' }">
                <v-btn icon class="boton-bar">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto" class="cart-container d-flex align-center">
              <v-btn icon class="boton-bar" :class="{ 'cart-updated': isCartUpdated }" @click="handleCarritoClick">
                <v-icon>mdi-cart</v-icon>
                <v-badge
                  v-if="carritoCount > 0"
                  color="red"
                  :content="carritoCount"
                  overlap
                  class="cart-badge"
                ></v-badge>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-col class="d-flex d-md-none" cols="auto">
      <v-btn icon @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-col>

    <v-menu
      v-model="menuVisible"
      offset-y
      absolute
      top
      transition="slide-x-reverse-transition"
      class="menu-desplegable"
      :style="menuStyles"
    >
      <v-list>
        <v-list-item link :to="{ path: '/' }">
          <v-list-item-title>INICIO</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/Producto' }">
          <v-list-item-title>PRODUCTOS</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/Conocenos' }">
          <v-list-item-title>CONOCENOS</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const carritoStore = useCarritoStore();
const router = useRouter();

const menuVisible = ref(false);

const carritoCount = computed(() => {
  return carritoStore.productos.reduce((total, producto) => total + producto.cantidad, 0);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const handleCarritoClick = () => {
  router.push({ path: '/carrito' });
};

// Cargar el usuario al iniciar la app
userStore.loadUsuario();
</script>

<style scoped>
.but {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.imagen-izquierda {
  width: 60px; 
  height: auto; 
  cursor: pointer; 
}

.boton-bar {
  color: white;
  font-size: 16px;
  min-width: 100px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
}

.v-menu__content {
  min-width: 200px;
}

.menu-desplegable {
  position: fixed;
  right: 0;
  top: 70px;
}

.d-md-flex {
  display: flex;
}

.d-none {
  display: none;
}

@media (max-width: 960px) {
  .d-md-flex {
    display: none;
  }
  .d-none {
    display: flex;
  }
  .imagen-izquierda {
    width: 50px; 
  }
  .boton-bar {
    font-size: 14px;
    min-width: 80px;
  }
}

.cart-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: red;
  color: white;
}

.cart-updated {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
</style>