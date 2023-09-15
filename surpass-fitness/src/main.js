import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/CSS/style.css'

import vueScrollTo from 'vue-scrollto'

createApp(App).use(store).use(router).use(vueScrollTo).mount('#app')
