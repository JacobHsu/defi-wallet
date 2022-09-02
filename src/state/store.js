import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';
import menuReducer from './menu';
import pageReducer from './page';

const persistedReducer = {
  app: appReducer,
  menu: menuReducer,
  page: pageReducer,
};

export const store = configureStore({
  reducer: persistedReducer,
});
