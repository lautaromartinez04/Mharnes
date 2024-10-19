import React from 'react'
import "../assets/css/NavBar.css"
import imagen from '../assets/images/Logotipo-04.png'


export const NavBar = () => {
  return (
    <div className='barra'>
        <div>
            <img className='logo' src={imagen} alt="" />
        </div>
    </div>
  )
}
