// src/components/WalletModal.tsx
import * as React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { X } from 'lucide-react'
import { WalletReadyState } from '@solana/wallet-adapter-base'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { wallets, select } = useWallet()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-200 rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Connect Wallet</h3>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-square"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.adapter.name}
              onClick={() => {
                select(wallet.adapter.name)
                onClose()
              }}
              disabled={wallet.readyState === WalletReadyState.Unsupported}
              className="wallet-btn w-full group"
            >
              <div className="flex items-center justify-between w-full p-3">
                <span className="flex items-center gap-3">
                  {wallet.adapter.icon && (
                    <img
                      src={wallet.adapter.icon}
                      alt={`${wallet.adapter.name} icon`}
                      className="w-6 h-6"
                    />
                  )}
                  <span className="font-semibold">{wallet.adapter.name}</span>
                </span>
                {wallet.readyState === WalletReadyState.Installed && (
                  <span className="badge badge-success gap-1">Installed</span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-base-content/60 text-center">
          <p>New to Solana wallets?</p>
          <a
            href="https://solana.com/ecosystem/explore?categories=wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
