import React from 'react'
import TabsInvernadero from './TabsInvernadero'

const Invernadero = () => {
  return (
    <>

    
    <div className='main-content-wrap flex flex-col flex-grow print-area'>
        <div className='container mx-auto'>
            <div className='px-6 mb-2'>
                <h1>Invernaderos
                </h1>
            </div>
            <div className='px-6'>
                <TabsInvernadero/>
            </div>
            

        </div>
    </div>

    

    {/* <div className='grid grid-cols-1 px-4 pt-6 mb-6 xl:grid-cols-2 xl:gap-6'>
        <div className='col-span-full mb-4 xl:mb-0'>
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">Invernadero</h1>
        </div>
        <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-4 xl:mb-0'>
            <h3 class="mb-4 text-xl font-bold">Informacion General</h3>
        </div>
        <div className='bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 '>
            <h3 class="mb-4 text-xl font-bold">Cultivo</h3>
        </div>
        <div className='col-span-full mb-4 xl:mb-0'>
        <div className='px-4 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-6'>
            <h3 class="mb-4 text-xl font-bold">Camas</h3>
        </div>
        </div>
    </div> */}
    

    </>
  )
}

export default Invernadero
