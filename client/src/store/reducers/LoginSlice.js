import {createSlice} from '@reduxjs/toolkit'
import { fetchGoods } from './ActionCreators'

const initialState = {
    isAuth: true,
    role: 'user',
    error: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setRole(state, action) {
          state.role = action.payload
        },
        resetRole(state) {
          state.role = null
        },
        setError(state, action) {
          state.error = action.payload
        }
    }
})

export default loginSlice.reducer
