import UseUsuarios from "../Hooks/UseUsuarios";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const EditarKitModal = () => {


    
    
    const [ip_kit, setIp] =useState('');
    const [id_kit, setId] =useState('');
    const { submitKitAct, kit, modalEditarKit,handleEditarKit } = UseUsuarios();

    useEffect(() => {
        if(kit?.id_kit){
            setIp(kit.ip_kit)
            setId(kit.id_kit)
        }
      
    }, [kit])

    const handleSubmit = async e => {
        e.preventDefault();
         await submitKitAct({id_kit,ip_kit})
    }
  return (
    <>
    {modalEditarKit ? (
    <>
    
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

        <div className="relative bg-white rounded-2xl shadow-lg">

         <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">
            Editar Kit
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-lg p-1.5 ml-auto inline-flex items-center"
             onClick={() => handleEditarKit()}>
            <AiOutlineClose />
            </button>
        </div>
        <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
            <div className="col-span-full sm:col-span-full">
                <div className="col-span-6 sm:col-span-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">IP Kit</label>
                    <input type="text"  className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="ip"
                    placeholder="registre su ip"
                     value={ip_kit}
                     onChange={e => setIp(e.target.value)}
                    required="" />
                </div>
            </div>
            <div className="w-full rounded-b border-t border-gray-200 mt-6">
            <button className="w-full border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2.5 text-center">
                Actualizar</button>
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
