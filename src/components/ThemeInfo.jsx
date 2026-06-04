import useTheme from '../hooks/useTheme'
import './ThemeInfo.css'

export default function ThemeInfo() {
  const { theme, isDark, isLight, isOcean, isSunset, availableThemes } = useTheme()

  const themeDescriptions = {
    light: 'Clean and bright interface with blue accents - Perfect for daytime viewing',
    dark: 'Dark interface with cyan accents - Easy on the eyes in low-light conditions',
    ocean: 'Deep ocean blues with cyan highlights - Cool and immersive theme',
    sunset: 'Warm oranges and coral tones - Relaxing warm color palette',
  }

  return (
    <div className="theme-info">
      <h3>Current Theme Information</h3>
      <div className="theme-details">
        <div className="detail-row">
          <strong>Active Theme:</strong> <span className="theme-badge">{theme.toUpperCase()}</span>
        </div>
        <div className="detail-row">
          <strong>Description:</strong> <span className="description-text">{themeDescriptions[theme]}</span>
        </div>
        <div className="theme-status-grid">
          <div className="status-item">
            <strong>Light Mode:</strong>
            <span className={`status-value ${isLight ? 'active' : ''}`}>
              {isLight ? '✅ Active' : '❌ Inactive'}
            </span>
          </div>
          <div className="status-item">
            <strong>Dark Mode:</strong>
            <span className={`status-value ${isDark ? 'active' : ''}`}>
              {isDark ? '✅ Active' : '❌ Inactive'}
            </span>
          </div>
          <div className="status-item">
            <strong>Ocean Mode:</strong>
            <span className={`status-value ${isOcean ? 'active' : ''}`}>
              {isOcean ? '✅ Active' : '❌ Inactive'}
            </span>
          </div>
          <div className="status-item">
            <strong>Sunset Mode:</strong>
            <span className={`status-value ${isSunset ? 'active' : ''}`}>
              {isSunset ? '✅ Active' : '❌ Inactive'}
            </span>
          </div>
        </div>
        <div className="detail-row">
          <strong>Available Themes:</strong> 
          <span className="themes-list">{availableThemes.map(t => t.toUpperCase()).join(', ')}</span>
        </div>
      </div>
    </div>
  )
}
