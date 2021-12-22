import {createSlice} from '@reduxjs/toolkit'
import { fetchGoods, newOrder } from './ActionCreators'

const initialState = {
    products: [],
    basket: [],
    error: '',
    isLoading: false
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
    },
    extraReducers: {
      [fetchGoods.fulfilled.type]: (state, action) => {
        state.isLoading = false;

        if (action.payload.success === true) {
          state.products = action.payload.products
        } else if (action.payload.success === false) {
          state.error = action.payload.message;
        }
      },
      [fetchGoods.pending.type]: (state) => {
        state.isLoading = true
      },
      [fetchGoods.rejected.type]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      },

      [newOrder.fulfilled.type]: (state, action) => {
          state.isLoading = false

          if (action.payload.success === true) {
            state.error = ''
            state.basket = []
          } else if (action.payload.success === false) {
            state.error = action.payload.message
          }
      },
      [newOrder.pending.type]: (state) => {
          state.isLoading = true
      },
      [newOrder.rejected.type]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
      }
    }
})

export default userSlice.reducer
