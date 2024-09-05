import axios from 'axios'

const axiosRoute = axios.create({baseURL:'http://localhost:4000'})


axiosRoute.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})




export default axiosRoute 