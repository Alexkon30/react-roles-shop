import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    orders: [],
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeStatus(state, action) {
            state.orders.forEach(order => {
                if (order.id === action.payload) {
                    order.isFinished = !order.isFinished 
                }
            })
        },
    }
})

export default adminSlice.reducer
