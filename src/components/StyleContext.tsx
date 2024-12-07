// src/components/StyleContext.tsx
import React, { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react'

type StyleTheme = 'cyberpunk' | 'minimal' | 'playful' | 'brutalist'

interface StyleContextType {
  currentStyle: StyleTheme
  setStyle: (style: StyleTheme) => void
}

const StyleContext = createContext<StyleContextType | undefined>(undefined)

export const useStyle = () => {
  const context = useContext(StyleContext)
  if (context === undefined) {
    throw new Error('useStyle must be used within a StyleProvider')
  }
  return context
}

interface StyleProviderProps {
  children: ReactNode
}

export const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState<StyleTheme>(() => {
    const saved = localStorage.getItem('wallet-ui-style')
    return (saved as StyleTheme) || 'brutalist'
  })

  const setStyle = (style: StyleTheme) => {
    setCurrentStyle(style)
    localStorage.setItem('wallet-ui-style', style)
    document.documentElement.setAttribute('data-theme', style)
  }

  // Set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentStyle)
  }, [])

  return (
    <StyleContext.Provider value={{ currentStyle, setStyle }}>
      {children}
    </StyleContext.Provider>
  )
}
