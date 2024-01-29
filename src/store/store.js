import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// Création du store Redux en utilisant configureStore
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
    devTools: true,
});

export default store;
