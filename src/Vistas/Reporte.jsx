import { AiTwotoneHome, AiOutlineCaretRight } from "react-icons/ai";
import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import BarProductividad from "../Componentes/Chart/BarProductividad";
import EjemploChart from "../Componentes/Chart/EjemploChart";
import  Productividad  from "../Componentes/Chart/Productividad";
import UseUsuarios from "../Hooks/UseUsuarios";

 const Reporte = () => {

    const { ObtenerSensorAmbiente,sensores,ObtenerSensores } = UseUsuarios();

    useEffect(() => {
        ObtenerSensores()
        ObtenerSensorAmbiente()
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
                            <span className="text-sm font-medium text-gray-600 md:ml-2">Reporte</span>
                        </div>
                        </li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2 py-10">
                   
                    <div className=" min-w-0  bg-white w-full mb-6 shadow-lg rounded-lg">
                        <div className="px-4 py-5">
                            
                                <h1 className="text-3xl font-semibold mt-4 mb-6">Sensores</h1>
                                <EjemploChart/>
                            
                        </div>
                       
                        

                    </div>
                    <div className=" min-w-0  bg-white w-full mb-6 shadow-lg rounded-lg">
                        <div className="px-4 py-5">
                            
                                <h1 className="text-3xl font-semibold mt-4 mb-6">Productividad</h1>
                                <BarProductividad />
                            
                        </div>
                       
                        

                    </div>

                </div>
        </div>
    </div>
        
            
            </>
  )
}

export default Reporte