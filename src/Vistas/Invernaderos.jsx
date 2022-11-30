import { RiSearchLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import UseUsuarios from "../Hooks/UseUsuarios";
import {  AiTwotoneHome, AiOutlineCaretRight } from "react-icons/ai";
import moment from "moment";
import { MdGridView } from "react-icons/md"

const Invernaderos = () => {

    const { invernaderos, usuarios, mostrarNombreUsuario } = UseUsuarios();

    mostrarNombreUsuario()
   
    const mostrarInvernaderos = invernaderos.map((invernadero,index) => {
        return(

          <tr key={index}
          className="bg-white border-b hover:bg-gray-50">
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <div className="flex items-center">
                  
                  <div className="">
                      <p className="text-gray-900">
                      {invernadero.nombre_invernadero}
                      </p>
                  </div>
              </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                  {invernadero.ubicacion_invernadero}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                  {invernadero.tamano_invernadero}
              </p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
              {(invernadero.created_at === null) ? 'sin información' : moment(invernadero.created_at).format('MM-DD-YY')}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                {(invernadero.inicio_temporada === null) ? 'sin información' : moment(invernadero.inicio_temporada).format('MM-DD-YY')}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
                {(invernadero.termino_temporada === null) ? 'sin información' : moment(invernadero.termino_temporada).format('MM-DD-YY')}
              </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {mostrarNombreUsuario(invernadero.id_usuario)}
          </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 text-sm font-semibold">
          
          <Link to={`/dashboard/invernaderos/${invernadero.id_invernadero}`}>
                                        <MdGridView className='text-xl text-blue-600' />
                                      </Link>
          
          </td>
      </tr>
        )
    })

  return (
    <>
        <div className=" container z-10  mx-auto px-4 sm:px-8">
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
                        <span className="text-sm font-medium text-gray-600 md:ml-2">Invernaderos</span>
                    </div>
                    </li>
                </ol>
            </nav>
            
            <h2 className="text-xl font-medium leading-tight my-8">Listado de Invernaderos</h2>
           
            <div className="flex sm:flex-row flex-col items-center">
               
                <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                </div>
                <input type="text" className="bg-white border border-gray-400 text-gray-700 sm:text-sm rounded-lg placeholder-gray-400 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full pl-8 py-2 pr-6" placeholder="Search"></input>
                
                </div>
                
            </div>
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
                                    Ubicación
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Tamaño
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Fecha de Creación
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Inicio Temporada
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Termino Temporada
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Cliente
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Acción
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                         {mostrarInvernaderos}
                          
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
       
    </>
  )
}
export default Invernaderos
