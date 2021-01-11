import axios from 'axios';

const BaseUrl = process.env.NEST_URL
const Axios = axios.create({
    baseURL: `http://localhost:8000`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})


export default Axios