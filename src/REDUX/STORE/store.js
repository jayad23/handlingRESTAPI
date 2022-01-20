import { createStore, combineReducers } from 'redux'
import { firstReducer } from '../REDUCERS/firstReducer'

const reducers = combineReducers({
    firstReducer: firstReducer
})
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)