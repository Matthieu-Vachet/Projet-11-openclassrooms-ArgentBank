import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

// Configuration du store avec configureStore
export const store = configureStore({
    reducer: {
        auth: authReducer,
        // Activation de l'extension devtools Redux
        devTools: true,
    },
});