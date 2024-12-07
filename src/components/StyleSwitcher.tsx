// src/components/StyleSwitcher.tsx
import React from 'react'
import { Palette } from 'lucide-react'
import { useStyle } from './StyleContext'

const styles = [
  { name: 'Cyberpunk', value: 'cyberpunk' as const, description: 'Futuristic and bold' },
  { name: 'Minimal', value: 'minimal' as const, description: 'Clean and simple' },
  { name: 'Playful', value: 'playful' as const, description: 'Fun and friendly' },
  { name: 'Brutalist', value: 'brutalist' as const, description: 'Raw and edgy' }
]

export const StyleSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { currentStyle, setStyle } = useStyle()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-sm btn-ghost"
        aria-label="Change style"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-2 bg-base-200 rounded-lg shadow-xl z-50">
          <div className="space-y-1">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => {
                  setStyle(style.value)
                  setIsOpen(false)
                }}
                className={`w-full p-2 text-left hover:bg-base-300 rounded-lg transition-colors flex flex-col
                  ${currentStyle === style.value ? 'bg-base-300' : ''}`}
              >
                <span className="font-medium">{style.name}</span>
                <span className="text-sm opacity-70">{style.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
