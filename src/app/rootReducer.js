import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';
import userSlice from "../slices/userSlice";

const reducers = {
  common: commonSlice,
  user: userSlice
};

export const store = configureStore({ reducer: reducers });
