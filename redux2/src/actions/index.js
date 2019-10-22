const url = 'http://localhost:8900'

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload: output
    }
}


export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_ARTICLE',
        payload: output
    }
}
export function latestGallery(){
    const output = fetch(`${url}/galleries?_limit=2`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST_GALLERY',
        payload: output
    }
}

export function selectedNews(){
    const output = fetch(`${url}/articles?id=${id}`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload: output
    }
}

export function clearselectedNews(){

    return{
        type:'Clear_NEWS',
        payload: []
    }
}


