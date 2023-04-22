import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

const initialState = {
  users: {
    data: []
  },
  products: {
    data: []
  }
};

export const getUsers = createAsyncThunk('common/getUsers', async () => {
  const response = await api.getUsers();
  return response;
});

export const getProducts = createAsyncThunk('common/getProducts', async () => {
  const response = await api.getProducts();
  return response;
});

const commonSlice = createSlice({
  name: 'common',
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users.data = payload.data;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products.data = payload.data;
    }
  }
});

export default commonSlice.reducer;
