import React from "react";
import ReactDOM from "react-dom/client";

// Importation Redux
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./App.jsx";
import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Le composant Provider rend le store Redux disponible pour tous les composants enfant qui sont enveloppés dedans. */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
