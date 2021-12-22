import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
  'user/fetchAllGoods',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000')
      return await response.json()
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
      return await response.json()
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
      return await response.json()
    } catch (e) {
      thunkAPI.rejectWithValue('Changing failure')
    }
  }
)

export const registerUser = createAsyncThunk(
  'login/registerUser',
  async (data, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000/login/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...data})
      })
      return await response.json()
    } catch (e) {
      thunkAPI.rejectWithValue('Register failure')
    }
  }
)

export const loginUser = createAsyncThunk(
  'login/registerUser',
  async (data, thunkAPI) => {
    try {
      const response = await fetch('http://192.168.1.5:5000/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...data})
      })
      return await response.json()
    } catch (e) {
      thunkAPI.rejectWithValue('Login failure')
    }
  }
)
