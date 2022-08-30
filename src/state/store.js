import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';

const persistedReducer = {
  app: appReducer,
}

export const store = configureStore({
  reducer: persistedReducer,
});