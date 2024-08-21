import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', 
    },
  })
app.use(createPinia());
app.use(vuetify)
app.use(router)
app.use(pinia);
app.mount('#app')

