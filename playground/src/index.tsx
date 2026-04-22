import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'atropos/css'
import { App } from './App.tsx'
import './style.css'

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
