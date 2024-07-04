import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";
import { setItem } from "@/utils/AsyncStorage";

export const registration = async (email:any, password:any, name:any, phone:any) => {
    const {data} = await $host.post('/api/user/registration', {email, password, name, phone})
    // localStorage.setItem('token', data.token)
    await setItem('token', data.token);

    return jwtDecode<any>(data.token)
}

export const login = async (email:any, password:any) => {
    const {data} = await $host.post('/api/user/login', {email, password})
    await setItem('token', data.token);
    // localStorage.setItem('token', data.token)
    return jwtDecode<any>(data.token)
}

export const check = async () => {
        const {data} = await $authHost.get('/api/user/auth')
        // localStorage.setItem('token', data.token)
    await setItem('token', data.token);

        return jwtDecode<any>(data.token)
}

export const changeCredencials = async (email:any, phone:any) => {
    const {data} = await $authHost.post('/api/user/change', {email, phone})
    // localStorage.setItem('token', data.token)
    await setItem('token', data.token);

    return jwtDecode<any>(data.token)
}
