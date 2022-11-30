import { useEffect,useState } from "react";
import {  AiTwotoneEdit, AiTwotoneHome, AiOutlineCaretRight } from "react-icons/ai";
import{ TiDelete } from "react-icons/ti";
import {RiSearchLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import UseUsuarios from "../Hooks/UseUsuarios";
import { ModalNewKit } from "../Componentes/ModalNewKit";
import { EditarKitModal } from "../Componentes/EditarKitModal";
import Alertas from "../Componentes/Alertas";
import moment from "moment";
const Kit = () => {

    const { ObtenerCamas,saberInvernaderoKit,eliminarKit, showModalEliminar,handleModalKitEliminar,handleEditarKit,handleModalKit,kits } = UseUsuarios();

  const mostarKits = kits.map((kit,index) => {
    return(

      <tr key={index}
      className="items-center bg-white border-b hover:bg-gray-50">
      <td className="text-center px-5 py-5 border-b border-gray-200 text-sm">
          <div className="flex items-center text-center">
              
              <div className="text-center">
                  <p className="text-gray-900">
                  {kit.ip_kit}
                  </p>
              </div>
          </div>
      </td>
      <td className="flex items-center px-5 py-8 border-gray-200 text-sm font-semibold">
        {(kit.estado_kit == 1)?
            <>
            <div className="items-center h-2 w-2 rounded-full bg-green-600"></div>
            <span className="ml-1 text-green-600">Activo</span> 
            </>
        :  <>
        <div className="items-center h-2 w-2 rounded-full bg-red-500"></div>
        <span className="ml-1 text-red-500">No Activo</span> 
        </>}
      </td>
      <td className="items-center px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
          {(kit.created_at === null) ? 'sin información' : moment(kit.created_at).format('MM-DD-YY')}
          </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        
            {(saberInvernaderoKit(kit.id_cama))?
                <>
                <div className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr bg-orange-200 text-green-900 py-0.5 px-2 text-xs font-medium">
                    <div className=" p-0.5 mt-px">{(saberInvernaderoKit(kit.id_cama))}</div>
                </div>
                </>
            :  <>
                 <div className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-red-600 to-red-400 text-white py-0.5 px-2 text-xs font-medium">
                    <div className="  mt-px">No Asignado</div>
                </div>
            </>}
       
      </td>
      
      <td className="px-5 pt-5 pb-9 border-gray-200 text-sm flex items-center">
      <button className="hover:scale-[1.04]" onClick={() => handleEditarKit(kit)}><AiTwotoneEdit className="text-2xl items-center text-sky-700 mx-1"/></button>
      <button className="hover:scale-[1.04]" onClick={() => handleModalKitEliminar(kit)}><TiDelete className="text-2xl items-center text-red-700"/></button>
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
                            
                            <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                            <span className="text-sm font-medium text-gray-600 md:ml-2">Kits</span>
                        </div>
                        </li>
                    </ol>
                
                </nav>
                <h2 className="text-xl font-medium leading-tight my-8">Listado de Kits</h2>
           
           <div className="flex sm:flex-row flex-col items-center">
              
               <div className="relative">
               <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                   <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
               </div>
               <input type="text" className="bg-white border border-gray-400 text-gray-700 sm:text-sm rounded-lg placeholder-gray-400 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full pl-8 py-2 pr-6" placeholder="Search"></input>
               </div>
               <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                   <button className="border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2 text-center" type="submit"
                   onClick={() => handleModalKit()}>
                   Nuevo Kit
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
                                    IP
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Fecha de Creación
                                </th>
                                
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Invernadero / Cama
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                         
                          {mostarKits}
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
       
       <ModalNewKit />
       <EditarKitModal />
       <Alertas modal={showModalEliminar} accion={handleModalKitEliminar} accion2={eliminarKit} data={'kit'}/>
     </>

  )
}

export default Kit