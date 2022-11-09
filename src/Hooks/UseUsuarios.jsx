import {useContext} from 'react'
import UsuariosContext from '../Context/UsuariosProvider'

const UseUsuarios = () => {
  return useContext(UsuariosContext)
}

export default UseUsuarios