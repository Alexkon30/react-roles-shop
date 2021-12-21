import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from './reducers/UserSlice'
import adminReducer from './reducers/AdminSlice'
import loginReducer from './reducers/LoginSlice'

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    loginReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
