import React from "react";
import ReactDOM from "react-dom/client";

// Importation Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

import App from "./App.jsx";
import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Ajout du provider pour la connexion avec le store sur toute l'application */}
        <Provider store={store}>
            {/* Ajout du persistor pour le chargement des données du store */}
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
