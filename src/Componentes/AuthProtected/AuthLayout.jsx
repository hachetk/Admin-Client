import { Outlet} from 'react-router-dom';
const AuthLayout = () => {
    return (
        <>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'> 
            <div className='hidden sm:block'> 
            <img className='w-full h-full object-cover' src={'./'} alt="" />
            </div>
            <div className='bg-gray-200 flex flex-col justify-center'>
                <Outlet />
            </div>
        </div>

            
        </>
    )
}

export default AuthLayout;