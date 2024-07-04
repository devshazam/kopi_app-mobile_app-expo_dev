import {$authHost, $host} from "./index";


// Done
export const fetchJson = async () => {
    const {data} = await $host.post('/api/jsona/fetch')
    return data
}


export const updateJson = async () => {
    const {data} = await $host.post('/api/jsona/update')
    return data
}


export const updatePriceByExel = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/update-price-by-exel', params)
    return data
}

export const fetchPriceOfProduce = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/fetch-price-of-produce', params)
    return data
}

export const createObjectItem = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/create', params)
    return data
}

export const fetchEditorObjects = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/get-editor-objects', params)
    return data
}
export const fetchEditorsObjects = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/get-editor-objects-editor', params)
    return data
}
export const createObjectItem2 = async ( params:any ) => {
    const {data} = await $host.post('/api/jsona/get-editor-objects2', params)
    return data
}



