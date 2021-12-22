import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
  'user/fetchAllGoods',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000')
      const result = await response.json()
      return result.products
    } catch (e) {
      thunkAPI.rejectWithValue('Goods loading failure')
    }
  }
)

export const newOrder = createAsyncThunk(
  'user/newOrder',
  async (data, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (e) {
      thunkAPI.rejectWithValue('Order failure')
    }
  }
)

export const fetchOrders = createAsyncThunk(
  'admin/fetchAllOrders',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000/admin')
      const result = await response.json()
      return result.orders
    } catch (e) {
      thunkAPI.rejectWithValue('Orders loading failure')
    }
  }
)

export const changeOrderStatus = createAsyncThunk(
  'admin/changeOrderStatus',
  async (data, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...data})
      })
      const result = await response.json()
      return result.id
    } catch (e) {
      thunkAPI.rejectWithValue('Changing failure')
    }
  }
)
