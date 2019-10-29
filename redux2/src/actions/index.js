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

export function selectedNews(id){
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


export function handleLikes(array,id){
    console.log(array,id)
    const output = fetch(`${url}/articles/${id}`,{
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(response => response.json())

    return{
        type:'HANDLE_LIKES',
        payload: output
    }
}


export function PostData(title,body,category){
    console.log(title,body,category)
    var random = Math.floor(Math.random()*1000);
    let data = {
        id:random ,
        title:title,
        body: body,
        category: category,
        img: "7.jpg",
        date: "21/21/1944",
        author: "Meredith Cash",
        views: 237,
        likes: [
        12,
        9
      ]
    }
    fetch(`${URL}/articles/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((response) => response.json())

    return{
        type:'POST_FORM',
        payload:''
    }

}
