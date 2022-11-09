import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";



const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [estadoUser, setEstadoUser] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const autenticarusuario = async () => {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
            const loggedUser = window.localStorage.getItem('loggedUser')
            if(!token){
                return
            }

            try {
                setAuth(JSON.parse(loggedUser))
                setEstadoUser(true)
                navigate('/dashboard')

            } catch (error) {
                
            }
             
             
        }
        autenticarusuario()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                setEstadoUser,
                estadoUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider
}
export default AuthContext