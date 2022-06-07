import React from 'react'
import { useLocalStorage } from 'react-use'

import { darkTheme } from '~/theme'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
  themeClass: string
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [persistedTheme, setPersistedTheme] = useLocalStorage<
    ThemeContextProps['theme']
  >('miinto-theme', 'light')

  const [theme, setTheme] = React.useState<Theme>(persistedTheme ?? 'light')

  const toggleTheme = React.useCallback(
    () => setTheme(persistedTheme === 'light' ? 'dark' : 'light'),
    [persistedTheme]
  )

  React.useEffect(() => setPersistedTheme(theme), [setPersistedTheme, theme])

  const value = React.useMemo<ThemeContextProps>(
    () => ({
      theme,
      toggleTheme,
      themeClass: theme === 'dark' ? darkTheme.className : '',
    }),
    [theme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
