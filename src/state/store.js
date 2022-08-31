import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';
import pageReducer from './page';
const persistedReducer = {
  app: appReducer,
  page: pageReducer,
}

export const store = configureStore({
  reducer: persistedReducer,
});