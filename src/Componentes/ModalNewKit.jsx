import { AiOutlineClose } from "react-icons/ai";
import UseUsuarios from "../Hooks/UseUsuarios";
import { useState, useEffect } from "react";
import Usuarios from "../Vistas/Usuarios";
import Alerta from "./Alerta";

export const ModalNewKit = () => {

   

    const { alerta,setEnable,enable,CultivosInv,usuarios,obtenerUsuarios,cultivo,SaberCultivo,cultivos,cama,camas,invernadero,setInvernadero,ObtenerInvernadero,invernaderos,ObtenerCamas,ObtenerCultivos,submitNewKit,modalKit,handleModalKit} = UseUsuarios();
    
    const [ip_kit, setIp] =useState('')
    const [id_cama, setIdCama] =useState()
    const [rut , setRut] = useState('')
    const [nombreUsuario , setNombreUsuario] = useState('')
    const [emailUsuario , setEmailUsuario] = useState('')
    
    const handleSubmit = async e => {
        e.preventDefault();
        
         await submitNewKit({ip_kit, id_cama})
         setIp('')
         setIdCama()
    }
    const handleBuscarUsuario = () =>{

        const us = usuarios.filter(us => us.rut_usuario == rut)
        if(us.length){
            setNombreUsuario(us[0].nombre_usuario);
            setEmailUsuario(us[0].email_usuario)
            ObtenerInvernadero(us[0].id_usuario)
            setRut('')
            
        }else{
            setNombreUsuario('');
            setInvernadero([])
        }
       
    }
    
    
    const handleInvernadero = (e) =>{

        const invernaderoId = e.target.value;
        
        if(invernaderoId !==''){
            SaberCultivo(invernaderoId);
        }else {
            setEnable(true)
        }
        
    }
    const handleCama = (e) =>{
        const camaId = e.target.value;
        if(camaId !==''){
            setIdCama(camaId);
        }else {
            setIdCama(null)
        }
       
    }
    const {msg} = alerta
  return (
    <>
    {modalKit ? (
    <>
    
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 z-50 md:inset-0 sm:h-full">
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

        <div className="relative bg-white rounded-2xl shadow-lg">

         <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">
           Agregar Kit
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-lg p-1.5 ml-auto inline-flex items-center"
             onClick={() => handleModalKit()}>
            <AiOutlineClose />
            </button>
        </div>
        {msg && <Alerta alerta={alerta}/>}  
        <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">IP Kit</label>
                    <input type="text"  className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                    id="ip"
                    placeholder="Ingresar IP"
                     value={ip_kit}
                     onChange={e => setIp(e.target.value)}
                    required="" />
                </div>
                <div className="col-span-6">
                    
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">Usuario</label>
                    <div className="flex items-center">
                        <input type="text"  className=" flex-initial  mr-4 hadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 p-2.5" 
                        id="Rut"
                        placeholder="Ingresar Rut Cliente"
                        value={rut}
                        required=""
                        onChange={f => setRut(f.target.value)}
                        />
                        <a className=" p-2 cursor-pointer flex-initial text-center w-full border-green-700 bg-green-700 text-white rounded-lg  font-bold "
                        onClick={()=>handleBuscarUsuario()}
                        >Buscar</a>
                    </div>
                </div>
                {(invernadero.length !== 0)? (
                    <>
                    <div className="col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">Nombre Usuario</label>
                        <input type="text"  className=" bg-gray-200 shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                        id="nombreCliente"
                        value={nombreUsuario}
                        onChange={f => setNombreUsuario(f.target.value)}
                        required=""
                        disabled />
                    </div>
                    <div className="col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="nombres">Email Usuario</label>
                        <input type="text"  className="bg-gray-200 shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5" 
                        id="nombreCliente"
                        value={emailUsuario}
                        onChange={f => setEmailUsuario(f.target.value)}
                        required=""
                        disabled />
                    </div>
                    <div className="col-span-full sm:col-span-full">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="rol">Asigne Invernadero</label>
                        <select 
                            name="invernaderos" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5 "
                            onChange={(e)=>handleInvernadero(e)}
                            > 

                                <option value={''}>--Seleccione Invernadero--</option>
                                {invernadero.map((inv, index)=>(
                                    <option key={index} value={inv.id_invernadero}> {inv.nombre_invernadero}</option>
                                ))}
                        </select>
                    </div>
                    <div className="col-span-full sm:col-span-full">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="rol">Asigne Cama</label>
                        <select 
                            
                            className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 block w-full p-2.5 "
                        
                            disabled={enable}
                            onChange={(e)=>handleCama(e)}
                            > 
                        
                                <option >---Seleccione Cama---</option>
                                {cama.map((cam, index)=>(
                                    <option key={index} value={cam.id_cama}> {cam.nombre_cama}</option>
                                ))}
                        </select>
                    </div>
                </>
                ) : null}
            </div>
            <div className="w-full rounded-b border-t border-gray-200 mt-6">
            <button className="w-full border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2.5 text-center"
            
            >
                Agregar</button>
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
