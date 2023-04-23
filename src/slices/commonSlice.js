import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

const initialState = {
  users: {
    data: []
  },
  products: {
    data: []
  },
  ui: {
    popup: null
  }
};

export const getProducts = createAsyncThunk('common/getProducts', async () => {
  const response = await api.getProducts();
  return response;
});

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPopup: (state, { payload }) => {
      state.ui.popup = payload;
    },
    clearPopup: (state) => {
      state.ui.popup = null;
    }
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products.data = payload.data;
    }
  }
});

export const { setPopup, clearPopup } = commonSlice.actions;
export default commonSlice.reducer;
