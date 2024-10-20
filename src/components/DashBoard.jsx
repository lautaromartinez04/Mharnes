import React from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/css/dashboard.css'

export const DashBoard = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
      };

  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 my-5 mx-3 text-center">
        <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Energia Generada</h5>
                <p class="card-text valor">1000<span class="unidad">kWh</span></p>
                <p class="card-text">Anualmente a través de nuestros paneles solares.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100" >
            <div class="card-body">
                <h5 class="card-title">Arboles Plantados</h5>
                <p class="card-text valor">56<span class="unidad"></span></p>
                <p class="card-text">Contribuyendo a la reforestación y mejora del medio ambiente.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Visitantes</h5>
                <p class="card-text valor">198<span class="unidad"></span></p>
                <p class="card-text">desde el lanzamiento del programa <NavLink to="/DelAulaAlTambo" onClick={scrollToTop}>Del Aula Al Tambo</NavLink></p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Produccion</h5>
                <p class="card-text valor">40M<span class="unidad">lts</span></p>
                <p class="card-text">De leche de la mas alta calidad.</p>
            </div>
            </div>
        </div>
    </div>
  )
}
