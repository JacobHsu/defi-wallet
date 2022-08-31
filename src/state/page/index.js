import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 0,
  status: 'idle',
};

export const pageSlice = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
});

// Actions
export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
