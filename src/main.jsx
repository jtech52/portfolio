import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.jsx'
import logoImage from './assets/logo.jpeg'

const favicon = document.querySelector("link[rel='icon']") || document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/jpeg'
favicon.href = logoImage

if (!favicon.parentNode) {
  document.head.appendChild(favicon)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
