import ThemeToggle from './ThemeToggle'
import ThemeSelector from './ThemeSelector'
import './ThemeHeader.css'

export default function ThemeHeader() {
  return (
    <header className="theme-header">
      <div className="header-content">
        <h1>Dark/Light Theme</h1>
        <div className="header-controls">
          <ThemeToggle />
          <ThemeSelector />
        </div>
      </div>
    </header>
  )
}
