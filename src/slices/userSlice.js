import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

const initialState = {
  users: {
    data: []
  },
  isLoggedIn: false
};

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await api.getUsers();
  return response;
});

export const getLoggedIn = createAsyncThunk('user/login', async (userId) => {
  console.log('asdasd')
  const response = await api.getLoggedIn(userId);
  return response;
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users.data = payload.data;
    },
    [getLoggedIn.fulfilled]: (state) => {
      state.isLoggedIn = true;
    }
  }
});

export default userSlice.reducer;
