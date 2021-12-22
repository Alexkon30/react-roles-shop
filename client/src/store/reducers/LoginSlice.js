import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from './ActionCreators'

const initialState = {
  isAuth: false,
  role: '',
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
      state.role = ''
    },
    setError(state, action) {
      state.error = action.payload
    }
  },
  extraReducers: {
    [registerUser.fulfilled.type]: (state, action) => {
      state.isLoading = false
      if (action.payload.success === false) {
        state.error = action.payload.message
      } else if (action.payload.success === true) {
        state.error = ''
        state.isAuth = true
        state.role = action.payload.role
      }
    },
    [registerUser.pending.type]: (state) => {
      state.isLoading = true
    },
    [registerUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },

    [loginUser.fulfilled.type]: (state, action) => {
      state.isLoading = false
      if (action.payload.success === false) {
        state.error = action.payload.message
      } else if (action.payload.success === true) {
        state.error = ''
        state.isAuth = true
        state.role = action.payload.role
      }
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true
    },
    [loginUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default loginSlice.reducer
