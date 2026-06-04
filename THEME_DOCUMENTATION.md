# Dark/Light Theme Components

## Overview
This project includes a complete dark/light theme system built with React Context API, providing a modern approach to theme management with localStorage persistence and system preference detection.

## Components Created

### 1. **ThemeContext** (`src/context/ThemeContext.jsx`)
- React Context for managing theme state
- Accessible throughout the application via the `useTheme` hook

### 2. **ThemeProvider** (`src/context/ThemeProvider.jsx`)
- Context provider component that wraps your application
- Manages theme state (light/dark)
- Persists theme preference to localStorage
- Detects system color scheme preference on first load
- Updates DOM with theme attribute and classes
- Provides smooth transitions between themes

**Features:**
- Automatic system preference detection
- localStorage persistence
- Smooth CSS transitions
- Theme change callbacks

### 3. **useTheme Hook** (`src/hooks/useTheme.js`)
- Custom React hook for accessing theme context
- Returns theme state and control functions
- Must be used within ThemeProvider

**Usage:**
```jsx
import useTheme from './hooks/useTheme'

function MyComponent() {
  const { theme, toggleTheme, setThemeMode, isDark, isLight } = useTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
```

### 4. **ThemeToggle** (`src/components/ThemeToggle.jsx`)
- Button component for quick theme switching
- Displays icon and label based on current theme
- Supports keyboard accessibility

**Props:**
- None (uses useTheme hook internally)

**Features:**
- Visual feedback with emoji icons (☀️ / 🌙)
- Responsive label display
- Smooth transitions

### 5. **ThemeSelector** (`src/components/ThemeSelector.jsx`)
- Dropdown select component for theme selection
- Allows users to choose light or dark mode explicitly

**Props:**
- None (uses useTheme hook internally)

**Features:**
- Clean dropdown interface
- Easy theme switching
- Accessible form control

### 6. **ThemeInfo** (`src/components/ThemeInfo.jsx`)
- Display component showing current theme information
- Shows current mode, dark mode status, and light mode status

**Props:**
- None (uses useTheme hook internally)

**Features:**
- Visual theme status display
- Theme badges
- Easy at-a-glance theme information

### 7. **ThemeHeader** (`src/components/ThemeHeader.jsx`)
- Header component combining ThemeToggle and ThemeSelector
- Provides a cohesive theme control interface
- Sticky positioning for easy access

**Props:**
- None (uses child components internally)

**Features:**
- Responsive layout
- Combined controls
- Sticky positioning

## CSS Variables System

### Light Theme Variables (Default)
```css
--bg-primary: #ffffff
--bg-secondary: #f5f5f5
--bg-tertiary: #e8e8e8
--text-primary: #1a1a1a
--text-secondary: #555555
--text-tertiary: #999999
--border-color: #dddddd
--accent-color: #007bff
--accent-color-light: rgba(0, 123, 255, 0.1)
--shadow-sm/md/lg: [various shadow values]
```

### Dark Theme Variables
```css
--bg-primary: #1a1a1a
--bg-secondary: #2d2d2d
--bg-tertiary: #3a3a3a
--text-primary: #ffffff
--text-secondary: #c0c0c0
--text-tertiary: #808080
--border-color: #444444
--accent-color: #4a9eff
--accent-color-light: rgba(74, 158, 255, 0.2)
--shadow-sm/md/lg: [various shadow values]
```

## File Structure
```
src/
├── components/
│   ├── ThemeToggle.jsx
│   ├── ThemeToggle.css
│   ├── ThemeSelector.jsx
│   ├── ThemeSelector.css
│   ├── ThemeInfo.jsx
│   ├── ThemeInfo.css
│   ├── ThemeHeader.jsx
│   └── ThemeHeader.css
├── context/
│   ├── ThemeContext.jsx
│   └── ThemeProvider.jsx
├── hooks/
│   └── useTheme.js
├── styles/
│   └── theme.css
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── ...
```

## Setup Instructions

### 1. Wrap Your Application with ThemeProvider
In `src/main.jsx`:
```jsx
import ThemeProvider from './context/ThemeProvider'
import './styles/theme.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
```

### 2. Use Theme Components
In your components:
```jsx
import ThemeToggle from './components/ThemeToggle'
import ThemeSelector from './components/ThemeSelector'
import useTheme from './hooks/useTheme'

function App() {
  const { isDark, theme } = useTheme()

  return (
    <>
      <ThemeToggle />
      <ThemeSelector />
      {/* Use CSS variables for styling */}
      <div style={{ backgroundColor: 'var(--bg-primary)' }}>
        Content
      </div>
    </>
  )
}
```

## Usage Examples

### Basic Theme Toggle
```jsx
import ThemeToggle from './components/ThemeToggle'

export default function Header() {
  return <ThemeToggle />
}
```

### Using Theme in Custom Components
```jsx
import useTheme from './hooks/useTheme'

export default function Card() {
  const { isDark } = useTheme()

  return (
    <div className={`card ${isDark ? 'card-dark' : 'card-light'}`}>
      {isDark ? 'Dark Mode' : 'Light Mode'}
    </div>
  )
}
```

### Styling with CSS Variables
```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: background-color 0.3s ease;
}

.my-component:hover {
  background-color: var(--bg-secondary);
}
```

## Features

✨ **Multiple Theme Modes** - Light and Dark themes with easy extension
💾 **Persistence** - Theme preference saved in localStorage
🎨 **CSS Variables** - Easy customization with CSS custom properties
⚡ **Smooth Transitions** - Beautiful animations when switching themes
🎯 **System Preference** - Respects OS dark/light mode preference
📱 **Responsive** - Mobile-friendly components
🪝 **Custom Hook** - Easy access to theme context
🧩 **Reusable Components** - Mix and match theme components

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- All modern browsers supporting CSS variables

## Customization

### Changing Color Scheme
Edit `src/styles/theme.css` and modify the CSS variables:

```css
:root,
[data-theme="light"],
.light {
  --accent-color: #your-custom-color;
  /* ... other variables */
}
```

### Adding New Theme Modes
1. Add new variables to `theme.css`
2. Update `ThemeProvider.jsx` to accept the new mode
3. Update `ThemeSelector.jsx` options

### Styling Components
All components use CSS variables, so they automatically adapt to theme changes. Customize by:
- Modifying CSS files directly
- Overriding CSS variables in parent components
- Adding new component classes

## Tips & Best Practices

1. **Always wrap your app with ThemeProvider** at the root level
2. **Import theme.css before index.css** to ensure proper CSS variable precedence
3. **Use CSS variables** instead of hardcoded colors for theme consistency
4. **Test both themes** during development to catch styling issues early
5. **Use semantic variable names** when extending the theme system
6. **Leverage `isDark` and `isLight`** for conditional rendering if needed

## Troubleshooting

### Theme not persisting?
- Check that localStorage is enabled in browser
- Verify ThemeProvider is at the root level

### Colors not changing?
- Ensure `theme.css` is imported before `index.css`
- Check that `data-theme` attribute is set on document element
- Verify CSS variables are used in your styles

### Components not updating?
- Make sure you're using `useTheme` hook correctly
- Verify components are wrapped by ThemeProvider
- Check browser console for errors

## License
Feel free to use and modify these components for your projects!
