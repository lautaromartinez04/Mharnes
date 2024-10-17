import React from "react";
import { useEffect, useState } from 'react';
import "../assets/css/ItemsBar.css";

export const ItemsBar = () => {
    const [navbarStyle, setNavbarStyle] = useState({
        position: 'fixed',
        width: '100%',
        top: '13vh', // Posición inicial
        transition: 'top 0.3s ease', // Transición suave
      });
    
      const handleScroll = () => {
        if (window.scrollY > 15) {
          setNavbarStyle({
            ...navbarStyle,
            top: '0', // Mover a la parte superior cuando se haga scroll
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
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
