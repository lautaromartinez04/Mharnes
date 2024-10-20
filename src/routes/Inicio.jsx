import React from "react";
import "../assets/css/inicio.css";
import tambo from "../assets/images/tambo.webp";
import vacas from "../assets/images/vacas.webp";
import ternero from "../assets/images/ternero.webp";
import { DashBoard } from "../components/DashBoard";

export const Inicio = () => {
  return (
    <>
      <div className="text-center my-5 mx-5">
        <h2 >
          Bienvenidos a Grupo Mharnes, donde la innovación, el bienestar animal
          y la sostenibilidad se unen para producir la mejor leche, con el
          compromiso de un futuro más saludable y responsable
        </h2>
      </div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide inicio"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tambo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={vacas} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ternero} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="my-5 mx-5 text-center ">
        <p>
          En Grupo Mharnes, fusionamos tecnología de vanguardia con un profundo compromiso por el bienestar animal para 
          asegurar la más alta calidad en la producción de leche. Cada gota es obtenida y procesada con esmero, reflejándose 
          en los productos lácteos de Duy Amis, llevando así la excelencia de nuestro tambo a las mesas de los consumidores. 
          Juntos, compartimos una visión sostenible y un legado familiar que supera los 30 años de tradición
        </p>
      </div>

      <DashBoard />
    </>
  );
};
