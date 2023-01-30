import { configureStore } from '@reduxjs/toolkit';
import userReducer from './AuthSlice';

const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
