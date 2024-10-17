import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBar } from './components/NavBar'
import { ItemsBar } from './components/ItemsBar'
import { Inicio } from './components/Inicio'
import "./assets/css/index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <ItemsBar/>
    <Inicio/>
  </StrictMode>,
)
