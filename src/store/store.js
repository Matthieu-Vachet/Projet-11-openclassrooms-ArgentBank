import { configureStore } from "@reduxjs/toolkit";
// Import du rootReducer qui combine tous les reducers
import rootReducer from "./reducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
// Import du stockage par défaut localStorage du navigateur
import storage from "redux-persist/lib/storage";

// Configuration de la persistance
const persistConfig = {
    key: "root", // La clé pour le reducer persistant
    storage, // Le stockage à utiliser (localStorage)
};

// Création du reducer persistant en utilisant persistReducer avec la configuration de persistance et le rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux en utilisant configureStore
const store = configureStore({
    reducer: persistedReducer, // Utiliser le reducer persistant comme reducer principal
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Désactiver le contrôle de sérialisation
        }),
    devTools: true, // Activer l'extension Redux DevTools
});

// Création du persistor en utilisant persistStore avec le store
const persistor = persistStore(store);

export { store, persistor };
