# Solana Wallet UI Branded

A customizable Solana wallet adapter UI implementation with theming support. This repository provides a clean, modular approach to integrating Solana wallet connectivity with full control over the design.

## Overview

This repo demonstrates how to take full design control over the Solana wallet adapter by creating a custom component structure. Instead of using the default Solana wallet UI components, we implement our own styled versions while maintaining all the functionality.

Key features:

- Custom wallet connection button
- Styled wallet selection modal
- Theme support (light/dark)
- Clean component architecture
- Framework-agnostic styling approach

## Using This Repository

### Option 1: As a Boilerplate

1. Clone the repository:

```bash
git clone https://github.com/nothingdao/solana-wallet-ui-branded
cd solana-wallet-ui-branded
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Customize the styling in `tailwind.config.js` to match your brand.

### Option 2: Implementing in Your Existing Project

Follow these steps to integrate the wallet UI system into your project:

1. Install required dependencies:

```bash
npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-wallets @solana/wallet-adapter-react-ui
```

2. Create the component structure:

```
src/
  components/
    WalletContext.jsx      # Wallet provider setup
    WalletConnection.jsx   # Connection button component
    WalletModal.jsx        # Wallet selection modal
    ThemeContext.jsx       # (Optional) Theme provider
    ThemeToggle.jsx        # (Optional) Theme toggle component
```

3. Set up the wallet context:

```tsx
// src/components/WalletContext.tsx
import React, { FC, useMemo, ReactNode } from 'react'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

interface WalletContextProviderProps {
  children: ReactNode
  network?: WalletAdapterNetwork
  endpoint?: string
}

export const WalletContextProvider: FC<WalletContextProviderProps> = ({
  children,
  network = WalletAdapterNetwork.Devnet,
  endpoint = clusterApiUrl(WalletAdapterNetwork.Devnet),
}) => {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect
      >
        {children}
      </WalletProvider>
    </ConnectionProvider>
  )
}
```

4. Wrap your app with the provider:

```jsx
// src/main.tsx or App.tsx
function App() {
  return (
    <WalletContextProvider>
      <YourApp />
    </WalletContextProvider>
  )
}
```

5. Implement the connection button and modal components (see source files for full implementations)

### Styling Without Tailwind/DaisyUI

This implementation uses Tailwind CSS and DaisyUI for demonstration, but you can easily adapt it to any styling system:

1. Replace Tailwind classes with your preferred styling:

```jsx
// With Tailwind
<button className="btn btn-sm btn-primary flex items-center gap-2">

// With CSS Modules
<button className={styles.walletButton}>

// With styled-components
const WalletButton = styled.button`
  // Your styles here
`

// With plain CSS
<button className="wallet-button">
```

2. Key elements to style:

- Connection button (connected/disconnected states)
- Dropdown menu
- Modal container
- Wallet selection buttons
- Theme toggle (if using)

## Component Structure

### WalletConnection.jsx

- Main connection button
- Handles wallet connection state
- Displays connected wallet address
- Manages dropdown menu

### WalletModal.jsx

- Wallet selection modal
- Displays available wallets
- Handles wallet selection
- Shows installation status

### WalletContext.jsx

- Sets up wallet providers
- Configures available wallets
- Manages connection to Solana network

### Theme Components (Optional)

### Style Components

- StyleContext.tsx: Manages theme state and persistence
- StyleSwitcher.tsx: Switches between theme presets

## Theme Showcase

This repository includes several theme presets to demonstrate the styling flexibility of the wallet components:

1. Corporate

   - Professional design with clean lines
   - Subtle shadows and gradients
   - Business-friendly color scheme

2. Cyberpunk

   - Neon accents and glowing effects
   - Dark background with high contrast
   - Futuristic animations

3. Minimal

   - Black and white color scheme
   - Clean typography
   - No decorative elements

4. Playful

   - Soft shadows and rounded corners
   - Friendly animations
   - Vibrant colors

5. Brutalist
   - Raw HTML aesthetic
   - Monospace fonts
   - Aggressive animations

Each theme showcases different approaches to styling the:

- Wallet connection button
- Dropdown menu
- Modal backdrop
- Wallet selection buttons
- Installation badges

## Customization Points

1. Wallet Adapters:

```jsx
// WalletContext.tsx - Add/remove supported wallets
const wallets = useMemo(
  () => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    // Add more wallet adapters
  ],
  []
)
```

2. Network Configuration:

```jsx
// WalletContext.tsx - Change Solana network
const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), [])
```

3. Styling:

- Modify component classNames or styling system
- Update theme configuration
- Customize modal and button appearances

4. Behavior:

- Adjust auto-connect settings
- Modify wallet address display format
- Change modal behavior and animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this in your own projects!
