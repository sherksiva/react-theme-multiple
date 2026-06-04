import { useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'

const AVAILABLE_THEMES = ['light', 'dark', 'ocean', 'sunset']

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && AVAILABLE_THEMES.includes(savedTheme)) return savedTheme

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  // Update localStorage and DOM when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Remove all theme classes
    AVAILABLE_THEMES.forEach(t => root.classList.remove(t))
    // Add current theme class
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const currentIndex = AVAILABLE_THEMES.indexOf(prev)
      const nextIndex = (currentIndex + 1) % AVAILABLE_THEMES.length
      return AVAILABLE_THEMES[nextIndex]
    })
  }

  const setThemeMode = (newTheme) => {
    if (AVAILABLE_THEMES.includes(newTheme)) {
      setTheme(newTheme)
    }
  }

  const value = {
    theme,
    toggleTheme,
    setThemeMode,
    availableThemes: AVAILABLE_THEMES,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isOcean: theme === 'ocean',
    isSunset: theme === 'sunset',
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
