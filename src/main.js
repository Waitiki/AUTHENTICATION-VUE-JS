import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import '@fortawesome/fontawesome-svg-core'
// import 'material icons'
const app = createApp(App)

app.use(router)

app.mount('#app')

