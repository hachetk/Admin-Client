import { useState } from "react";
import {RiArrowDownSLine, RiSearchLine} from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { AiTwotoneEdit, AiTwotoneHome, AiOutlineRight, AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import UseUsuarios from "../Hooks/UseUsuarios";
import RegistrarUsuario from "../Componentes/RegistrarUsuario";
import EditarUsuario from "../Componentes/EditarUsuario";
import { useEffect } from "react";
import Alertas from "../Componentes/Alertas";
import { list } from "postcss";
import AlertaSinInvernadero from "../Componentes/AlertaSinInvernadero";
import moment from "moment";

const Usuarios = () => {

    const { mostarCantidadInvernadero, handleEditarUsuario, handleModalEliminar,usuarios, showModalEliminar,eliminarUsuario,showModalN, setShowModalN, setModalSinInfo} = UseUsuarios();
    const mostarUsuarios = usuarios.map((usuario,index) => {
        return(

          <tr key={index}
          className="bg-white border-b hover:bg-gray-50">
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <div className="flex items-center">
                  
                  <div className="">
                      <p className="text-gray-900">
                      {usuario.nombre_usuario+' '+usuario.apellido_usuario}
                      </p>
                  </div>
              </div>
          </td>
          <td className="flex items-center px-5 py-8 border-gray-200 text-sm font-semibold">
            {(usuario.status_usuario == 'VERIFIED')?
                <>
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <span className="ml-1 text-green-600">Verificado</span> 
                </>
            :  <>
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <span className="ml-1 text-orange-500">No Verificado</span> 
            </>}
          </td>

          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                  {usuario.rut_usuario}
              </p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
              {(usuario.created_at === null) ? 'sin información' : moment(usuario.created_at).format('MM-DD-YY')}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                  {(usuario.rol_usuario == 1) ? 'Administrador':'Usuario'}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                  {usuario.email_usuario}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm font-semibold">
          <span className="bg-orange-300 rounded-full p-1 px-3 text-gray-900 ">
            {(mostarCantidadInvernadero(usuario.id_usuario)) ? (
                <>
                <Link to={`/dashboard/usuarios/${usuario.id_usuario}`}>{mostarCantidadInvernadero(usuario.id_usuario)}</Link>
                </>
            ): (
                <>
                <button onClick={() => setModalSinInfo(true)}>0</button>
                </>
            )}
          </span>
          </td>
          <td className="px-5 py-5  border-gray-200 text-sm flex">
          <button className="hover:scale-[1.04]" onClick={() => handleEditarUsuario(usuario)}><AiTwotoneEdit className="text-2xl items-center text-sky-700 mx-1"/></button>
          <button className="hover:scale-[1.04]" onClick={() => handleModalEliminar(usuario)}><TiDelete className="text-2xl text-red-700"/></button>
          </td>
      </tr>
        )
    })

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
                    <li>
                    <div className="flex items-center">
                        
                        <AiOutlineCaretRight className="w-3 h-4 text-gray-600"/>
                        <span className="text-sm font-medium text-gray-600 md:ml-2">Usuarios</span>
                    </div>
                    </li>
                </ol>
            </nav>
            
            <h2 className="text-xl font-medium leading-tight my-8">Listado de Clientes</h2>
           
            <div className="flex sm:flex-row flex-col items-center">
               
                <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                </div>
                <input type="text" className="bg-white border border-gray-400 text-gray-700 sm:text-sm rounded-lg placeholder-gray-400 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full pl-8 py-2 pr-6" placeholder="Buscar"></input>
                    {/* <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                    </span>
                    <input 
                        type="text"
                        placeholder="Search"
                        className="appearance-none rounded-lg sm:rounded-l-none border border-gray-400 pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" /> */}
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button className="border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2 text-center" type="submit"
                    onClick={() => setShowModalN(true)}>
                    Nuevo Usuario
                    </button>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Nombres
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Rut
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Fecha
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Correo Electrónico
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Invernaderos
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                         {mostarUsuarios}
                          
                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Alertas modal = {showModalEliminar} accion={handleModalEliminar} accion2 ={eliminarUsuario} data={'usuario'}/>     
    <RegistrarUsuario />
    <EditarUsuario />    
    <AlertaSinInvernadero />
    </>
    )
}

export default Usuarios;