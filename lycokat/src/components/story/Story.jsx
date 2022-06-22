import React from 'react'
import './story.scss'
import Fade from 'react-reveal/Fade';

const projects = [
  {
    date: '30 de Noviembre de 2021',
    name: 'Meiyo',
    description: 'El analista de sistemas Tobias Tamashiro, dejó en claro su superioridad a la hora de desarrollar sistemas que satisfagan al cliente cuando Undergroud, la empresa proveedora de movilidad como un servicio, lanzó al mercado Meiyo, la cual sorprendió a todas las personas que buscaban una forma cómoda y rápida de viajar.'
  },
  {
    date: '1 de Diciembre de 2021',
    name: 'Jildam',
    description: 'Jorge Peñaranda, programador fullstack y Francisco Trujillo, especializado en dirección de proyectos y desarrollo front-end, dejaron anodadados junto con Lavanda Team a múltiples empresas multinacionales con el gestor de contraseñas "Jildam", mostrando éste una velocidad nunca antes vista y funciones de uso empresarial y sincronización entre dispositivos que eran simplemente sobresalientes.'
  },
  {
    date: '15 de Febrero de 2022',
    name: 'Papope Sports',
    description: 'Sebastián Díaz, el prestigioso director de marketing y diseñador gráfico, logró que el gestor de turnos de centros deportivos, Papope Sports, arrase a la competencia gracias a la popularidad que éste logró. Mientras que Eitan Mohorade, programador back-end, y Federico Delgado, administrador de baes de datos, mostraron un manejo sobresaliente de lenguajes de programación a nivel servidor y alcanzaron una optimización sobresaliente del código.'
  }
]

const Story = () => {
  return (
    <div className='section1 story px-4' id='story'>
      <Fade bottom>
        <div className="timeline manrope">
          <ul className='mb-0'>
            {projects.map((project) => (
              <li>
                <span>{project.date}</span>
                <div className='timeline-content'>
                  <h3>{project.name}</h3>
                  <p>
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='story-intro flex-column'>
          <div className='flex-column'>
            <h2>Nuestra trayectoria laboral</h2>
            <p>Lycokat cuenta con personal altamente calificado y experimentado en el mercado IT, habiendo participado de exitosos proyectos que hoy en día están en boca de todos.</p>
          </div>
          <div className='story-vector'></div>
        </div>
      </Fade>
    </div>
  )
}

export default Story