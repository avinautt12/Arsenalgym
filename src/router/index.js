import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Loginview from '@/views/loginview.vue';
import ProductosInicio from '@/views/ProductosInicioView.vue';
import AdminInicioView from '@/views/AdminInicioView.vue';
import RegistroView from '@/views/RegistroView.vue';
import AdminsociosView from '@/views/AdminsociosView.vue';
import AdminCitasView from '@/views/AdminCitasView.vue';
import PostcompraView from '@/views/PostcompraView.vue';
import PerfilUsuarioView from '@/views/PerfilUsuarioView.vue';
import AdminAgregarProductoView from '@/views/AdminAgregarProductoView.vue';
import AdminEditarProductoView from '@/views/AdminEditarProductoView.vue';
import PerfilSocioView from '@/views/PerfilSocioView.vue';
import PerfilSocioMembresiaView from '@/views/PerfilSocioMembresiaView.vue';
import CarritoView from '@/views/CarritoView.vue'; 
import AdminEmpleadosView from '@/views/AdminEmpleadosView.vue';
import AdminRegistrarEmpleadoView from '@/views/AdminRegistrarEmpleadoView.vue';
import PagosView from '@/views/PagosView.vue';
import AdminProductosView from '@/views/AdminProductosView.vue';
import AdminClasesView from '@/views/AdminClasesView.vue';
import AdminAsistenciasView from '@/views/AdminAsistenciasView.vue';
import SociosMembresiaView from '@/views/SociosMembresiaView.vue';
import ClasesView from '@/views/ClasesView.vue';
import InfosocioView from '@/views/InfosocioView.vue';
import BicepsView from '@/views/BicepsView.vue';
import TricepView from '@/views/TricepView.vue';
import PiernaView from '@/views/PiernaView.vue';
import PechoView from '@/views/PechoView.vue';
import HombroView from '@/views/HombroView.vue';
import EspaldaView from '@/views/EspaldaView.vue';
import NovedadesView from '@/views/NovedadesView.vue';
import ConocenosView from '@/views/ConocenosView.vue';
import PagoMembresiaView from '@/views/PagoMembresiaView.vue';


import { useUserStore } from '@/stores/userStore';
import AdminHistorialView from '@/views/AdminHistorialView.vue';
import MisComprasView from '@/views/MisComprasView.vue';
import AdminComprasView from '@/views/AdminComprasView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      name: 'home', 
      component: HomeView
    },
    { path: '/about',
       name: 'about', 
      component: () => import('../views/AboutView.vue')
    },
    { path: '/Login',
      name: 'Login', 
      component: Loginview
    },
    { path: '/Producto', 
      name: 'Producto', 
      component: ProductosInicio
    },
    { path: '/AdminInicio', 
      name: 'AdminInicio', 
      component: AdminInicioView
    },
    { path: '/Registro', 
      name: 'Registro', 
      component: RegistroView 
    },
    { path: '/socios', 
      name: 'socios', 
      component: AdminsociosView 
    },
    { path: '/citas', 
      name: 'citas', 
      component: AdminCitasView 
    },
    { path: '/adminproductos', 
      name: 'adminproductos', 
      component: AdminProductosView 
    },
    { path: '/agregarproductos', 
      name: 'agregarproductos', 
      component: AdminAgregarProductoView 
    },
    { path: '/editarproductos', 
      name: 'editarproductos', 
      component: AdminEditarProductoView 
    },
    { path: '/empleados', 
      name: 'empleados', 
      component: AdminEmpleadosView 
    },
    { path: '/registrarempleados', 
      name: 'registrarempleados', 
      component: AdminRegistrarEmpleadoView 
    },
    { path: '/postcompra', 
      name: 'postcompra', 
      component: PostcompraView 
    },
    { path: '/perfilusuario', 
      name: 'perfilusuario', 
      component: PerfilUsuarioView, 
      meta: { requiresAuth: true } 
    },
    { path: '/perfilsocio', 
      name: 'perfilsocio', 
      component: PerfilSocioView,
      meta: { requiresAuth: true } 
    },
    { path: '/perfilmembresia', 
      name: 'perfilmembresia', 
      component: PerfilSocioMembresiaView,
      meta: { requiresAuth: true } 
    },
    { path: '/carrito', 
      name: 'carrito', 
      component: CarritoView 
    },
    { path: '/pago', 
      name: 'pago', 
      component: PagosView 
    },
    { path: '/clases', 
      name: 'clases', 
      component: ClasesView 
    },
    { path: '/adminclases', 
      name: 'adminclases', 
      component: AdminClasesView 
    },
    { path: '/asistencia', 
      name: 'asistencia', 
      component: AdminAsistenciasView 
    },
    { path: '/membresia', 
      name: 'membresia', 
      component: SociosMembresiaView 
    },
    { path: '/miinfo', 
      name: 'info', 
      component: InfosocioView, 
      meta: { requiresAuth: true } 
    },
    { path: '/bicep', 
      name: 'bicep', 
      component: BicepsView 
    },
    { path: '/tricep', 
      name: 'tricep', 
      component: TricepView 
    },
    { path: '/pierna', 
      name: 'pierna', 
      component: PiernaView 
    },
    { path: '/pecho', 
      name: 'pecho', 
      component: PechoView 
    },
    { path: '/hombro', 
      name: 'hombro', 
      component: HombroView 
    },
    { path: '/espalda', 
      name: 'espalda', 
      component: EspaldaView 
    },
    { path: '/novedades', 
      name: 'novedades', 
      component: NovedadesView 
    },
    { path: '/conocenos', 
      name: 'conocenos', 
      component: ConocenosView 
    },
    { path: '/pagomembresia', 
      name: 'pagomembresia', 
      component: PagoMembresiaView 
    },
    { path: '/historiales', 
      name: 'historiales', 
      component: AdminHistorialView
    },
    { path: '/miscompras', 
      name: 'miscompras', 
      component: MisComprasView
    },
    { path: '/admincompras', 
      name: 'admincompras', 
      component: AdminComprasView
    }
  ]
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth) {
    if (!userStore.usuario) {
      userStore.setMensajeRutaProtegida('Esta ruta está protegida. Por favor, inicia sesión para acceder.');
      userStore.mostrarMensajeRutaProtegida();
      next('/Login');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;