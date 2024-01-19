import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slice/authSlice';

// Configuration du store avec configureStore
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});