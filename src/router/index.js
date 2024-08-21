import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Loginview from '@/views/loginview.vue'
import ProductosInicio from '@/views/ProductosInicioView.vue'
import InbodyView from '@/views/InbodyView.vue'
import AdminInicioView from '@/views/AdminInicioView.vue'
import RegistroView from '@/views/RegistroView.vue'
import AdminsociosView from '@/views/AdminsociosView.vue'
import AdminProductosView from '@/views/AdminProductosView.vue'
import PostcompraView from '@/views/PostcompraView.vue'
import PerfilUsuarioView from '@/views/PerfilUsuarioView.vue'
import AdminAgregarProductoView from '@/views/AdminAgregarProductoView.vue'
import AdminEditarProductoView from '@/views/AdminEditarProductoView.vue'
import PerfilSocioView from '@/views/PerfilSocioView.vue'
import PerfilSocioMembresiaView from '@/views/PerfilSocioMembresiaView.vue'
import CarritoView from '@/views/CarritoView.vue' 
import AdminEmpleadosView from '@/views/AdminEmpleadosView.vue'
import AdminRegistrarEmpleadoView from '@/views/AdminRegistrarEmpleadoView.vue'
import ClasesView from '@/views/ClasesView.vue'
import ClasesInscripcionView from '@/views/ClasesInscripcionView.vue'
import AdminClasesView from '@/views/AdminClasesView.vue'
import AdminAsistenciasView from '@/views/AdminAsistenciasView.vue'
import InfosocioView from '@/views/InfosocioView.vue'
import BicepsView from '@/views/BicepsView.vue'
import TricepView from '@/views/TricepView.vue'
import PiernaView from '@/views/PiernaView.vue'
import PechoView from '@/views/PechoView.vue'
import HombroView from '@/views/HombroView.vue'
import EspaldaView from '@/views/EspaldaView.vue'
import NovedadesView from '@/views/NovedadesView.vue'
import ConocenosView from '@/views/ConocenosView.vue'
import PagoMembresiaView from '@/views/PagoMembresiaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/adminasistencias',
      name: 'adminasistencias',
      component: AdminAsistenciasView
    },
    {
      path: '/adminclases',
      name: 'adminclases',
      component: AdminClasesView
    },
    {
      path: '/adminempleados',
      name: 'adminempleados',
      component: AdminEmpleadosView
    },
    {
      path: '/admininicio',
      name: 'admininicio',
      component: AdminInicioView
    },
    {
      path: '/adminproductos',
      name: 'adminproductos',
      component: AdminProductosView
    },
    {
      path: '/adminsocios',
      name: 'adminsocios',
      component: AdminsociosView
    },
    {
      path: '/agregarproductos',
      name: 'agregarproductos',
      component: AdminAgregarProductoView
    },
    {
      path: '/bicep',
      name: 'bicep',
      component: BicepsView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CarritoView
    },
    {
      path: '/clases',
      name: 'clases',
      component: ClasesView
    },
    {
      path: '/clasesinscripcion',
      name: 'clasesinscripcion',
      component: ClasesInscripcionView
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      component: ConocenosView
    },
    {
      path: '/editarproductos',
      name: 'editarproductos',
      component: AdminEditarProductoView
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: AdminEmpleadosView
    },
    {
      path: '/espalda',
      name: 'espalda',
      component: EspaldaView
    },
    {
      path: '/hombro',
      name: 'hombro',
      component: HombroView
    },
    {
      path: '/inbody',
      name: 'inbody',
      component: InbodyView
    },
    {
      path: '/infosocio',
      name: 'infosocio',
      component: InfosocioView
    },
    {
      path: '/login',
      name: 'login',
      component: Loginview
    },
    {
      path: '/novedades',
      name: 'novedades',
      component: NovedadesView
    },
    {
      path: '/pagomembresia',
      name: 'pagomembresia',
      component: PagoMembresiaView
    },
    {
      path: '/pecho',
      name: 'pecho',
      component: PechoView
    },
    {
      path: '/perfilsocio',
      name: 'perfilsocio',
      component: PerfilSocioView
    },
    {
      path: '/perfilmembresia',
      name: 'perfilmembresia',
      component: PerfilSocioMembresiaView
    },
    {
      path: '/perfilusuario',
      name: 'perfilusuario',
      component: PerfilUsuarioView
    },
    {
      path: '/pierna',
      name: 'pierna',
      component: PiernaView
    },
    {
      path: '/postcompra',
      name: 'postcompra',
      component: PostcompraView
    },
    {
      path: '/producto',
      name: 'producto',
      component: ProductosInicio
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/registrarempleados',
      name: 'registrarempleados',
      component: AdminRegistrarEmpleadoView
    },
    {
      path: '/tricep',
      name: 'tricep',
      component: TricepView
    }
  ]
})

export default router
