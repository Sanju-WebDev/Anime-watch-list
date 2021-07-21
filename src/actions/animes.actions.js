import axios from "axios";
import axiosInstance from "../Http";
import { ANIME_ADD_FAIL, ANIME_ADD_REQUEST, ANIME_ADD_SUCCESS, ANIME_DELETE_SUCCESS, ANIME_LIST_FAIL, ANIME_LIST_REQUEST, ANIME_LIST_SUCCESS, ANIME_UPDATE_SUCCESS } from "../types/anime.types";

export const fetchAnimeList = () => 
    async dispatch => {
        dispatch(listRequest())
        try {
            await axiosInstance.get('/animes')
                .then(res => {
                    console.log(res)
                    dispatch(listSuccess(res.data))
                })
        } catch (error) {
            console.log(error)
            dispatch(listFail(error.message ? error.message : error))
        }
    }

const listRequest = () => {
    return {
        type: ANIME_LIST_REQUEST, 
    }
}

const listSuccess = (data) => {
    return {
        type: ANIME_LIST_SUCCESS, 
        payload: data,
    }
}

const listFail = (data) => {
    return {
        type: ANIME_LIST_FAIL, 
        payload: data, 
    }
}

export const addAnimeList = (newAnime) => {
    const { title, mangaka, plot, year, episodes, seasons, rating, studios, genre, selectedFile } = newAnime
    const episodesArray = episodes.split(",").map(each => Number(each))
    const studiosArray = studios.split(',')
    const genreArray = genre.split(',')
    return async dispatch => {
        dispatch(addRequest())
        try {
            await axiosInstance.post('/animes', {
                title: title, 
                mangaka: mangaka, 
                plot: plot, 
                year: parseFloat(year), 
                episodes: episodesArray, 
                seasons: parseFloat(seasons), 
                rating: parseFloat(rating), 
                studios: studiosArray, 
                genre: genreArray, 
                image: selectedFile, 
            })
                .then(res => {
                    console.log(res)
                    dispatch(addSuccess(res.data))
                })
        } catch (error) {
            console.log(error.message)
            dispatch(addFail(error.message ? error.message : error))
        }
        // dispatch(fetchAnimeList())
    }
}

export const updateAnimeList = (id, newAnime) => {
    const { title, mangaka, plot, year, episodes, seasons, rating, studios, genre, selectedFile } = newAnime
    const episodesArray = Array.isArray(episodes) ? episodes : episodes.split(',').map(each => Number(each))
    const studiosArray = Array.isArray(studios) ? studios : studios.split(',')
    const genreArray = Array.isArray(genre) ? genre : genre.split(',')
    return async dispatch => {
        // dispatch(addRequest())
        try {
            await axiosInstance.post(`/animes/${id}`, {
                title: title, 
                mangaka: mangaka, 
                plot: plot, 
                year: parseFloat(year), 
                episodes: episodesArray, 
                seasons: parseFloat(seasons), 
                rating: parseFloat(rating), 
                studios: studiosArray, 
                genre: genreArray, 
                image: selectedFile, 
            })
                .then(res => {
                    console.log(res)
                    dispatch(updateSuccess(res.data))
                })
        } catch (error) {
            console.log(error)
            // dispatch(addFail(error.message ? error.message : error))
        }
        // dispatch(fetchAnimeList())
    }
}

export const deleteAnime = (id) => {
    
    return async dispatch => {
        // dispatch(addRequest())
        try {
            await axiosInstance.delete(`/animes/${id}`)
                .then(res => {
                    console.log(res)
                    dispatch(deleteSuccess(id))
                })
        } catch (error) {
            console.log(error.message)
            // dispatch(addFail(error.message ? error.message : error))
        }
        // dispatch(fetchAnimeList())
    }
}

const addRequest = () => {
    return {
        type: ANIME_ADD_REQUEST, 
    }
}

const updateSuccess = (newAnime) => {
    return {
        type: ANIME_UPDATE_SUCCESS, 
        payload: newAnime,
    }
}

const addSuccess = (data) => {
    return {
        type: ANIME_ADD_SUCCESS, 
        payload: data,
    }
}

const addFail = (data) => {
    return {
        type: ANIME_ADD_FAIL, 
        payload: data, 
    }
}

const deleteSuccess = (id) => {
    return {
        type: ANIME_DELETE_SUCCESS, 
        payload: id, 
    }
}

