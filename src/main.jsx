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
        {/* Connexion du store a l'App */}
        <Provider store={store}>
            {/* Ajout du persistor a l'App */}
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
