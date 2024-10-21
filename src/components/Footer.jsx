import React from 'react';
import '../assets/css/footer.css';
import logo from '../assets/images/isologotipo blanco.png';

export const Footer = () => {
  // Función para subir al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <>
    <div className="footer text-center">
      <footer className="py-3 my-4">
        <button className="btn btn-primary botonsubir" onClick={scrollToTop}>
          Subir
        </button>
        <div className="imgfooter">
          <img className="img-fluid imglogofooter" src={logo} alt="Logo" />
        </div>
        <p className="text-center texto">
          &copy; 2024 Grupo MHARNES Todos los Derechos Reservados
        </p>
      </footer>
    </div>
    </>
  );
};
