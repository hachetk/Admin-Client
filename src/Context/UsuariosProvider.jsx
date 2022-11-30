import {useState, useEffect, createContext} from 'react';
import ClienteAxios from '../config/ClienteAxios';



const UsuariosContext = createContext();

const UsuariosProvider = ({children}) => {

        const [showModalN, setShowModalN] = useState(false);
        const [showModalE, setShowModalE] = useState(false);
        const [showModalEliminar, setShowModalEliminar] = useState(false);
        const [modalSinInfo, setModalSinInfo] = useState(false);
        const [modalAsignar, setModalAsignar] = useState(false);
        const [modalEditarKit, setModalEditarKit] = useState(false);
        const [modalKit, setModalKit] = useState(false);
        const [page, setPage] = useState(0);
        const [usuarios, setUsuarios] = useState([]);
        const [usuario, setUsuario] = useState([]);
        const [invernaderos, setInvernaderos] = useState([]);
        const [invernadero, setInvernadero] = useState([]);
        const [cultivos, setCultivos] = useState([]);
        const [cultivo, setCultivo] = useState([]);
        const [camas, setCamas] = useState([]);
        const [cama, setCama] = useState([]);
        const [camaAsignar, setCamaAsignar] = useState([]);
        const [kits, setKits] = useState([]);
        const [kit, setKit] = useState([]);
        const [sensores, setSensores] = useState([]);
        const [sensorAmbiente, setSensorAmbiente] = useState([]);
        const [estadoCam, setEstadoCam] = useState();
        const [error, setError] = useState('');
        const [alerta, setAlerta] = useState({});
        const [enable , setEnable] = useState(true)
        
        
        
       
        
        const obtenerUsuarios = async () => {
            try {
             
              const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
               }
               const {data} = await ClienteAxios(`/admin/usuarios/`, conf)
               setUsuarios(data)

            } catch (error) {
              console.log(error)
            }
        }
         
        const obtenerUsuario = async (id_usuario) => {
          
          try {
           
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
            if(!token) return
            const conf = {
              headers: {
                'Authorization': token
                }
             }
             const {data} = await ClienteAxios(`/admin/usuarios/${id_usuario}`,conf)
             
             setUsuario(data[0])

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
             const conf = {
              headers: {
                'Authorization': token
                }
             }
             const data = await ClienteAxios.post('/admin/usuarios', usu, conf)
             
              setUsuarios([...usuarios, data.data])
              setShowModalN(false)
            
          } catch (error) {
            console.log(error)
          }
        }

        const handleModalEliminar = usuario => {

          setShowModalEliminar(!showModalEliminar)
          setUsuario(usuario)
        }

        const eliminarUsuario = async () => {

          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.delete(`/admin/usuarios/${usuario.id_usuario}`,conf)
              const usuariosActualizados = usuarios.filter(usuariosState => usuariosState.id_usuario !== usuario.id_usuario )
              setShowModalEliminar(!showModalEliminar)
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
              const {data} = await ClienteAxios.patch(`/admin/usuarios/${usuAct.id_usuario}`, usuAct, conf)
                
              const usuariosActualizados = usuarios.map(usuarioState => usuarioState.id_usuario == data.id_usuario ?  data : usuarioState)
              
              setUsuarios(usuariosActualizados)
              
              setShowModalE(false)

            
           } catch (error) {
            console.log(error)
           }
        }

        const mostarCantidadInvernadero  = id => {
        
          const inv = invernaderos.filter(inver => inver.id_usuario == id)
          return inv.length;
        }
          
         
        const ObtenerInvernaderos = async () => {
        
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.get(`/admin/invernaderos`, conf)
              setInvernaderos(data)

           } catch (error) {
            console.log(error.response.data)
           }
        }


        const ObtenerInvernadero = async id_usuario => {
          setInvernadero([])
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get(`/admin/usuarios/${id_usuario}/invernaderos`, conf)
                setInvernadero(data)
                
            
           } catch (error) {
            if(error.response.status =='404'){
              mostrarAlerta({
                msg: 'Usuario No cuenta Con invernaderos',
                error: true
              })
            }
            
            
           }
        }

        const mostarInvernadero = async id_invernadero => {
          setInvernadero([])
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get(`/admin/invernaderos/${id_invernadero}`, conf)
                 setInvernadero(data)
                 console.log(data);
            
           } catch (error) {
            if(error.response.status =='404'){
              mostrarAlerta({
                msg: 'Usuario No cuenta Con invernaderos',
                error: true
              })
            }
            
            
           }
        }

        const ObtenerCultivos = async () => {
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get('/admin/cultivos', conf)
                setCultivos(data)
                
            
           } catch (error) {
            console.log(error)
            
           }

        }

        const SaberCultivo = (id)=>{
          
          
          const cul = cultivos.filter(cul => cul.id_invernadero == id)
          // setCultivo(cul)
          if(cul.length !== 0){
            const sabe = camas.filter(cam => cam.id_cultivo == cul[0].id_cultivo)
            if(sabe.length !==0){

              const camF = sabe.filter(cam => cam.id_cama !== kits.map(kit => kit.id_cama))
              console.log(camF);
            }
            setCama(sabe)
            setEnable(false)
          }else{
           setCama([])
           setEnable(true)
          }
         
        }

        const saberInvernaderoKit = (id) =>{
          if(id !== null){
             const cam = camas.filter(cam => cam.id_cama == id)
             const nombreCama = cam[0].nombre_cama;

             const cult = cultivos.filter(cul => cul.id_cultivo == cam[0].id_cultivo);

             const inv = invernaderos.filter(inv => inv.id_invernadero == cult[0].id_invernadero);
             const nombreInvernadero = inv[0].nombre_invernadero
            

            return (nombreInvernadero+' - '+nombreCama)

          }else{
            return
          }
          // const cam = camas.filter(cam => cam.id_cama == id)
         
          
        }
        const CultivosInv =  cultivoList => {
          
          if(cultivoList[0] == undefined) {
            setCama([])
            return 
          }
          
        const cam = camas.filter(cam => cam.id_cultivo === cultivoList[0].id_cultivo)
        setCama(cam)
        return


        }
        const handleModalAsignar = cam => {
          setModalAsignar(!modalAsignar)
          setCamaAsignar(cam)
          
        }

        const ObtenerKits =  async () => {
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get('/admin/kits', conf)
                setKits(data)
                
            
           } catch (error) {
            console.log(error)
            
           }
        }

        const handleModalKit = () =>{
          setInvernadero([])
          setModalKit(!modalKit)
        }

        const submitNewKit = async kit => {
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.post(`admin/kits`, kit, conf)
              setKits([...kits, data])
              setModalKit(!modalKit)
              setCama([])

           } catch (error) {
            console.log(error)
           }
        }

        const handleEditarKit = kit =>{
          setModalEditarKit(!modalEditarKit)
          setKit(kit)

        }
        
        
        const submitKitAct = async kit =>{
          
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.patch(`/admin/kits/${kit.id_kit}`, kit, conf)
               const kitActualizados = kits.map(kitsState => kitsState.id_kit == data.id_kit ?  data : kitsState)
              
               setKits(kitActualizados)
              
              setModalEditarKit(!modalEditarKit)
              setModalAsignar(!modalAsignar)

            
           } catch (error) {
            console.log(error)
           }

        }

        const handleModalKitEliminar = kit => {

          setShowModalEliminar(!showModalEliminar)
          setKit(kit)
        }

        const eliminarKit = async () => {

          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
              const {data} = await ClienteAxios.delete(`/admin/kits/${kit.id_kit}`,conf)
              const kitsActualizados = kits.filter(kitsState => kitsState.id_kit !== kit.id_kit )
              setShowModalEliminar(!showModalEliminar)
              setKits(kitsActualizados)
            
           } catch (error) {
            console.log(error)
           }
        }

        const ObtenerCamas = async () => {
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get('/admin/cultivo/cama', conf)
                setCamas(data)
                
            
           } catch (error) {
            console.log(error)
            
           }

        }
          
        const mostrarNombreUsuario = (id_invernadero) => {

          if(id_invernadero === undefined)
            return
          
          const [us] = usuarios.filter(us => us.id_usuario === id_invernadero).map(usFiltrado => (usFiltrado.nombre_usuario+' '+usFiltrado.apellido_usuario))
         
          return us;

        }

        const saberAsignacion = (id) =>{
          const us = kits.filter(kit => kit.id_cama === id)
          
          if(us.length !== 0){
            return us[0].ip_kit
          }else{
            return 'No asignado'
          }
        }

        const ObtenerSensores = async(id) =>{
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get(`/nodemcu/data/gas/${1}`, conf)
                setSensores(data)
                // console.log(data);
                
            
           } catch (error) {
            console.log(error)
            
           }
        }

        const ObtenerSensorAmbiente = async(id) =>{
          try {
            const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
              if(!token) return
              const conf = {
                headers: {
                  'Authorization': token
                  }
                }
                const {data} = await ClienteAxios.get(`/nodemcu/data/ambiente/${1}`, conf)
                setSensorAmbiente(data)
                console.log(data);
                
            
           } catch (error) {
            console.log(error)
            
           }
        }
          
        const KitnoAsig = () =>{

          const Fkit = kits.filter(kt => kt.id_cama === null)
          setKit(Fkit);
        }


  return (
    <UsuariosContext.Provider
        value={{
            usuarios,
            page,
            setPage,
            usuario,
            setUsuario,
            mostrarAlerta,
            alerta,
            submitUsuario,
            showModalN,
            setShowModalN,
            showModalE,
            setShowModalE,
            showModalEliminar,
            setShowModalEliminar,
            setModalAsignar,
            camaAsignar,
            modalAsignar,
            handleModalAsignar,
            obtenerUsuarios,
            obtenerUsuario,
            handleEditarUsuario,
            handleModalEliminar,
            eliminarUsuario,
            submitUsuarioAct,
            ObtenerInvernaderos,
            ObtenerInvernadero,
            invernaderos,
            invernadero,
            setInvernadero,
            mostarCantidadInvernadero,
            mostrarNombreUsuario,
            error,
            modalSinInfo,
            setModalSinInfo,
            ObtenerCultivos,
            CultivosInv,
            cultivos,
            setCultivos,
            cultivo,
            setCultivo,
            SaberCultivo,
            ObtenerCamas,
            camas,
            setEstadoCam,
            estadoCam,
            cama,
            ObtenerKits,
            kits,
            kit,
            handleModalKit,
            submitNewKit,
            modalKit,
            handleEditarKit,
            setModalEditarKit,
            modalEditarKit,
            submitKitAct,
            handleModalKitEliminar,
            eliminarKit,
            enable,
            setEnable,
            saberInvernaderoKit,
            ObtenerSensores,
            sensores,
            ObtenerSensorAmbiente,
            mostarInvernadero,
            saberAsignacion,
            KitnoAsig
            
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