import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';

const reducers = {
  common: commonSlice
};

export const store = configureStore({ reducer: reducers });
