import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import '../public/style/normalize.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
