// import { createStore, applyMiddleware } from 'redux'
// import { rootReducer } from './Reducer/Index'
// import thunk from "redux-thunk";


// export const ConfigurStore = () => {
//     let store = createStore(rootReducer, applyMiddleware(thunk))

//     return store
// }

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/Index'

export const ConfigurStore = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk))

    return store
}