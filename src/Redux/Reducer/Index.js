// import {combineReducers} from "redux" ;
// import { counterReducer} from "./Counter.reducer";


// export const rootReducer = combineReducers ({
//        counter:  counterReducer
// })

import { combineReducers } from 'redux'
import { counterReducer } from './Counter.reducer'

export const rootReducer = combineReducers ({
       counter: counterReducer
})