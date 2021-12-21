import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
  'goods/fetchAll',
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
  'goods/newOrder',
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
