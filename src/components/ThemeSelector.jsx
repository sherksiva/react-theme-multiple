import useTheme from '../hooks/useTheme'
import './ThemeSelector.css'

export default function ThemeSelector() {
  const { theme, setThemeMode } = useTheme()

  const themeOptions = [
    { value: 'light', label: 'Light ☀️', emoji: '☀️' },
    { value: 'dark', label: 'Dark 🌙', emoji: '🌙' },
    { value: 'ocean', label: 'Ocean 🌊', emoji: '🌊' },
    { value: 'sunset', label: 'Sunset 🌅', emoji: '🌅' },
  ]

  return (
    <div className="theme-selector">
      <label htmlFor="theme-select">Theme:</label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setThemeMode(e.target.value)}
        className="theme-select-input"
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
