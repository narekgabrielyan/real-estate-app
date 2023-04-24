import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ui: {
    popup: null
  }
};

const commonSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPopup: (state, { payload }) => {
      state.ui.popup = payload;
    },
    clearPopup: (state) => {
      state.ui.popup = null;
    }
  }
});

export const { setPopup, clearPopup } = commonSlice.actions;
export default commonSlice.reducer;
