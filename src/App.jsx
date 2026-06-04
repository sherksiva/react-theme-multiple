import { useState } from 'react'
import ThemeHeader from './components/ThemeHeader'
import ThemeInfo from './components/ThemeInfo'
import useTheme from './hooks/useTheme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { theme } = useTheme()

  const themeEmojis = {
    light: '☀️',
    dark: '🌙',
    ocean: '🌊',
    sunset: '🌅',
  }

  return (
    <>
      <ThemeHeader />
      
      <main className="app-container">
        <section id="center">
          <div className="welcome-section">
            <h2>Welcome to Multi-Theme Demo</h2>
            <p>This application demonstrates a complete multi-theme implementation using React Context API with 4 unique theme modes.</p>
            <p className="theme-info-text">
              Current theme: <strong>{theme.toUpperCase()}</strong> 
              {' '}{themeEmojis[theme]}
            </p>
          </div>

          <div className="demo-section">
            <h3>Demo Counter</h3>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            <p className="demo-description">Click the button above to test the counter functionality.</p>
          </div>

          <ThemeInfo />

          <div className="features-section">
            <h3>Features</h3>
            <ul className="features-list">
              <li>✨ 4 Beautiful theme modes (Light, Dark, Ocean, Sunset)</li>
              <li>💾 Theme preference saved in localStorage</li>
              <li>🎨 CSS variables for easy customization</li>
              <li>⚡ Smooth transitions between themes</li>
              <li>🎯 System preference detection</li>
              <li>📱 Fully responsive design</li>
              <li>🪝 Custom useTheme hook for easy access</li>
              <li>🧩 Reusable theme components</li>
            </ul>
          </div>

          <div className="themes-showcase">
            <h3>Available Themes</h3>
            <div className="themes-grid">
              <div className="theme-item light-preview">
                <div className="theme-preview"></div>
                <h4>Light ☀️</h4>
                <p>Clean and bright with blue accents</p>
              </div>
              <div className="theme-item dark-preview">
                <div className="theme-preview"></div>
                <h4>Dark 🌙</h4>
                <p>Dark with cyan accents</p>
              </div>
              <div className="theme-item ocean-preview">
                <div className="theme-preview"></div>
                <h4>Ocean 🌊</h4>
                <p>Deep ocean blues with cyan highlights</p>
              </div>
              <div className="theme-item sunset-preview">
                <div className="theme-preview"></div>
                <h4>Sunset 🌅</h4>
                <p>Warm oranges and coral tones</p>
              </div>
            </div>
          </div>

          <div className="components-section">
            <h3>Theme Components Available</h3>
            <div className="components-grid">
              <div className="component-card">
                <h4>ThemeToggle</h4>
                <p>Button to cycle through all available themes with icon and label.</p>
              </div>
              <div className="component-card">
                <h4>ThemeSelector</h4>
                <p>Dropdown select component to choose between all available theme modes.</p>
              </div>
              <div className="component-card">
                <h4>ThemeInfo</h4>
                <p>Display current theme status and related information.</p>
              </div>
              <div className="component-card">
                <h4>ThemeHeader</h4>
                <p>Header component combining toggle and selector with title.</p>
              </div>
              <div className="component-card">
                <h4>useTheme Hook</h4>
                <p>Custom hook to access theme context from any component.</p>
              </div>
              <div className="component-card">
                <h4>ThemeProvider</h4>
                <p>Context provider component that manages theme state globally.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
