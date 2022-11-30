import UseUsuarios from "../Hooks/UseUsuarios";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";



const Alertas = ({modal, accion ,data, accion2}) => {
    const { handleModalKitEliminar,handleModalEliminar, eliminarUsuario  } = UseUsuarios();

    
    


  return (
    <>
    {modal ? (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">

            <div className="relative bg-white rounded-2xl shadow-lg">

                <div className="flex justify-end p-2">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => accion()}>
                        <AiOutlineClose className="w-5 h-5"/>
                    </button>
                </div>

                <div className="p-6 pt-0 text-center">
                    <FiAlertCircle className="mx-auto w-20 h-20 text-red-500"/>
                    
                    <h3 className="mt-5 mb-6 text-xl font-normal text-gray-500">Esta seguro de eliminar este {data}</h3>
                    <button type="button" className="text-white  bg-red-600 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                         onClick={accion2}
                        >
                        SI, Estoy Seguro
                    </button>
                    <button type="button" className="text-gray-700 bg-white border outline-none focus:outline-none border-green-800 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center hover:scale-[1.02] transition-transform"
                        onClick={() => accion()}>
                        No, cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
    ): null } </>
  )
}

export default Alertas