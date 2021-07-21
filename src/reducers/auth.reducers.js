import { AUTH_FAIL, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from './../types/auth.types'

const initialState = {
    loading: false, 
    user: [], 
    token: null, 
    error: null, 
}
export const authReducer = (state= initialState, action ) => {
    switch (action.type) {
        case AUTH_LOADING: 
        return {
            ...state, 
            loading: true, 
        }
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,  
                user: action.payloadUser, 
                token: action.payloadToken
            }            
        case AUTH_FAIL: 
            return {
                ...state, 
                loading: false, 
                error: action.payload, 
            } 
        case LOGOUT: 
            return {
                ...state, 
                user: [], 
                token: null, 
            }
        default:
            return state;
    }
}