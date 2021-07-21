import { ANIME_ADD_FAIL, ANIME_ADD_REQUEST, ANIME_ADD_SUCCESS, ANIME_DELETE_SUCCESS, ANIME_LIST_FAIL, ANIME_LIST_REQUEST, ANIME_LIST_SUCCESS, ANIME_UPDATE_SUCCESS } from "../types/anime.types";

 const initialAnimeList = {
    loading: false,
    animeList: [], 
    error: null,  
 }

 export const animeListReducer = (state= initialAnimeList, action) => {
     switch(action.type) {
        case ANIME_LIST_REQUEST: 
            return {
                ...state, 
                loading: true, 
                error: null, 
            }
        case ANIME_LIST_SUCCESS: 
            return {
                ...state, 
                animeList: action.payload, 
                loading: false, 
                error: null, 
            }
        case ANIME_UPDATE_SUCCESS: 
            const updatedList = state.animeList.map(each => each._id === action.payload._id ? action.payload : each)
            return {
                ...state, 
                animeList: updatedList, 
                loading: false, 
                error: null
            } 
        case ANIME_DELETE_SUCCESS: 
            const newList = state.animeList.filter(each => each._id != action.payload)
            return {
                ...state, 
                animeList: newList, 
                loading: false, 
                error: null, 
            }
        case ANIME_LIST_FAIL: 
            return {
                ...state, 
                error: action.payload, 
                loading: false
            }
        default:
            return state
     }
 }

const initialAnimeAdd = {
    loading: false, 
    animeAdd: [], 
    error: null
}

export const animeAddReducer = (state= initialAnimeAdd, action) => {
    switch(action.type) {
       case ANIME_ADD_REQUEST: 
           return {
               ...state, 
               loading: true, 
               error: null, 
           }
       case ANIME_ADD_SUCCESS: 
           return {
               ...state, 
               animeAdd: action.payload, 
               loading: false, 
               error: null, 
           }
       case ANIME_ADD_FAIL: 
           return {
               ...state, 
               error: action.payload, 
               loading: false,                
           }
       default:
           return state
    }
}