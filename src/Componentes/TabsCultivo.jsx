import UseUsuarios from "../Hooks/UseUsuarios"
import { useEffect, useState } from "react";


const TabsCultivo = ({id}) => {
 
    const [cult, setCulti] = useState([])
    const { CultivosInv,camas,ObtenerCamas, cultivos} = UseUsuarios()

    useEffect(() => {
      (mostarCultivos())
    }, [])

    const mostarCultivos = ()=>{

      const cul = cultivos.filter(cul => cul.id_invernadero === id)
      return(cul)
      
    }
    const traer =() =>{
      const util = mostarCultivos()
      CultivosInv(util)
    }
    // const llenarCultivo = ()=>{
    //   const culti = mostarCultivos()
    //   if(culti.length === 0){
    //     setCultivo({})
    //   }
    //   setCultivo(culti)
    //   console.log(culti)
    // }
    useEffect(() => {
      traer();
    }, [])
  
  
  return (
    
    <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl mb-4 xl:mb-0'>
      {(mostarCultivos().length === 0) ? (
        <div className='bg-white p-4 rounded-2xl items-center'>
        <h1 className="text-center font-semibold">Usuario sin cultivos registrados</h1>
        </div>
      ): (
        <>
        {(mostarCultivos()).map(cultivo => (
       <div key={cultivo.id_cultivo} className='bg-white rounded-2xl  '>
        <h6 className="leading-normal text-sm font-medium text-md p-4 border-b-2">Cultivo de <span className="text-sm">{cultivo.nombre_cultivo}</span></h6>
        <div  className='flex flex-col p-4'>
        <div className="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
              <div className="rounded-lg border border-t-4 border-t-orange-400 px-4 py-2 dark:border-navy-600">
                <div className="text-left"> 
                    <span className="text-sm font-semibold">Temperatura Ambiente</span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-slate-500">
                  <p>Máxima</p>
                  <p>Mínima</p>
                </div>
                <div className="mt-2 flex justify-between text-xs text ">
                  <p className="font-semibold ml-4">{cultivo.temperatura_ambiente_max}</p>
                  <p className="font-semibold mr-4">{cultivo.temperatura_ambiente_min}</p>
                </div>
              </div>
              <div className="rounded-lg border border-t-4 border-t-orange-400 px-4 py-2 dark:border-navy-600">
                <div className="text-left"> 
                    <span className="text-sm font-semibold">Temperatura de Agua</span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-slate-500">
                  <p>Máxima</p>
                  <p>Mínima</p>
                </div>
                <div className="mt-2 flex justify-between text-xs text">
                  <p className="font-semibold ml-4">{cultivo.temperatura_agua_max}</p>
                  <p className="font-semibold mr-4">{cultivo.temperatura_agua_min}</p>
                </div>
              </div>
              <div className="rounded-lg border border-t-4 border-t-orange-400 px-4 py-2 dark:border-navy-600">
                <div className="text-left"> 
                    <span className="text-sm font-semibold">Humedad Relativa</span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-slate-500">
                  <p>Máxima</p>
                  <p>Mínima</p>
                </div>
                <div className="mt-2 flex justify-between text-xs text">
                  <p className="font-semibold ml-4">{cultivo.humedad_ambiente_max}</p>
                  <p className="font-semibold mr-4">{cultivo.humedad_ambiente_min}</p>
                </div>
              </div>
              <div className="rounded-lg border border-t-4 border-t-orange-400 px-4 py-2 dark:border-navy-600">
                <div className="text-left"> 
                    <span className="text-sm font-semibold">Niveles de CO2</span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-slate-500">
                  <p>Máxima</p>
                  <p>Mínima</p>
                </div>
                <div className="mt-2 flex justify-between text-xs text">
                  <p className="font-semibold ml-4">{cultivo.ppm_gas_max}</p>
                  <p className="font-semibold mr-4">{cultivo.ppm_gas_min}</p>
                </div>
              </div>
            </div>   
        </div>
        </div>
        
  ))}
        </>
      )}
      
                  
                  
    </div>

  )
}

export default TabsCultivo