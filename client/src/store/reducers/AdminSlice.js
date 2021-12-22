import { createSlice } from '@reduxjs/toolkit'
import { fetchOrders, changeOrderStatus } from './ActionCreators'

const initialState = {
    orders: [],
    isLoading: false,
    error: ''
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrders.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            if (action.payload.success === true) {
                state.error = '';
                state.orders = action.payload.orders
            } else if (action.payload.success === false) {
                state.error = action.payload.message
            }
        },
        [fetchOrders.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchOrders.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [changeOrderStatus.fulfilled.type]: (state, action) => {
            state.isLoading = false
            if (action.payload.success === true) {
                state.error = '';
                state.orders.forEach(order => {
                    if(order._id === action.payload.id) {
                        order.isFinished = !order.isFinished
                    }
                })
            } else if (action.payload.success === false) {
                state.error = action.payload.message
            }
        },
        [changeOrderStatus.pending.type]: (state) => {
            state.isLoading = true
        },
        [changeOrderStatus.rejected.type]: (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
    }
})

export default adminSlice.reducer
