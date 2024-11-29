// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { WalletContextProvider } from './components/WalletContext'
import { ThemeProvider } from './components/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <WalletContextProvider>
        <App />
      </WalletContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
