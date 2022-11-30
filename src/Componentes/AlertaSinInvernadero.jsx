import UseUsuarios from "../Hooks/UseUsuarios";
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FiFrown } from "react-icons/fi";
const AlertaSinInvernadero = () => { 

    const { modalSinInfo,setModalSinInfo} = UseUsuarios();
 
  return (
    <>
    {modalSinInfo ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">

            <div className="relative bg-white rounded-2xl shadow-lg">

                <div className="flex justify-end p-2">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => setModalSinInfo(false)}>
                        <AiOutlineClose className="w-5 h-5"/>
                    </button>
                </div>

                <div className="p-6 pt-0 text-center">
                    <FiFrown className="mx-auto w-20 h-20 text-yellow-500"/>
                    
                    <h3 className="mt-5 mb-6 text-xl font-normal text-gray-500">El usuario no ha registrado un invernadero</h3>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center hover:scale-[1.02] transition-transform"
                        onClick={() => setModalSinInfo(false)}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
        
    ): null }
    
    </>
    )
}

export default AlertaSinInvernadero