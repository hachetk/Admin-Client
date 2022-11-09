import { AiOutlineClose } from "react-icons/ai";
import UseUsuarios from "../Hooks/UseUsuarios";
import { useState, useEffect } from "react";
import Alerta from "./Alerta";
const EditarUsuario = () => {

    const [id, setId] =useState('');
    const [nombre, setNombre] =useState('');
    const [apellido, setApellido] =useState('');
    const [email_usuario, setEmail] =useState('');
    const [rut, setRut] =useState('');
    const [rol, setRol] =useState('');
    const ROLES = ['Administrador','Usuario','Visitante']
    const { submitUsuarioAct,usuario,alerta, showModalE, setShowModalE } = UseUsuarios();
    console.log(usuario)
   
    useEffect(() => {
        if(usuario?.id_usuario){

            setId(usuario.id_usuario)
            setNombre(usuario.nombre_usuario)
            setApellido(usuario.apellido_usuario)
            setEmail(usuario.email_usuario)
            setRut(usuario.rut_usuario)
            if(usuario.rol_usuario == 1){
                setRol('Administrador')
            }
            setRol('Usuario')

        }
      
    }, [usuario])
    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, apellido, rut, email].includes('')) {
           mostrarAlerta({
            msg: 'Todos los campos son olbigatorios',
            error: true
           })
           return
        }
        await submitUsuarioAct({id,nombre, apellido,rut, email_usuario, rol})
    }

    const {msg} = alerta

        
    return (
        <>
    {showModalE ? (
    <>
    
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

        <div className="relative bg-white rounded-2xl shadow-lg">

         <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">
            Editar Usuario
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-lg p-1.5 ml-auto inline-flex items-center"
             onClick={() => setShowModalE(false)}>
            <AiOutlineClose />
            </button>
        </div>
        {msg && <Alerta alerta={alerta}/>}
        <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">Nombres</label>
                    <input type="text"  className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="nombres"
                    placeholder="Nombre completo"
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}
                    required="" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="apellidos">Apellidos</label>
                    <input type="text" 
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="apellidos" 
                    placeholder="Apellidos completo" 
                    value={apellido} 
                    onChange={e => setApellido(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Rut</label>
                    <input type="text"
                    id="rut"
                    className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    placeholder="Ingrese su Rut"
                    value={rut} 
                    onChange={e => setRut(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block mb-2 text-sm font-medium text-gray-900" htmlFor="telefono">Correo</label>
                    <input type="email" 
                    id="email" 
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5"
                    placeholder="ejemplo@company.cl"
                    value={email_usuario} 
                    onChange={e => setEmail(e.target.value)}
                    required=""/>
                </div>
                <div className="col-span-full sm:col-span-full">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="rol">Seleccione Rol</label>
                    <select 
                    id="rol"
                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5 "
                    value={rol}
                    onChange={e => setRol(e.target.value)}  > 
                        {ROLES.map( opcion => (
                            <option key={opcion}>{opcion}</option>
                        ))}
                       
                    </select>
                </div>
            </div>
            <div className=" w-full rounded-b border-t border-gray-200 mt-6">
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

export default EditarUsuario