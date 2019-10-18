export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state, latest:action.payload}
        case 'GET_ARTICLE':
            return {...state, article:action.payload}
        default:
            return state
    }
}