import axios  from "axios";
import { TiDelete, TiEye, TiChevronRight } from "react-icons/ti";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Componentes/header";
import { Sidebar } from "../Componentes/Sidebar";


export const Usuarios = () => {


    const [data, setData] = useState([])
    const token = document.cookie.split(';').find((row) => row.startsWith('token='))?.split('=')[1];

    useEffect(() => {
        axios.get('https://www.tuinvernadero.xyz/api/usuarios',{
            headers: {
                'Authorization': token
            }
        }).then(res => {
            console.log("Lista de Usuarios::::::",res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    },[])
    const usuarios = data.map((usuario,index) => {
        return(
            <tr key={index}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {usuario.nombre}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {usuario.apellido}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {usuario.rut}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span className="bg-lime-600 text-white rounded">{usuario.id_rol}</span>
                </td>
            
                <td className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Link> <TiEye className="text-2xl items-center text-sky-700"/> </Link>
                <Link> <TiDelete className="text-2xl text-red-700"/> </Link>
                
                </td>
              </tr>
        )
    })
        
    
    return (
         <>
            
        <div className="bg-[#e2e2e2]">
            
                <Sidebar /> 
            <main className="lg:pl-80 p-8 h-screen">
                <Header /> 
                <div className="container pt-20">
        <nav class="inline-flex mb-10" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-1">
                <li class="inline-flex items-center">
                    <Link to={'/'} class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-40">
                Principal
                    </Link>
                    <TiChevronRight className="item-center mt-1 ml-1"/>
                </li>
                <li aria-current="m-0">
                <div class="items-center">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-4500">Usuarios</span>
                </div>
                </li>
            </ol>
        </nav>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Usuarios
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Agregar Nuevo Usuario
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-gray-200 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nombre
                </th>
                <th className="px-6 bg-gray-200 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Apellidos
                </th>
                <th className="px-6 bg-gray-200 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Rut
                </th>
                <th className="px-6 bg-gray-200 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Rol
                </th>
                <th className="px-6 bg-gray-200 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios}
            </tbody>
          </table>
        </div>
      </div>

        </div>
                
            </main>   
        </div>   
        
         </>
        
    )
}