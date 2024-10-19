import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/css/ItemsBar.css";

export const ItemsBar = () => {
  const { hash } = useLocation(); // Hook para obtener el hash de la URL (por ejemplo, #bienestar)

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Eliminar el # y buscar el id del elemento
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Hacer scroll suave y centrar el elemento
      }
    }
  }, [hash]); // Ejecutar cada vez que cambie el hash

  const [navbarStyle, setNavbarStyle] = useState({
    position: 'fixed',
    width: '100vw',
    top: '13vh', // Posición inicial
    transition: 'top 0.3s ease', // Transición suave
    zIndex: '1000',
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
              <li className="nav-item">
                <NavLink to="/Inicio" className="nav-link">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sobre Nosotros
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/SobreNosotros/#historia" className="dropdown-item">Historia</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#mision" className="dropdown-item">Misión</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#vision" className="dropdown-item">Visión</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#valores" className="dropdown-item">Valores</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#innovacion" className="dropdown-item">Innovación</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#calidad" className="dropdown-item">Calidad</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestras prácticas
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/NuestrasPracticas/#bienestar" className="dropdown-item">Bienestar animal</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#sostenibilidad" className="dropdown-item">Sostenibilidad ambiental</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#tecnologia" className="dropdown-item">Tecnología avanzada</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#compromiso" className="dropdown-item">Compromiso social</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Del aula al tambo
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/DelAulaAlTambo/#educacion" className="dropdown-item">Educación y Conciencia</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#experiencia" className="dropdown-item">Experiencia Práctica</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#tecnologia" className="dropdown-item">Tecnología e Innovación</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#bienestar" className="dropdown-item">Bienestar Animal</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#sostenibilidad" className="dropdown-item">Sostenibilidad</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
