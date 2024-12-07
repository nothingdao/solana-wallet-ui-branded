// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { WalletConnection } from './components/WalletConnection'
import { useWallet } from '@solana/wallet-adapter-react'
import * as React from 'react'
import { ExternalLink } from 'lucide-react'
import { StyleSwitcher } from './components/StyleSwitcher'

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Branded Solana Wallet UI Demo</h1>
        <p className="text-lg">
          This is a demonstration of a customizable Solana wallet interface that you can brand
          to match your application's design. It features a clean, modern UI with theme support
          and a modular component structure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Integration Guide</h2>
        <div className="space-y-2">
          <p>To integrate these components into your existing React project, you need:</p>

          <div className="bg-base-200 p-4 rounded-lg space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Install Dependencies</h3>
              <code className="block bg-base-300 p-3 rounded">
                npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-wallets @solana/wallet-adapter-react-ui
              </code>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Wrap Your App</h3>
              <code className="block bg-base-300 p-3 rounded">
                {`<WalletContextProvider>\n  <YourApp />\n</WalletContextProvider>`}
              </code>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Use the Components</h3>
              <code className="block bg-base-300 p-3 rounded">
                {`import { WalletConnection } from './components/WalletConnection'\n\n// Then in your component:\n<WalletConnection />`}
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features Demo</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Theme switching (try the paint icon up top)</li>
          <li>Wallet connection modal with multiple wallet support</li>
          <li>Responsive wallet button with dropdown menu</li>
          <li>Protected content on the <a className="link" href="/dashboard">Dashboard page</a></li>
        </ul>
      </section>

      <section className="bg-base-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Try It Out</h2>
        <p>
          Connect your wallet and visit the <a className="link" href="/dashboard">Dashboard</a> to see the gated content demonstration.
          The dashboard page will adapt its content based on your wallet connection state.
        </p>
      </section>

      <section className="text-sm text-base-content/70">
        <p>
          View the full source code and documentation on{' '}
          <a
            href="https://github.com/nothingdao/solana-wallet-ui-branded"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </section>
    </div>
  )
}

// Enhanced AuthenticatedContent component
const AuthenticatedContent = () => {
  const { publicKey, connecting, disconnecting } = useWallet()

  if (connecting) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-200 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Connecting to Wallet...</h2>
          <p>Please approve the connection request in your wallet.</p>
        </div>
      </div>
    )
  }

  if (disconnecting) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-200 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Disconnecting...</h2>
          <p>Cleaning up your session.</p>
        </div>
      </div>
    )
  }

  if (!publicKey) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Wallet Required</h2>
          <p className="mb-4">
            This is an example of gated content that requires a connected wallet to view.
            Please connect your wallet using the button in the top right corner.
          </p>
          <p className="text-sm text-base-content/70">
            Don't have a Solana wallet?{' '}
            <a
              href="https://phantom.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Get started with Phantom <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-base-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Welcome to the Dashboard!</h2>
        <p className="mb-4">
          This is an example of gated content that's only visible to users with a connected wallet.
          Your wallet address is: <code className="bg-base-300 px-2 py-1 rounded">{publicKey.toBase58()}</code>
        </p>
        <div className="text-sm text-base-content/70">
          <p>
            In a real application, you could display user-specific data, transaction history,
            or other wallet-dependent content here.
          </p>
        </div>
      </div>
    </div>
  )
}

export const App: React.FC = () => {
  const { publicKey } = useWallet()

  return (

    <Router>
      <div className='min-h-screen bg-base-100 text-base-content'>
        <nav className='navbar bg-base-200 p-4'>
          <div className='container mx-auto'>
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

            <div className='flex-none flex items-center gap-4'>
              <StyleSwitcher />
              <WalletConnection />
            </div>
          </div>
        </nav>

        <main className='container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<AuthenticatedContent />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
