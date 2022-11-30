import { Outlet, Navigate} from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import {Header} from '../Header';
import { Sidebar } from '../Sidebar';


const RutaProtegida = () => {

    const {estadoUser} = UseAuth()
    return (
        <>
             {estadoUser ? 
             (
                <div className=' bg-red-100'>
                    <Sidebar/>
                    
                    <div className='bg-gray-100 md:min-h-screen'>
                        <Header />
                        <main className='relative md:ml-64 sm:pt-28 md:pt-32'>
                            <Outlet />
                        </main>
                    </div>
                </div>
             ) 
             : <Navigate to="/" />} 
        </>
    )
}

export default RutaProtegida