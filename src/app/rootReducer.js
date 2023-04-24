import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';
import userSlice from '../slices/userSlice';
import productSlice from '../slices/productSlice';

const reducers = {
  common: commonSlice,
  user: userSlice,
  product: productSlice
};

export const store = configureStore({ reducer: reducers });
