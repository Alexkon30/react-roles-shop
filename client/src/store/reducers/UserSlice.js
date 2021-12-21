import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {},
    products: [],
    basket: [],
    orders: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)
        },
        deleteProduct(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        resetBasket(state, ) {
            state.basket = []
        },
        setProducts(state, action) {
            state.products = action.payload
        }
    }
})

export default userSlice.reducer
