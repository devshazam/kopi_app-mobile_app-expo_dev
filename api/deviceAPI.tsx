import {$authHost, $host} from "./index";


export const createDevice = async (device:any) => {
    const {data} = await $authHost.post('/api/device/create-device', device)
    console.log(data)
    return data
}


export const createDeviceApp = async (device:any) => {
    const {data} = await $authHost.post('/api/device/create-device-app', device)
    console.log(data)
    return data
}

export const createRequisites = async (array:any) => {
    const {data} = await $authHost.post('/api/device/create-requisites', array)
    console.log(data)
    return data
}

export const ordersAdminList = async (array:any) => {
    const {data} = await $authHost.post('/api/device/orders-admin-list/', array)
    console.log(data)
    return data
}

export const fetchAllDevicesFromOneOrder = async (array:any) => {
    const {data} = await $authHost.post('api/device/fetch-order-item/', array)
    console.log(data)
    return data
}

export const changeDoneStatusToDone = async (array:any) => {
    const {data} = await $authHost.post('api/device/delete-item/', array)
    console.log(data)
    return data
}

export const deleteItemFromBasket = async (array:any) => {
    const {data} = await $authHost.post('api/device/delete-basket-item/', array)
    console.log(data)
    return data
}

export const fetchBasketDevices = async (array:any) => {
    const {data} = await $authHost.post('api/device/basket/', array)
    console.log(data)
    return data
}

export const paymentForCartItems = async (array:any) => {
    const {data} = await $authHost.post('api/device/pay-basket-list/', array)
    localStorage.setItem('order_id', String(data.metadata.order_id));
    return data
}

export const checkPayStatus = async (array:any) => {
    // const orderId = localStorage.getItem('order_id')
    const {data} = await $authHost.post('/api/device/getpay', array)
    return data
}


export const reciveBasketCount = async (array:any) => {
    const {data} = await $authHost.post('api/device/recive-basket-count/', array)
    return data
}


export const fetchUsersOrders = async ( array:any ) => {
    const {data} = await $authHost.post('/api/device/user-pay-goods', array)
    return data
}


export const fetchRequisites = async (array:any) => {
    const {data} = await $authHost.post('/api/device/fetch-requisites', array)
    return data
}


export const reciveOrderCount = async (array:any) => {
    const {data} = await $authHost.post('api/device/recive-order-count/', array)
    return data
}


export const fetchUserByOrderId = async (array:any) => {
    const {data} = await $authHost.post('/api/device/fetch-user-by-order-id', array)
    return data
}
