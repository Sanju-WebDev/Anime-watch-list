import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../../reducers/root.reducer';

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default store
