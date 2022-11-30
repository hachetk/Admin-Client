import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UseUsuarios from "../Hooks/UseUsuarios";
import moment from "moment";

export const AsignarCama = () => {

    const { submitKitAct,kit,kits,camaAsignar ,modalAsignar,handleModalAsignar  } = UseUsuarios();

    const [id_cama, setIdCama] =useState('');
    const [nombre_cama, setNombre] =useState('');
    const [tamano_cama, setTamano] =useState('');
    const [brotes_cama, setBrotes] =useState('');
    const [fecha_creat, setFecha] =useState('');
    const [id_kit, setKitId] =useState();
    
    
   
    useEffect(() => {
        if(camaAsignar?.id_cama){
            setIdCama(camaAsignar.id_cama)
            setNombre(camaAsignar.nombre_cama)
            setTamano(camaAsignar.tamano_cama)
            setBrotes(camaAsignar.brotes_cama)
            setFecha((camaAsignar.created_at==null)? 'sin informacion': camaAsignar.created_at.split('T')[0])
        }
      
    }, [camaAsignar])

    const handleKit = (e) =>{
        setKitId(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefault();
          await submitKitAct({id_kit, id_cama})
    }
  return (
    <>
    {modalAsignar ? (
    <>
    
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

        <div className="relative bg-white rounded-2xl shadow-lg">

         <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">
            Asignar Kit
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-lg p-1.5 ml-auto inline-flex items-center"
             onClick={() => handleModalAsignar()}>
            <AiOutlineClose />
            </button>
        </div>
        <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">Nombre Cama</label>
                    <input type="text"  className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="nombres"
                    placeholder="Nombre completo"
                     value={nombre_cama}
                     disabled
                     onChange={e => setNombre(e.target.value)}
                    required="" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="apellidos">Tamaño</label>
                    <input type="text" 
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="tamano" 
                    placeholder="Apellidos completo" 
                    value={tamano_cama}
                    disabled
                    onChange={e => setTamano(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Cantidad de Brotes</label>
                    <input type="text"
                    id="brotes"
                    className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    placeholder="Ingrese su Rut"
                    value={brotes_cama}
                    disabled
                    onChange={e => setBrotes(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="telefono">Fecha de Creación</label>
                    <input type="date" 
                    id="date" 
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5"
                    placeholder="ejemplo@company.cl"
                    value={fecha_creat} 
                    disabled
                    onChange={e => setFecha(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-full sm:col-span-full">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="rol">Asigne Kit</label>
                    <select 
                        id="rol"
                        className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5 "
                        onChange={(e)=>handleKit(e)}
                        > 
                       <option value={''}>--Selecciona Kit--</option>
                                {kit.map((kt, index)=>(
                                    <option key={index} value={kt.id_kit}> {kt.ip_kit}</option>
                                ))}
                    </select>
                </div>
            </div>
            <div className="w-full rounded-b border-t border-gray-200 mt-6">
            <button className="w-full border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2.5 text-center">
                Asignar</button>
        </div>
            </form>
        </div>

        

        </div>
    </div>
    </div>
    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>

      </>
        ): null } </>
  )
}
