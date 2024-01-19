import React from 'react'
import ReactDOM from 'react-dom/client'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers'

import App from './App.jsx'
import './style/style.scss'

// Création du store
const store = configureStore({
  reducer: rootReducer,
  // Activation de l'extension devtools Redux
  devTools: true,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Ajout du provider pour la connexion avec le store sur toute l'application */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
