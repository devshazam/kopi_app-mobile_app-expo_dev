import axios from "axios";


const $host = axios.create({
    baseURL: 'https://kopi34.ru/',
})

const $authHost = axios.create({
    baseURL: 'https://kopi34.ru/',
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}