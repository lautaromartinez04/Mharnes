import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from './components/NavBar'
import { ItemsBar } from './components/ItemsBar'
import { Inicio } from './routes/Inicio'
import { AcercaDeNosotros } from './routes/AcercaDeNosotros'
import { NuestrasPracticas } from './routes/NuestrasPracticas'
import { DelAulaAlTambo } from './routes/DelAulaAlTambo'
import { Contacto } from './routes/Contacto'
import "./assets/css/index.css"

export const App = () => {
    return (
        <>
            <NavBar />
            <ItemsBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/AcercaDeNosotros" element={<AcercaDeNosotros />} />
                <Route path="/NuestrasPracticas" element={<NuestrasPracticas />} />
                <Route path="/DelAulaAlTambo" element={<DelAulaAlTambo />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>

    )
}
