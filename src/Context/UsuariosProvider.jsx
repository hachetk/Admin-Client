import {useState, useEffect, createContext} from 'react';
import ClienteAxios from '../config/ClienteAxios';
import {useNavigate, Link} from 'react-router-dom';



const UsuariosContext = createContext();

const UsuariosProvider = ({children}) => {

        const [showModalN, setShowModalN] = useState(false);
        const [showModalE, setShowModalE] = useState(false);
        const [usuarios, setUsuarios] = useState([]);
        const [usuario, setUsuario] = useState([]);
        const [alerta, setAlerta] = useState({});
        const navigate = useNavigate();

        
        const obtenerUsuarios = async () => {
            try {
             
              const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
               }
               const {data} = await ClienteAxios('/admin/usuarios', conf)
               setUsuarios(data)

            } catch (error) {
              console.log(error)
            }
        }
         
        

        const mostrarAlerta = (alerta) => {
          setAlerta(alerta)

          setTimeout(() => {
            setAlerta({})
          }, 3000);
        }

        const submitUsuario = async usu => {
          try {
             const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
             if (!token) return
             const {data} = await ClienteAxios.post('/auth/registro', usu)
             console.log(data)
            setAlerta({
              msg: 'Usuario registrado correctamente',
              error: false
            })
            
              
              setUsuarios([...usuarios, data])
              setShowModalN(false)
              navigate('dashboard/usuarios')
            
            
          } catch (error) {
            console.log(error)
          }
        }


        const eliminarUsuario = async id => {
          
               try {
                const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
                  if(!token) return
                  const conf = {
                    headers: {
                      'Authorization': token
                      }
                    }
                  const {data} = await ClienteAxios.delete(`/usuarios/${id}`, conf)
                  const usuariosActualizados = usuarios.filter(usuariosState => usuariosState.id_usuario !== id )
                  setUsuarios(usuariosActualizados)
                
               } catch (error) {
                console.log(error)
               }
          
        }
        const handleEditarUsuario = usuariofrm =>{
          setAlerta({})
          setUsuario(usuariofrm)
          setShowModalE(true)

        }

        const submitUsuarioAct = async usuAct => {
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.patch(`/usuarios/${usuAct.id}`, usuAct)
              const usuariosActualizados = usuarios.map(usuarioState => usuarioState.id_usuario == data.id_usuario? data : usuarioState)
              setUsuarios(usuariosActualizados)
              setShowModalE(false)

            
           } catch (error) {
            console.log(error)
           }
        }

        


  return (
    <UsuariosContext.Provider
        value={{
            usuarios,
            mostrarAlerta,
            alerta,
            submitUsuario,
            showModalN,
            setShowModalN,
            showModalE,
            setShowModalE,
            eliminarUsuario,
            obtenerUsuarios,
            handleEditarUsuario,
            usuario,
            setUsuario,
            submitUsuarioAct
            
         }}
    >
      {children}

    </UsuariosContext.Provider>
  )
}

export {
    UsuariosProvider
}

export default UsuariosContext