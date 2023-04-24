import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

const initialState = {
  products: {
    data: []
  },
  currentProduct: null
};

export const getProduct = createAsyncThunk('product/getProduct', async ({ productId }) => {
  const response = await api.getProduct(productId);
  return response;
});

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const response = await api.getProducts();
  return response;
});

export const addProduct = createAsyncThunk('product/addProduct', async ({ product }) => {
  const response = await api.addProduct(product);
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products.data = [];
    },
    addProductLocally: (state, { payload }) => {
      state.products.data.push(payload);
    }
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, { payload }) => {
      state.currentProduct = payload;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products.data = payload?.data;
    }
  }
});

export const { addProductLocally, clearProducts } = productSlice.actions;
export default productSlice.reducer;
