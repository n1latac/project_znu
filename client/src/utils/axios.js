import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3002/api'
})


//возвращаем token на каждый запрос axios(к каждому запросу добавляем хедер с нашим токеном)
instance.interceptors.request.use(config=>{
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance