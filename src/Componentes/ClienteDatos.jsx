import { AiTwotoneHome, AiOutlineCaretRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseUsuarios from "../Hooks/UseUsuarios";
import moment from "moment";

export const ClienteDatos = () => {

    const params = useParams();
    const { mostarInvernadero,invernadero,usuario, ObtenerInvernadero, obtenerUsuario} = UseUsuarios()

   console.log(params)
    useEffect(() => {
        mostarInvernadero(params.id)
    }, [])
  return (
    <>
     <div className="container z-10  mx-auto px-4 sm:px-8">
        <div className="py-4"> 
            <nav className="py-2 border-b-2">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to={'/dashboard'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                                <AiTwotoneHome className="mr-1 w-3 h-3.5"/>
                                Home
                            </Link>
                        </li>
                        <li className="inline-flex items-center">
                            <Link to={'/dashboard/usuarios'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                                <AiOutlineCaretRight className="mr-1 w-3 h-3.5"/>
                                Invernaderos
                            </Link>
                        </li>
                        <li>
                        <div className="flex items-center">
                            
                            <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                            <span className="text-sm font-medium text-gray-600 md:ml-2"></span>
                        </div>
                        </li>
                    </ol>
                </nav>
                
                <div className="grid grid-rows-3 grid-flow-col gap-3">
                    <div className="row-span-1 sm:row-span-3">
                        <div className="p-4 rounded-xl bg-gray-200">
                            <div className="rounded-full bg-white">
                                <img className="w-200 h-100 object-cover" src="https://i.ibb.co/TwZY9Gy/invernadero-HD-INVER.png" alt=""/>
                            </div>
                            <div className="py-16 sm:py-4">
                                <div className="py-2">
                                    <h1 className="text-3xl text-gray-900 font-bold text-center">Nombre de Invernadero</h1>
                                    <h2 className="text-xl text-black font-semibold text-center">{invernadero.nombre_invernadero}</h2>
                                </div>
                                <div className="py-2">
                                    <h1 className="text-3xl text-gray-900 font-bold text-center">Fecha de creación</h1>
                                    <h2 className="text-xl text-black font-semibold text-center">{(invernadero.created_at==null) ? 'Sin Información' :
                                    moment(invernadero.created_at).format('YYYY-MM-DD')}</h2>
                                </div>
                                <div className="py-2">
                                    <h1 className="text-3xl text-gray-900 font-bold text-center">Ubicación</h1>
                                    <h2 className="text-xl text-black font-semibold text-center">{invernadero.ubicacion_invernadero}</h2>
                                </div>
                            </div>
                        </div>
                     </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <div className="col-span-3 rounded-xl bg-gray-200">
                                    <div className=" grid grid-cols-2 gap-4 p-4 grid-flow-cols-dense border-2 rounded-xl bg-gray-200">
                                        <div className=" flex flex-col gap-4">
                                            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center">
                                                <div className="flex items-end gap-3 ">
                                                    <div>
                                                        <div className="flex flex-col gap-2 p-2">
                                                            <h1 className="text-xl text-black-500 font-bold text-center">Inicio de Temporada</h1>
                                                            <h2 className="text-center text-[40px] font-semibold">{(invernadero.inicio_temporada==null) ? 'Sin Información' :
                                    moment(invernadero.inicio_temporada).format('YYYY-MM-DD')}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center">
                                                <div className="flex items-end gap-3 ">
                                                    <div>
                                                        <div className="flex flex-col gap-2 p-2">
                                                            <h1 className="text-xl text-black-500 font-bold text-center">Término de Temporada</h1>
                                                            <h1 className="text-center  text-[40px] font-semibold">{(invernadero.termino_temporada==null) ? 'Sin Información' :
                                    moment(invernadero.termino_temporada).format('YYYY-MM-DD')}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col gap-4">
                                            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center">
                                             <div className="flex items-end gap-3 ">
                                                <div>
                                                    <div className="flex flex-col gap-2 p-2">
                                                        <h1 className="text-xl text-black-500 font-bold text-center">Tamaño</h1>
                                                        <h2 className="text-center text-[40px] font-semibold">{invernadero.tamano_invernadero}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center">
                                                <div className="flex items-end gap-3 ">
                                                    <div>
                                                        <div className="flex flex-col gap-2 p-2">
                                                            <h1 className="text-xl text-black-500 font-bold text-center">Estado</h1>
                                                            <span className="text-center text-[25px] font-semibold p-3">
                                                                {(invernadero.estado_invernadero!==1)? <h2 className="bg-red-600 px-4 rounded-xl text-white font-semibold">Inactivo</h2> 
                                                                : <h2 className="bg-green-600 px-4 rounded-xl text-white font-semibold">Activo</h2>}
                                                                
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row-span-1 sm:row-span-2 h-full">
                                    <div className=" grid rounded-xl bg-gray-200 ">
                                        <div className="google-map-code rounded-lg shadow-sm col-span-3 row-span-4 flex items-center p-4">
                                        <iframe src="https://maps.google.com/maps?q=calama&t=&z=15&ie=UTF8&iwloc=&output=embed" width="645" height="400" frameBorder="0" style={{border:0}} className='rounded-lg' allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                        </div>
                                    </div>
                                </div>
                </div>
                
                
        </div>
     </div>
    </>
  )
}
