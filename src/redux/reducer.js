const initialState = {
    user: {}
}
console.log(initialState.user)
const GET_USER = 'GET_USER'

export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_USER:
            return {...state, user: payload}
        default:
            return state
    }
}