import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './style/style.scss'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers'

const store = configureStore({
  reducer: rootReducer,
  // Active le devtools Redux
  devTools: true,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
