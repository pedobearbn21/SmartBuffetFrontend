import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Axios from './plugins/Axios'
// import axios from 'axios'
import Vueaxios from 'vue-axios'

const app = createApp(App)
app.use(Vueaxios,Axios)
app.use(router)
app.mount('#app')
console.log(app.config);

