import React from 'react'
import "../assets/css/inicio.css"
import tambo from "../assets/images/tambo.webp"
import vacas from "../assets/images/vacas.webp"
import ternero from "../assets/images/ternero.webp"

export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" class="carousel slide inicio" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tambo} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={vacas} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img  src={ternero} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
