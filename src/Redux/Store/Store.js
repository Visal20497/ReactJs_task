
import {combineReducers, createStore} from 'redux'
import TextReducer from '../Reducer/TextReducer'

 export let store=createStore(combineReducers({TextReducer}))