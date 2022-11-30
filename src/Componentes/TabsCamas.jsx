import UseUsuarios from "../Hooks/UseUsuarios"
import { useEffect,  } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";

const TabsCamas = () => {

    const { KitnoAsig,saberAsignacion,setModalAsignar,cama,handleModalAsignar } = UseUsuarios()
    useEffect(() => {
        KitnoAsig()
    }, [])
    
const mostrarCama = cama.map((cam,index)=> {
    return(
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {cam.nombre_cama}      
                    </p>
                </td>


                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {cam.tamano_cama}  
                </p>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {cam.brotes_cama}  
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                {(cam.created_at === null) ? 'sin información' : cam.created_at.split('T')[0]}
                </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {(saberAsignacion(cam.id_cama)=='No asignado') ? <span className="bg-red-300 rounded-full p-1 px-3 text-gray-900 ">
                {saberAsignacion(cam.id_cama)}
                </span>
                :
                <span className="bg-amber-300 rounded-full p-1 px-3 text-gray-900 ">
                {saberAsignacion(cam.id_cama)}
                </span>
                }
                
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm items-center">
                    {(saberAsignacion(cam.id_cama)=='No asignado') ? 
                    <button type="button" className="hover:scale-[1.04] rounded-full items-center flex leading-4 ripple p-1 border border-blue-500 text-blue-500" 
                    onClick={()=>handleModalAsignar(cam)}
                    >
                        <AiFillRightCircle className=" text-xl items-center text-blue-700"/>
                        </button> : null}
                
                </td>
            </tr>
    )
})

// useEffect(() => {
  
// }, [])


  return (
    <div className='col-span-full mb-4 xl:mb-0'>
                  <div className='px-4 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-6'>
                    <h3 className="mb-4 text-md font-semibold">Listado de Camas Hidropónicas</h3>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                       <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Tamaño
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Cantidad de Brotes
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Fecha de creación
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Asignación
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                          </thead>
                        <tbody>
                            {(cama.length === 0) ? (
                                <tr className="bg-white border-b hover:bg-gray-50 w-full">
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        Usuario sin Camas Hidroponicas Registradas      
                                        </p>
                                    </td>
                                </tr>
                            ): mostrarCama}
                            
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
                </div>
  )
}

export default TabsCamas