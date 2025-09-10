import { useState } from 'react'
import './App.css'
import DarkModeToggle from './darkmode_toggle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <div className="header-text">
              <h1>Welcome to React!</h1>
              <p>A simple React application built with Vite</p>
            </div>
            <DarkModeToggle />
          </div>
        </header>
        
        <main className="main">
          <div className="counter-section">
            <h2>Interactive Counter</h2>
            <div className="counter">
              <button 
                className="counter-btn" 
                onClick={() => setCount((count) => count - 1)}
              >
                -
              </button>
              <span className="counter-value">{count}</span>
              <button 
                className="counter-btn" 
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
            </div>
            <p className="counter-text">
              Click the buttons to increment or decrement the counter
            </p>
          </div>
          
          <div className="info-section">
            <h2>Getting Started</h2>
            <ul className="info-list">
              <li>Edit <code>src/App.jsx</code> to modify this page</li>
              <li>Save your changes to see them instantly</li>
              <li>Build amazing things with React!</li>
            </ul>
          </div>
        </main>
        
        <footer className="footer">
          <p>Built with ❤️ using React + Vite</p>
        </footer>
      </div>
    </div>
  )
}

export default App
