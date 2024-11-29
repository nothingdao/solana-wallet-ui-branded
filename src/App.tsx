// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import { WalletConnection } from './components/WalletConnection'
import { ThemeProvider } from './components/ThemeContext'
import { useWallet } from '@solana/wallet-adapter-react'
import * as React from 'react'

// Example authenticated component
const AuthenticatedContent = () => {
  const { publicKey } = useWallet()
  if (!publicKey)
    return <div>Please connect your wallet to view this content.</div>
  return <div>Welcome! Your wallet address is {publicKey.toBase58()}</div>
}

export const App: React.FC = () => {
  const { publicKey } = useWallet()

  return (
    <ThemeProvider>
      <Router>
        <div className='min-h-screen bg-base-100 text-base-content'>
          <nav className='navbar bg-base-200 p-4'>
            <div className='container mx-auto'>
              {/* Left Section: Logo and Links */}
              <div className='flex-1 flex items-center gap-4'>
                <Link
                  to='/'
                  className='flex items-center gap-2 hover:text-primary'
                >
                  Home
                </Link>
                {publicKey && (
                  <Link
                    to='/dashboard'
                    className='hover:text-primary'
                  >
                    Dashboard
                  </Link>
                )}
              </div>

              {/* Right Section: Theme Toggle and Wallet Connection */}
              <div className='flex-none flex items-center gap-4'>
                <ThemeToggle />
                <WalletConnection />
              </div>
            </div>
          </nav>

          <div className='container mx-auto p-4'>
            <Routes>
              <Route
                path='/'
                element={<div>Welcome to Solana Wallet UI Demo</div>}
              />
              <Route
                path='/dashboard'
                element={<AuthenticatedContent />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
