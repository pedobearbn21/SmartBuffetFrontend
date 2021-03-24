import axios from 'axios';
import Cookies from 'js-cookie'
// const BaseUrl = process.env.NEST_URL
// const Axios = axios.create({
//     baseURL: `https://buffetservice.herokuapp.com/`,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
// })
// console.log(import.meta.env.VUE_APP_PATH_CLOUDINARY, process.env);
const Axios = axios.create({
  baseURL: `http://localhost:8000/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    "Referrer-Policy": 'origin',
    // "Content-Type": "application/x-www-form-urlencoded",
    'X-CSRFToken': Cookies.get('csrftoken')

  }
})
// Axios.defaults.withCredentials = true
Axios.defaults.xsrfCookieName = 'XSRF-TOKEN'
axios.defaults.xsrfHeaderName = "X-CSRFToken";
// Axios.defaults.headers.common['X-CSRFTOKEN'] = "MbeRKuyxRGEGCt6fRN6OVD8tp6HPFsdE7ZjVKrgY9cQgAmag7p71rbjd1fkvXOpH";

// const Axios = axios.create({
//   baseURL: `localhost:8000/`,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// })


export default Axios