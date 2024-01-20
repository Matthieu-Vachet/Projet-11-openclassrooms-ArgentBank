import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({ 
    thunk: true,
    serializableCheck: false,
  }), // Inclure redux-thunk si nécessaire
  devTools: true, // Activer l'extension Redux DevTools
});

const persistor = persistStore(store);

export { store, persistor };


// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slice/authSlice';

// // Configuration du store avec configureStore
// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         // Activation de l'extension devtools Redux
//         devTools: true,
//     },
// });