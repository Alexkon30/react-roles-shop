import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from './reducers/UserSlice'
import adminReducer from './reducers/AdminSlice'

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        
    })
}
