import { useEffect, useState } from "react";
import { Tab } from '@headlessui/react'
import UseUsuarios from "../Hooks/UseUsuarios";
import TabsCultivo from "./TabsCultivo";
import TabsCamas from "./TabsCamas";
import moment from "moment";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsInvernadero() {
  const [estado, setEstado] = useState(false)
  const {    handleModalAsignar,ObtenerCamas,invernadero, ObtenerCultivos} = UseUsuarios()
  useEffect(() => {
    ObtenerCultivos()
    ObtenerCamas()
  }, [])
  return (
    <div className="w-full px-2 sm:px-0 mt-8">
      <Tab.Group>
        <Tab.List className="mb-4 xl:mb-0 flex space-x-1 rounded-xl px-3 py-4 bg-white">
          {Object.values(invernadero).map((inv, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'p-4 rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-800 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-green-700 shadow'
                    : 'text-gray-600 hover:bg-gray-300 hover:text-gray-600'
                )
              }
            >
              {inv.nombre_invernadero}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {Object.values(invernadero).map((inv, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                'grid grid-cols-1 pt-6 mb-6 xl:grid-cols-2 xl:gap-6'
              )}
            >
              
                <>
                <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl   mb-4 xl:mb-0'>
                  <h6 className="p-4 leading-normal font-medium text-md border-b-2">Información Invernadero</h6>
                  <div className='flex flex-col p-auto p-4'>
                      <span className="mb-2 leading-tight text-xs">Nombre de invernadero: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{inv.nombre_invernadero}</span></span>
                      <span className="mb-2 leading-tight text-xs">Fecha de creación: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{(inv.created_at === null) ? 'sin información' : moment(inv.created_at).format('MM-DD-YY')}</span></span>
                      <span className="mb-2 leading-tight text-xs">Ubicación: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{(inv.ubicacion_invernadero == '') ? 'Sin Información' : inv.ubicacion_invernadero}</span></span>
                      <span className="mb-2 leading-tight text-xs">Tamaño m2: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{inv.tamano_invernadero}</span></span>moment(inv.inicio_temporada).format('MM-DD-YY')
                      <span className="mb-2 leading-tight text-xs">Inicio de Temporada: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{(inv.inicio_temporada == null) ? 'Sin información' : moment(inv.inicio_temporada).format('MM-DD-YY')}</span></span>
                      <span className="mb-2 leading-tight text-xs">Termino de Temporada: <span className="text-sm font-semibold text-slate-700 sm:ml-2">{(inv.termino_temporada == null) ? 'Sin información' : moment(inv.termino_temporada).format('MM-DD-YY')}</span></span>
                  </div>
                </div>
                <TabsCultivo id={inv.id_invernadero}/>
                <TabsCamas />
                
                </>
                
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
