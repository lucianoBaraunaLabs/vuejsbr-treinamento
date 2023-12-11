import { createApp } from 'vue'
import Playground from './views/Playground/index.vue'
import App from './App.vue'

import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import 'animate.css'
import { setup } from './utils/bootstrap'

setup({
  onProduction: () => {
    createApp(App).mount('#app')
    console.log('onProduction')
  },
  onDevelopment: () => {
    createApp(Playground).mount('#app')
    console.log('onDevelopment')
  }
})
