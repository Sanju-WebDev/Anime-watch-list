import axiosInstance from '../Http'
import { AUTH_FAIL, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from './../types/auth.types'
import { useHistory } from 'react-router'

export const signIn = (userCredentials, history) => {
    return async dispatch => {
        dispatch(authRequest())
        try {
            await axiosInstance.post('/users/signin', userCredentials)
                .then(res => {
                    console.log(res)
                    const data = res.data
                    localStorage.setItem('token', JSON.stringify( data.token))
                    dispatch(authSuccess(data.result, data.token))
                    history.push('/')
                })        
        } catch (error) {
            console.log(error)
            dispatch(authFail(error.message))        
        }
    }
}

export const signUp = (userCredentials, history) => {
const { firstName, lastName, password, email } = userCredentials
    return async dispatch => {
        dispatch(authRequest())
        try {
            await axiosInstance.post('/users/signup', {
                name: `${firstName} ${lastName}`, 
                password: password, 
                email: email, 
            })
                .then(res => {
                    console.log(res)
                    const data = res.data
                    localStorage.setItem('token', JSON.stringify(data.token))
                    dispatch(authSuccess(data.result, data.token))
                    history.push('/')
                })         
        } catch (error) {
            console.log(error)
            dispatch(authFail(error.message))
        }
    }
}

export const signOut = () => 
    async dispatch => {
        localStorage.clear()
        dispatch(logout())
    }




const authRequest = () => {
    return {
        type: AUTH_LOADING, 
    }
}

const authSuccess = (user, token) => {
    return {
        type: AUTH_SUCCESS, 
        payloadUser: user, 
        payloadToken: token, 
    }
}

const authFail = (error) => {
    return {
        type: AUTH_FAIL, 
        payload: error, 
    }
}

const logout = () => {
    return {
        type: LOGOUT, 
    }
}