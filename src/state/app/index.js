import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPhone: 0,
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.currentPhone = action.payload
    },
  },
});

// Actions
export const { setPhone } = appSlice.actions;

export default appSlice.reducer;
