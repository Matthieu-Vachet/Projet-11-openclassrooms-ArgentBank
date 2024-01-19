import React from 'react'
import ReactDOM from 'react-dom/client'

// REDUX
import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App.jsx'
import './style/style.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Ajout du provider pour la connexion avec le store sur toute l'application */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
