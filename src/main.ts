// Packages
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Notify, Quasar } from 'quasar'

// Assets
import './assets/main.scss'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Items
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, { plugins: { Notify } })

app.config.errorHandler = (error) => {
  const message =
    (error as { customMessage?: string }).customMessage || 'Ocorreu um erro inesperado.'

  Notify.create({ message, type: 'negative', position: 'top-right' })
}

app.mount('#app')
