import { useState, useEffect } from 'react'
import './darkmode_toggle.css'

const DarkModeToggle = () => {
  // Initialize theme from localStorage or default to 'light'
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  // Apply theme to document root and save to localStorage
  useEffect(() => {
    const root = document.documentElement
    const theme = isDarkMode ? 'dark' : 'light'
    
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <button
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="icon">
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
      <span className="toggle-label">
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </span>
    </button>
  )
}

export default DarkModeToggle
