import useTheme from '../hooks/useTheme'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const themeEmojis = {
    light: '☀️',
    dark: '🌙',
    ocean: '🌊',
    sunset: '🌅',
  }

  const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    ocean: 'Ocean',
    sunset: 'Sunset',
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch theme (current: ${theme})`}
      title={`Current theme: ${theme}`}
    >
      <span className="toggle-icon">{themeEmojis[theme]}</span>
      <span className="toggle-label">
        {themeLabels[theme]}
      </span>
    </button>
  )
}
