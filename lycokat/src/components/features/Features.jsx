import React from 'react'
import './features.scss'
import Fade from 'react-reveal/Fade';
import { ViewGridIcon, ChartBarIcon, ShieldCheckIcon, CursorClickIcon, ArrowLeftIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Monitoreo paralelo',
    description:
      'Todos los datos que atraviesen tu aplicación son cuidadosamente registrados y analizados, permitiendo obtener estadísticas del tráfico de red con un margen de error inferior al 0.02%.',
    icon: ChartBarIcon,
    fadeLeft: true
  },
  {
    name: 'Aplicaciones dinámicas',
    description:
      'Nuestros desarrollados e ingenieros de software se toman el riguroso trabajo de diseñar software del más alto rango, contando con una optimización excepcional e interfaces anatómicas ante cualquier situación.',
    icon: CursorClickIcon,
    fadeLeft: false
  },
  {
    name: 'Barreras de seguridad impenetrables',
    description:
      'Lo que más puede despertar la incentidumbre del usuario a la hora de manipular un software es la seguridad del mismo. Es por eso que día a día nuestro equipo de seguridad informática se dedica completamente al desarrollo de sistemas de protección infalibles, por lo que puedes tener la certeza de que toda tu información está cifrada de punto punto.',
    icon: ShieldCheckIcon,
    fadeLeft: true
  },
  {
    name: 'Integración y adaptabilidad',
    description:
      'Basta de aplicaciones toscas y cerradas. Gracias a nuestros convenios con reconocidas empresas internacionales y a nuestro equipo de experimentados desarrolladores, todos los productos de Lycokat proveen útiles herramientas, tales como migración de información desde otras aplicaciones o conectividad con software de terceros.',
    icon: ViewGridIcon,
    fadeLeft: false
  },
]

export default function Example() {
  return (
    <div className="py-12 section2" id='features'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade bottom>
          <div className="lg:text-center manrope">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">¿Por qué Lycokat?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tu éxito está en nuestra creatividad
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nuestras aplicaciones cumplen con los estándares más demandados del mercado, haciendolas adaptables, ligeras y sumamente eficientes.
            </p>
          </div>
        </Fade>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              feature.fadeLeft ? (
                <Fade left>
                  <div key={feature.name} className='relative'>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                </Fade>
              )
                :
                (
                  <Fade right>
                    <div key={feature.name} className='relative'>
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                    </div>
                  </Fade>
                )
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}