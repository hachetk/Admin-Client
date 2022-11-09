
import { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Alerta from '../../Componentes/Alerta';
import ClienteAxios from '../../config/ClienteAxios';
import UseAuth from '../../Hooks/UseAuth';

const LoginAuth = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth, setEstadoUser } = UseAuth();
    const navigate = useNavigate()
    
    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return

        }
        
        

        try {
            const {data} = await ClienteAxios.post('/auth/login', { email, password})
            setAlerta({})
            document.cookie = `token=${data.tokenSession}; max-age=${3600*3};path=/;samesite=stric`
            window.localStorage.setItem('loggedUser',JSON.stringify(data.data[0]))
            setAuth(data.data[0])
            setEstadoUser(true)
            navigate('/dashboard')
            
        } catch (error) {
            // console.log(error)
            setAlerta({
                msg: 'Usuario o contraseña incorrecta',
                error: true
            });
            
        }
        
    }

    const {msg} = alerta
    
  return (
    <>
         <form  
         className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'
         onSubmit={handleSubmit}
         >
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Iniciar sesión</h2>
                {msg && <Alerta alerta={alerta} />}
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Correo</label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    placeholder="Ingrese su Correo"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Contraseña</label>
                    <input  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <p hidden className="text-red-500 text-sm italic">Por favor elige una contraseña.</p>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Recuerdame</p>
                </div>
                <button className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
            </form>
    </>
  );   
}

export default LoginAuth;