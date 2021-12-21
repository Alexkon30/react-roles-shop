import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    role: 'user',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeAuth(state, action) {
            state.isAuth = action.payload
        },
        changeRole(state, action) {
          state.role = action.payload
        },
        resetRole(state) {
          state.role = null
        }
    }
})

export default loginSlice.reducer
