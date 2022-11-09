import {RiArrowDownSLine, RiSearchLine} from "react-icons/ri";
import { Link } from "react-router-dom";
const Invernaderos = () => {
  return (
    <>
        <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Invernaderos</h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col items-center">
               
                    
                    <div className="relative">
                        <select
                            className="rounded-r border sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-green-800">
                            <option>Todos</option>
                            <option>Verificado</option>
                            <option>No Verificado</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <RiArrowDownSLine />
                        </div>
                    </div>
                
                <div className="relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                    </span>
                    <input placeholder="Search"
                        className="appearance-none rounded-xl sm:rounded-l-none border border-gray-400 block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" />
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
                            <tr className="">
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Ubicación
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Tamaño
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Fecha
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Cliente
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            
                                            <div className="">
                                                <p className="text-gray-900">
                                                Invernadero Chamaco
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            
                                            <div className="">
                                                <p className="text-gray-900">
                                                Chiu Chiu
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            
                                            <div className="">
                                                <p className="text-gray-900">
                                                Tamaño
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            
                                            <div className="">
                                                <p className="text-gray-900">
                                                10-10-2022
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-semibold">
                                    <span className="bg-orange-200 rounded-full p-1 px-3 text-green-900 ">
                                        <Link>Cliente</Link>
                                    </span>
                                    </td>
                                    
                                </tr>
                          
                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Mostrando 1 a 4 de 50 Usuarios
                        </span>
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
    </>
  )
}
export default Invernaderos
