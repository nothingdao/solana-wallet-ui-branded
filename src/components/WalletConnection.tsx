// src/components/WalletConnection.tsx
import * as React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { ChevronDown, Wallet, LogOut, Settings, History } from 'lucide-react'
import { PublicKey } from '@solana/web3.js'
import { WalletModal } from './WalletModal'

export const WalletConnection: React.FC = () => {
  const { publicKey, connected, disconnect } = useWallet()
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState<boolean>(false)
  const dropdownRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const truncatePublicKey = (key: PublicKey | null): string => {
    if (!key) return ''
    const base58 = key.toBase58()
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {connected ? (
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <Wallet className="w-4 h-4" />
            {truncatePublicKey(publicKey)}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-base-200 shadow-xl z-50">
              <ul className="py-2">
                <li>
                  <button
                    onClick={() => {
                      console.log('Transaction History clicked')
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-base-300 flex items-center gap-2"
                  >
                    <History className="w-4 h-4" />
                    Transactions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      console.log('Settings clicked')
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-base-300 flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                </li>
                <li className="border-t border-base-300">
                  <button
                    onClick={() => {
                      disconnect()
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-error hover:bg-base-300 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Disconnect
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <button
          onClick={() => setIsWalletModalOpen(true)}
          className="btn btn-sm btn-outline flex items-center gap-2"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </button>
      )}

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  )
}
