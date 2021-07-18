import { combineReducers } from 'redux';
import { animeAddReducer, animeListReducer } from './anime.reducer'

const rootReducer = combineReducers({
    animeList: animeListReducer, 
    animeAdd:animeAddReducer,  
})

export default rootReducer