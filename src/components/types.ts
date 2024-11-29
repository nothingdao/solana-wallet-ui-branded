// src/components/types.ts
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

export interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export interface WalletContextProps {
  children: React.ReactNode
  network?: WalletAdapterNetwork
  endpoint?: string
}
