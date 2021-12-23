import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducerData } from '../reducers/reducerData';


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    pokemones: reducerData
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)