import React from "react";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "../assets/css/ItemsBar.css";

export const ItemsBar = () => {
    const [navbarStyle, setNavbarStyle] = useState({
        position: 'fixed',
        width: '100vw',
        top: '13vh', // Posición inicial
        transition: 'top 0.3s ease', // Transición suave
      });
    
      const handleScroll = () => {
        if (window.scrollY > 15) {
          setNavbarStyle({
            ...navbarStyle,
            top: '5vh', // Mover a la parte superior cuando se haga scroll
          });
        } else {
          setNavbarStyle({
            ...navbarStyle,
            top: '13vh', // Volver a la posición inicial si no se ha hecho scroll
          });
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
      <nav style={navbarStyle} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid opciones">
          <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li class="nav-item">
                <NavLink to={"/Inicio"} className="nav-link" href="#">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sobre Nosotros
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to={"/acercaDeNosotros/#historia"} className="dropdown-item" href="#">Historia</NavLink></li>
                  <li><NavLink to={"/acercaDeNosotros/#misionVision"} className="dropdown-item" href="#">Mision</NavLink></li>
                  <li><NavLink to={"/acercaDeNosotros/#misionVision"} className="dropdown-item" href="#">Vision</NavLink></li>
                  <li><NavLink to={"/acercaDeNosotros/#valores"} className="dropdown-item" href="#">Valores</NavLink></li>
                  <li><NavLink to={"/acercaDeNosotros/#misionVision"} className="dropdown-item" href="#">Innovacion</NavLink></li>
                  <li><NavLink to={"/acercaDeNosotros/#misionVision"} className="dropdown-item" href="#">Calidad</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestras practicas
                  </a>
                <ul className="dropdown-menu">
                  <li><NavLink to={"/NuestrasPracticas/#bienestar"} className="dropdown-item" href="#">Bienestar animal</NavLink></li>
                  <li><NavLink to={"/NuestrasPracticas/#sostenibilidad"} className="dropdown-item" href="#">Sostenibilidad ambiental</NavLink></li>
                  <li><NavLink to={"/NuestrasPracticas/#tecnologia"} className="dropdown-item" href="#">Tecnologia avanzada</NavLink></li>
                  <li><NavLink to={"/NuestrasPracticas/#compromiso"} className="dropdown-item" href="#">Compromiso social</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Del aula al tambo
                  </a>
                <ul className="dropdown-menu">
                  <li><NavLink to={"/DelAulaAlTambo/#educacion"} className="dropdown-item" href="#">Educación y Conciencia</NavLink></li>
                  <li><NavLink to={"/DelAulaAlTambo/#experiencia"} className="dropdown-item" href="#">Experiencia Práctica</NavLink></li>
                  <li><NavLink to={"/DelAulaAlTambo/#tecnologia"} className="dropdown-item" href="#">Tecnología e Innovación</NavLink></li>
                  <li><NavLink to={"/DelAulaAlTambo/#Bienestar"} className="dropdown-item" href="#">Bienestar Animal</NavLink></li>
                  <li><NavLink to={"/DelAulaAlTambo/#sostenibilidad"} className="dropdown-item" href="#">Sostenibilidad</NavLink></li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink to={"/contacto"} className="nav-link" href="#">
                Contacto
              </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
