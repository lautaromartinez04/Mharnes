import React from 'react'
import { NavLink } from 'react-router-dom'

export const DelAulaAlTambo = () => {
  return (
    <>
      <h1 className=' my-3 text-center'>Del Aula Al Tambo</h1>
      <p className='mx-3 my-3'> 
      Te invitamos a ser parte de nuestro nuevo programa "Del Aula al Tambo". Durante esta experiencia única, tendrás la 
      oportunidad de sumergirte en nuestra rutina diaria y ver de primera mano como, a través del bienestar animal, 
      producimos una leche de alto valor nutricional. A lo largo del recorrido, prepárate para descubrir como la innovación 
      y la tecnología han transformado el sector làcteo.
      </p>
      <div id="educacion" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Educación y Conciencia</h2>
        <p>
          En Grupo Mharnes, creemos firmemente en la importancia de educar a las futuras generaciones sobre el motor 
          productivo más relevante del centro del país. Abrimos nuestras puertas para dar a conocer la responsabilidad, 
          transparencia y buenas prácticas que son llevadas a cabo en un "tambo modelo".
        </p>
      </div>

      <div id="experiencia" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Experiencia Práctica</h2>
        <p>
          Este programa no es solo una visita; es una participación activa. Colaborarás con referentes del establecimiento, 
          facilitando un diálogo enriquecedor. Durante el recorrido, serás testigo de los desafíos diarios que enfrenta un 
          "tambo modelo", comprendiendo cómo cada etapa del ciclo productivo de los animales es vital para su crecimiento y bienestar.
        </p>
      </div>

      <div id="tecnologia" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Tecnología e Innovación</h2>
        <p>
          ¿Te imaginas que una vaca pueda decidir cuándo quiere ser ordeñada? En Mharnes, la adopción de tecnología 
          innovadora ha sido fundamental para optimizar el uso de recursos, mejorar el confort y bienestar de nuestros animales, 
          y disminuir el impacto ambiental generado por la actividad. Durante tu visita, observarás cómo la innovación 
          está revolucionando la producción, reemplazando métodos tradicionales por soluciones más eficientes y sostenibles.
        </p>
      </div>

      <div id="bienestar" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Bienestar Animal</h2>
        <p>
          Cuidamos cada detalle para asegurar una vida sana, libre de estrés y sufrimiento para nuestras vacas, desde su alimentación 
          hasta el entorno en el que viven. La tecnología juega un papel crucial en el monitoreo continuo de su salud y bienestar. 
          Recordá que "Vacas sanas son sinónimo de leche sana". Durante el recorrido, seremos tus huéspedes, por lo que es fundamental 
          seguir las normas e indicaciones para preservar la calma y tranquilidad de nuestras vacas.
        </p>
      </div>

      <div id="sostenibilidad" className='border rounded p-3 mx-3 my-3' >
        <h2 className='text-center'>Sostenibilidad</h2>
        <p>
          En Mharnes, todos nuestros procesos productivos se ejecutan bajo los principios de la economía circular. 
          Hemos integrado prácticas sostenibles en cada etapa del ciclo productivo de la leche, minimizando al máximo el impacto ambiental. 
          Esto nos ha permitido recibir la Certificación Ambiental, otorgada por el Gobierno de la Provincia de Córdoba en 2023.
        </p>
      </div>

      <div id="sostenibilidad" className='border rounded p-3 mx-3 my-3 text-center' >
        <h5 className='text-center'>¿Estás listo para esta experiencia única?</h5>
        <p>
          ¡Conoce más y coordina tu visita a Grupo Mharnes! A continuación, completá el formulario con los datos necesarios para contactarte con nosotros.
        </p>
        <NavLink to="/contacto"  className='btn btn-primary text-center mx-auto'>
          <a className= "text-decoration-none text-light" href="">Llena el formulario de visitas</a>
        </NavLink>
      </div>
      
    </>
  )
}
