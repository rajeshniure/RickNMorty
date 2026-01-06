import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FavoriteProvider } from "./context/FavoriteContext.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </StrictMode>,
)
