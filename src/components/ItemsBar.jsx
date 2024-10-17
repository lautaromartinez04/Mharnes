import React from "react";
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
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Inicio
                  </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Innovacion y bienestar animal</a></li>
                  <li><a className="dropdown-item" href="#">Economia circular</a></li>
                  <li><a className="dropdown-item" href="#">Excelencia Láctea</a></li>
                  <li><a className="dropdown-item" href="#">Compromiso Social</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sobre Nosotros
                  </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Historia</a></li>
                  <li><a className="dropdown-item" href="#">Mision</a></li>
                  <li><a className="dropdown-item" href="#">Vision</a></li>
                  <li><a className="dropdown-item" href="#">Valores</a></li>
                  <li><a className="dropdown-item" href="#">Innovacion</a></li>
                  <li><a className="dropdown-item" href="#">Calidad</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestras practicas
                  </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Bienestar animal</a></li>
                  <li><a className="dropdown-item" href="#">Sostenibilidad ambiental</a></li>
                  <li><a className="dropdown-item" href="#">Tecnologia avanzada</a></li>
                  <li><a className="dropdown-item" href="#">Compromiso social</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Del aula al tambo
                  </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Educación y Conciencia</a></li>
                  <li><a className="dropdown-item" href="#">Experiencia Práctica</a></li>
                  <li><a className="dropdown-item" href="#">Tecnología e Innovación</a></li>
                  <li><a className="dropdown-item" href="#">Bienestar Animal</a></li>
                  <li><a className="dropdown-item" href="#">Sostenibilidad</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
