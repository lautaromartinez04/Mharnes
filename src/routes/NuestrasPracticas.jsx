import React from 'react'

export const NuestrasPracticas = () => {
  return (
    <>
    <h1 className=' my-3 text-center'>Nuestras Practicas</h1>
      <div id="bienestar" className='NuestrasPracticas border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Bienestar Animal</h2>
        <p>
          En Grupo Mharnes, el bienestar de nuestras vacas es una prioridad. Creemos que un ambiente cómodo y 
          saludable es fundamental para la producción de leche de calidad. Nuestras prácticas incluyen:
        </p>
        <ul>
          <li>
            <h5>Instalaciones Espaciosas</h5>
            <p>
              Contamos con amplios galpones diseñados para el confort de las vacas, donde pueden moeverse libremente
              y descansar adecuadamente
            </p>
          </li>
          <li>
            <h5>Atención Veterinaria</h5>
            <p>
              Mantenemos un programa de salud animal riguroso, con controles 	veterinarios regulares para garantizar el bienestar de cada animal.
            </p>
          </li>
          <li>
            <h5>Alimentación Balanceada</h5>
            <p>
              Proporcionamos una 	dieta nutritiva y equilibrada, adaptada a las necesidades 	específicas de nuestras vacas en cada etapa de su vida.
            </p>
          </li>
        </ul>
      </div>

      <div id="sostenibilidad" className='NuestrasPracticas border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Sostenibilidad Ambiental</h2>
        <p>
          La sostenibilidad es un pilar fundamental de nuestras prácticas. En Grupo Mharnes, implementamos varias iniciativas para minimizar nuestro impacto ambiental
        </p>
        <ul>
          <li>
            <h5>Economía Circular</h5>
            <p>
              Utilizamos un enfoque de economía circular en nuestras operaciones, 	
              reciclando y reutilizando recursos siempre que sea posible.
            </p>
          </li>
          <li>
            <h5>Energía Renovable</h5>
            <p>
              Incorporamos paneles solares para reducir nuestro consumo de energía no 
              renovable y disminuir nuestra huella de carbono.
            </p>
          </li>
          <li>
            <h5>Gestión de Agua</h5>
            <p>
              Implementamos sistemas de 	recolección de agua de lluvia y prácticas de riego eficientes para 	optimizar el uso del agua en nuestros cultivos.
            </p>
          </li>
        </ul>
      </div>

      <div id="tecnologia" className='NuestrasPracticas border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Tecnología Avanzada</h2>
        <p>
          La innovación tecnológica es clave para mejorar nuestros procesos y la calidad de nuestros productos.
          Algunas de nuestras prácticas incluyen:
        </p>
        <ul>
          <li>
            <h5>Robots de Ordeñe</h5>
            <p>
            Utilizamos tecnología de ordeñe robótica que permite una mayor 	eficiencia, mejorando la calidad de la 
            leche y el bienestar de las 	vacas al reducir el estrés.
            </p>
          </li>
          <li>
            <h5>Monitoreo Digital</h5>
            <p>
              Empleamos sistemas de monitoreo digital para seguir la salud y el 	rendimiento de nuestros animales, 
              asegurando una respuesta rápida a 	cualquier necesidad.
            </p>
          </li>
          <li>
            <h5>Trazabilidad</h5>
            <p>
              Implementamos sistemas que nos 	permiten seguir el proceso de producción de la leche desde el tambo 
              hasta el consumidor, garantizando transparencia y calidad en cada etapa.
            </p>
          </li>
        </ul>
      </div>

      <div id="compromiso" className='NuestrasPracticas border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Compromiso Social</h2>
        <p>
          Entendemos que nuestras prácticas no solo impactan en nuestro tambo, 
          sino también en la comunidad. Por eso, trabajamos para contribuir positivamente:
        </p>
        <ul>
          <li>
            <h5>Educación y Conciencia:</h5>
            <p>
              Nos comprometemos a educar a las nuevas generaciones sobre la producción sostenible de alimentos, 
              abriendo nuestras puertas a instituciones educativas.
            </p>
          </li>
          <li>
            <h5>Colaboración Local</h5>
            <p>
              Trabajamos con 	proveedores y comunidades locales para fomentar un desarrollo 	sostenible que beneficie a todos.
            </p>
          </li>
        </ul>
      </div>

      <div className='p-3 mx-3 my-3'>
        <h2 className='text-center '>Conclusión</h2>
        <p>
          En Grupo Mharnes, estamos dedicados a ser un modelo de producción láctea responsable, donde el bienestar animal, 
          la sostenibilidad y la innovación tecnológica van de la mano. Creemos que nuestras prácticas no solo benefician 
          a nuestro tambo, sino que también contribuyen al bienestar de la comunidad y del medio ambiente.
        </p>
      </div>
    </>
    
  )
}
