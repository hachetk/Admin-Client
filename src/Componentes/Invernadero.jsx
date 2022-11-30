import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {  AiTwotoneHome, AiOutlineCaretRight } from "react-icons/ai";
import UseUsuarios from "../Hooks/UseUsuarios";
import TabsInvernadero from './TabsInvernadero';
import { useEffect, useState } from "react";
import AlertaSinInvernadero from "./AlertaSinInvernadero";
import { AsignarCama } from "./AsignarCama";

const Invernadero = () => {

    
    const params = useParams();
    const { usuario, ObtenerInvernadero, obtenerUsuario} = UseUsuarios()
   

    useEffect(() => {
      ObtenerInvernadero(params.id)
      obtenerUsuario(params.id)
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
                            Usuarios
                        </Link>
                    </li>
                    <li>
                    <div className="flex items-center">
                        
                        <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                        <span className="text-sm font-medium text-gray-600 md:ml-2">Invernadero</span>
                    </div>
                    </li>
                </ol>
            </nav>
            <h1 className="text sm mt-5 font-semibold">Invernaderos del usuario  {usuario.nombre_usuario}</h1>
            <TabsInvernadero />
            </div>
        </div>
        <AsignarCama />
    </>
  )
}

export default Invernadero
