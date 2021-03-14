import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Axios from './plugins/Axios'
import Vueaxios from 'vue-axios'
import store from './store.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)


const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};
  
app.use(VueSweetalert2);




app.use(Vueaxios,Axios)
app.use(store)
app.use(router)
app.mount('#app')
console.log(app.config);

