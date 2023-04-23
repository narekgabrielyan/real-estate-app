import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

const initialState = {
  users: {
    data: []
  },
  currentUser: null
};

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await api.getUsers();
  return response;
});

export const logOutUser = createAsyncThunk('user/logOutUser', async () => {
  const response = await api.logOutUser();
  return response;
});

export const logInUser = createAsyncThunk('user/logInUser', async ({ user }) => {
  const response = await api.logInUser(user.id);
  return { data: response, user };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    }
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users.data = payload.data;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload.user;
    },
    [logOutUser.fulfilled]: (state) => {
      state.currentUser = null;
    }
  }
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;
