import { useState } from 'react'
import { Tab } from '@headlessui/react'
import UseUsuarios from "../Hooks/UseUsuarios";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsInvernadero() {
  
  const {usuarios} = UseUsuarios()
  const mostrarTarea = () => {
    
  }
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="col-span-full mb-4 xl:mb-0 flex space-x-1 rounded-xl bg-gray-200 p-1">
          {Object.values(usuarios).map((usuario, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-600',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-800 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-600 hover:bg-gray-300 hover:text-white'
                )
              }
            >
              {usuario.nombre_usuario}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {Object.values(usuarios).map((usuario, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                'grid grid-cols-1 pt-6 mb-6 xl:grid-cols-2 xl:gap-6'
              )}
            >
              
                <>
                <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-4 xl:mb-0'>
                  <h3 className="mb-4 text-xl font-bold">Informacion General</h3>
                  <p>{usuario.nombre_usuario}</p>
                  <p>{usuario.id_usuario}</p>
                </div>
                <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 '>
                  <h3 className="mb-4 text-xl font-bold">Cultivo</h3>
                </div>
                <div className='col-span-full mb-4 xl:mb-0'>
                <div className='px-4 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-6'>
                  <h3 className="mb-4 text-xl font-bold">Camas</h3>
                </div>
                </div>
                </>
                
                
            
            
              
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
