import React, { Fragment, useEffect, useState } from 'react'
import './navbar.scss'
import { Popover, Transition } from '@headlessui/react'
import $ from 'jquery'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const whyLycokat = [
  {
    name: 'Monitoreo',
    description: 'Análisis en tiempo real de todo el tráfico de la red de tu aplicación.',
    href: '#features',
    icon: ChartBarIcon,
  },
  {
    name: 'Reactividad',
    description: 'Interfaces simples, adaptables e inteligentes.',
    href: '#features',
    icon: CursorClickIcon,
  },
  {
    name: 'Seguridad',
    description: "Toda tu información está cifrada de punto a punto.",
    href: '#features', icon: ShieldCheckIcon
  },
  {
    name: 'Integridad',
    description: "Conectate a nuestras aplicaciones con software de terceros que ya te encuentres utilizando.",
    href: '#features',
    icon: ViewGridIcon,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if ($('.App').scrollTop() >= 200) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    $('.App').scroll(changeNavbarColor);
    return () => {
      $('.App').off('scroll', changeNavbarColor)
    }
  }, []);

    const openForm = () => {
      $('.contact-layout').css('display', 'flex');
      $('.contact-layout').css('animation', 'showForm 1000ms forwards');
    }
  return (
    <Popover className={colorChange ? 'nav nav-active' : 'nav'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-100">
        <div className="flex justify-between items-center py-1 md:justify-start md:space-x-10 nav-content">
          <div className="flex justify-start lg:w-0 lg:flex-1 logo-mask">
            <a href="#home" className="flex items-center focus:outline-none">
              <div className="logo"></div>
              <span className="brand-name animated-underline logo-font mx-0">LYCOKAT</span>
              <span className="sr-only">Workflow</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-end focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6 switch-menu" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
            <a href="#about" className="text-base font-medium animated-underline nav-uplink">
              Acerca de
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      'group inline-flex items-center text-base font-medium text-white focus:outline-none animated-underline nav-uplink'
                    )}
                  >
                    <span>¿Por qué Lycokat?</span>
                    <ChevronDownIcon
                      className={classNames(
                        'ml-2 h-5 w-5 group-hover:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 nav-popover-panel">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 px-1 py-3 sm:gap-8 sm:p-8">
                          {whyLycokat.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start animated-underline"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 flex" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
                                <p className="mt-1 text-sm text-white">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="#story" className="text-base font-medium animated-underline nav-uplink">
              Trayectoria
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 no-underline open-contact-form"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden nav-responsive-content">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="pt-3 pb-6 px-2">
              <div className="flex items-center justify-between">
                <div className="logo">
                </div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 mr-3 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar</span>
                    <XIcon className="h-6 w-6 switch-menu" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-3 nav-head px-4 py-3">
                <nav className="grid gap-y-8">
                  {whyLycokat.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="pb-3 px-5 space-y-6 nav-footer">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#about" className="text-base font-medium text-white text-center rounded-md py-2">
                  Acerca de
                </a>

                <a href="#story" className="text-base font-medium text-white text-center rounded-md py-2">
                  Trayectoria
                </a>
              </div>
              <div>
                <button
                  className="w-full flex items-center justify-center px-4 py-2 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={ openForm }
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}