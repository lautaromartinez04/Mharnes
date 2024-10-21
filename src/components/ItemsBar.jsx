import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/css/ItemsBar.css";

export const ItemsBar = () => {
  const { hash } = useLocation();
  const collapseButtonRef = useRef(null); // Referencia al botón de colapso

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [hash]);

  const [navbarStyle, setNavbarStyle] = useState({
    position: 'fixed',
    width: '100vw',
    top: '13vh',
    transition: 'top 0.3s ease',
    zIndex: '1000',
  });

  const handleScroll = () => {
    if (window.scrollY > 15) {
      setNavbarStyle({
        ...navbarStyle,
        top: '5vh',
      });
    } else {
      setNavbarStyle({
        ...navbarStyle,
        top: '13vh',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add('show');
    e.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove('show');
    e.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  };

  const handleNavLinkClick = () => {
    if (collapseButtonRef.current && window.getComputedStyle(collapseButtonRef.current).display !== 'none') {
      collapseButtonRef.current.click(); // Simula un clic para colapsar el menú
    }
  };

  return (
    <>
      <nav style={navbarStyle} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid opciones">
          <button ref={collapseButtonRef} className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/Inicio" onClick={() => { scrollToTop(); handleNavLinkClick(); }} className="nav-link navboton">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavLink to="/SobreNosotros" onClick={scrollToTop} className="nav-link navboton">
                  Sobre Nosotros
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/SobreNosotros/#historia" onClick={handleNavLinkClick} className="dropdown-item">Historia</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#mision" onClick={handleNavLinkClick} className="dropdown-item">Misión</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#vision" onClick={handleNavLinkClick} className="dropdown-item">Visión</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#valores" onClick={handleNavLinkClick} className="dropdown-item">Valores</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#innovacion" onClick={handleNavLinkClick} className="dropdown-item">Innovación</NavLink></li>
                  <li><NavLink to="/SobreNosotros/#calidad" onClick={handleNavLinkClick} className="dropdown-item">Calidad</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavLink to="/NuestrasPracticas" onClick={scrollToTop} className="nav-link navboton">
                  Nuestras prácticas
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/NuestrasPracticas/#bienestar" onClick={handleNavLinkClick} className="dropdown-item">Bienestar animal</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#sostenibilidad" onClick={handleNavLinkClick} className="dropdown-item">Sostenibilidad ambiental</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#tecnologia" onClick={handleNavLinkClick} className="dropdown-item">Tecnología avanzada</NavLink></li>
                  <li><NavLink to="/NuestrasPracticas/#compromiso" onClick={handleNavLinkClick} className="dropdown-item">Compromiso social</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavLink to="/DelAulaAlTambo" onClick={scrollToTop} className="nav-link navboton">
                  Del aula al tambo
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/DelAulaAlTambo/#educacion" onClick={handleNavLinkClick} className="dropdown-item">Educación y Conciencia</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#experiencia" onClick={handleNavLinkClick} className="dropdown-item">Experiencia Práctica</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#tecnologia" onClick={handleNavLinkClick} className="dropdown-item">Tecnología e Innovación</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#bienestar" onClick={handleNavLinkClick} className="dropdown-item">Bienestar Animal</NavLink></li>
                  <li><NavLink to="/DelAulaAlTambo/#sostenibilidad" onClick={handleNavLinkClick} className="dropdown-item">Sostenibilidad</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
