import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from "../../Http";

function Headers() {

const auth = useSelector(state => state.auth)
const animeList = useSelector(state => state.animeList)
const animeAdd = useSelector(state => state.animeAdd)

useEffect(() => {
    axiosInstance.interceptors.request.use( req => {    
        if(auth?.token?.token) req.headers.authorization = `Bearer ${auth?.token?.token}`
        return req
    })
}, [auth, animeAdd, animeList])

    return (
        <></>
    )
    
}

export default Headers
