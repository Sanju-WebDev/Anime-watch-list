import { combineReducers } from 'redux';
import { animeAddReducer, animeListReducer } from './anime.reducer'
import { authReducer } from './auth.reducers';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    animeList: animeListReducer, 
    animeAdd:animeAddReducer,  
    auth: authReducer, 
})

export default persistReducer(persistConfig, rootReducer) 