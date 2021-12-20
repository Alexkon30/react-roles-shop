import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    order: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.order.push(action.payload)
        },
        deleteProduct(state, action) {
            state.order = state.order.filter(item => item.id !== action.payload)
        },
        resetBasket(state, ) {
            state.order = []
        },
        setProducts(state, action) {
            state.products = action.payload
        }
    }
})

export default userSlice.reducer
