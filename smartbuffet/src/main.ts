import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Axios from './plugins/Axios'
import Vueaxios from 'vue-axios'
import store from './store.js'

const app = createApp(App)
app.use(Vueaxios,Axios)
app.use(store)
app.use(router)
app.mount('#app')
console.log(app.config);

