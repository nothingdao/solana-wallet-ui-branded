// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { WalletContextProvider } from './components/WalletContext'
import { StyleProvider } from './components/StyleContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider>
      <WalletContextProvider>
        <App />
      </WalletContextProvider>
    </StyleProvider>
  </React.StrictMode>
)
