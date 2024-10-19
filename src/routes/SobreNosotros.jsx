import React from 'react'

export const SobreNosotros = () => {
  return (
    <>
    <h1 className=' my-3 text-center'>Sobre Nosotros</h1>
      <div id="historia" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Historia</h2>
        <p>
          Grupo Mharnes es más que un tambo; es el legado de generaciones dedicadas a la producción láctea con pasión y compromiso. 
          Fundado por Néstor Giraudo en los "Establecimientos Rotsen", nuestro camino comenzó en la región de Villa María, Córdoba. 
          A través de los años, hemos enfrentado desafíos, incluyendo la pérdida de Néstor en 2016. Sin embargo, sus valores de 
          esfuerzo y optimismo siguen vivos en cada rincón de nuestro establecimiento, guiando las decisiones de sus hijos, Pablo 
          y Gabriel, quienes asumieron el reto de continuar su legado en 2018. Así nació Grupo Mharnes, un tambo modelo que honra 
          la tradición familiar mientras se adapta a las demandas de un mundo en constante cambio.
        </p>
      </div>

      <div id="mision" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Nuestra Misión</h2>
        <p>
          En Grupo Mharnes, nuestra misión es producir leche de la más alta calidad, priorizando el bienestar de nuestros animales y 
          el respeto por el medio ambiente. Nos esforzamos por ser un referente en la industria láctea, implementando prácticas 
          sostenibles e innovadoras que aseguran el confort de nuestras vacas y la calidad de nuestros productos. Estamos comprometidos 
          con la excelencia en cada etapa del proceso, desde la siembra de la semilla hasta la entrega de nuestros productos a los consumidores.
        </p>
      </div>

      <div id="vision" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Nuestra Visión</h2>
        <p>
          Aspiramos a ser líderes en la producción láctea responsable, reconocidos por nuestro enfoque en la sostenibilidad y el bienestar animal. 
          En Grupo Mharnes, creemos que un tambo exitoso es aquel que no solo genera productos de calidad, sino que también contribuye al 
          cuidado del entorno y al bienestar de las futuras generaciones. Queremos ser un ejemplo para otros en la industria, demostrando 
          que es posible combinar tradición y tecnología para un futuro más sostenible.
        </p>
      </div>

      <div id="valores" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Nuestros Valores</h2>
        <ul>
          <li>
            <h5>Compromiso Familiar</h5>
            <p>
              Cada día honramos el legado de Néstor Giraudo, guiados por los valores de esfuerzo y dedicación que nos ha transmitido.
            </p>
          </li>
          <li>
            <h5>Sostenibilidad</h5>
            <p>
              Creemos en un enfoque responsable hacia la producción láctea, donde el bienestar animal y la protección del medio ambiente son fundamentales.
            </p>
          </li>
        </ul>
      </div>

      <div id="innovacion" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Innovación</h2>
        <p>
          Incorporamos tecnología avanzada en nuestras prácticas diarias, buscando siempre mejorar la calidad de nuestros productos y el confort de nuestras vacas.
        </p>
      </div>

      <div id="calidad" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Calidad</h2>
        <p>
        Nos comprometemos a ofrecer 	productos lácteos de la más alta calidad, reflejando la dedicación 	y el cuidado que ponemos en cada etapa de producción.
        </p>
      </div>

      <div className=' my-3 text-center' >
        <button className=' btn btn-primary text-center mx-auto'>
          <a className= "text-decoration-none text-light" href="https://www.youtube.com/@duyamis6907" target='_blank'>Conoce mas de nosotros aqui</a>
        </button>
      </div>
    </>
    
  )
}
