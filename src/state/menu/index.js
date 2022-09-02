import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuDialog: false,
  tgLoginDialog: false,
  createWalletDialog: false,
};

export const menuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setMenuDialog: (state, action) => {
      state.isMenuDialog = action.payload
    },
    setTgLoginDialog: (state, action) => {
      state.tgLoginDialog = action.payload
    },
    setCreateWalletDialog: (state, action) => {
      state.createWalletDialog = action.payload
    },
  },
});

// Actions
export const { setMenuDialog, setTgLoginDialog, setCreateWalletDialog } = menuSlice.actions;

export default menuSlice.reducer;
